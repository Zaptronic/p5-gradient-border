function setup(){canvas=createCanvas(1500,800),colorMode(RGB),colorani=100,colorSetterA=color(colorani,200,0),colorSetterB=color(0,100,200),colorSetterC=color(200,0,200)}function draw(){background(240),stroke(255),colorani+=1*direction,(colorani>=255||colorani<=0)&&(direction*=-1),colorSetterA=color(colorani,200,0),colorSetterB=color(0,colorani,colorani+100),colorSetterC=color(200,0,200);var t=gradientrect(100,100,200,200,{border:24}),o=gradientrect(canvas.width/2,canvas.height/2,300,300,{border:borderThickness,rectMode:"CENTER"}),r=gradientrect(1050,400,300,300,{border:30,rectMode:"CENTER"})}function gradientrect(t,o,r,i,e){push(),this.ctx=canvas.drawingContext,this.x=t,this.y=o,this.width=r,this.height=i||this.width,this.options=e||{},blendMode(MULTIPLY),translate(this.x,this.y),rotate(PI/4),this.options.border?this.border=this.options.border:this.border=10,"CENTER"==this.options.rectMode&&translate(this.width/2*-1,this.height/2*-1),this.ctx.lineWidth=this.border,this.gradient=this.ctx.createLinearGradient(0,0,this.width,this.width),this.gradient.addColorStop(0,colorSetterA),this.gradient.addColorStop(.5,colorSetterB),this.gradient.addColorStop(1,colorSetterC),this.ctx.strokeStyle=this.gradient,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.width,0),this.ctx.lineTo(this.width,this.height),this.ctx.lineTo(0,this.height),this.ctx.closePath(),this.ctx.stroke(),pop()}var colorSetterA,colorSetterB,colorSetterC,colorani,borderThickness=50,rectSize=400,direction=1,canvas,ctx;