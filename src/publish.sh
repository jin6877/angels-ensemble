#!/bin/zsh
# 빌드 결과를 side-app 배포 폴더로 복사 → 커밋·push (GitHub 연동으로 Vercel 자동 재배포)
# 사용: ./publish.sh "커밋 메시지"
set -e
cd "${0:A:h}"
ROOT="${PWD:h}"
APP=~/side-app/app/angels-ensemble
SITE="https://angels-ensemble.vercel.app"   # 배포 후 실제 프로덕션 URL로 갱신

./build.sh
cp "$ROOT/천사들의노래가_합주.pdf" "$APP/"
mkdir -p "$APP/파트별" "$APP/src"
cp "$ROOT"/파트별/*.pdf "$APP/파트별/"
cp gen.py template.html part_template.html build.sh publish.sh "$APP/src/"

# index.html = 총보 페이지 + 공유용 OG 메타
python3 -I - "$ROOT/천사들의노래가_합주.html" "$APP/index.html" "$SITE" <<'PY'
import sys
src, dst, site = sys.argv[1:4]
h = open(src).read()
og = (f'<meta name="description" content="찬송가 125장 천사들의 노래가 — 멜로디언·리코더·핸드벨·실로폰·리듬악기 13파트 합주 편곡. 듣고, 악기별 볼륨을 섞고, 파트보 PDF를 내려받는 인터랙티브 악보.">\n'
      f'<meta property="og:title" content="천사들의 노래가 — 13파트 합주 편곡">\n'
      f'<meta property="og:description" content="듣고, 볼륨 섞고, 파트보 뽑는 성탄 합주 인터랙티브 악보">\n'
      f'<meta property="og:image" content="{site}/thumbnail.png">\n'
      f'<meta property="og:type" content="website">\n'
      f'<meta name="twitter:card" content="summary_large_image">\n')
h = h.replace("</title>", "</title>\n" + og, 1)
open(dst, "w").write(h)
PY

cd "$APP"
git add -A
git commit -m "${1:-악보 업데이트}" || echo "(바뀐 것 없음)"
git push
