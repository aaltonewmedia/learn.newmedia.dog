---
title: "Tips & Tricks: modulo + frameCount"
bookCollapseSection: false
p5js-widget: true
draft: false
---

# How to animate and time things with the modulo operator (%) and frameCount

---

You might often find yourself in a situation where you need to make things happen at certain intervals or after a certain amount of time. One very handy way to do that is by using frameCount and % (modulo).

The system variable frameCount contains the number of frames that have passed since the program started. If your frame rate is 60, each second will contain 60 frames. How is this useful for us?

There are countless ways you can use the frameCount, and I will explain here a couple of the most useful things you can do. There is just one additional thing we need to understand: the modulo operator (%).

## % (modulo)

The modulo operator is used to calculate the remainder when one number is divided by another. For example, take the following:

```js
5 % 2
```

Here 5 is the dividend (number being divided) and 2 is the divisor. In order to figure out the remainder, we can imagine it as a two step process:

- How many times does 2 go into 5? Answer: 2 times.
- How much is left over? Answer: 1

The answer to the second step is the remainder, so 5 % 2 = 1

## Using modulo with frameCount

If we use the modulo operator together with the frameCount, we can setup things that happen every x frames. For example, let’s say we want to make something happen each second, which should be every 60th frame if the frame rate stays steady. In your code you can do:

```js
frameCount % 60
```

{{<p5js autoplay="1" width="300" height="400">}}
function setup() {
	createCanvas(300, 300);
	frameRate(60);
	background(130,60,80);
	textSize(16);
  fill(255);
}

function draw() {
	background(130,60,80);
	text("Frame Rate: " + round(getFrameRate()),20,60);
	text("Current Frame: " + frameCount, 20,80);
	text("frameCount % 60: " + frameCount%60, 20,100);
}
{{</p5js>}}

What this will give you as you can see from the sketch above, is a counter that starts from 1 (on the 1st frame), counts up to 59, and then goes to 0 (on frame 60). Why is this? If we go through the loop:

```
On each frame we ask the program to do: frameCount % 60
What does it look like on each frame?

1st frame: 1 % 60 --> How many times 60 fits into 1? 0 times and remainder is 1
2nd frame: 2 % 60 --> How many times 60 fits into 2? 0 times and remainder is 2
3rd frame: 3 % 60 --> How many times 60 fits into 3? 0 times and remainder is 3
...
59th frame: 59 % 60 --> How many times 60 fits into 59? 0 times and remainder is 59
60th frame: 60 % 60 --> How many times 60 fits into 60? 1 times and remainder is 0
61st frame: 61 % 60 --> How many times 60 fits into 61? 1 times and remainder is 1
...
119th frame: 119 % 60 --> How many times 60 fits into 119? 1 times and remainder is 59
120th frame: 120 % 60 --> How many times 60 fits into 120? 2 times and remainder is 0
121st frame: 121 % 60 --> How many times 60 fits into 121? 2 times and remainder is 1
...
```

Here is a slowed down version of the sketch above:

{{<p5js autoplay="1" width="300" height="400">}}
function setup() {
  createCanvas(300, 300);
  frameRate(2);
  background(130,60,80);
  textSize(16);
  fill(255);
}

function draw() {
  background(130,60,80);
  text("Frame Rate: " + round(getFrameRate()),20,60);
  text("Current Frame: " + frameCount, 20,80);
	text("frameCount % 60: " + frameCount%60, 20,100);
}
{{</p5js>}}

It appears that every 60th frame we get 0 as the remainder. So in your code you can have an if statement:

```js
if (frameCount % 60 == 0){
   // do something every 60th frame
}
```

{{<p5js autoplay="1" width="300" height="400">}}
let sColor;

function setup() {
  createCanvas(300, 300);
  frameRate(60);
  background(130,60,80);
  textSize(16);
  noFill();
  strokeWeight(10);
  sColor = color(255);
}

function draw() {
  background(130,60,80);
  fill(255);
  noStroke();
  text("Frame Rate: " + round(getFrameRate()),20,60);
  text("Current Frame: " + frameCount, 20,80);
  text("frameCount % 60: " + frameCount%60, 20,100);
  text("Stroke color is randomized\nevery 60th frame.",20,140);

  if (frameCount%60==0){
    // do something every 60th frame
    sColor = color( random(255),random(255),random(255) );
  }
  noFill();
  stroke(sColor);
  circle(40,200,40);
}
{{</p5js>}}

By changing the divisor, you can set different time intervals:

```js
if (frameCount % 2 == 0){ 
    // do something every 2nd frame 
}

if (frameCount % 600 == 0){ 
 // do something every 600th frame (10 seconds if your frame rate is 60)
}
```

You can also use the modulo and frameCount to setup other animated things for your program. Like cycling through colors. Here the colorMode has been set to HSB and the max values for each are (hue:360, saturation:100, brightness:100)

{{<p5js autoplay="1" width="300" height="400">}}
let sColor;

function setup() {
  createCanvas(300, 300);
  frameRate(60);
  background(130,60,80);
  textSize(16);
  noFill();
  strokeWeight(10);
  sColor = color(255);
}

function draw() {
  // set the color mode to RGB
  colorMode(RGB,255,255,255);
  background(130,60,80);
  fill(255);
  noStroke();
  text("Frame Rate: " + round(getFrameRate()),20,60);
  text("Current Frame: " + frameCount, 20,80);
  text("frameCount % 60: " + frameCount%60, 20,100);
  text("Stroke color cycles through\nall the hue values",20,120);
	text("H:" + frameCount % 360 + " S:100 B:100",20,160);

  // set the color mode to HSB
  colorMode(HSB,360,100,100);

  sColor = color(frameCount%360,100,100);

  stroke(sColor);
  noFill();
  circle(40,200,40);
}
{{</p5js>}}

Or set limits for position coordinates and animate things using the frameCount:

{{<p5js autoplay="1" width="300" height="400">}}

let x;

function setup() {
  createCanvas(300, 300);
  frameRate(60);
  background(130,60,80);
  textSize(16);
  fill(255);
  strokeWeight(10);
}

function draw() {
  background(130,60,80);
  text("Frame Rate: " + round(getFrameRate()),20,60);
  text("Current Frame: " + frameCount, 20,80);
	text("frameCount % 300: " + frameCount%600, 20,100);
  

  // calculate the x position using frameCount and modulo
	// this limits the x to values between 0-299
	x = frameCount % 300;
	circle(x,240,40,40);
  text("X:" + frameCount % 300,x+20,230);
}
{{</p5js>}}