// 자동 생성 — src/gen.py (./build.sh). 직접 수정 금지.
// index.html '악보 보기' 메뉴의 파트 악보 ABC (PDF 파트보와 동일, 멜로디 아래 가사·악기이름 첫 줄만).
const PART_ABC = {
  "M1": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="멜로디언 1" snm=""
%%MIDI program 21
V:M1
z8 | z8 | !mf!A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:M1
[K:F clef=treble]"^후렴"!f!c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"!mf!F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:M1
[K:F clef=treble][Q:1/4=116]!f!e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게"!mf!.A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:M1
[K:F clef=treble]A3 .G F4 | !f!.A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:M1
[K:F clef=treble]"^후렴"!ff!c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"!p!c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | !mf!c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"!f!c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | !ff!c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!ff!!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
`,
  "M2": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 M2
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:M2 name="멜로디언 2" snm="" clef=bass
%%MIDI program 21
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:M2
"_mp"F,8 | C8 | "_mf"F,4 A,4 | C4 F,4 | F,4 D4 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:M2
[K:F clef=bass]C4 F,4 | D4 A,4 | C4 F,4 | B,4 A,4 | C4 F,4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:M2
[K:F clef=bass]F,4 D4 | G,4 C4 | F,4 B,4 | C4 B,4 | A,4 G,4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M2
[K:F clef=bass]C8 | F,4 D4 | G,4 C4 | F,4 B,4 | C4 B,4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:M2
[K:F clef=bass]A,4 G,4 | C8 | F,8 | "_mf"B,4 B,4 | G,4 G,4 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:M2
[K:F clef=bass]"_f"C2 C2 C2 C2 | .C.C.C.C .C2 z2 | "_mf".F,2 .C .F, .F,2 .C .F, | .C2 .G, .C .F,2 .C .F, | .F,2 .C .F, .D2 .A, .D |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:M2
[K:F clef=bass].C2 .G, .C .F,2 .C .F, | .D2 .A, .D .F,2 .C .F, | .C2 .G, .C .F,2 .C .F, | .B,2 .F, .B, .F,2 .C .F, | .C2 .G, .C .F,2 .C .F, |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:M2
[K:F clef=bass]"_f"F,2 C F, D2 A, D | G,2 D G, C2 G, C | F,2 C F, B,2 F, B, | C2 G, C C2 G, C | F,2 C F, G,2 D G, |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M2
[K:F clef=bass]C2 F, C C2 G, C | "_ff"F,2 C F, D2 A, D | G,2 D G, C2 G, C | F,2 C F, B,2 F, B, | C2 G, C C2 G, C |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:M2
[K:F clef=bass]F,2 C F, G,2 D G, | C2 F, C C2 G, C | F,8 | "_p"F,4 D4 | G,4 C4 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:M2
[K:F clef=bass]F,4 B,4 | C4 B,4 | A,4 G,4 | C8 | "_mf"F,4 D4 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:M2
[K:F clef=bass]G,4 C4 | F,4 B,4 | C4 B,4 | A,4 G,4 | C8 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:M2
[K:F clef=bass]F,8 | "_f"F,2 C F, D2 A, D | G,2 D G, C2 G, C | F,2 C F, B,2 F, B, | C2 G, C C2 G, C |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:M2
[K:F clef=bass]F,2 C F, G,2 D G, | C2 F, C C2 G, C | "_ff"F,2 C F, D2 A, D | G,2 D G, C2 G, C | F,2 C F, B,2 F, B, |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:M2
[K:F clef=bass]C2 G, C C2 G, C | F,2 C F, G,2 D G, | C2 F, C C2 G, C | !fermata!F,8 |]
`,
  "R1": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 R1
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:R1 name="리코더 1" snm=""
%%MIDI program 74
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:R1
z8 | z8 | "_mf"A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:R1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R1
[K:F clef=treble]"_f"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:R1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | "_mf"A2 B2 c2 d2 | c4 d4 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:R1
[K:F clef=treble]"_f"e8 | .e2 .e2 .e2 z2 | "_mp".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:R1
[K:F clef=treble]A3 .G F4 | "_mf".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R1
[K:F clef=treble]"^데스캔트""_f"f4 f4 | g4 e4 | e4 f4 | e4 e4 | f4 g4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R1
[K:F clef=treble]f4 e4 | "_ff"f4 f4 | g4 e4 | e4 f4 | e4 e4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:R1
[K:F clef=treble]f4 g4 | f4 e4 | f8 | "_p"c4 dcBA | B4 cBAG |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:R1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | "_mf"c4 dcBA |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:R1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R1
[K:F clef=treble]F8 | "_f"f4 f4 | g4 e4 | e4 f4 | e4 e4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:R1
[K:F clef=treble]f4 g4 | f4 e4 | "_ff"f4 f4 | g4 e4 | e4 f4 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:R1
[K:F clef=treble]e4 e4 | A2 B2 c2 d2 | c4 e4 | !fermata!f8 |]
`,
  "R2": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 R2
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:R2 name="리코더 2" snm=""
%%MIDI program 74
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:R2
z8 | z8 | "_mf"F2 F2 F2 A2 | E3 E F4 | F2 E2 F2 A2 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:R2
[K:F clef=treble]F3 E F4 | F2 F2 F2 A2 | E3 E F4 | F2 D2 F2 A2 | F3 E F4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R2
[K:F clef=treble]"_f"A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 | F2 E2 F2 G2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R2
[K:F clef=treble]F4 E4 | A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:R2
[K:F clef=treble]F2 E2 F2 G2 | F4 E4 | A8 | "_mf"D4 F4 | G4 B4 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:R2
[K:F clef=treble]"_f"G8 | .G2 .G2 .G2 z2 | "_p".F2 .F2 .F2 .A2 | E3 .E F4 | .F2 .E2 .F2 .A2 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:R2
[K:F clef=treble]F3 .E F4 | "_mp".F2 .F2 .F2 .A2 | E3 .E F4 | .F2 .D2 .F2 .A2 | F3 .E F4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R2
[K:F clef=treble]"_f"A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 | F2 E2 F2 G2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R2
[K:F clef=treble]F4 E4 | "_ff"A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:R2
[K:F clef=treble]F2 E2 F2 G2 | F4 E4 | A8 | "_p"A4 BAGF | G4 AGFE |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:R2
[K:F clef=treble]F4 GFED | E3 G G4 | F2 E2 F2 G2 | F4 E4 | "_mf"A4 BAGF |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:R2
[K:F clef=treble]G4 AGFE | F4 GFED | E3 G G4 | F2 E2 F2 G2 | F4 E4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R2
[K:F clef=treble]A8 | "_f"A4 BAGF | G4 AGFE | F4 GFED | E3 G G4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:R2
[K:F clef=treble]F2 E2 F2 G2 | F4 E4 | "_ff"A4 BAGF | G4 AGFE | F4 GFED |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:R2
[K:F clef=treble]E3 G G4 | F2 G2 A2 B2 | A4 G4 | !fermata!c8 |]
`,
  "R3": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 R3
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:R3 name="리코더 3" snm=""
%%MIDI program 74
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:R3
z8 | z8 | "_mp"c8 | G4 c4 | c4 d4 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:R3
[K:F clef=treble]G4 A4 | d4 c4 | G4 c4 | d4 c4 | G4 A4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R3
[K:F clef=treble]"_f"c8 | d4 c4 | c4 d4 | c4 B4 | c4 d4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R3
[K:F clef=treble]c4 B4 | c8 | d4 c4 | c4 d4 | c4 B4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:R3
[K:F clef=treble]c4 d4 | c4 B4 | c8 | "_mf"d8 | d8 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:R3
[K:F clef=treble]"_f"B8 | .B2 .B2 .B2 z2 | "^엇박""_mp"z2 !>!.c2 z2 !>!.c2 | z2 !>!.G2 z2 !>!.c2 | z2 !>!.c2 z2 !>!.d2 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:R3
[K:F clef=treble]z2 !>!.G2 z2 !>!.c2 | z2 !>!.d2 z2 !>!.c2 | z2 !>!.G2 z2 !>!.c2 | z2 !>!.d2 z2 !>!.c2 | z2 !>!.G2 z2 !>!.c2 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:R3
[K:F clef=treble]"_f"z2 !>!.c2 z2 !>!.d2 | z2 !>!.d2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 | z2 !>!.G2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R3
[K:F clef=treble]z2 !>!.c2 z2 !>!.G2 | "_ff"z2 !>!.c2 z2 !>!.d2 | z2 !>!.d2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 | z2 !>!.G2 z2 !>!.G2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:R3
[K:F clef=treble]z2 !>!.c2 z2 !>!.d2 | z2 !>!.c2 z2 !>!.G2 | c8 | "_p"c8 | d4 c4 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:R3
[K:F clef=treble]c4 d4 | c4 B4 | c4 d4 | c4 B4 | "_mf"c8 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:R3
[K:F clef=treble]d4 c4 | c4 d4 | c4 B4 | c4 d4 | c4 B4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:R3
[K:F clef=treble]c8 | "_f"z2 !>!.c2 z2 !>!.d2 | z2 !>!.d2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 | z2 !>!.G2 z2 !>!.G2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:R3
[K:F clef=treble]z2 !>!.c2 z2 !>!.d2 | z2 !>!.c2 z2 !>!.G2 | "_ff"z2 !>!.c2 z2 !>!.d2 | z2 !>!.d2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:R3
[K:F clef=treble]z2 !>!.G2 z2 !>!.G2 | z2 !>!.c2 z2 !>!.d2 | z2 !>!.c2 z2 !>!.G2 | !fermata!c8 |]
`,
  "H1": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 H1
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:H1 name="핸드벨 1 (도·라)" snm=""
%%MIDI program 14
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:H1
"_mp""F"A8 | "C7"C8 | "_mf""F"A8 | "C7"C4 "F"A4 | "F"A4 "Dm"A4 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:H1
[K:F clef=treble]"C7"C4 "F"A4 | "Dm"A4 "F"A4 | "C7"C4 "F"A4 | "Bb"A4 "F"A4 | "C7"C4 "F"A4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:H1
[K:F clef=treble]"F"A4 "Dm"A4 | "Gm7"C4 "C7"C4 | "FM7"A4 "Bb"A4 | "C"C4 "C7"C4 | "F"A4 "Gm7"C4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H1
[K:F clef=treble]"F/C"A4 "C7"C4 | "F"A4 "Dm"A4 | "Gm7"C4 "C7"C4 | "FM7"A4 "Bb"A4 | "C"C4 "C7"C4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:H1
[K:F clef=treble]"F"A4 "Gm7"C4 | "F/C"A4 "C7"C4 | "F"A8 | "_mf""Bb"z8 | "Gm7"C8 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:H1
[K:F clef=treble]"_f""C7"C2 C2 C2 C2 | C2 C2 C2 z2 | "_mp""F"A8 | "C7"C4 "F"A4 | "F"A4 "Dm"A4 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:H1
[K:F clef=treble]"C7"C4 "F"A4 | "_mf""Dm"A4 "F"A4 | "C7"C4 "F"A4 | "Bb"A4 "F"A4 | "C7"C4 "F"A4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:H1
[K:F clef=treble]"_f"z6 ~A2 | z8 | z6 ~A2 | z8 | z6 ~C2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H1
[K:F clef=treble]z8 | "_ff"z6 ~A2 | z8 | z6 ~A2 | z8 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:H1
[K:F clef=treble]z6 ~C2 | z8 | z6 ~A2 | "_p""F"A4 "Dm"A4 | "Gm7"C4 "C7"C4 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:H1
[K:F clef=treble]"FM7"A4 "Bb"A4 | "C"C4 "C7"C4 | "F"A4 "Gm7"C4 | "F/C"A4 "C7"C4 | "_mf""F"A4 "Dm"A4 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:H1
[K:F clef=treble]"Gm7"C4 "C7"C4 | "FM7"A4 "Bb"A4 | "C"C4 "C7"C4 | "F"A4 "Gm7"C4 | "F/C"A4 "C7"C4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H1
[K:F clef=treble]"F"A8 | "_f"z6 ~A2 | z8 | z6 ~A2 | z8 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:H1
[K:F clef=treble]z6 ~C2 | z8 | "_ff"z6 ~A2 | z8 | z6 ~A2 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:H1
[K:F clef=treble]z8 | z6 ~C2 | z8 | "F"!fermata!A8 |]
`,
  "H2": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 H2
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:H2 name="핸드벨 2 (레·솔)" snm=""
%%MIDI program 14
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:H2
"_mp"D8 | G8 | "_mf"D8 | G4 D4 | D4 D4 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:H2
[K:F clef=treble]G4 D4 | D4 D4 | G4 D4 | D4 D4 | G4 D4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:H2
[K:F clef=treble]D4 D4 | G4 G4 | D4 D4 | G4 G4 | D4 G4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H2
[K:F clef=treble]D4 G4 | D4 D4 | G4 G4 | D4 D4 | G4 G4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:H2
[K:F clef=treble]D4 G4 | D4 G4 | D8 | "_mf"z8 | G8 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:H2
[K:F clef=treble]"_f"G2 G2 G2 G2 | G2 G2 G2 z2 | "_mp"D8 | G4 D4 | D4 D4 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:H2
[K:F clef=treble]G4 D4 | "_mf"D4 D4 | G4 D4 | D4 D4 | G4 D4 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:H2
[K:F clef=treble]"_f"z8 | z6 ~G2 | z8 | z6 ~G2 | z8 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H2
[K:F clef=treble]z6 ~G2 | "_ff"z8 | z6 ~G2 | z8 | z6 ~G2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:H2
[K:F clef=treble]z8 | z6 ~G2 | z8 | "_p"D4 D4 | G4 G4 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:H2
[K:F clef=treble]D4 D4 | G4 G4 | D4 G4 | D4 G4 | "_mf"D4 D4 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:H2
[K:F clef=treble]G4 G4 | D4 D4 | G4 G4 | D4 G4 | D4 G4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:H2
[K:F clef=treble]D8 | "_f"z8 | z6 ~G2 | z8 | z6 ~G2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:H2
[K:F clef=treble]z8 | z6 ~G2 | "_ff"z8 | z6 ~G2 | z8 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:H2
[K:F clef=treble]z6 ~G2 | z8 | z6 ~G2 | !fermata!D8 |]
`,
  "X": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 X
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:X name="실로폰" snm=""
%%MIDI program 13
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:X
"_mp"c'2 a2 c'2 a2 | g2 e2 g2 e2 | "_mf"c'2 a2 c'2 a2 | g2 e2 c'2 a2 | c'2 a2 a2 f2 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:X
[K:F clef=treble]g2 e2 c'2 a2 | a2 f2 c'2 a2 | g2 e2 c'2 a2 | f2 d2 c'2 a2 | g2 e2 c'2 a2 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:X
[K:F clef=treble]"_f"c'4 a4 | g4 e4 | a4 f4 | g4 e4 | a4 g4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:X
[K:F clef=treble]c'4 g4 | c'4 a4 | g4 e4 | a4 f4 | g4 e4 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:X
[K:F clef=treble]a4 g4 | c'4 g4 | f2 a2 c'4 | "_mf"cdefgac'2 | dgdg dgdg |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:X
[K:F clef=treble]"_f"egc'g egc'g | egc'g c'2 z2 | "_p"fac'a fac'a | egc'g fac'a | fac'a dfaf |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:X
[K:F clef=treble]egc'g fac'a | "_mf"dfaf fac'a | egc'g fac'a | dfdf fac'a | egc'g fac'a |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:X
[K:F clef=treble]"_f"fac'a dfaf | dgdg egc'g | eac'a dfdf | egc'g egc'g | fac'a dgdg |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:X
[K:F clef=treble]cfaf egc'g | "_ff"fac'a dfaf | dgdg egc'g | eac'a dfdf | egc'g egc'g |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:X
[K:F clef=treble]fac'a dgdg | cfaf egc'g | fac'a fac'a | "_p"c'4 a4 | g4 e4 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:X
[K:F clef=treble]a4 f4 | g4 e4 | a4 g4 | c'4 g4 | "_mf"c'4 a4 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:X
[K:F clef=treble]g4 e4 | a4 f4 | g4 e4 | a4 g4 | c'4 g4 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:X
[K:F clef=treble]f2 a2 c'4 | "_f"fac'a dfaf | dgdg egc'g | eac'a dfdf | egc'g egc'g |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:X
[K:F clef=treble]fac'a dgdg | cfaf egc'g | "_ff"fac'a dfaf | dgdg egc'g | eac'a dfdf |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:X
[K:F clef=treble]egc'g egc'g | fac'a dgdg | cfaf egc'g | fac' !fermata!c'5 |]
`,
  "P1": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 P1
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:P1 name="소고" snm="" clef=perc stafflines=1 middle=c
%%MIDI channel 10
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:P1
[K:C clef=perc stafflines=1 middle=c]z8 | z8 | "_mp"c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z2 c2 z2 | c2 z2 c2 z2 | c2 z2 c2 z2 | "_mf"c2 z2 c2 z2 | c2 c2 c2 c2 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:P1
[K:C clef=perc stafflines=1 middle=c]"_f"cccc cccc | !>!c2 !>!c2 !>!c2 z2 | "_mf"!>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:P1
[K:C clef=perc stafflines=1 middle=c]!>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc | !>!c2 zc !>!c2 zc |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P1
[K:C clef=perc stafflines=1 middle=c]"_f"!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P1
[K:C clef=perc stafflines=1 middle=c]!>!c2 c2 !>!c2 c2 | "_ff"!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:P1
[K:C clef=perc stafflines=1 middle=c]!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 z6 | "_p"c2 z6 | c2 z6 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z6 | c2 z6 | c2 z6 | c2 z6 | "_mf"c2 z6 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:P1
[K:C clef=perc stafflines=1 middle=c]c2 z6 | c2 z6 | c2 z6 | c2 z6 | c2 z6 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P1
[K:C clef=perc stafflines=1 middle=c]"^cresc."c2 c2 c2 c2 | "_f"!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:P1
[K:C clef=perc stafflines=1 middle=c]!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | "_ff"!>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 | !>!c2 c2 !>!c2 c2 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:P1
[K:C clef=perc stafflines=1 middle=c]!>!c2 c2 !>!c2 c2 | cccc cccc | !>!c2 !>!c2 !>!c2 !>!c2 | !>!c2 !fermata!z6 |]
`,
  "P2": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 P2
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:P2 name="마라카스" snm="" clef=perc stafflines=1 middle=f
%%MIDI channel 10
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:P2
[K:C clef=perc stafflines=1 middle=f]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:P2
[K:C clef=perc stafflines=1 middle=f]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P2
[K:C clef=perc stafflines=1 middle=f]"_p"f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P2
[K:C clef=perc stafflines=1 middle=f]f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:P2
[K:C clef=perc stafflines=1 middle=f]f2 f2 f2 f2 | f2 f2 f2 f2 | f2 f2 f2 f2 | "_mp"f2 f2 f2 f2 | ffff ffff |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:P2
[K:C clef=perc stafflines=1 middle=f]"_f"ffff ffff | f2 f2 f2 z2 | "_mf"ffff ffff | ffff ffff | ffff ffff |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:P2
[K:C clef=perc stafflines=1 middle=f]ffff ffff | ffff ffff | ffff ffff | ffff ffff | ffff ffff |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P2
[K:C clef=perc stafflines=1 middle=f]"_f"z2 ~f2 z4 | z8 | z2 ~f2 z4 | z8 | z2 ~f2 z4 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P2
[K:C clef=perc stafflines=1 middle=f]z8 | "_ff"z2 ~f2 z4 | z8 | z2 ~f2 z4 | z8 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:P2
[K:C clef=perc stafflines=1 middle=f]z2 ~f2 z4 | z8 | f2 z6 | "_p"f2 z2 f2 z2 | f2 z2 f2 z2 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:P2
[K:C clef=perc stafflines=1 middle=f]f2 z2 f2 z2 | f2 z2 f2 z2 | f2 z2 f2 z2 | f2 z2 f2 z2 | "_mf"f2 z2 f2 z2 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:P2
[K:C clef=perc stafflines=1 middle=f]f2 z2 f2 z2 | f2 z2 f2 z2 | f2 z2 f2 z2 | f2 z2 f2 z2 | f2 z2 f2 z2 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P2
[K:C clef=perc stafflines=1 middle=f]ffff ffff | "_f"z2 ~f2 z4 | z8 | z2 ~f2 z4 | z8 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:P2
[K:C clef=perc stafflines=1 middle=f]z2 ~f2 z4 | z8 | "_ff"z2 ~f2 z4 | z8 | z2 ~f2 z4 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:P2
[K:C clef=perc stafflines=1 middle=f]z8 | z2 ~f2 z4 | z8 | "^흔들기"~!fermata!f8 |]
`,
  "P3": `X:1
M:4/4
L:1/8
Q:1/4=96
%%score M1 P3
%%MIDI drummap c 48
%%MIDI drummap f 70
%%MIDI drummap G 36
%%barnumbers 1
%%staffsep 52
%%sysstaffsep 30
%%annotationfont Times-BoldItalic 15
K:F
%%vocal below
V:M1 name="주멜로디" snm=""
%%MIDI program 21
V:P3 name="큰북" snm="" clef=perc stafflines=1 middle=G
%%MIDI channel 10
V:M1
z8 | z8 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 |
w: 1.~천 사 들 의 노 래 가 하 늘 에 서
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]A3 G F4 | A2 A2 A2 c2 | c3 B A4 | A2 G2 A2 c2 | A3 G F4 |
w: 들 리 니 산 과 들 이 기 _ 뻐 메 아 리 쳐 울 린 다
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | F8 | [Q:1/4=100]"^전환 · accel. 점점 빠르게"F2 G2 A2 B2 | [Q:1/4=108]c4 d4 |
w: 높 이 계 신 주 님 께 * * * * * *
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble][Q:1/4=116]e8 | [Q:1/4=124].e2 .e2 .e2 z2 | [Q:1/4=132]"^2절 화려하게".A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 |
w: * * * * 2.~한 밤 중 에 목 자 들 양 떼 들 을
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | !>!G2 !>!G2 !>!G2 z2 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]A3 .G F4 | .A2 .A2 .A2 .c2 | c3 .B A4 | .A2 .G2 .A2 .c2 | A3 .G F4 |
w: 지 킬 때 아 름 다 운 노 래 가 청 아 하 게 들 린 다
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]"^후렴"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 |
w: 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신
V:P3
[K:C clef=perc stafflines=1 middle=G]"_f"!>!G2 z6 | !>!G2 z6 | !>!G2 z6 | !>!G2 z6 | !>!G2 z6 |
V:M1
[K:F clef=treble]A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P3
[K:C clef=perc stafflines=1 middle=G]!>!G2 z6 | "_ff"!>!G2 z6 | !>!G2 z6 | !>!G2 z6 | !>!G2 z6 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | [Q:1/4=112]"^rit."F8 | [Q:1/4=76]"^후렴 느리게 (서정적으로)"c4 dcBA | B4 cBAG |
w: 높 이 계 신 주 님 께 영 _ _ _ _ _ _ _ _ _
V:P3
[K:C clef=perc stafflines=1 middle=G]!>!G2 z6 | !>!G2 z6 | !>!G2 z2 !>!G2 z2 | z8 | z8 |
V:M1
[K:F clef=treble]A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 | c4 dcBA |
w: _ _ _ _ _ _ 광 을 높 이 계 신 주 께 영 _ _ _ _
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble]B4 cBAG | A4 BAGF | G3 C C4 | F2 G2 A2 B2 | A4 G4 |
w: _ _ _ _ _ _ _ _ _ _ _ 광 을 높 이 계 신 주 님
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | z8 | z8 | z8 | z8 |
V:M1
[K:F clef=treble][Q:1/4=104]"^accel."F8 | [Q:1/4=132]"^다시 빠르게!"c4 dcBA | B4 cBAG | A4 BAGF | G3 C C4 |
w: 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 광 을
V:P3
[K:C clef=perc stafflines=1 middle=G]z8 | "_f"!>!G2 z6 | !>!G2 z6 | !>!G2 z6 | !>!G2 z6 |
V:M1
[K:F clef=treble]F2 G2 A2 B2 | A4 G4 | c4 dcBA | B4 cBAG | A4 BAGF |
w: 높 이 계 신 주 께 영 _ _ _ _ _ _ _ _ _ _ _ _ _ _
V:P3
[K:C clef=perc stafflines=1 middle=G]!>!G2 z6 | !>!G2 z6 | "_ff"!>!G2 z6 | !>!G2 z6 | !>!G2 z6 |
V:M1
[K:F clef=treble]G3 C C4 | A2 B2 c2 d2 | [Q:1/4=100]"^rit."c4 e4 | [Q:1/4=69]"^Maestoso"!fermata!f8 |]
w: _ 광 을 높 이 계 신 주 님 께
V:P3
[K:C clef=perc stafflines=1 middle=G]!>!G2 z6 | !>!G2 z2 !>!G2 z2 | !>!G2 z2 !>!G2 z2 | !>!G2 !fermata!z6 |]
`,
};
