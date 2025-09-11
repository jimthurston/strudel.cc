// @title Six Pianos / Marimbas
// @by Steve Reich
// script by jimthurston
// https://www.youtube.com/watch?v=cbbX1f5p7Lo

setcpm(192/4)

/* instruments
marimba
xylophone_soft_ff
xylophone_medium_ff
*/


// player 1
$: note("f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4").sound("xylophone_soft_ff").gain(0.5).room(.2)

// player 2
$: note("b2 e3 f#3 e3 f#3 b2 e3 f#3, - g3 a3 g3 b3 - g3 a3").sound("xylophone_soft_ff").gain(0.5).room(.2)

// player 3
$: note("d2 a3 c#3 a3 c#3 d2 a3 c#3, - d3 e3 d3 f#3 - d3 e3").sound("xylophone_soft_ff").gain(0.5).room(.2)

// player 4
$: note("-")

// player 5
$: note("-")

// player 6
$: note("f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4").sound("xylophone_soft_ff").gain(0.5).room(.2)
