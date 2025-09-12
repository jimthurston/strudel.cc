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

// set up all the parts as arrays per player
var p1 = []
var p2 = []
var p3 = []
var p4 = []
var p5 = []
var p6 = []

p1[1] = p6[1] = "f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4"
p2[1] = "b2 e3 f#3 e3 f#3 b2 e3 f#3, - g3 a3 g3 b3 - g3 a3"
p3[1] = "d2 a3 c#3 a3 c#3 d2 a3 c#3, - d3 e3 d3 f#3 - d3 e3"
p4[1] = p5[1] = "-"

p4[2] = p5[2] = "- - - - - - c#3 -, - - - - - - f#3 -"

p4[3] = p5[3] = " - - d2 - - - c#3 -, - - - - - - f#3 -"
p4[4] = p5[4] = " - - d2 - c#3 - c#3 -, - - - - e3 - f#3 -"
p4[5] = p5[5] = " - - d2 a2 c#3 - c#3 -, - - - d3 e3 - f#3 -"
p4[6] = p5[6] = " - c#3 d2 a2 c#3 - c#3 -, - e3 - d3 e3 - f#3 -"
p4[7] = p5[7] = " - c#3 d2 a2 c#3 - c#3 d2, - e3 - d3 e3 - f#3 -"
p4[8] = p5[8] = " - c#3 d2 a2 c#3 a2 c#3 d2, - e3 - d3 e3 d3 f#3 -"
p4[9] = p5[9] = " a2 c#3 d2 a2 c#3 a2 c#3 d2, d3 e3 - d3 e3 d3 f#3 -"

p6[10] = "- d3 c#3 d3 f#3 - f#4 e4, - - - - - - - f#4"

// set the initial part for all players
var player1 = p1[1]
var player2 = p2[1]
var player3 = p3[1]
var player4 = p4[1]
var player5 = p5[1]
var player6 = p6[1]


// declare which part we're on
var currentPart = 1
currentPart = 2
currentPart = 3
currentPart = 4
currentPart = 5
currentPart = 6
currentPart = 7
currentPart = 8
currentPart = 9
currentPart = 10

// use currentPart to determine what each player is playing.  If there isn't one don't change it for this player
if(typeof p1[currentPart] !== 'undefined') 
  player1 = p1[currentPart]

if(typeof p2[currentPart] !== 'undefined') 
  player2 = p2[currentPart]

if(typeof p3[currentPart] !== 'undefined') 
  player3 = p3[currentPart]

if(typeof p4[currentPart] !== 'undefined') 
  player4 = p4[currentPart]

if(typeof p5[currentPart] !== 'undefined') 
  player5 = p5[currentPart]

if(typeof p6[currentPart] !== 'undefined') 
  player6 = p6[currentPart]


// play the notes

// player 1
$: note(player1)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0)

// player 2
$: note(player2)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(1)

// player 3
$: note(player3)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0.33)

// player 4
$: note(player4)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0.66)

// player 5
$: note(player5)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0.5)

// player 6
$: note(player6)
  .sound(instrument)
  .gain(gainMain)
  .room(reverb)
  .pan(0.5)
