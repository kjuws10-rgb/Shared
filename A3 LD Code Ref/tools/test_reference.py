"""Synthetic regressions for documentation policy and offline output; no equipment input."""
from pathlib import Path
import argparse, collections, hashlib, json, subprocess, tempfile, unittest, xml.etree.ElementTree as ET
from unittest.mock import patch
from build_reference import Builder, definition_cells, normalize_document_whitespace, xaml_structure
from validate_reference import validate, expected_xaml_events


class ReferenceRegression(unittest.TestCase):
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
            fixtures={
                'Drilling.File/Generator.cs':'// Source generator fixture.  \n// A fence is source evidence: ```  \n',
                'Drilling.UI/Fixture.xaml':'<Grid xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" x:Name="Root" SizeChanged="OnSize"/>\n',
                'Config/JHMI_INTERFACE_fixture.csv':'TYPE,DEVICE,NUMBER,NICKNAME,ARG1\nfixture,endpoint,1,10.20.30.40,opaque\n',
                'Data/operational.csv':'ID,TIME,VALUE\nSENTINEL_OPERATIONAL_RECORD,2030-01-01,987654321\n',
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
            for folder in ['files','pages','offline-studio']:
                body='\n'.join(p.read_text(encoding='utf-8') for p in (output/folder).rglob('*') if p.is_file())
                self.assertNotIn('SENTINEL_OPERATIONAL_RECORD',body)
                self.assertNotIn('987654321',body)
                self.assertNotIn('10.20.30.40',body)
            self.assertTrue(report['sourceUnchanged'])


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--report',type=Path);args=parser.parse_args()
    suite=unittest.defaultTestLoader.loadTestsFromTestCase(ReferenceRegression)
    result=unittest.TextTestRunner(verbosity=2).run(suite)
    if args.report:
        args.report.parent.mkdir(parents=True,exist_ok=True)
        args.report.write_text(json.dumps({'schemaVersion':'a3-generator-regression/1','testsRun':result.testsRun,'passed':result.wasSuccessful(),'failures':len(result.failures),'errors':len(result.errors),'scope':'Synthetic temporary Git repository only; equipment and vendor binaries not invoked.'},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    raise SystemExit(0 if result.wasSuccessful() else 1)
