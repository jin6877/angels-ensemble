"""천사들의 노래가 합주 악보 생성기.

구성: 전주(2) → 1절+후렴 [평이하게, ♩=96] → 전환 accel.(4)
      → 2절+후렴 [화려하게, ♩=132, 스타카토] → 후렴 느리게 [♩=76]
      → 후렴 다시 빠르게 [♩=132] → "높이계신 주~님~께!" 높은 파로 끝 (Maestoso)
사용: ./build.sh
"""
import re, sys

# ---------- chord plan (half-bar units) ----------
intro = [["F", "F"], ["C7", "C7"]]
verse = [["F", "F"], ["C7", "F"], ["F", "Dm"], ["C7", "F"],
         ["Dm", "F"], ["C7", "F"], ["Bb", "F"], ["C7", "F"]]
ref_a = [["F", "Dm"], ["Gm7", "C7"], ["FM7", "Bb"], ["C", "C7"], ["F", "Gm7"]]
ref1 = ref_a + [["F/C", "C7"]]
ref2 = ref_a + [["F/C", "C7"], ["F", "F"]]
body = verse + ref1 + ref2          # 21마디 (1절·2절 공통 화성)
# 2절 마디 번호(0부터): 0-3 앞소절, 4-7 뒷소절, 8-13 후렴①, 14-20 후렴②
V2, R1, R2 = 4, 8, 14

TEMPO_A, TEMPO_B, TEMPO_SLOW = 96, 132, 76
# 후렴만 따로 쓸 때 마디 번호(0부터): 0-5 후렴①, 6-12 후렴② / 10 "높이계신" 11 "주님" 12 "께"
P2, HI, JU, KKE = 6, 10, 11, 12
REF = ref1 + ref2
SLOW = {0: "!p!", P2: "!mf!"}
FAST = {0: "!f!", P2: "!ff!"}


def with_fermata(bar):
    m = re.match(r'^((?:"[^"]*")?(?:![^!]*!)*)(.*)$', bar)
    return m.group(1) + "!fermata!" + m.group(2)


def finale(bars, hi=None, ju=None, kke=None):
    """마지막 후렴의 끝 3마디 바꾸기"""
    bars = list(bars)
    if hi: bars[HI] = hi
    if ju: bars[JU] = ju
    bars[KKE] = kke or with_fermata(bars[KKE])
    return bars
CRESC = '"^cresc."'


def J(bars):
    return " | ".join(bars)


def bars_of(s):
    return [b.strip() for b in s.split("|")]


def mark(bars, marks):
    """marks = {마디번호: 앞에 붙일 표시(셈여림 등)}"""
    bars = list(bars)
    for i, m in marks.items():
        bars[i] = m + bars[i]
    return J(bars)


def stacc(bars):
    """4분·8분음표에 스타카토(.) 붙이기 — 2분음표 이상은 그대로"""
    pat = re.compile(r"^((?:![^!]*!|\"[^\"]*\"|\[[^\]]*\])*)([_^=]?[A-Ga-g][,']*)([12]?)$")
    out = []
    for bar in bars:
        toks = []
        for t in bar.split(" "):
            m = pat.match(t)
            toks.append(f"{m.group(1)}.{m.group(2)}{m.group(3)}" if m else t)
        out.append(" ".join(toks))
    return out


# 전환(4마디): 멈춤 없이 점점 빠르게 96 → 100 → 108 → 116 → 124 → 2절 132
ACCEL = [100, 108, 116, 124]


def assemble(intro_s, a, trans, b, end_s):
    return f"{intro_s} | {a} | {trans} | {b} | {end_s} |]"


# ---------- 핸드벨: HB1(도레미) HB2(파솔) HB3(라·높은도) — 시♭ 벨 없이 ----------
voicing = {
    "F": ("C", "F", "A"), "F/C": ("C", "F", "A"), "FM7": ("C", "F", "A"),
    "Dm": ("D", "F", "A"), "C": ("E", "G", "c"), "C7": ("E", "G", "c"),
    "Gm7": ("D", "G", "z"), "Bb": ("D", "F", "z"),
}


