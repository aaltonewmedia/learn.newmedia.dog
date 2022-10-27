---
title: noise()
p5js-widget: true
weight: 70
draft: false
---

# noise()

---

You have already used the random() function in your code, but there is another way to make something move or get drawn in an unpredictable way that is not quite as jumpy as the random.

## Random

If you pick 100 random values one after the other, there will be no relation to to the values before and after each number. They are random.

{{<p5js autoplay=1 width="500" height="300">}}
function setup(){
  createCanvas(500,200);
  background(0);
  noFill();
  stroke(255);
  let cellSize = 5;
  let xAmount = width/cellSize;
  
  beginShape();
  for(let x=0;x<xAmount;x++){
    let y = random(height);
    vertex(x*cellSize, y);
		ellipse(x*cellSize, y,2,2);
  }
  endShape();
  noLoop();
}
{{</p5js>}}

Random values used as the fill() color of rectangles. The result looks (and is) like white noise.

{{<p5js autoplay=1 width="500" height="300">}}
function setup(){
  createCanvas(500,200);
  background(0);
  noStroke();
  let cellSize = 5;
  let xAmount = width/cellSize;
  let yAmount = height/cellSize;
  for(let x=0;x<xAmount;x++){
    for(let y=0;y<yAmount;y++){
      fill(random(255));
      rect(x*cellSize,y*cellSize,cellSize,cellSize);
    }
  }
  noLoop();
}
{{</p5js>}}

If you use random values as the x and y coordinates for drawing something, the result is very… well… random.

{{<p5js autoplay=1 width="500" height="500">}}
function setup() {
  createCanvas(500,500);
  background(0);
  noStroke();
  fill(255);
}

function draw() {
  background(0);
  let x = random(width);
  let y = random(height);
  ellipse(x, y, 20, 20);
}
{{</p5js>}}


- With random(), you set the minimum and maximum values as the parameters when calling the function
- The function returns a random value between the min and max

## Noise

{{<p5js autoplay=1 width="500" height="300">}}
function setup(){
  createCanvas(500,200);
  background(0);
  noFill();
  stroke(255);
  let cellSize = 5;
  let xAmount = width/cellSize;
  let xoff=0.0;
  beginShape();
  for(let x=0;x<xAmount;x++){
    let y = noise(xoff)*height;
    xoff = xoff + 0.05;
    vertex(x*cellSize, y);
    ellipse(x*cellSize, y,2,2);
  }
  endShape();
  noLoop();
}
{{</p5js>}}

{{<p5js autoplay=1 width="500" height="300">}}
function setup(){
  createCanvas(500,200);
  background(0);
  noStroke();
  let cellSize = 5;
  let xAmount = width/cellSize;
  let yAmount = height/cellSize; 
  for(let x=0;x<xAmount;x++){
    for(let y=0;y<yAmount;y++){
      fill(noise(x/10.0,y/10.0)*255);
      rect(x*cellSize,y*cellSize,cellSize,cellSize);
    }
  }
  noLoop();
}
{{</p5js>}}

{{<p5js autoplay=1 width="500" height="500">}}
let xoff;
let yoff;
let increment = 0.01; //this is basically the speed

function setup() {
	createCanvas(500,500);
	background(0);
	noStroke();
	fill(255);
	//randomize the starting position
	xoff= random(1000.0);
	yoff= random(1000.0);
}

function draw() {
	background(0);
	let x = noise(xoff) * width;
	let y = noise(yoff) * height;
	
	xoff = xoff + increment;
	yoff = yoff + increment;
	
	ellipse(x, y, 20, 20);
}
{{</p5js>}}

- The noise() function in p5.js is based on [Perlin](https://en.wikipedia.org/wiki/Perlin_noise) noise
- When you call the noise() function, it returns a value between 0.0-1.0 (so in most cases you need to scale the value somehow)
- You can think of the parameter/parameters for noise as coordinates for moving in a cloud of noise values.
- Each value is only slightly different from the value next to it, which creates a smooth transition between the values

## 2D noise

coming soon...

## noiseDetail()

coming soon...
