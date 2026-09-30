"""Read-only consistency checks. Does not communicate with any equipment."""
import csv, json, math
from pathlib import Path
from collections import Counter

root=Path(__file__).resolve().parent
def read_csv(name):
    with (root/name).open(encoding='utf-8-sig',newline='') as f:
        return list(csv.DictReader(f))
points=read_csv('review_catalog_70.csv')
schedule=read_csv('glass_schedule_35.csv')
cells=read_csv('cell_head_map_45.csv')
summary=json.loads((root/'summary.json').read_text(encoding='utf-8'))
assert len(points)==70 and len(schedule)==35 and len(cells)==45
index={p['PointID']:p for p in points}
assert len(index)==70
seen=[]
for s in schedule:
    a=index[s['First_PointID']];b=index[s['Second_PointID']]
    seen.extend([a['PointID'],b['PointID']])
    assert float(a['ReviewStageY_mm'])>float(b['ReviewStageY_mm'])
    dx=abs(float(a['ReviewX_mm'])-float(b['ReviewX_mm']))
    dy=abs(float(a['ReviewStageY_mm'])-float(b['ReviewStageY_mm']))
    assert abs(dx-float(s['DeltaX_mm']))<1e-6
    assert abs(dy-float(s['DeltaY_mm']))<1e-6
    move=2*math.sqrt(dx/1000) if dx<=40 else dx/200+.2
    need=max(move+.07001,1/23)
    assert abs(need-float(s['RequiredGap_assumed_s']))<1e-6
    assert dy/100>=need
    assert {int(a['Head']),int(b['Head'])} in [{1,2},{3,4},{5,6},{7,8}]
assert len(set(seen))==70
assert {int(p['Cell']) for p in points}==set(range(1,46))
assert Counter(int(p['Head']) for p in points)=={1:5,2:5,3:10,4:10,5:10,6:10,7:10,8:10}
assert all(int(p['DOE_Beam'])==7 and int(p['ShotRow'])==1 for p in points)
assert sum(int(c['Assigned_ValidLaserShots']) for c in cells)==19530
assert sum(int(c['Unassigned_ValidLaserShots']) for c in cells)==675
assert summary['valid_enabled_heads']==2245
assert summary['valid_all_heads']==19530
assert summary['shots_unassigned']==680
print('PASS: 70 unique points, 35 Glass, 45 Cell, 8 Head; geometry, order and assumed timing consistent.')
