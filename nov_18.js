// beginning of set for sober is sexy starter

bpm = 120
osc(100,-0.01245,[0,1.5]).pixelate(10).kaleid(()=>(Math.sin(time/2)*2+4)).modulateRotate(shape(3).rotate(0,1)).out()

osc(5, 0.9, -0.01)
.kaleid([3,4,5,6,7,8,9])
.color(0.3)
.colorama(-0.5)
.rotate(0.09,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * -3)
.modulate(o0, 0.09)
.scale(0.9)
.out(o0)


osc(-5, 0.9, 0.3)
.kaleid([3,4,5,6,7,8,9])
.color(0.1)
.colorama(-0.5)
.rotate(0.009,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, 0.9)
.scale(0.9)
.out(o0)


// end of set


osc(5, 0.9, -0.01)
.kaleid([3,4,5,6,7,8,9])
.color(0.3)
.colorama(-0.5)
.rotate(0.09,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * -3)
.modulate(o0, 0.09)
.scale(0.9)
.out(o0)

osc(-10, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(0.2).rotate(4,1), 20))
.color(1,-2.4,5)
.saturate(0.4)
.luma(10,0.7, (9, ()=> 1 + a.fft[3]))
.scale(-0.07, ()=> 0.007 + a.fft[3])
.diff(o0)
.out(o0)

osc(-5, 0.9, 0.03)
.kaleid([1,2,3,4,5,6,7,8,9])
.color(-0.01)
.colorama(0.05)
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, 0.9)
.out(o0)

bpm = 20
osc(100,-0.0124567,[0,1.5,2]).pixelate(10).kaleid(()=>(Math.sin(time/20)*2+4)).modulateRotate(shape(3).rotate(0,-0.1)).out()


osc(10, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4), -20))
.color(-0.6,2.4,5)
.saturate(0.4)
.luma(1,-100, (-1, ()=> 1 + a.fft[3]))
.scale(-0.2, ()=> 2 + a.fft[3])
.diff(o0)// o0
.out(o0)// o1

osc(5, 0.9, -0.01)
.kaleid([3,4])
.color(0.003,-3)
.colorama(-0.5)
.rotate(0.9,()=>Math.sin(time)* 1 )
.modulateRotate(o0,()=>Math.sin(time) * 0.03)
.modulate(o0, 0.1)
.scale(0.9)
.out(o0)


bpm = 20
osc(100,-0.0124567,[0,1.5,2]).pixelate(10).kaleid(()=>(Math.sin(time/20)*2+4)).modulateRotate(shape(3).rotate(0,-0.1)).out()


osc(-5, 0.9, 0.03)
.kaleid([1,2,3,4,5,6,7,8,9])
.color(-0.01)
.colorama(0.05)
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, 0.9)
.out(o0)

osc(-0.5, -0.0009, -0.03)
.kaleid([50,60,70,80,90])
.color(-0.001)
.colorama(0.05)
.rotate(-0.08,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, -0.9)
.out(o0)

osc(-0.5, -0.0009, -0.03)
.kaleid([50,6,70,80,9,3,0.001])
.color(-0.01)
.colorama(0.0005)
.rotate(-0.08,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, -0.9)
.out(o0)

osc(-0.5, -0.0009, -0.03)
.kaleid([50,60,70,80,90])
l.color(-0.001)
.colorama(0.05)
.rotate(-0.08,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, -0.9)
.out(o0)

osc(-5, 0.9, 0.03)
.kaleid([1,-0.0002,30,400,0.00004])
.color(-0.01)
.colorama(0.005)
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, 0.9)
.out(o0)



