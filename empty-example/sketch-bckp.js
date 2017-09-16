// var colorSetterA = color(100, 200, 0);
// var colorSetterB = color(0, 100, 200);
var colorSetterA, colorSetterB;
var a, b, c;
var borderThickness = 40;
var rectSize = 400;
var direction = 1;
var canvas;
var ctx;

function setup() {
    canvas = createCanvas(1200,600);
    ctx = canvas.drawingContext;
    colorMode(RGB);
    colorani = 100;
    colorSetterA = color(colorani, 200, 0);
    colorSetterB = color(0, 100, 200);
    colorSetterC = color(200, 0, 200);
    calculate();
}

function draw() {
    background(255);
    stroke(255);

    colorani = colorani + 1 * direction;
    if (colorani >= 255 || colorani <= 0) {
        direction = direction * -1;
    }

    colorSetterA = color(colorani, 200, 0);
    colorSetterB = color(0, colorani, colorani + 100);
    colorSetterC = color(200, 0, 200);


    // var gradient = ctx.createLinearGradient(0,0,100,0);
    // ctx.fillStyle = gradient;
    // gradient.addColorStop(0, colorSetterA);
    // gradient.addColorStop(1, colorSetterB);
    // rect(0,0,100,100);


    push();
    translate(200,0);
    rotate(PI/4);
    ctx.lineWidth = borderThickness;
    // linear gradient from start to end of line
    var gradient = ctx.createLinearGradient(50, 50, 300, 300);
    gradient.addColorStop(0, colorSetterA);
    gradient.addColorStop(0.5, colorSetterB);
    gradient.addColorStop(1, colorSetterC);

    ctx.strokeStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(300,100);
    ctx.lineTo(300,300);
    ctx.lineTo(100,300);
    ctx.closePath();
    ctx.stroke();
    pop();


    // strokeWeight(borderThickness);
    //
    // for(var i = 0; i < 200; i++) {
    //     if(i <= 100) {
    //         var inter = map(i, 0, 100, 0, 1);
    //         var c = lerpColor(colorSetterA, colorSetterB, inter);
    //         stroke(c);
    //         line(width/2-i, 30+i, width/2+i, 30+i);
    //         // line(10, 10+i, 150-i, 10+i);
    //     } else {
    //         var inter = map(i, 100, 200, 0, 1);
    //         var colorSetterC = color(200, 0, 200);
    //         var c = lerpColor(colorSetterB, colorSetterC, inter);
    //         stroke(c);
    //         line(width/2 - (200 - i), 30+i, width/2 + (200 - i), 30+i);
    //     }
    // }

    // strokeWeight(1);
    for(var i = 0; i < rectSize; i++) {
        if (c > rectSize / 2) {
            c = rectSize/2;
        }
        if(i <= c) {
            var inter = map(i, 0, rectSize/2, 0, 1);
            var colorCalc = lerpColor(colorSetterA, colorSetterB, inter);
            stroke(colorCalc);
            line(width/2-i, 30+i, width/2+i, 30+i);
            // line(10, 10+i, 150-i, 10+i);
        } else if (i <= rectSize/2) {
            var inter = map(i, 0, rectSize/2, 0, 1);
            var colorCalc = lerpColor(colorSetterA, colorSetterB, inter);
            stroke(colorCalc);
            line(width/2-i, 30+i, (width/2-i) + c, 30+i);
            line((width/2+i) - c, 30+i, width/2+i, 30+i);
        } else if (i > rectSize/2 && i < (rectSize - c)) {
            var inter = map(i, rectSize/2, rectSize, 0, 1);
            var colorCalc = lerpColor(colorSetterB, colorSetterC, inter);
            stroke(colorCalc);
            line(width/2 - (rectSize - i), 30+i, width/2 - (rectSize - i) + c, 30+i);
            line(width/2 + (rectSize - i) - c, 30+i, width/2 + (rectSize - i), 30+i);
        } else {
            var inter = map(i, rectSize/2, rectSize, 0, 1);
            var colorCalc = lerpColor(colorSetterB, colorSetterC, inter);
            stroke(colorCalc);
            line(width/2 - (rectSize - i), 30+i, width/2 + (rectSize - i), 30+i);
        }
    }
}

function calculate() {
    a = borderThickness;
    b = borderThickness;
    c = Math.sqrt(a * a + b * b);
    displayResult(a,b,c);
}

function displayResult(a, b, c) {
    c = floor(c);
    console.log(c);
    fill(255);
    noStroke();
    text("Triangle: a = " + a + ", b = " + b + ". c = " + c, 10, 20);
    return c;
}
