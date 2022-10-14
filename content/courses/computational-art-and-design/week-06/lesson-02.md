---
title: "FRI | Classes"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Week 06 | Classes

---

## Inspiration

{{<vimeo 287093890>}}

[Janelle Shane - AI Weirdness](https://www.aiweirdness.com/)

## Classes in JavaScript

{{<hint info>}}
Classes in JavaScript are **not** objects.  
They are **templates** for creating objects.

Classes are kind of like cookie cutters that you can use to create multiple cookies (objects).
{{</hint>}}

[See the JS Classes tutorial.](https://www.w3schools.com/js/js_classes.asp)

This way of using classes is very similar to how they work in Processing and many other programming languages. Therefore, I will generally use classes to create objects during this course. This will help you work with other programming languages that you might use during your studies.

```js
class ClassName {
  constructor() {
    //
  }
}
```

```js
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

### Constructor

The constructor method is a special method:

1. It has to have the exact name "constructor"
2. It is executed automatically when a new object is created
3. It is used to initialize object properties

{{<hint info>}}
It might be helpful to thing of the costructor as the **setup** of the class. Just like in our p5.js programs the constructor is excecuted automatically in the beginning when the object is created.

Classes were added into JavaScript in an update called ES6 in 2015.
{{</hint>}}

### Methods

Besides the constructor method, you can create your own methods as well. You write them in the same way as the constructor.

{{<hint info>}}
Note that you do not need the keyword function in front of the function name. This class has two methods besides the ```constructor()```. They are called ```move()``` and ```draw()```.

```js
class Walker {
  constructor(){
    // code here
  }
  move(){
    // code here
  }
  draw(){
    // code here
  }
}
```
{{</hint>}}

### this

A special keyword ```this``` is used with classes and objects. It is used to refer to the object itself. Whan you want to use some property of an object, you need to add ```this```. before the property name.

```js
class Walker {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.s = 25;
  }
  move(){
    // code here
  }
  draw(){
    // code here
  }
}
```

[Learn more about this](https://www.w3schools.com/js/js_this.asp)

You will forget to use the word **this** with objects and classes. There is even a song about it.

{{<youtube M5d7vygUPoQ>}}

---

## Examples: Walker

### Simple Walker

Let's create a simple example based on something that we have done before: the random walker.

We need to create a class called ```Walker``` that is able to create Walker ***objects***. Each walker should have the following properties:

- **x** the x coordinate
- **y** the y coordinate
- **s** the size of the walker
- **c** color
- **name** a string that stores a name for the walker
- we could add some other properties as well, but let's keep this first example simple

Additionally, we should create the following **methods** for the Walker

- **constructor** this one is always needed, you can initialize all the properties in the contructor
- **move** a method that will move/animate the Walker, basically something that does the walk
- **draw** a method that deals with drawing our Walker

The class could look like this:

```js
class Walker {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.s = random(10,100);
    this.c = color(random(255));
    this.name = "Matti";
  }

  move(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }

  draw(){
    fill(this.c);
    circle(this.x, this.y, this.s);
  }
}
```

And here is the full code:

{{<p5js autoplay=0 width="400" height="800">}}
let myWalker;

function setup() {
  createCanvas(400, 400);
  myWalker = new Walker();
}

function draw() {
  background(220);
  myWalker.move();
  myWalker.draw();
}

class Walker{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.s = random(10,100);
    this.c = random(255);
    this.name = "Matti";
  } 
  move(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }
  draw(){
    fill(this.c);
    noStroke();
    circle(this.x,this.y,this.s);
		fill(255);
		textAlign(CENTER);
		text(this.name,this.x,this.y);
  }
}
{{</p5js>}}

### Array of Walkers

Once you have made the Walker class, it's very easy to create many instances of the Walker.

{{<p5js autoplay=0 width="400" height="800">}}
let myWalker=[];
let num = 100;

function setup() {
  createCanvas(400, 400);
	for(let i=0; i<num; i++){
		myWalker[i] = new Walker();
	}
}

function draw() {
  background(220);
	for(let i=0; i<num; i++){
  	myWalker[i].move();
  	myWalker[i].draw();
	}
}

class Walker{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.s = random(10,100);
    this.c = random(255);
    this.name = "Matti";
  } 
  move(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }
  draw(){
    fill(this.c);
    noStroke();
    circle(this.x,this.y,this.s);
		fill(255);
		textAlign(CENTER);
		text(this.name,this.x,this.y);
  }
}
{{</p5js>}}

### Walker Explosion

In this example, we make all the walkers emerge from the same location. This starting location is randomized when the code starts.

We also replace all the walkers in the array with new ones when the mouse is clicked. The x and y location is based on the mouse coordinates. This creates an effect that looks like the walker objects are exploding from the mouse cursor

{{<p5js autoplay=0 width="400" height="800">}}
let myWalker = [];
let num = 1000;

function setup() {
  createCanvas(400, 400);
  background(220);
  let rx = random(width);
  let ry = random(height);
  for(let i=0; i<num; i++){
    myWalker[i] = new Walker(rx,ry);
    myWalker[i].move();
    myWalker[i].draw();
  }
}

function draw() {
  background(220);
  for(let i=0; i<num; i++){
    myWalker[i].move();
    myWalker[i].draw();
  }
}

function mousePressed(){
  let rx = mouseX;
  let ry = mouseY;
  for(let i=0; i<num; i++){
    myWalker[i] = new Walker(rx,ry);
    myWalker[i].move();
    myWalker[i].draw();
  }
}

class Walker{
  constructor(_x,_y){
    this.x = _x;
    this.y = _y;
    this.s = random(1,20);
    this.c = random(255);
    this.name = "Matti";
  } 
  move(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }
  draw(){
    fill(this.c);
    noStroke();
    circle(this.x,this.y,this.s);
  }
}
{{</p5js>}}

---

## Examples: Rain

What is rain? Lots of individual raindrops falling down. Each drop of rain has its own size, location, speed, and behavior but all of them are essentially the same type of **object**. Using classes seems like the right tool if we want to create something similar to rain with our code.

### Raindrop Class

The first thing we need is a class for one individual raindrop. We should start by listing out all the properties a raindrop should probably have.

```js
class Raindrop{
  constructor(){
    this.x; // x coordinate
    this.y; // y coordinate
    this.w; // width of the raindrop
    this.h; // height of the raindrop
    this.c; // color
  } 
}
```

Then we should try to come up with a visual representation of a raindrop that we can draw in p5.js. I will go for a sort of comic book look for the rain: a stretched out rectangle. I used Midjourney to try to create an example of this look.

![Comic book rain](../img/rain.png)

We need a ```draw()``` method for our class. The code inside the constructor randomizes the size and the position for the raindrop when it is created.

```js
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = 200;
    this.w = random(2,4);
    this.h = random(10,30);
    this.c = color(255);
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
```

Let's see how it looks:

{{<p5js autoplay=1 width="400" height="600">}}
let r;
function setup() {
  createCanvas(400, 400);
  r = new Raindrop();
}

function draw() {
  background(0);
  r.draw();
}
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = 200;
    this.w = random(2,4);
    this.h = random(10,30);
    this.c = color(255);
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
{{</p5js>}}

That seems fine for now, we can edit it later. Raindrop should also drop from somewhere. So let's try to animate it with another method. The ```update()``` method moves the raindrop down on the y axis and checks when it goes outside of the screen. Once that happens, the raindrop gets moved to the top of the screen and to a random x location. I also changed the code so that it starts from outside of the screen. Additionally, I added a new property ```v``` for the velocity of the movement. 

```js
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = 200;
    this.w = random(2,4);
    this.h = random(10,30);
    this.c = color(255);
    this.v = random(8,16);
  }
  update(){
    this.y = this.y + this.v;
    if(this.y > height){
      this.x = random(width);
      this.y = -this.h;
      this.v = random(8,16);
    }
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
```
{{<p5js autoplay=1 width="400" height="600">}}
let r;
function setup() {
  createCanvas(400, 400);
  r = new Raindrop();
}

function draw() {
  background(0);
  r.update();
  r.draw();
}
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = 200;
    this.w = random(2,4);
    this.h = random(10,30);
    this.c = color(255);
    this.v = random(8,16);
  }
  update(){
    this.y = this.y + this.v;
    if(this.y > height){
      this.x = random(width);
      this.y = -this.h;
      this.v = random(8,16);
    }
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
{{</p5js>}}

### From one drop to rain

Now that our Raindrop class seems to work quite nicely, we can create lots of Raindrops to make it rain!

{{<p5js autoplay=1 width="400" height="600">}}
let num = 1000;
let rain = [];
function setup() {
  createCanvas(400, 400);
  for(let i=0; i<num; i++){
    rain[i] = new Raindrop();
  }
}

function draw() {
  background(0);
  for(let i=0; i<num; i++){
    rain[i].update();
    rain[i].draw();
  }
}
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = 200;
    this.w = random(2,4);
    this.h = random(10,30);
    this.c = color(255);
    this.v = random(8,16);
  }
  update(){
    this.y = this.y + this.v;
    if(this.y > height){
      this.x = random(width);
      this.y = -this.h;
      this.v = random(8,16);
    }
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
{{</p5js>}}

It seems ok, but the results could be improved with some fine-tuning:
- All of the raindrops start from the same y position so the rain falls in a funny way in the beginning.
- The speed is perhaps a bit too fast
- Now that there are many raindrops, each drop could be made a bit smaller

{{<p5js autoplay=1 width="400" height="600">}}
let num = 1000;
let rain = [];
function setup() {
  createCanvas(400, 400);
  for(let i=0; i<num; i++){
    rain[i] = new Raindrop();
  }
}

function draw() {
  background(0);
  for(let i=0; i<num; i++){
    rain[i].update();
    rain[i].draw();
  }
}
class Raindrop{
  constructor(){
    this.x = random(width);
    this.y = random(-height);
    this.w = random(1,3);
    this.h = random(5,15);
    this.c = color(random(150,255));
    this.v = random(6,9);
  }
  update(){
    this.y = this.y + this.v;
    if(this.y > height){
      this.x = random(width);
      this.y = random(-height);
      this.v = random(6,9);
    }
  }
  draw(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
{{</p5js>}}

---

## More Advanced Examples

### Noise Particles

{{<p5js autoplay=1 width="400" height="600">}}
let num = 500;
let p = [];

function setup(){
  createCanvas(640,640);
  for(let i = 0; i < num; i++){
    p.push(new Particle());
  }
}

function draw(){
  background(40);
  for (let i = 0; i < p.length; i++){
    p[i].update();
    p[i].show();
  }
}

class Particle{
  
  constructor(){
    this.x = 0;
    this.y = 0;
    this.s = random(1,10);
    this.xStep = random(1000);
    this.yStep = random(1000);
    this.c = color(random(100,255),random(100,255));
  }
  update(){
    this.x = noise(this.xStep) * width;
    this.y = noise(this.yStep) * height;
    this.xStep = this.xStep + 0.005;
    this.yStep = this.yStep + 0.005;
  }
  show(){
    noStroke();
    fill(this.c);
    ellipse(this.x,this.y,this.s,this.s);
  }
}
{{</p5js>}}

### Click & Drag Particles

{{<p5js autoplay=1 width="400" height="600">}}
let p = [];
function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(40,30);
  
  for(let i = 0; i < p.length; i++){
  	p[i].update();
    
    for(let j=0; j<p.length; j++){
    	if(i != j){
      	p[i].drawLine(p[j]);
      }
    }
  	p[i].show();
  }
}

function mouseDragged(){
	p.push(new Particle(mouseX, mouseY));
}

class Particle{
	constructor(_x, _y){
  	this.x = _x;
    this.y = _y;
    this.s = random(10,25);
    this.c = color(255);
    this.isClose = false;
  }
  
  update(){
    this.isClose = false;
  	this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    // this.x += random(-2,2);
  }
  drawLine(_p){
  	let distance;
    distance = dist(this.x, this.y, _p.x, _p.y);
    if(distance < 30){
      stroke(255);
    	line(this.x, this.y, _p.x, _p.y);
      this.isClose = true;
    }
  }
  show(){
    noFill();
    if(this.isClose == true){
    	this.c = color(255);
    }else{
    	this.c = color(160);
    }
    stroke(this.c);
    ellipse(this.x,this.y,this.s); 
  }
}
{{</p5js>}}

### Simple Game

<iframe src="https://openprocessing.org/sketch/689324/embed/?plusEmbedHash=MDE5YzVkZDcwNmNjZmZhZjdkNjY3NmJlMGNmM2IwOTdmYjBlZTBmMTJjZWEwYmQ1NzllNzgzMGVmOGM1YTY2ZTQ2M2Y5OTJiNWU2YmU3MDZiMmViYThjM2NlYzRmYzA4M2M3M2Y1YmEzYTA2YzdlM2ZlZmQ0Y2IzOWFkNmFmNzNCQTZrWm5xVytKSmZsbFJJYXJUbXlFbHBJSEpNL0k2Z2haQ1Q2dEloUTFKRmwyeldzR25DT2FqZ0J4TWhQMy9UWjQ4OXdUWmtkczhsOE0xcUZVeEhxZz09&plusEmbedTitle=true" width="100%" height="700"></iframe>

---

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_classes.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_this.asp)

---

## Homework

No coding homework but add something to our AI collection on the Open Processing site.

- Use one or more [text-to-image generators](../lecture)
- Create some images
- Choose your favorite (or something that came out interesting)
- Upload the image embedded inside a p5.js sketch to the [AI collection](https://openprocessing.org/class/80657)