def bell_bars(chords, idx, chords_on, pulse=False):
    out = []
    for a, b in chords:
        na, nb = voicing[a][idx], voicing[b][idx]
        ca = f'"{a}"' if chords_on else ""
        cb = f'"{b}"' if chords_on else ""
        if pulse:   # 4분음표로 계속 울림
            ha = "z4" if na == "z" else f"{na}2 {na}2"
            hb = "z4" if nb == "z" else f"{nb}2 {nb}2"
            out.append(f"{ca}{ha} {cb if a != b else ''}{hb}")
        elif a == b or (na == nb and not chords_on):
            out.append(f"{ca}{na}8")
        else:
            out.append(f"{ca}{na}4 {cb}{nb}4")
    return out


bell_trans = [("D8", "D8", "E2 E2 E2 E2", "E2 E2 E2 z2"),
              ("F8", "G8", "G2 G2 G2 G2", "G2 G2 G2 z2"),
              ("z8", "z8", "c2 c2 c2 c2", "c2 c2 c2 z2")]


def bells(idx):
    wc = idx == 0
    q = lambda c: f'"{c}"' if wc else ""
    i = J(bell_bars(intro, idx, wc))
    a = "!mf!" + J(bell_bars(body, idx, wc))
    t1, t2, t3, t4 = bell_trans[idx]
    t = f"!mf!{q('Bb')}{t1} | {q('Gm7')}{t2} | !f!{q('C7')}{t3} | {t4}"
    # 2절: 앞소절은 2분음표로 조용히(mp) → 후렴부터 4분음표로 계속 울림(f → ff)
    b_bars = bell_bars(verse, idx, wc) + bell_bars(ref1 + ref2, idx, wc, pulse=True)
    b = mark(b_bars, {0: "!mp!", V2: "!mf!", R1: "!f!", R2: "!ff!"})
    slow = mark(bell_bars(REF, idx, wc), SLOW)
    fast_bars = bell_bars(REF, idx, wc, pulse=True)
    fast_bars[KKE] = with_fermata(bell_bars([["F", "F"]], idx, wc)[0])
    e = slow + " | " + mark(fast_bars, FAST)
    return "!mp!" + assemble(i, a, t, b, e)


# ---------- 실로폰 (시♭ 없음, 도5~도6 한 옥타브) ----------
xq = {"F": "c'2 a2", "C7": "g2 e2", "Dm": "a2 f2", "Bb": "f2 d2"}
x8 = {"F": "fac'a", "F/C": "cfaf", "FM7": "eac'a", "C": "egc'g", "C7": "egc'g",
      "Dm": "dfaf", "Gm7": "dgdg", "Bb": "dfdf"}


def xylo():
    i = J([f"{xq[a]} {xq[b]}" for a, b in intro])
    v = J([f"{xq[a]} {xq[b]}" for a, b in verse])
    r1 = "c'4 a4 | g4 e4 | a4 f4 | g4 e4 | a4 g4 | c'4 g4"
    r2 = "c'4 a4 | g4 e4 | a4 f4 | g4 e4 | a4 g4 | c'4 g4 | f2 a2 c'4"
    t = "!mf!cdefgac'2 | dgdg dgdg | !f!egc'g egc'g | egc'g c'2 z2"
    b = mark([f"{x8[a]} {x8[b]}" for a, b in body], {0: "!p!", V2: "!mf!", R1: "!f!", R2: "!ff!"})
    slow = mark(bars_of(f"{r1} | {r2}"), SLOW)
    fast = finale([f"{x8[a]} {x8[b]}" for a, b in REF], kke="fac' !fermata!c'5")
    e = slow + " | " + mark(fast, FAST)
    return f"!mp!{i} | !mf!{v} | !f!{r1} | {r2} | {t} | {b} | {e} |]"


