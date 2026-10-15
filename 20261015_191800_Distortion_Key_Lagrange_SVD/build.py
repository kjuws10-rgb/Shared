"""Build a self-contained offline HTML from local sources."""
from pathlib import Path
base=Path(__file__).resolve().parent
text=(base/'document.html').read_text(encoding='utf-8')
for marker,name in [('ENGINE','engine.js'),('UI','ui.js')]:
    script=(base/name).read_text(encoding='utf-8')
    assert '</script' not in script.lower()
    text=text.replace('/*'+marker+'*/',script)
(base/'A3_LD_Distortion_Key_Development_Scenario.html').write_text(text,encoding='utf-8')
print('Built standalone HTML')
