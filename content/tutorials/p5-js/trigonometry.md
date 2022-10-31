---
title: Trigonometry | sin(), cos(), tan()
p5js-widget: true
weight: 70
draft: false
---

# Trigonometry | sin(), cos(), tan()

---

## sin()

{{<p5js autoplay=1 width="400" height="600">}}
let y;
let angle=0;
function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  textAlign(RIGHT);
  fill(255);
}

function draw() {
  background(130,70,100);
  stroke(255);
  for(let x = 0; x < width; x++){
    y = height/2 + 100 * sin(radians(angle+x));
    point(x,y);
    if(x==width-1){
      noStroke();
      circle(x,y,10);
      text(y.toFixed(0),x-10,y);
    }
  }
  angle++;
}
{{</p5js>}}

## cos()

{{<p5js autoplay=1 width="400" height="600">}}
let y;
let cosY;
let angle=0;
function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  textAlign(RIGHT);
  fill(255);
}

function draw() {
  background(130,70,100);
  stroke(255);
  for(let x = 0; x < width; x++){
    y = height/2 + 100 * sin(radians(angle+x));
    cosY = height/2 + 100 * cos(radians(angle+x));
    stroke(255);
    point(x,y);
    stroke(255,130,0);
    point(x,cosY);
    if(x==width-1){
      noStroke();
      circle(x,y,10);
      text("sin: " + y.toFixed(0),x-10,y);
      circle(x,cosY,10);
      text("cos: " + cosY.toFixed(0),x-10,cosY);
    }
  }
  angle++;
}
{{</p5js>}}

## Drawing a circle with sin() and cos()

{{<p5js autoplay=1 width="400" height="600">}}
let sinY;
let cosX;
let angle=0;
let scaling = 150;
function setup() {
  createCanvas(400, 400);
  textAlign(RIGHT);
  fill(255);
}

function draw() {
  background(130,70,100);
  cosX = width/2 + scaling * cos(radians(angle));
  sinY = height/2 + scaling * sin(radians(angle));
  if(mouseIsPressed){
    drawDetails();
  }
  noStroke();
  fill(0);
  circle(cosX,sinY,50);
  angle++;
}

function drawDetails(){
  
  // for x axis
  push();
  for(let y = 0; y < height/2; y++){
    stroke(200,150,10);
    fill(200,150,10);
    strokeWeight(1);
    let x = width/2 + scaling * cos(radians(angle-y));
    point(x,height/2 + y);
    if(y==0){
      fill(200,150,10);
      circle(x,height/2 + y,25);
      line(x,0,x,height);
      noStroke();
      text("cos: " + x.toFixed(0),x-10,height/2 + y-10);
    }
  }
  
  // for y axis
  for(let x = 0; x < width/2; x++){
    let y = height/2 + scaling * sin(radians(angle-x));
    stroke(0);
    fill(0);
    strokeWeight(1);
    point(width/2 - x, y);
    if(x==0){
      circle(width/2 - x,y,25);
      line(0,y,width,y);
      text("sin: " + y.toFixed(0),height/2-x-10, y-10);
    }
  }
}
{{</p5js>}}