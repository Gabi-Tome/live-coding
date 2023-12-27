// set for band blender starter

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


// <div style="position: relative; padding-bottom: 48.645833333333336%; height: 0;"><iframe src="https://www.loom.com/embed/3c86bc057a5e4aa296d0b73c29521cbf?sid=c698fe6a-bd35-4cc7-85c4-77b0121a90a6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>