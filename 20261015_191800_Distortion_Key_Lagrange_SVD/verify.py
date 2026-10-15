"""Independent NumPy references; run: python verify.py --node /path/to/node"""
import argparse, datetime, hashlib, json, pathlib, subprocess
import numpy as np
p=argparse.ArgumentParser();p.add_argument('--node',default='node');args=p.parse_args()
base=pathlib.Path(__file__).resolve().parent
data=json.loads(subprocess.check_output([args.node,str(base/'test-engine.js')],text=True,cwd=base))
errors={'singular_values_relative':0.,'reconstruction_relative':0.,'right_orthogonality':0.,'left_orthogonality':0.,'smooth_solution_absolute':0.}
for case in data['fixtures']:
    L=np.array(case['L'],float);A=np.array(case['A'],float);d=np.array(case['d'],float)
    for name,M in [('L',np.vstack([L,np.zeros((2,5))])),('A',A)]:
        s=np.array(case['s'+name]);U=np.array(case['u'+name]);V=np.array(case['v'+name]);ref=np.linalg.svd(M,compute_uv=False)
        errors['singular_values_relative']=max(errors['singular_values_relative'],float(np.max(np.abs(s-ref))/max(1,ref[0])))
        errors['reconstruction_relative']=max(errors['reconstruction_relative'],float(np.linalg.norm(U@np.diag(s)@V.T-M)/max(1,np.linalg.norm(M))))
        errors['right_orthogonality']=max(errors['right_orthogonality'],float(np.linalg.norm(V.T@V-np.eye(5))))
        errors['left_orthogonality']=max(errors['left_orthogonality'],float(np.linalg.norm(U.T@U-np.eye(5))))
    Ln=L/np.linalg.svd(L,compute_uv=False)[0];lam=case['lambda'];Q=np.eye(5)+lam**2*(Ln.T@Ln)
    if case['anchor']:
        ref=d.copy();ref[1:4]=np.linalg.solve(Q[1:4,1:4],d[1:4]-Q[1:4][:,[0,4]]@d[[0,4]])
    else:ref=np.linalg.solve(Q,d)
    errors['smooth_solution_absolute']=max(errors['smooth_solution_absolute'],float(np.max(np.abs(ref-np.array(case['c'])))))
assert errors['singular_values_relative']<1e-10,errors
assert errors['reconstruction_relative']<1e-10,errors
assert errors['right_orthogonality']<1e-10,errors
assert errors['left_orthogonality']<1e-10,errors
assert errors['smooth_solution_absolute']<1e-8,errors
report={'status':'passed','verified_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'javascript_assertions':data['checks'],'independent_reference_cases':len(data['fixtures']),'node':subprocess.check_output([args.node,'--version'],text=True).strip(),'numpy':np.__version__,'maximum_errors':errors,'metrics_definition':'RMS = sqrt(mean(dx^2+dy^2)) on 17 x 31 synthetic grid, in estimated Fine-aligned common frame; grid is not a full continuous maximum bound.','scenarios':data['scenarios'],'scope':'Numerical prototype only. No measured substrate, machine integration, processing accuracy, optimal lambda/k, or performance benchmark verified.','sha256':{name:hashlib.sha256((base/name).read_bytes()).hexdigest() for name in ['engine.js','ui.js','A3_LD_Distortion_Key_Development_Scenario.html']}}
(base/'validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({k:v for k,v in report.items() if k not in ['scenarios','sha256']},ensure_ascii=False,indent=2))
