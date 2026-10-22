from pathlib import Path
import re,sys
base=Path(__file__).resolve().parents[1]
html=(base/'index.html').read_text(encoding='utf-8')
refs=re.findall(r'(?:src|href)=["\']((?:assets/|css/|js/)[^"\']+)',html)
for js in (base/'js').glob('*.js'):
    refs+=re.findall(r"assets/images/[a-zA-Z0-9_.-]+",js.read_text(encoding='utf-8'))
missing=sorted(set(ref for ref in refs if not (base/ref).is_file()))
print(f'{len(refs)} local references checked; {len(missing)} missing')
if missing:print('\n'.join(missing));sys.exit(1)
assert 'noindex' in html
assert not re.search(r'data:image/[^;]+;base64,',html)
print('PASS')
