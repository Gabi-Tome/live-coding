//SICKNESSSSSSS

osc(-5, 0.9, 0.03)
.kaleid([1,2,3,4,5,6,7,8,9])
.color(-0.01)
.colorama(0.05)
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.modulate(o0, 0.9)
.out(o0)


// beginning of set for sober is sexy starter

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


//The octogon journey
bpm = 20
osc(100,-0.0124567,[0,1.5,2]).pixelate(10).kaleid(()=>(Math.sin(time/20)*2+4)).modulateRotate(shape(3).rotate(0,-0.1)).out()

//The fly vision spazzle
osc(10, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4), -20))
.color(-0.6,2.4,5)
.saturate(0.4)
.luma(1,-100, (-1, ()=> 1 + a.fft[3]))
.scale(-0.2, ()=> 2 + a.fft[3])
.diff(o0)// o0
.out(o0)// o1

//triangle butt spasm
osc(5, 0.9, -0.01)
.kaleid([3,4])
.color(0.003,-3)
.colorama(-0.5)
.rotate(0.9,()=>Math.sin(time)* 1 )
.modulateRotate(o0,()=>Math.sin(time) * 0.03)
.modulate(o0, 0.1)
.scale(0.9)
.out(o0)

//Sacred triangle time
bpm = 20
osc(100,-0.0124567,[0,1.5,2]).pixelate(10).kaleid(()=>(Math.sin(time/20)*2+4)).modulateRotate(shape(3).rotate(0,-0.1)).out()

//blue flicker slight
osc(-0.5, -0.0009, -0.03)
.kaleid([50,6,70,80,9,3,0.001])
.color(-0.01)
.colorama(0.0005)
.rotate(-0.08,()=>Math.sin(time)* -0.001 )
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


//text
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";
ctx.fillText("Bungalure", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)).out()


//====================THE MANY LIVES OF BUNGALOR=======================
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";
ctx.fillText("Bungalure", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2).kaleid([1,-0.0002,30,400,0.00004]).color(-0.01).colorama(0.0005)).out()

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "20px Arial"
ctx.fillStyle = "red";
ctx.fillText("bungalore", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "20px Arial"
ctx.fillStyle = "pink";
ctx.fillText("Gabi makes things", 10, 140)
s0.init({ src: myCanvas, dynamic: false })
src(s0).diff(osc(2, 1, 10,3,4)).out()

//BUNGALORE BUNGALORE THE BUNGUS GUNG
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";
ctx.shadowColor = "red";
ctx.shadowOffsetX = 1000;
ctx.shadowOffsetY = 10;
ctx.fillRect(20, 20, 100, 100);
ctx.fillText("Buuuuuuuuubuuuuuuuu", 10, 50)

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-0.0002,30,400,0.00004])
.color(-0.01)
.colorama(0.0005))
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()




//saspmic bungalor
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "20px Arial"
ctx.fillStyle = "red";
ctx.fillText("bungalore", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-2,30,400,0.00004])
.color(-0.01)
.colorama(()=>Math.sin(time), 0.01 ),1,2,-0.0003)
.rotate(()=>Math.sin(time) * -0.03,()=>Math.sin(time)* -.0001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()

//BUNGALORE
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "20px Arial"
ctx.fillStyle = "red";
ctx.fillText("bungalore", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-2,30,400,0.00004])
.color(-0.01)
.colorama(()=>Math.sin(time), 0.01 ),1,2,-0.0003)
.rotate(()=>Math.sin(time) * -0.03,()=>Math.sin(time)* -.0001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()

// quiero un boligrafo

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";

ctx.fillText("Bungalure", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-0.0002,30,400,0.00004])
.color(-0.01)
.colorama(0.0005))
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()


//============= the big beautiful bundle butt ======================
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";
ctx.fillText("quiero un boligrafo", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-2,30,400,0.00004])
.color(-0.01)
.colorama(-500))
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "red";
ctx.fillText("quiero un boligrafo", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-2,30,400,0.00004])
.color(-0.01)
.colorama(-30))
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.fillStyle = "red";
ctx.fillText("quiero un boligrafo", 10, 50)
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(10, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4), -20))
.color(-0.01)
.colorama(-30,2))
.luma(1,100, (-1, ()=> 1 + a.fft[3]))
.rotate(0.001,()=>Math.sin(time)* -0.0001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.3)
.scale(-0.2, ()=> 2 + a.fft[3])
.out()


//rainbow black hole kingdom
myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "20px Arial"
ctx.fillStyle = "red";
ctx.fillText("bungalor", 10, 50)   

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-2,30,400,0.00004])
.color(-0.01)
.colorama(()=>Math.sin(time) * 200))
.rotate(()=>Math.sin(time) * -0.03,()=>Math.sin(time)* -.0001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()


//things for the television

myCanvas = document.createElement('canvas')
ctx = myCanvas.getContext('2d')
ctx.font = "30px Arial"
ctx.fillStyle = "white";
ctx.shadowColor = "white";
ctx.shadowOffsetX = 1000;
ctx.shadowOffsetY = 10;
ctx.fillRect(20, 20, 100, 100);
ctx.fillText("quiero", 10, 50)

s0.init({ src: myCanvas, dynamic: false })

src(s0).diff(osc(2, 0.1, 1.2)
.kaleid([1,-0.0002,30,400,0.00004])
.color(-0.01)
.colorama(0.0005))
.rotate(8,()=>Math.sin(time)* -0.00001 )
.modulateRotate(o0,()=>Math.sin(time) * 3)
.out()