# ---------- 멜로디 ----------
vphrase = "A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4"
rmel = "c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2"
mel_body = bars_of(f"{vphrase} | {vphrase} | {rmel} | A4 G4 | {rmel} | A4 G4 | F8")

mel_a = mark(mel_body, {0: "!mf!", R1: '"^후렴"!f!'})
mel_b = mark(stacc(mel_body[:R1]) + mel_body[R1:], {0: f'[Q:1/4={TEMPO_B}]"^2절 화려하게"!mf!', V2: "!f!",
                                                    R1: '"^후렴"!ff!', 20: '[Q:1/4=112]"^rit."'})
mel_ref = mel_body[R1:]
HI_MEL, JU_MEL, KKE_MEL = "A2 B2 c2 d2", "c4 e4", "!fermata!f8"     # 높이계신 / 주~님~ / 께! (높은 파)
mel_end = (mark(mel_ref, {0: f'[Q:1/4={TEMPO_SLOW}]"^후렴 느리게 (서정적으로)"!p!', P2: "!mf!",
                          KKE: '[Q:1/4=104]"^accel."'}) + " | " +
           mark(finale(mel_ref, HI_MEL, f'[Q:1/4=100]"^rit."{JU_MEL}', f'[Q:1/4=69]"^Maestoso"!ff!{KKE_MEL}'),
                {0: f'[Q:1/4={TEMPO_B}]"^다시 빠르게!"!f!', P2: "!ff!"}))
mel_trans = (f'[Q:1/4={ACCEL[0]}]"^전환 · accel. 점점 빠르게"!mf!F2 G2 A2 B2 | [Q:1/4={ACCEL[1]}]c4 d4 | '
             f'[Q:1/4={ACCEL[2]}]!f!e8 | [Q:1/4={ACCEL[3]}].e2 .e2 .e2 z2')
TRANS_NOTES = 4 + 2 + 1 + 3
melody = assemble("z8 | z8", mel_a, mel_trans, mel_b, mel_end)

# 리코더 1: 1절 멜로디 → 2절 앞소절 멜로디(mp→mf), 후렴은 높은 데스캔트(f)
desc = {"F": "f", "F/C": "f", "Dm": "f", "Gm7": "g", "C7": "e", "FM7": "e", "Bb": "f", "C": "e"}
desc_bars = [f"{desc[a]}8" if a == b else f"{desc[a]}4 {desc[b]}4" for a, b in ref1 + ref2]
rec1 = assemble("z8 | z8", mark(mel_body, {0: "!mf!", R1: "!f!"}),
                "!mf!A2 B2 c2 d2 | c4 d4 | !f!e8 | .e2 .e2 .e2 z2",
                mark(stacc(mel_body[:R1]) + desc_bars, {0: "!mp!", V2: "!mf!", R1: '"^데스캔트"!f!', R2: "!ff!"}),
                mark(mel_ref, SLOW) + " | " + mark(finale(desc_bars, HI_MEL, JU_MEL, KKE_MEL), FAST))

# ---------- 가사 (멜로디언 1 아래) ----------
def syl(s):
    return " ".join(s.replace(" ", ""))

melis = "영 " + " ".join(["_"] * 15)          # 영—— (16음 멜리스마)
refrain = f"{melis} 광 을 높 이 계 신 주 께 {melis} 광 을 높 이 계 신 주 님 께"
v1 = syl("천사들의노래가하늘에서들리니") + " 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다"
v2 = syl("한밤중에목자들양떼들을지킬때아름다운노래가청아하게들린다")
lyrics = [f"1.~{v1} {refrain} " + "* " * TRANS_NOTES + f"2.~{v2} {refrain} {refrain} {refrain}"]

# ---------- 리코더 2 (알토) ----------
alto_body = bars_of("F2 F2 F2 A2 | E3 E F4 | F2 E2 F2 A2 | F3 E F4 | "
                    "F2 F2 F2 A2 | E3 E F4 | F2 D2 F2 A2 | F3 E F4 | "
                    "A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 | F2 E2 F2 G2 | F4 E4 | "
                    "A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 | F2 E2 F2 G2 | F4 E4 | A8")
