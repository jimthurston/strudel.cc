// @title Six Pianos / Marimbas
// @by Steve Reich
// script by jimthurston
// https://www.youtube.com/watch?v=cbbX1f5p7Lo

setcpm(192/4)

const instrument = "xylophone_soft_ff" //xylophone_medium_ff, marimba too quiet!
const gainMain = 0.5
const gainOthers = 1.5
const reverb = 0.2

//all(pianoroll)

let players1236 =
`
f#3  b3   c#4  b3   c#4  f#3  b3   c#4,
-    d4   e4   d4   f#4  -    d4   e4,
b2   e3   f#3  e3   f#3  b2   e3   f#3,
-    g3   a3   g3   b3   -    g3   a3,
d2   a3   c#3  a3   c#3  d2   a3   c#3,
-    d3   e3   d3   f#3  -    d3   e3,
f#3  b3   c#4  b3   c#4  f#3  b3   c#4,
-    d4   e4   d4   f#4  -    d4   e4
`

let players45 = "-"
//players45 = "- - - - - - c#3 -, - - - - - - f#3 -"
//players45 = " - - d2 - - - c#3 -, - - - - - - f#3 -"
//players45 = " - - d2 - c#3 - c#3 -, - - - - e3 - f#3 -"
//players45 = " - - d2 a2 c#3 - c#3 -, - - - d3 e3 - f#3 -"
//players45 = " - c#3 d2 a2 c#3 - c#3 -, - e3 - d3 e3 - f#3 -"
//players45 = " - c#3 d2 a2 c#3 - c#3 d2, - e3 - d3 e3 - f#3 -"
//players45 = " - c#3 d2 a2 c#3 a2 c#3 d2, - e3 - d3 e3 d3 f#3 -"
//players45 = " a2 c#3 d2 a2 c#3 a2 c#3 d2, d3 e3 - d3 e3 d3 f#3 -"


// players 1, 2, 3, 6
$: note(players1236)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0.5)

// players 4 & 5 (start) - uncomment to bring each part in
$: note(players45)
  .sound(instrument)
  .gain(gainOthers)
  .room(reverb)
