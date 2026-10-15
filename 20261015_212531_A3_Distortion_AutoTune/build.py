from pathlib import Path
base=Path(__file__).resolve().parent
html=(base/'document.html').read_text(encoding='utf-8')
for marker,name in [('LINALG','linalg.js'),('ENGINE','engine.js'),('UI','ui.js')]:
    s=(base/name).read_text(encoding='utf-8');assert '</script' not in s.lower()
    html=html.replace('/*'+marker+'*/',s)
(base/'A3_LD_Distortion_AutoTune_Studio.html').write_text(html,encoding='utf-8',newline='\n')
print('Built A3_LD_Distortion_AutoTune_Studio.html')
