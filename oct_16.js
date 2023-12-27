
//osc: third parameter changes color
//kaleid(()=>Math.sin(time/100)*2+3)) : 100 changes the velocity of the spin of the kaleidescope
//kaleid(()=>Math.sin(time/100)*2+3)) : 3 changes the number of sides of the shape. 

osc(100,-0.01245,8).pixelate(10).kaleid(()=>(Math.sin(time/100)*2+3))
.modulateRotate(shape(4).rotate(0,-0.25)).out()

// variation 1

osc(100,-0.01245,3).pixelate(10).kaleid(()=>(Math.sin(time/2)*2+4))
.modulateRotate(shape(3).rotate(0,1)).out()

//variation 2

osc(100,-0.01245,2).pixelate(7).kaleid(()=>(Math.sin(time/2)*2+4))
.modulateRotate(shape(2).rotate(0,-2)).out()


// variation 3

osc(100,-0.05,4).pixelate(34).kaleid(()=>(Math.sin(time/2)*2+3)).modulateRotate(shape(4).rotate(0,-0.2)).out()

//variation 4

osc(10,-0.0025,4).pixelate(4).kaleid(()=>(Math.sin(time/2)*2+3)).modulateRotate(shape(4).rotate(0,-0.2)).out()


// cute last minute sky!
voronoi(200,1,5).out(o0)