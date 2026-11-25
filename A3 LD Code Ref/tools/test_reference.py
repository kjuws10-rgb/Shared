"""Synthetic regressions for documentation policy and offline output; no equipment input."""
from pathlib import Path
import argparse, collections, hashlib, json, re, subprocess, tempfile, unittest, xml.etree.ElementTree as ET
from unittest.mock import patch
from build_reference import Builder, definition_cells, markdown, normalize_document_whitespace, xaml_structure, json_shape, MarkdownTransport
from validate_reference import validate, expected_xaml_events


class ReferenceRegression(unittest.TestCase):
    def test_runtime_json_shape_never_contains_values_or_dynamic_keys(self):
        shape=json_shape(json.dumps({'GlassId':'SENTINEL_PRIVATE_GLASS','Deviation':123456789.75,'Points':[{'X':999,'OK':True}], 'dynamic-id with spaces':{'Value':'PRIVATE_VALUE'},'Password':'SECRET_VALUE'}))
        body=json.dumps(shape)
        for secret in ['SENTINEL_PRIVATE_GLASS','123456789','999','PRIVATE_VALUE','SECRET_VALUE','dynamic-id with spaces','Password']:
            self.assertNotIn(secret,body)
        self.assertIn('$.Points[].X',body);self.assertIn('number',body)
        self.assertEqual(json_shape('{"Value":"MALFORMED_SECRET"')['parseStatus'],'invalid_json')
        self.assertNotIn('MALFORMED_SECRET',json.dumps(json_shape('{"Value":"MALFORMED_SECRET"')))

    def test_optional_markdown_transport_splits_without_record_loss(self):
        with tempfile.TemporaryDirectory(prefix='a3-markdown-transport-') as tmp:
            root=Path(tmp);path=root/'Optional.md'
            with patch('build_reference.MARKDOWN_TRANSPORT_BYTES',600):
                writer=MarkdownTransport(path,'# Header\n\n')
                records=[f'## Record-{n}\n'+('x'*160)+'\n\n' for n in range(11)]
                for value in records:writer.write_record(value)
                writer.close()
            parts=sorted(root.glob('Optional-part-*.md'));self.assertGreater(len(parts),1)
            combined=''.join(p.read_text(encoding='utf-8').removeprefix('# Header\n\n') for p in parts)
            self.assertEqual(combined,''.join(records));self.assertTrue(all(p.stat().st_size<=600 for p in parts))
            self.assertTrue(all(p.name in path.read_text(encoding='utf-8') for p in parts))

    def test_tilde_fences_render_code_and_require_matching_delimiters(self):
        source='~~~mermaid\nflowchart LR\nA --> B\n~~~\n\n~~~text\n[not navigation](missing.md)\n```\nx < y\n~~~\n'
        rendered=ET.fromstring('<root>'+markdown(source)+'</root>')
        blocks=list(rendered.iter('pre'))
        self.assertEqual([block.attrib['data-language'] for block in blocks],['mermaid','text'])
        self.assertEqual(''.join(blocks[0].itertext()),'flowchart LR\nA --> B')
        self.assertEqual(''.join(blocks[1].itertext()),'[not navigation](missing.md)\n```\nx < y')
        self.assertFalse(list(rendered.iter('a')))

    def test_normalizer_converts_physical_crlf_and_preserves_marked_source_spaces(self):
        with tempfile.TemporaryDirectory(prefix='a3-newline-regression-') as tmp:
            root=Path(tmp);document=root/'document.md';metadata=root/'metadata.json';unchanged=root/'unchanged.md'
            original_line='L000001 | source value \t  ⟦EOL⟧'
            document.write_bytes(('# 문서\r\n'+original_line+'\r\n').encode('utf-8'))
            metadata.write_bytes('{\r\n  "value": "문서"\r\n}\r\n'.encode('utf-8'))
            unchanged.write_bytes(b'# Already LF\n')
            self.assertEqual(normalize_document_whitespace(root),2)
            self.assertEqual(document.read_bytes(),('# 문서\n'+original_line+'\n').encode('utf-8'))
            self.assertEqual(metadata.read_bytes(),'{\n  "value": "문서"\n}\n'.encode('utf-8'))
            self.assertEqual(unchanged.read_bytes(),b'# Already LF\n')
            self.assertEqual(normalize_document_whitespace(root),0)

    def test_xaml_declared_fields_and_routed_events(self):
        source = '''<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
 xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" x:Class="Fixture.Window"
 Closing='OnClosing'>
 <!-- <Button x:Name="Commented" Click="Ignored"/> -->
 <Grid x:Name='Root'>
  <Button Name="Save" PreviewMouseLeftButtonDown='OnDown' MouseLeave="OnLeave"
   Content="{Binding Path=Label, StringFormat='a &gt; b'}"/>
  <Style TargetType="Button"><EventSetter Event='MouseMove' Handler='OnMove'/></Style>
 </Grid>
</Window>'''
        model=xaml_structure(source)
        self.assertEqual([item['name'] for item in model['namedElements']],['Root','Save'])
        self.assertEqual({item['handler'] for item in model['events']},{'OnClosing','OnDown','OnLeave','OnMove'})
        self.assertEqual(model['bindings'][0]['expression'],"{Binding Path=Label, StringFormat='a > b'}")
        self.assertTrue(all(1<=item['startLine']<=item['endLine']<=len(source.splitlines()) for group in ['namedElements','events','bindings'] for item in model[group]))

    def test_xaml_current_extended_events_are_inventoried(self):
        source = '<Grid xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" PreviewTextInput="OnText" LostMouseCapture="OnCapture" TreeViewItem.Expanded="OnExpand" LoadingRow="OnRow" AutoGeneratingColumn="OnColumn"/>'
        model=xaml_structure(source)
        expected={('PreviewTextInput','OnText'),('LostMouseCapture','OnCapture'),('TreeViewItem.Expanded','OnExpand'),('LoadingRow','OnRow'),('AutoGeneratingColumn','OnColumn')}
        self.assertEqual({(item['event'],item['handler']) for item in model['events']},expected)
        self.assertEqual(len(model['events']),5)

    def test_xaml_password_changed_event_is_inventoried_and_independently_validated(self):
        source='<PasswordBox xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" PasswordChanged="PmPasswordChanged"/>'
        members=[{'kind':'MethodDeclaration','name':'PmPasswordChanged','parameters':[{'type':'object'},{'type':'System.Windows.RoutedEventArgs'}]}]
        actual=collections.Counter((entry['event'],entry['handler']) for entry in xaml_structure(source)['events'])
        expected,_=expected_xaml_events(ET.fromstring(source),members)
        self.assertEqual(actual,collections.Counter({('PasswordChanged','PmPasswordChanged'):1}))
        self.assertEqual(actual,expected)

    def test_xaml_event_validator_is_independent_of_generator_whitelist(self):
        source = '<Grid PreviewTextInput="OnText" LostMouseCapture="OnCapture" TreeViewItem.Expanded="OnExpand" LoadingRow="OnRow" AutoGeneratingColumn="OnColumn"/>'
        expected,_=expected_xaml_events(ET.fromstring(source))
        with patch('build_reference.WPF_EVENTS',set()):
            actual=collections.Counter((entry['event'],entry['handler']) for entry in xaml_structure(source)['events'])
        self.assertEqual(sum(expected.values()),5)
        self.assertNotEqual(expected,actual,'a generator whitelist omission must not pass the independent validator')

    def test_xaml_unknown_handler_candidate_and_non_event_values(self):
        xml=ET.fromstring('<Grid CustomHandoff="OnCustom" Text="OnCustom" Title="OnCustom"><EventSetter Event="LostKeyboardFocus" Handler="OnCustom"/></Grid>')
        members=[{'kind':'MethodDeclaration','name':'OnCustom','parameters':[{'type':'object?'},{'type':'System.Windows.RoutedEventArgs'}]}]
        expected,candidates=expected_xaml_events(xml,members)
        self.assertEqual(expected,collections.Counter({('CustomHandoff','OnCustom'):1,('LostKeyboardFocus','OnCustom'):1}))
        self.assertEqual([entry['event'] for entry in candidates],['CustomHandoff'])

    def test_source_and_output_paths_must_be_disjoint(self):
        with tempfile.TemporaryDirectory(prefix='a3-path-regression-') as tmp:
            root=Path(tmp);source=root/'source';source.mkdir();manual=root/'manual';manual.mkdir()
            for output in [source,source/'nested',root]:
                with self.subTest(output=output),self.assertRaisesRegex(ValueError,'source and output paths must be disjoint'):
                    Builder(source,output,root/'unused-model.json',manual)

    def test_manual_input_and_output_paths_must_be_disjoint(self):
        with tempfile.TemporaryDirectory(prefix='a3-manual-path-regression-') as tmp:
            root=Path(tmp);source=root/'source';source.mkdir();manual=root/'manual';manual.mkdir()
            for input_path,output in [(manual,manual),(manual,manual/'nested'),(manual/'nested',manual)]:
                with self.subTest(manual=input_path,output=output),self.assertRaisesRegex(ValueError,'manual input and output paths must be disjoint'):
                    Builder(source,output,root/'unused-model.json',input_path)

    def test_definition_cells_suppress_site_endpoints(self):
        cells=definition_cells(['TYPE','10.20.30.40','api_key=fixture-value','SAFE','ignored'])
        self.assertEqual(cells,['TYPE','[민감 설정 값 미복제]','[민감 설정 값 미복제]','SAFE'])

    def test_synthetic_pipeline_preserves_lines_and_separates_generated_data(self):
        with tempfile.TemporaryDirectory(prefix='a3-doc-regression-') as tmp:
            root=Path(tmp);source=root/'source';source.mkdir();output=root/'output';manual=root/'manual';manual.mkdir()
            (manual/'tilde-fixture.md').write_text('# Tilde fixture\n\n~~~text\n[not navigation](missing.md)\n```\n~~~\n',encoding='utf-8',newline='\n')
            fixtures={
                'Drilling.File/Generator.cs':'// Source generator fixture.  \n// A fence is source evidence: ```  \n',
                'Drilling.UI/Fixture.xaml':'<Grid xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" x:Name="Root" SizeChanged="OnSize"/>\n',
                'Config/JHMI_INTERFACE_fixture.csv':'TYPE,DEVICE,NUMBER,NICKNAME,ARG1\nfixture,endpoint,1,10.20.30.40,opaque\n',
                'Data/operational.csv':'ID,TIME,VALUE\nSENTINEL_OPERATIONAL_RECORD,2030-01-01,987654321\n',
                'Data/ManualInspection/Sessions/fixture.json':'{"GlassId":"SENTINEL_OPERATIONAL_RECORD","Value":987654321,"Points":[{"X":1.25}]}\n',
                'Data/ManualInspection/Sessions/broken.json':'{"GlassId":"SENTINEL_OPERATIONAL_RECORD",\n',
                'Data/PROCESS_H01.ascript':'// Generated fixture\nvar $x = 1  \n',
            }
            for rel,body in fixtures.items():
                path=source/rel;path.parent.mkdir(parents=True,exist_ok=True);path.write_text(body,encoding='utf-8',newline='\n')
            def git(*args):return subprocess.check_output(['git','-C',str(source),*args],stderr=subprocess.PIPE,text=True).strip()
            git('init','-q');git('remote','add','origin','DISABLED');git('add','.')
            git('-c','user.name=Documentation Fixture','-c','user.email=fixture@example.invalid','commit','-qm','synthetic documentation fixture')
            commit=git('rev-parse','HEAD');path='Drilling.File/Generator.cs'
            model={'sourceCommit':commit,'files':[{'path':path,'sha256':hashlib.sha256((source/path).read_bytes()).hexdigest(),'types':[],'members':[],'calls':[],'operations':[]}],'analysisScope':{},'summary':{}}
            modelpath=root/'model.json';modelpath.write_text(json.dumps(model),encoding='utf-8')
            Builder(source,output,modelpath,manual).run()
            # Packaging normally supplies tools; the fixture provides the linked readme only.
            (output/'tools').mkdir();(output/'tools/README.md').write_text('# Fixture tools\n',encoding='utf-8')
            report=validate(source,output)
            self.assertTrue(report['passed'],report['errors'])
            primary=(output/'offline-studio/A3_LD_Code_Ref_OfflineStudio.md').read_text(encoding='utf-8')
            optional=(output/'offline-studio/A3_LD_Generated_Output_Optional.md').read_text(encoding='utf-8')
            self.assertIn('source_path: Drilling.File/Generator.cs',primary)
            self.assertNotIn('source_path: Data/',primary)
            self.assertIn('source_path: Data/PROCESS_H01.ascript',optional)
            inventory=json.loads((output/'metadata/file-inventory.json').read_text(encoding='utf-8'))
            for item in inventory:
                if item['path'].endswith('.json'):
                    self.assertEqual(item['kind'],'data_schema');self.assertIsNone(item['annotation'])
            for folder in ['files','pages','offline-studio']:
                body='\n'.join(p.read_text(encoding='utf-8') for p in (output/folder).rglob('*') if p.is_file())
                self.assertNotIn('SENTINEL_OPERATIONAL_RECORD',body)
                self.assertNotIn('987654321',body)
                self.assertNotIn('10.20.30.40',body)
            self.assertTrue(report['sourceUnchanged'])


    def test_complete_pipeline_transport_shards_validate_and_reject_provenance_or_unicode_corruption(self):
        # Reduced transport threshold forces the actual complete Builder + validator path.
        # All records are synthetic; equipment projects and operational files are untouched.
        def check(name,passed,**detail):
            self.assertTrue(passed,(name,detail))
        def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
        with tempfile.TemporaryDirectory(prefix='a3-independent-sharded-pipeline-') as name:
         root=Path(name);source=root/'source';source.mkdir();manual=root/'manual';manual.mkdir();output=root/'output'
         fixtures={
          'Drilling.Common/Fixture.cs':'// synthetic source fixture\n',
          'Data/records.csv':'ID,VALUE\nPRIVATE_RECORD_CANARY_991182,987654321\n',
          'Data/ManualInspection/Sessions/current.json':'{"GlassId":"PRIVATE_RECORD_CANARY_991182","Value":987654321,"Points":[{"X":12345.875,"Judge":"PRIVATE_JUDGE_CANARY_7781"}],"PRIVATE-DYNAMIC-RECORD-KEY-9922":{"Token":"PRIVATE_TOKEN_CANARY_7382"}}\n',
          'Data/ManualInspection/Sessions/broken.json':'{"GlassId":"PRIVATE_RECORD_CANARY_991182",\n',
         }
         for index in range(14):fixtures[f'Data/PROCESS_{index:02d}.ascript']=''.join(f'// generated synthetic source {index}-{line}\n' for line in range(18))
         for rel,body in fixtures.items():
          path=source/rel;path.parent.mkdir(parents=True,exist_ok=True);path.write_text(body,encoding='utf-8',newline='\n')
         def git(*args):return subprocess.check_output(['git','-C',str(source),*args],stderr=subprocess.PIPE).decode('utf-8').strip()
         git('init','-q');git('remote','add','origin','DISABLED');git('add','.')
         git('-c','user.name=Independent Documentation Fixture','-c','user.email=fixture@example.invalid','commit','-qm','synthetic independent sharded pipeline')
         commit=git('rev-parse','HEAD');before={rel:sha(source/rel) for rel in fixtures};cs='Drilling.Common/Fixture.cs'
         model={'sourceCommit':commit,'files':[{'path':cs,'sha256':before[cs],'types':[],'members':[],'calls':[],'operations':[]}],'analysisScope':{},'summary':{}}
         modelpath=root/'model.json';modelpath.write_text(json.dumps(model),encoding='utf-8')
         with patch('build_reference.MARKDOWN_TRANSPORT_BYTES',3600):Builder(source,output,modelpath,manual).run()
         (output/'tools').mkdir();(output/'tools/README.md').write_text('# Fixture tool documentation\n',encoding='utf-8')
         initial=validate(source,output);check('real_pipeline_with_forced_transport_split_passes_complete_validator',initial['passed'],errors=initial['errors'][:3])
         optional=output/'offline-studio/A3_LD_Generated_Output_Optional.md';parts=sorted(optional.parent.glob('A3_LD_Generated_Output_Optional-part-*.md'))
         check('optional_transport_has_multiple_real_parts',len(parts)>1,parts=len(parts),fixtureByteLimit=3600)
         index=optional.read_text(encoding='utf-8');check('optional_index_links_every_part_once',all(index.count(']('+part.name+')')==1 for part in parts))
         records=[json.loads(line) for file in optional.parent.glob('reference-*.jsonl') for line in file.read_text(encoding='utf-8').splitlines()]
         expected=collections.Counter(record['source_path'] for record in records if record['source_path'].startswith('Data/'))
         actual=collections.Counter(path for part in parts for path in re.findall(r'^source_path: (.+)$',part.read_text(encoding='utf-8'),re.M))
         check('pipeline_markdown_parts_cover_every_optional_jsonl_record_exactly_once',actual==expected,optionalRecords=sum(actual.values()))
         inventory=json.loads((output/'metadata/file-inventory.json').read_text(encoding='utf-8'))
         check('valid_and_malformed_operational_json_are_schema_only_without_annotations',all(item['kind']=='data_schema' and item['coverage']=='schema_only' and item['annotation'] is None for item in inventory if item['path'].endswith('.json')))
         bodies='\n'.join(path.read_text(encoding='utf-8') for folder in ['files','pages','offline-studio'] for path in (output/folder).rglob('*') if path.is_file())
         canaries=['PRIVATE_RECORD_CANARY_991182','987654321','12345.875','PRIVATE_JUDGE_CANARY_7781','PRIVATE-DYNAMIC-RECORD-KEY-9922','PRIVATE_TOKEN_CANARY_7382']
         check('operational_scalar_values_dynamic_keys_and_malformed_raw_are_not_published',not any(value in bodies for value in canaries))
         target=next(part for part in parts if 'source_path: Data/' in part.read_text(encoding='utf-8'));original=target.read_bytes();body=original.decode('utf-8')
         target.write_text(body.replace('source_path: Data/','source_path: NONEXISTENT/',1),encoding='utf-8');broken=validate(source,output)
         check('complete_validator_rejects_broken_shard_provenance_or_routing',not broken['passed'])
         target.write_bytes(original);target.write_text(body+'\n\ufffd\n',encoding='utf-8');badunicode=validate(source,output)
         check('complete_validator_rejects_new_replacement_character_in_shard',not badunicode['passed'])
         target.write_bytes(original);restored=validate(source,output);check('restored_pipeline_passes_after_both_fault_injections',restored['passed'])
         check('synthetic_source_bytes_and_git_status_are_unchanged',all(sha(source/rel)==h for rel,h in before.items()) and git('status','--porcelain')=='')


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--report',type=Path);args=parser.parse_args()
    suite=unittest.defaultTestLoader.loadTestsFromTestCase(ReferenceRegression)
    result=unittest.TextTestRunner(verbosity=2).run(suite)
    if args.report:
        args.report.parent.mkdir(parents=True,exist_ok=True)
        args.report.write_text(json.dumps({'schemaVersion':'a3-generator-regression/1','testsRun':result.testsRun,'passed':result.wasSuccessful(),'failures':len(result.failures),'errors':len(result.errors),'scope':'Synthetic temporary Git repository only; equipment and vendor binaries not invoked.'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    raise SystemExit(0 if result.wasSuccessful() else 1)