alto = assemble("z8 | z8", mark(alto_body, {0: "!mf!", R1: "!f!"}),
                "!mf!D4 F4 | G4 B4 | !f!G8 | .G2 .G2 .G2 z2",
                mark(stacc(alto_body[:R1]) + alto_body[R1:], {0: "!p!", V2: "!mp!", R1: "!f!", R2: "!ff!"}),
                mark(alto_body[R1:], SLOW) + " | " +
                mark(finale(alto_body[R1:], "F2 G2 A2 B2", "A4 G4", "!fermata!c8"), FAST))

# ---------- 리코더 3: 1절 긴 음 → 2절 엇박(뒷박) 악센트 ----------
r3_body = bars_of("c8 | G4 c4 | c4 d4 | G4 A4 | d4 c4 | G4 c4 | d4 c4 | G4 A4 | "
                  "c8 | d4 c4 | c4 d4 | c4 B4 | c4 d4 | c4 B4 | "
                  "c8 | d4 c4 | c4 d4 | c4 B4 | c4 d4 | c4 B4 | c8")
r3n = {"F": "c", "F/C": "c", "FM7": "c", "Dm": "d", "C": "G", "C7": "G", "Gm7": "d", "Bb": "d"}
off = lambda n: f"z2 !>!.{n}2"
r3_b = [f"{off(r3n[a])} {off(r3n[b])}" for a, b in body]
r3_b[-1] = "c8"
rec3 = assemble("z8 | z8", mark(r3_body, {0: "!mp!", R1: "!f!"}),
                "!mf!d8 | d8 | !f!B8 | .B2 .B2 .B2 z2",
                mark(r3_b, {0: '"^엇박"!mp!', R1: "!f!", R2: "!ff!"}),
                mark(r3_body[R1:], SLOW) + " | " + mark(finale(r3_b[R1:]), FAST))

# ---------- 멜로디언 2 (베이스): 1절 2분음표 → 2절 ♩♪♪ 리듬 ----------
bass_a = ("F,4 A,4 | C4 F,4 | F,4 D4 | C4 F,4 | D4 A,4 | C4 F,4 | B,4 A,4 | C4 F,4 | "
          "F,4 D4 | G,4 C4 | F,4 B,4 | C4 B,4 | A,4 G,4 | C8 | "
          "F,4 D4 | G,4 C4 | F,4 B,4 | C4 B,4 | A,4 G,4 | C8 | F,8")
bq = {"F": ("F,", "C"), "F/C": ("C", "F,"), "FM7": ("F,", "C"), "C": ("C", "G,"), "C7": ("C", "G,"),
      "Dm": ("D", "A,"), "Gm7": ("G,", "D"), "Bb": ("B,", "F,")}
drive = lambda c: f"{bq[c][0]}2 {bq[c][1]} {bq[c][0]}"
bass_b = [f"{drive(a)} {drive(b)}" for a, b in body]
bass_b[-1] = "F,8"
bass_b = stacc(bass_b[:R1]) + bass_b[R1:]
bass = assemble("!mp!F,8 | C8", "!mf!" + bass_a,
                "!mf!B,4 B,4 | G,4 G,4 | !f!C2 C2 C2 C2 | .C.C.C.C .C2 z2",
                mark(bass_b, {0: "!mf!", R1: "!f!", R2: "!ff!"}),
                mark(bars_of(bass_a)[R1:], SLOW) + " | " + mark(finale(bass_b[R1:]), FAST))

