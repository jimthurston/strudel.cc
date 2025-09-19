// @title Six Pianos / Marimbas
// @by Steve Reich
// script by jimthurston
// https://www.youtube.com/watch?v=cbbX1f5p7Lo

samples
(
  {
    marimba:
    {
      'c2': '24 p.wav',
      'f#2': '30 p.wav',
      'c3': '36 p.wav',
      'f#3': '42 p.wav',
      'c4': '48 p.wav',
      'f#4': '54 p.wav',
      'c5': '60 p.wav',
      'f#5': '66 p.wav',
      'c6': '72 p.wav'
    },
  },
  'https://raw.githubusercontent.com/sfzinstruments/Terkelsen.Marimba/refs/heads/master/samples/'
);

/*
samples
(
  {
    marimba: ['Marimba_hit_Outrigger_C2_loud_01.wav', 'Marimba_hit_Outrigger_C4_loud_01.wav', 'Marimba_hit_Outrigger_C6_loud_01.wav'],
  }, 'https://raw.githubusercontent.com/sgossner/VCSL/refs/heads/master/Idiophones/Struck%20Idiophones/Marimba/'
);
*/
//samples('shabda:marimba:3')

setcpm(192/4)

const instrument = "marimba" //xylophone_medium_ff, marimba too quiet!
const gainMain = 0.3
const gainOthers = 0.6
const reverb = 0.3

//all(pianoroll)

// set up all the parts as arrays per player
var p1 = []
var p2 = []
var p3 = []
var p4 = []
var p5 = []
var p6 = []

p1[1] = "f#3 b3 c#4 b3 c#4 f#3 b3 c#4, - d4 e4 d4 f#4 - d4 e4"
p2[1] = "b2 e3 f#3 e3 f#3 b2 e3 f#3, - g3 a3 g3 b3 - g3 a3"
p3[1] = "d2 a3 c#3 a3 c#3 d2 a3 c#3, - d3 e3 d3 f#3 - d3 e3"
p4[1] = "-"
p5[1] = "-"
p6[1] = p1[1]

p4[2] = p5[2] = "- - - - - - c#3 -, - - - - - - f#3 -"
p4[3] = p5[3] = "- - d2 - - - c#3 -, - - - - - - f#3 -"
p4[4] = p5[4] = "- - d2 - c#3 - c#3 -, - - - - e3 - f#3 -"
p4[5] = p5[5] = "- - d2 a2 c#3 - c#3 -, - - - d3 e3 - f#3 -"
p4[6] = p5[6] = "- c#3 d2 a2 c#3 - c#3 -, - e3 - d3 e3 - f#3 -"
p4[7] = p5[7] = "- c#3 d2 a2 c#3 - c#3 d2, - e3 - d3 e3 - f#3 -"
p4[8] = p5[8] = "- c#3 d2 a2 c#3 a2 c#3 d2, - e3 - d3 e3 d3 f#3 -"
p4[9] = p5[9] = "a2 c#3 d2 a2 c#3 a2 c#3 d2, d3 e3 - d3 e3 d3 f#3 -"

// part 10 should fade

p5[11] = "-"
p6[11] = "-"
p6[12] = "- d3 c#3 d3 f#3 - d4 c#4, - - - - - - - f#3"

p5[14] = "f#3 g3 f#3 g3 f#3 f#3 g3 f#3"
p6[17] = "-"
p6[18] = "f#3 g3 a3 b3 c#4 f#3 d4 c#4"
p5[21] = "-"

p5[22] = "f#3 d4 c#4 d4 c#4 f#3 d4 c#4"
p5[23] = "- d4 c#4 d4 c#4 f#3 d4 c#4"
p5[24] = "f#3 d4 c#4 d4 c#4 f#3 d4 c#4"
p5[25] = "- d4 c#4 d4 c#4 f#3 d4 c#4"
p5[26] = "f#3 d4 c#4 d4 c#4 f#3 d4 c#4"
p5[27] = "- d4 c#4 d4 c#4 f#3 d4 c#4"


// initialise player parts
var player1 = ''
var player2 = ''
var player3 = ''
var player4 = ''
var player5 = ''
var player6 = ''

// declare which part we're on (increment this)
var currentPart = 1

// use currentPart to determine what each player is playing.  If there isn't one go back until there is
var currentPartP1 = currentPart
var currentPartP2 = currentPart
var currentPartP3 = currentPart
var currentPartP4 = currentPart
var currentPartP5 = currentPart
var currentPartP6 = currentPart

while (player1 == '')
{
  if(typeof p1[currentPartP1] !== 'undefined') 
    player1 = p1[currentPartP1]
  else if(currentPartP1 != 1)
    currentPartP1--
  else
    break
}

while (player2 == '')
{
  if(typeof p2[currentPartP2] !== 'undefined') 
    player2 = p2[currentPartP2]
  else if(currentPartP2 != 1)
    currentPartP2--
  else
    break
}

while (player3 == '')
{
  if(typeof p3[currentPartP3] !== 'undefined') 
    player3 = p3[currentPartP3]
  else if(currentPartP3 != 1)
    currentPartP3--
  else
    break
}

while (player4 == '')
{
  if(typeof p4[currentPartP4] !== 'undefined') 
    player4 = p4[currentPartP4]
  else if(currentPartP4 != 1)
    currentPartP4--
  else
    break
}

while (player5 == '')
{
  if(typeof p5[currentPartP5] !== 'undefined') 
    player5 = p5[currentPartP5]
  else if(currentPartP5 != 1)
    currentPartP5--
  else
    break
}

while (player6 == '')
{
  if(typeof p6[currentPartP6] !== 'undefined') 
    player6 = p6[currentPartP6]
  else if(currentPartP6 != 1)
    currentPartP6--
  else
    break
}

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
  .gain(gainOthers)
  .room(reverb)
  .pan(0.66)

// player 5
$: note(player5)
  .sound(instrument)
  .gain(gainOthers)
  .room(reverb)
  .pan(0.5)

// player 6
$: note(player6)
  .sound(instrument)
  .gain(gainOthers)
  .room(reverb)
  .pan(0.5)
