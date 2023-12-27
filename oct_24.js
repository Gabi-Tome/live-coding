
//this did not work. tried to share browser/collaborate
pb.setName("BandBlender")
s0.initStream("BandBlender")
src(s0).out()

// variation 1
osc(100,-0.01245,3).pixelate(10).kaleid(()=>(Math.sin(time/2)*2+4))
.modulateRotate(shape(3).rotate(0,1)).out()


//WHY IS NO WORK!?????
bpm = 115
osc(100,-0.01245,[0,1.5]).pixelate(10).kaleid(()=>(Math.sin(time/2)*2+4)).modulateRotate(shape(3).rotate(0,1)).out()

//WHY DOES THIS WORK???
bpm = 15
osc(60,0.1,[0,1.5]).out(o0)

bpm = 15
osc(100,-0.01245,[0,1.5]).out(o0)


//---------------- cool bpm bebes ------------\\

//variation 1 (TRINGLZ)

bpm = 60
osc(100,-0.01245,[0,1.5]).pixelate(10).kaleid(()=>(Math.sin(time/2)*2+4)).modulateRotate(shape(3).rotate(0,1)).out()

// variation 2 

bpm = 60
osc(100,-0.01245,[0,1.5]).pixelate(7).kaleid(()=>(Math.sin(time/2)*2+4))
.modulateRotate(shape(2).rotate(0,-2)).out()

// variation 3

bpm = 60
osc(100,-0.05,[0,1.5]).pixelate(34).kaleid(()=>(Math.sin(time/2)*2+3)).modulateRotate(shape(4).rotate(0,-0.2)).out()


//variation 4

bpm = 60
osc(10,-0.0025,[0,1.5]).pixelate(4).kaleid(()=>(Math.sin(time/2)*2+3)).modulateRotate(shape(4).rotate(0,-0.2)).out()



//varaition 5
bpm = 60

osc(5, 0.9, [1,0.1,1])
    .kaleid([3,4])
    .color(2.5, 0.3)
    .colorama(0.4)
    .rotate(0.009,()=>Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 0.003)
    .modulate(o0, 0.9)
    .scale(0.9)
    .out(o0)