# ---------- 리듬악기: 소고(c) 트라이앵글(d) 탬버린(e) 마라카스(f) — 한 줄 보표 ----------
# 구간 길이: 전주 2 | 1절 21 (앞 8 + 후렴 13) | 전환 4 | 2절 21 | 느린 후렴 13 | 빠른 후렴 13
def perc_part(intro_b, a_verse, a_ref, trans, b_verse, b_ref, b_last, slow, slow_last, fast, fast_end, marks):
    a = [a_verse] * 8 + [a_ref] * 13 if isinstance(a_verse, str) else a_verse + a_ref
    b = [b_verse] * 8 + [b_ref] * 13
    b[-1] = b_last
    sl = ([slow] * 12 if isinstance(slow, str) else slow) + [slow_last]
    fa = [fast] * 13
    fa[HI], fa[JU], fa[KKE] = fast_end
    m = marks
    return " | ".join([J(intro_b), mark(a, m.get("A", {})), mark(trans, m.get("T", {})),
                       mark(b, m.get("B", {})), mark(sl, m.get("S", SLOW)), mark(fa, m.get("F", FAST))]) + " |]"


# GM 드럼 번호 (악보 글자 → 소리). percmap은 middle= 과 같이 쓰면 안 먹혀서 drummap 사용
DRUM = {"hi-mid-tom": 48, "open-triangle": 81, "tambourine": 54, "maracas": 70}
tri_a = (["d8", "z8"] * 4) + ["d8" if i in (0, 1, 2, 6, 7, 8, 12) else "z8" for i in range(13)]
perc_parts = [
    ("P1", "소고", "소고", "c", "hi-mid-tom", perc_part(
        ["z8", "z8"], "c2 z2 c2 z2", "c2 z2 c2 z2",
        ["c2 z2 c2 z2", "c2 c2 c2 c2", "cccc cccc", "!>!c2 !>!c2 !>!c2 z2"],
        "!>!c2 zc !>!c2 zc", "!>!c2 c2 !>!c2 c2", "!>!c2 z6",
        "c2 z6", '"^cresc."c2 c2 c2 c2',
        "!>!c2 c2 !>!c2 c2", ("cccc cccc", "!>!c2 !>!c2 !>!c2 !>!c2", "!>!c2 !fermata!z6"),
        {"A": {0: "!mp!"}, "T": {0: "!mf!", 2: "!f!"}, "B": {0: "!mf!", R1: "!f!", R2: "!ff!"}})),
    ("P2", "트라이앵글", "트라", "d", "open-triangle", perc_part(
        ["!p!d8", "d8"], tri_a[:8], tri_a[8:],
        ["z8", "z8", "!f!dddd dddd", "d2 d2 d2 z2"],
        "zd zd zd zd", "d4 d4", "d8",
        "d8", "dddd dddd",
        "zd zd zd zd", ("dddd dddd", "dddd dddd", "!fermata!d8"),
        {"A": {0: "!mp!"}, "B": {0: "!mp!", R1: "!f!", R2: "!ff!"}})),
    ("P3", "탬버린", "탬버", "e", "tambourine", perc_part(
        ["z8", "z8"], "z8", "z2 e2 z2 e2",
        ["z8", "!mf!z2 e2 z2 e2", "!f!e2 e2 e2 e2", "!>!e2 !>!e2 !>!e2 z2"],
        "z2 .e2 z2 .e2", "e2 ee e2 ee", "!>!e2 z6",
        "z8", '"^cresc."e2 e2 e2 e2',
        "e2 ee e2 ee", ("eeee eeee", "e2 e2 e2 e2", '"^흔들기~"!fermata!e8'),
        {"A": {8: "!mp!"}, "B": {0: "!mf!", R1: "!f!", R2: "!ff!"}, "S": {12: "!mf!"}})),
    ("P4", "마라카스", "마라", "f", "maracas", perc_part(
        ["z8", "z8"], "z8", "f2 f2 f2 f2",
        ["!mp!f2 f2 f2 f2", "ffff ffff", "!f!ffff ffff", "f2 f2 f2 z2"],
        "ffff ffff", "ffff ffff", "f2 z6",
        "f2 z2 f2 z2", "ffff ffff",
        "ffff ffff", ("ffff ffff", "ffff ffff", '"^흔들기~"!fermata!f8'),
        {"A": {8: "!p!"}, "B": {0: "!mf!", R1: "!f!", R2: "!ff!"}})),
]

