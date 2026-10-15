import argparse,datetime,hashlib,json,pathlib,subprocess
import numpy as np
p=argparse.ArgumentParser();p.add_argument('--node',default='node');args=p.parse_args();base=pathlib.Path(__file__).resolve().parent
data=json.loads(subprocess.check_output([args.node,str(base/'test-engine.js')],text=True,encoding='utf-8',cwd=base))
errors={'svd_reconstruction_relative':0.,'left_orthogonality':0.,'right_orthogonality':0.,'singular_values_absolute':0.,'regularization_solution_absolute':0.}
for c in data['fixtures']:
    L=np.array(c['L']);d=np.array(c['d']);n=len(d);U=np.array(c['U']);V=np.array(c['V']);s=np.array(c['s']);lam=c['lambda']
    errors['svd_reconstruction_relative']=max(errors['svd_reconstruction_relative'],float(np.linalg.norm(U@np.diag(s)@V.T-L)/max(1,np.linalg.norm(L))))
    errors['left_orthogonality']=max(errors['left_orthogonality'],float(np.linalg.norm(U.T@U-np.eye(n))))
    errors['right_orthogonality']=max(errors['right_orthogonality'],float(np.linalg.norm(V.T@V-np.eye(n))))
    errors['singular_values_absolute']=max(errors['singular_values_absolute'],float(np.max(np.abs(s-np.linalg.svd(L,compute_uv=False)))))
    ref=np.linalg.solve(np.eye(n)+lam**2*L.T@L,d)
    errors['regularization_solution_absolute']=max(errors['regularization_solution_absolute'],float(np.max(np.abs(ref-np.array(c['c'])))))
assert all(v<1e-10 for v in errors.values()),errors
report={'status':'passed','verified_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'node':subprocess.check_output([args.node,'--version'],text=True).strip(),'numpy':np.__version__,'javascript_assertions':data['checks'],'independent_numpy_cases':len(data['fixtures']),'maximum_errors':errors,'scenarios':data['scenarios'],'scope':'Four-camera alignment metadata; two independent pixel frames; per-camera 1/2/3-point interpolation and chronological repeated-measurement tuning. Synthetic scenarios only; no global coordinate calibration, machine command, physical shape reconstruction or actual processing accuracy validation.','metrics':'Per-camera native pixel RMS within observed Y span only; one-key-per-camera mode evaluates that point, not a spatial interval. Independent repeats are the tuning target; synthetic truth is visualization/evaluation only.','sha256':{name:hashlib.sha256((base/name).read_bytes()).hexdigest() for name in ['linalg.js','engine.js','ui.js','A3_LD_Distortion_AutoTune_Studio.html']}}
(base/'validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8',newline='\n')
print(json.dumps({k:v for k,v in report.items() if k not in ['scenarios','sha256']},ensure_ascii=False,indent=2))
