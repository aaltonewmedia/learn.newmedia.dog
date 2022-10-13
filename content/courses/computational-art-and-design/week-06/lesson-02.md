---
title: "FRI | Classes"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Week 06 | Classes

---

## Classes in JavaScript

{{<hint info>}}
Classes in JavaScript are **not** objects.  
They are **templates** for creating objects.

Classes are kind of like cookie cutters that you can use to create multiple cookies (objects).
{{</hint>}}

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

## This

A special keyword ```this``` is used with classes and objects

https://www.w3schools.com/js/js_this.asp

You will forget to use the word **this** with objects and classes. There is even a song about it.

{{<youtube M5d7vygUPoQ>}}

---

## Examples

## Simple Walker

Let's create a simple example based on something that we have done before: the random walker.

We need to create a class called ```Walker``` that is able to create Walker ***objects***. Each walker should have the following properties:

- **x** the x coordinate
- **y** the y coordinate
- **s** the size of the walker
- **c** color
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

## Example: Array of Walkers

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

## Example: Walker Explosion

In this example, we make all the walkers emerge from the same location. This starting location is randomized when the code starts.

We also replace all the walkers in the array with new ones when the mouse is clicked. The x and y location is based on the mouse coordinates.

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

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_classes.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_this.asp)