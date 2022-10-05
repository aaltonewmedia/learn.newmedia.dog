---
title: "THU | 2D transformations, Functions"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 05 | 2D Transformations, Functions

---

This week is going to be about finding ways to structure, simplify and compartmentalize your code. We will learn about **transformations** that allow you to rotate, move and scale things that you draw. Additionally, we will learn the basics of using **functions**.

## 2D Transformations

Let's take an example sketch, where we would like to draw a simple face that is centerd on the canvas. We could use some variables to store the x and y coordimnates of the center of the screen and use these as a reference point for drawing the shapes. I am calling these variables ```offsetX``` and ```offsetY```.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  point(offsetX,offsetY);
  circle(offsetX,offsetY,100);
  circle(offsetX-20,offsetY-20,20);
  circle(offsetX+20,offsetY-20,20);
  line(offsetX-20,offsetY+20, offsetX+20, offsetY+20);
}
{{</p5js >}}

I can even make this interctive by connecting the ```mouseX``` and ```mouseY``` coordinates to these offset values.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  offsetX = mouseX;
  offsetY = mouseY;
  point(offsetX,offsetY);
  circle(offsetX,offsetY,100);
  circle(offsetX-20,offsetY-20,20);
  circle(offsetX+20,offsetY-20,20);
  line(offsetX-20,offsetY+20, offsetX+20, offsetY+20);
}
{{</p5js >}}

You will notice that there is a lot of repetition of these variable names ```offsetX``` and ```offsetY```. As I have said before, whenever you see your code repeating the same things over and over again, there probably is a better way to do it. There is. It's called [translate()](https://p5js.org/reference/#/p5/translate).

### translate()

The [translate()](https://p5js.org/reference/#/p5/translate) transformation essentially moves anything you draw after calling it by the amount you define in the parameters. Here is an example based on what we did earlier.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  translate(offsetX,offsetY);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Note how the code looks much simpler. We call the translate() only once and everything we draw after that inside the draw function uses this location as the reference point.

That is the key to understanding how it works. It doesn't really move the shapes themselves. It moves the reference point for all the drawing functions away from the 0,0 corner in the top-left of the canvas. So for the circle() 0,0 is now in the middle of the screen (or whateve you define as the coordinates). We can do the same thing with simple interaction.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  offsetX = mouseX;
  offsetY = mouseY;
  translate(offsetX,offsetY);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Let's look at how this same idea would work with images. You can dowload the image below to follow these examples.

![Tranlation Grid](../img/transformation_grid.png)

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;
let img;

function preload(){
  img = loadImage("img/transformation_grid.png");
}

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  offsetX = mouseX;
  offsetY = mouseY;
  image(img,0,0);
}
{{</p5js >}}