voices = [
    ("M1", "멜로디언 1", "멜1", "", 21, melody),
    ("M2", "멜로디언 2", "멜2", " clef=bass", 21, bass),
    ("R1", "리코더 1", "리1", "", 74, rec1),
    ("R2", "리코더 2", "리2", "", 74, alto),
    ("R3", "리코더 3", "리3", "", 74, rec3),
    ("H1", "핸드벨 1 (도·레·미)", "벨1", "", 14, bells(0)),
    ("H2", "핸드벨 2 (파·솔)", "벨2", "", 14, bells(1)),
    ("H3", "핸드벨 3 (라·높은도)", "벨3", "", 14, bells(2)),
    ("X", "실로폰", "실로", "", 13, xylo()),
] + [
    (vid, name, sn, f" clef=perc stafflines=1 middle={pitch}", None, f"[K:C clef=perc stafflines=1 middle={pitch}]" + notes)
    for vid, name, sn, pitch, _, notes in perc_parts
]

# ---------- 검사: 마디 길이 / 가사 음절 수 ----------
NOTE = r"[_^=]?[A-Ga-gz][,']*\d*"

def clean(s):
    s = re.sub(r'"[^"]*"', "", s)
    s = re.sub(r"\[[A-Z]:[^\]]*\]", "", s)
    return re.sub(r"![^!]*!", "", s)

def check(name, s):
    bars = [b for b in re.split(r"\|\]|:\||\|:|\|", clean(s)) if b.strip()]
    for i, b in enumerate(bars):
        t = sum(int(re.match(r"[_^=]?[A-Ga-gz][,']*(\d*)", n).group(1) or 1)
                for n in re.findall(NOTE, b))
        if t != 8:
            print(f"!! {name}: bar {i+1} = {t}/8 -> {b!r}", file=sys.stderr)
    return len(bars)

for v in voices:
    print(v[0], check(v[0], v[5]), "bars", file=sys.stderr)
notes_m1 = [n for n in re.findall(NOTE, clean(melody)) if not n.startswith("z")]
for k, l in enumerate(lyrics):
    print(f"lyric line {k+1}: {len(l.split())} syllables / {len(notes_m1)} notes", file=sys.stderr)

PART_BARS = 5
DRUMMAP = "".join(f"%%MIDI drummap {p} {DRUM[snd]}\n" for _, _, _, p, snd, _ in perc_parts)


