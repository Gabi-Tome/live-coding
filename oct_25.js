//variation 6
osc(5, 0.9, 0.3)
.kaleid([3,4,5,6,7,8,9])
.color(0.3)
.colorama(-0.5)
.rotate(0.009,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, 0.9)
.scale(0.9)
.out(o0)

// variation 7

osc(5, 0.9, 0.3)
.kaleid([3,4,5,6,7,8,9])
.color(0.3,0.02)
.colorama(-0.05)
.rotate(0.009,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.02)
.modulate(o0, 0.9)
.scale(0.9)
.out(o0)

//variation 8

osc(5, 0.9, 0.3)
    .kaleid([3,4,5,6,7,8,9])
    .color(0.3,0.02)
    .colorama(-0.05)
    .rotate(9,()=>Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 0.02)
    .modulate(o0, 0.09)
    .scale(0.09)
    .out(o0)


// variation 9

osc(5, 0.9, 0.3)
.kaleid([3,4,5,6,7,8,9])
.color(0.3)
.colorama(-0.5)
.rotate(0.09,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, -.091)
.scale(0.9)
.out(o0)