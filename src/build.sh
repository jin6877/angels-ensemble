#!/bin/zsh
# 악보 다시 만들기: 총보 HTML/PDF + 악기별 파트보 PDF (../파트별/)
set -e
cd "${0:A:h}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="${PWD:h}"
mkdir -p build build/parts "$ROOT/파트별"
python3 -I gen.py template.html "$ROOT/천사들의노래가_합주.html" build/parts

# HTML → (렌더된 SVG를 줄마다 이미지로) → PDF
to_pdf() {  # $1=html  $2=pdf  $3=작업폴더
  mkdir -p "$3"
  "$CHROME" --headless=new --disable-gpu --virtual-time-budget=8000 --dump-dom "file://$1" 2>/dev/null > "$3/dom.html"
  python3 -I - "$3" <<'PY'
import re, sys
w = sys.argv[1]
d = open(f'{w}/dom.html').read(); p = d[d.index('id="paper"'):]
svgs = re.findall(r'<svg.*?</svg>', p, re.S)
for i, s in enumerate(svgs):
    if 'xmlns=' not in s[:400]: s = s.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"', 1)
    s = re.sub(r'&(?!(amp|lt|gt|quot|apos|#[0-9]+|#x[0-9a-fA-F]+);)\w+;', '&#160;', s)
    open(f'{w}/sys{i:02d}.svg', 'w').write(s)
imgs = ''.join(f'<img src="sys{i:02d}.svg">' for i in range(len(svgs)))
m = re.search(r'<div id="hdr">.*?</div></div>', d, re.S)
hdr = m.group(0) if m else ''
css = ('@page{size:A4;margin:10mm}body{margin:0;font-family:-apple-system,"Apple SD Gothic Neo",sans-serif}'
       'img{display:block;width:100%;max-height:270mm;object-fit:contain;break-inside:avoid;margin-bottom:6mm}'
       '#hdr{display:grid;grid-template-columns:1fr 1fr;align-items:end;margin-bottom:2mm;font-family:"Times New Roman","AppleMyungjo",serif}'
       '#hdr .t{grid-column:1/-1;text-align:center;font-size:21pt}'
       '#hdr .p{grid-column:1/-1;text-align:center;font-size:15pt;margin-top:2px}'
       '#hdr .q{font-size:12pt;font-weight:700;margin-top:6px}'
       '#hdr .c{font-size:11pt;font-style:italic;text-align:right}')
if hdr:
    css += 'img{margin-bottom:3mm}'
open(f'{w}/print.html', 'w').write('<!doctype html><meta charset=utf-8><style>' + css + '</style>' + hdr + imgs)
print(f'  {len(svgs)} systems')
PY
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 --print-to-pdf="$2" "file://$3/print.html" 2>/dev/null
}

echo "총보"
to_pdf "$ROOT/천사들의노래가_합주.html" "$ROOT/천사들의노래가_합주.pdf" "$PWD/build/full"
for f in build/parts/*.html; do
  n="${f:t:r}"
  echo "파트: $n"
  to_pdf "$PWD/$f" "$ROOT/파트별/$n.pdf" "$PWD/build/parts/$n"
done
echo done
