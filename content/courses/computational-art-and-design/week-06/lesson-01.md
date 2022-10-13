---
title: "THU | Objects and Classes"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 06 | Objects and Classes

---

## Inspiration

{{<vimeo 140057053>}}

{{<vimeo 174734638>}}

{{<vimeo 213658343>}}

- [Marshmallow Laser Feast](https://www.marshmallowlaserfeast.com/)

## Objects in JavaScript

We could define an object called ```face``` and store all of the values that are part of that object in one place:

```js
let face = {x:200, y:200, s:100, eyeSize:20, name:"Matti"};
```

And then use the values to draw the face.

{{<p5js autoplay=1 width="400" height="400">}}
let face = {x:200, y:200, s:100, eyeSize:20, name:"Matti"};

function setup() {
  createCanvas(400, 400);
  background(130,70,120);
}

function draw() {
  background(130,70,120);
  drawFace();
}

function drawFace(){
  push();
  stroke(255);
  strokeWeight(4);
  noFill();
  translate(face.x, face.y);
  circle(0, 0, face.s);
  circle(-20,-20,face.eyeSize);
  circle(20,-20,face.eyeSize);
  point(0,0);
  line(-20,20,20,20);
  textAlign(CENTER);
  noStroke();
  fill(255);
  text(face.name,0,face.s - 20);
  pop();
}
{{</p5js >}}

Or we could have an object called car and define all of the values that need to be part of the car.

```js
let car = {brand:"Toyota", model:"Yaris", color:"white", year:2020};
```

You can also write it like this:

```js
let car = {
  brand:"Toyota", 
  model:"Yaris", 
  color:"white", 
  year:2020
};
```

{{<hint warning>}}
It is recommended to use ```const``` when you define and create an object. But I will generally just use ```let``` in this class to keep things simple.

```js
const car = {
  brand:"Toyota", 
  model:"Yaris", 
  color:"white", 
  year:2020
};
```

[You can learn more about const here.](https://www.w3schools.com/js/js_const.asp)
{{</hint>}}

### Methods

In JavaScript we could also have **functions** in the objects, which is a very common way to use objects in JavaScript. Functions that are part of objects are called **methods**. Instead of doing that and creating more confusion, let's rather look at how we can use something called **classes** to create objects.

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

## Example

Let's create a simple example based on something that we have done before: the random walker.

We need to create a class called ```Walker``` that is able to create Walker ***objects***. Each walker should have the following properties:

- **x** the x coordinate
- **y** the y coordinate
- **s** the size of the walker
- **c** color
- we could add some other properties as well, but let's keep this first example simple

Additionally, we should create the following **methods** for the Walker

- **constructor** this one is always needed
- **update** a method that will move/animate the Walker, basically something that does the walk
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

  update(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }

  draw(){
    fill(this.c);
    circle(this.x, this.y, this.s);
  }
}
```

{{<p5js autoplay=0 width="400" height="800">}}
let w = [];
let num = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<num; i++){
    w[i] = new Walker();
  }
  
}

function draw() {
  background(0);
  for(let i=0; i<num; i++){
    w[i].update();
    w[i].draw();
  }
}

class Walker {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.s = random(10,100);
    this.c = color(random(255));
    this.active = false;
    this.d = 0;
  }

  update(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
    this.d = dist(mouseX,mouseY,this.x,this.y);
    if(this.d<this.s/2){
      this.active = true;
    }else{
      this.active = false;
    }
  }

  draw(){
    noFill();
    if(this.active){
      stroke(255,0,0);
      fill(255,0,0);
    }else{
      stroke(this.c);
    }
    circle(this.x, this.y, this.s);
  }
}
{{</p5js >}}

---

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_objects.asp)