def make_abc(score, subtitle, ids, rename=None, part=False):
    rename = rename or {}
    if part:   # 파트보: 제목·파트명·빠르기는 HTML 머리글로 (공간 절약)
        abc = (f"X:1\nM:4/4\nL:1/8\n%%score {score}\n{DRUMMAP}%%barnumbers 1\n"
               "%%staffsep 52\n%%sysstaffsep 30\n%%annotationfont Times-BoldItalic 15\nK:F\n%%vocal below\n")
    else:
        abc = (f"X:1\nT:천사들의 노래가 (찬송가 125장)\nT:{subtitle}\nC:프랑스 전통 캐럴 GLORIA · 합주 편곡\n"
               f"M:4/4\nL:1/8\nQ:1/4={TEMPO_A}\n%%score {score}\n{DRUMMAP}%%barnumbers 1\n%%dynamic below\nK:F\n")
    chosen = []
    for vid, name, sn, clef, prog, notes in voices:
        if vid not in ids:
            continue
        midi = "%%MIDI channel 10" if prog is None else f"%%MIDI program {prog}"
        if part and vid == "M1" and len(ids) > 1:     # 참고용 주멜로디: 셈여림 빼서 내 파트 셈여림만 보이게
            notes = re.sub(r"!(?:ppp|pp|p|mp|mf|f|ff|fff)!", "", notes)
        if part and vid != "M1":   # 셈여림을 내 보표 바로 아래 글자로 (abcjs가 위에 띄워서)
            notes = re.sub(r"!(ppp|pp|p|mp|mf|f|ff|fff)!", r'"_\1"', notes)
        chosen.append((vid, rename.get(vid, name), sn, clef, midi, notes))

    if not part:
        for vid, name, sn, clef, midi, notes in chosen:
            abc += f'V:{vid} name="{name}" snm="{sn}"{clef}\n{midi}\n{notes}\n'
            if vid == "M1":
                abc += "".join(f"w: {l}\n" for l in lyrics)
        return abc

    # 파트보: 줄바꿈을 직접(PART_BARS마디씩) — 악기 이름은 첫 줄에만
    for vid, name, sn, clef, midi, notes in chosen:
        abc += f'V:{vid} name="{name}" snm=""{clef}\n{midi}\n'
    KEYCLEF = {vid: (f"[K:C{clef}]" if "perc" in clef else f"[K:F clef={'bass' if 'bass' in clef else 'treble'}]")
               for vid, _, _, clef, *_ in chosen}
    split = {vid: [b.strip() for b in notes.replace("|]", "").split("|") if b.strip()] for vid, *_, notes in chosen}
    nbar = len(next(iter(split.values())))
    lyr = lyrics[0].split()
    li = 0
    for c0 in range(0, nbar, PART_BARS):
        last = c0 + PART_BARS >= nbar
        for vid, *_ in chosen:
            chunk = " | ".join(split[vid][c0:c0 + PART_BARS]) + (" |]" if last else " |")
            if c0:   # 줄마다 각 보표의 조표·음자리표 다시 지정 (리듬악기 설정이 다른 보표로 번지는 것 방지)
                chunk = KEYCLEF[vid] + chunk
            abc += f"V:{vid}\n{chunk}\n"
            if vid == "M1":
                n = len([x for x in re.findall(NOTE, clean(chunk)) if not x.startswith("z")])
                if n:
                    abc += "w: " + " ".join(lyr[li:li + n]) + "\n"
                    li += n
    return abc


# ---------- 전체 총보 ----------
abc = make_abc("[M1 M2] [R1 R2 R3] [H1 H2 H3] X [P1 P2 P3 P4]",
               "멜로디언 2 · 리코더 3 · 핸드벨 3 · 실로폰 1 · 리듬악기 4 합주", [v[0] for v in voices])
def part_file(k, name):
    return f"{k:02d}_" + re.sub(r"[^0-9A-Za-z가-힣]", "", name.split("(")[0])


downloads = "".join(f'<a href="파트별/{part_file(k, v[1])}.pdf" download>{v[1].split(" (")[0]}</a>'
                    for k, v in enumerate(voices, 1))
html = open(sys.argv[1]).read().replace("__ABC__", abc.replace("`", "\\`")).replace("__DOWNLOADS__", downloads)
open(sys.argv[2], "w").write(html)

# ---------- 파트보 (각 악기 + 위에 주멜로디·가사) ----------
if len(sys.argv) > 3:
    import os
    outdir = sys.argv[3]
    os.makedirs(outdir, exist_ok=True)
    part_tpl = open(os.path.join(os.path.dirname(os.path.abspath(sys.argv[1])), "part_template.html")).read()
    for k, (vid, name, *_rest) in enumerate(voices, 1):
        if vid == "M1":
            pabc = make_abc("M1", "", ["M1"], part=True)
        else:
            pabc = make_abc(f"M1 {vid}", "", ["M1", vid], {"M1": "주멜로디"}, part=True)
        fname = part_file(k, name)
        open(os.path.join(outdir, fname + ".html"), "w").write(part_tpl.replace("__ABC__", pabc.replace("`", "\\`"))
                .replace("__PART__", name + (" 파트 (주멜로디 · 가사)" if vid == "M1" else " 파트")).replace("__TEMPO__", str(TEMPO_A)))
