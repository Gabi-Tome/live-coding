//sicknesssssssssss

osc(-5, 0.09, 0.03)
.kaleid([1,2,3,4,5,6,7,8,9])
.color(-0.01)
.colorama(0.05)
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, 0.9)
.out(o0)


//black hole

osc(5, 0.9, -0.01)
.kaleid([3,4,5,6,7,8,9])
.color(0.3)
.colorama(-0.5)
.rotate(0.09,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * -3)
.modulate(o0, 0.09)
.scale(0.9)
.out(o0)
