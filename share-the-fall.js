// Share The Fall by Roni Size
// script @by jimthurston

setcpm(160/4)

// intro
//note("58@5 58@3").penv("0 15").clip("2").sound("ocarina")

// bass
$: note("[<43 -> - - - - 50 - - 55 - - 50 - - 48 <43 ->]/2")
   .sound("gm_acoustic_bass")

// drums
$: s("hh!4")
   .bank("alesissr16")
   .gain("0.5 0.7 0.5 0.3")

$: s("[bd - sd - - bd - sd - bd sd - bd sd - bd]/2")
   .bank("alesissr16")

$: s("[-!22 sd!10]/2")
   .bank("alesissr16")
   .gain("0.4!2 0.6!2 0.3!2 0.2!2")
   .n("1")
   .speed("1 1 0.9 0.8 0.7")
