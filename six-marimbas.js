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

const instrument = "xylophone_soft_ff"
const gainMain = 0.5
const gainOthers = 1.5
const reverb = 0.2

// player 1
$: note("f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4").sound(instrument).gain(gainMain).room(reverb).pan(0.3)

// player 2
$: note("b2 e3 f#3 e3 f#3 b2 e3 f#3, - g3 a3 g3 b3 - g3 a3").sound(instrument).gain(gainMain).room(reverb).pan(0.4)

// player 3
$: note("d2 a3 c#3 a3 c#3 d2 a3 c#3, - d3 e3 d3 f#3 - d3 e3").sound(instrument).gain(gainMain).room(reverb).pan(0.6)

// players 4 & 5 (start) - uncomment to bring in
$: note("- - - - - - c#3 -, - - - - - - f#3 -").sound(instrument).gain(gainOthers).room(reverb)
$: note("- - d2 - - - - -, - - - - - - - -").sound(instrument).gain(gainOthers).room(reverb)
$: note("- - - - c#3 - - -, - - - - e3 - - -").sound(instrument).gain(gainOthers).room(reverb)
$: note("- - - a2 - - - -, - - - d3 - - - -").sound(instrument).gain(gainOthers).room(reverb)
$: note("- c#3 - - - - - -, - e3 - - - - - -").sound(instrument).gain(gainOthers).room(reverb)

// player 4

// player 5

// player 6 (same as player 1 to start)
$: note("f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4").sound(instrument).gain(gainMain).room(reverb).pan(0.7)
