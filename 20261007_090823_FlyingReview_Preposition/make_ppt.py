# Compatibility entry point; authoring is JavaScript with @oai/artifact-tool.
from pathlib import Path
import os, shutil, subprocess
root=Path(__file__).resolve().parent
runtime_node=os.environ['CODEX_PRIMARY_RUNTIME_NODE']
modules=os.environ['CODEX_PRIMARY_RUNTIME_NODE_MODULES']
tmp=root/'.ppt-build';tmp.mkdir(exist_ok=True)
link=tmp/'node_modules'
if not link.exists(): link.symlink_to(modules,target_is_directory=True)
shutil.copyfile(root/'make_ppt.mjs',tmp/'make_ppt.mjs')
env={**os.environ,'REVIEW_WORKSPACE':str(root)}
subprocess.run([runtime_node,str(tmp/'make_ppt.mjs')],env=env,check=True)
