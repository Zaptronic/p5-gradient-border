var colorSetterA, colorSetterB, colorSetterC, colorani;
var borderThickness = 50;
var rectSize = 400;
var direction = 1;
var canvas, ctx;

function setup() {
    canvas = createCanvas(1500,800);
    // ctx = canvas.drawingContext;
    colorMode(RGB);
    colorani = 100;
    colorSetterA = color(colorani, 200, 0);
    colorSetterB = color(0, 100, 200);
    colorSetterC = color(200, 0, 200);
}

function draw() {
    background(240);
    stroke(255);

    colorani = colorani + 1 * direction;
    if (colorani >= 255 || colorani <= 0) {
        direction = direction * -1;
    }

    colorSetterA = color(colorani, 200, 0);
    colorSetterB = color(0, colorani, colorani + 100);
    colorSetterC = color(200, 0, 200);

    var gr1 = gradientrect(100, 100, 200, 200, {border: 24});

    var gr2 = gradientrect(canvas.width/2, canvas.height/2, 300, 300, {border: borderThickness, rectMode: "CENTER"});

    var gr3 = gradientrect(1050, 400, 300, 300, {border: 30, rectMode: "CENTER"});
}

function gradientrect(x, y, rectWidth, height, options) {
    push();
    //needs a canvas variable;
    this.ctx = canvas.drawingContext;
    this.x = x;
    this.y = y;
    this.width = rectWidth;
    this.height = height || this.width;
    this.options = options || {};

    blendMode(MULTIPLY);
    translate(this.x,this.y);
    rotate(PI/4);
    if (this.options.border) {
        this.border = this.options.border;
    } else {
        this.border = 10;
    }
    if (this.options.rectMode == "CENTER") {
        translate(this.width/2 * -1, this.height/2 * -1);
    }

    this.ctx.lineWidth = this.border;
    this.gradient = this.ctx.createLinearGradient(0, 0, this.width, this.width);
    this.gradient.addColorStop(0, colorSetterA);
    this.gradient.addColorStop(0.5, colorSetterB);
    this.gradient.addColorStop(1, colorSetterC);

    this.ctx.strokeStyle = this.gradient;
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(this.width,0);
    this.ctx.lineTo(this.width,this.height);
    this.ctx.lineTo(0,this.height);
    this.ctx.closePath();
    this.ctx.stroke();
    pop();
}
