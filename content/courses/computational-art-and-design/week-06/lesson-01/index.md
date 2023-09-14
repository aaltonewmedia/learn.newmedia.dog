---
title: "THU | Objects"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 06 | Objects

---

## Inspiration

{{<vimeo 140057053>}}

{{<vimeo 174734638>}}

{{<vimeo 213658343>}}

- [Marshmallow Laser Feast](https://www.marshmallowlaserfeast.com/)

## Objects in JavaScript

Objects are a handy way to **encapsulate** data and functions together. Or to be more precice we can create objects that have:

- different **properties** (like x, y, name etc.)
- **property values** stored into these properties (x:100, y:100, name:"Matti").
- **methods** that are actions that can be performed on objects (functions of the object)

[Take a look at the Objects tutorial from W3 School.](https://www.w3schools.com/js/js_objects.asp)

We could create and object called `walker` that stores all the properties we need for a random walker that we have coded many times before in the class.

```js
let walker = {x: 100, y: 100, s: 50, c: 255, name: "Matti"};
```

You can also write it like this. Linebreaks and spaces do not matter.

```js
let walker = {
  x: 100,
  y: 100,
  s: 50,
  c: 255,
  name: "Matti",
};
```

Accessing the properties of the object can be done using the dot syntax:

```js
objectName.propertyName
```

In our case

```js
walker.x
```

Then we can use these properties of the object in out code. For example, we can create two functions: ```moveWalker()``` and ```drawWalker()```.

```js
function moveWalker() {
  walker.x = walker.x + random(-3, 3);
  walker.y = walker.y + random(-3, 3);
}

function drawWalker() {
  circle(walker.x, walker.y, walker.s);
  textAlign(CENTER);
  text(walker.name, walker.x, walker.y);
}
```

Here is the full code:

{{<p5js autoplay=0 width="400" height="600">}}
let walker = {
  x: 100,
  y: 100,
  s: 50,
  c: 255,
  name: "Matti",
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  moveWalker();
  drawWalker();
}

function moveWalker() {
  walker.x = walker.x + random(-3, 3);
  walker.y = walker.y + random(-3, 3);
}

function drawWalker() {
  circle(walker.x, walker.y, walker.s);
  textAlign(CENTER);
  text(walker.name, walker.x, walker.y);
}
{{</p5js>}}

{{<hint warning>}}
It is recommended to use ```const``` when you define and create an object. But I will generally just use ```let``` in this class to keep things simple.

```js
const walker = {
  x: 100,
  y: 100,
  s: 50,
  c: 255,
  name: "Matti",
};
```

[You can learn more about const here.](https://www.w3schools.com/js/js_const.asp)
{{</hint>}}

### Methods

In JavaScript we could also have **functions** encapsulated inside the objects, which is a very common way to use objects in JavaScript. Functions that are part of objects are called **methods**.

```js
let walker = {
  x: 100,
  y: 100,
  s: 50,
  c: 255,
  name: "Matti",
  move: function(){
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  },
  draw: function(){
    circle(this.x, this.y, this.s);
    textAlign(CENTER);
    text(this.name, this.x, this.y);
  }
};
```

And in our example, we could change the code like this to use these methods that are part of the walker object.

{{<p5js autoplay=0 width="400" height="600">}}
let walker = {
  x: 100,
  y: 100,
  s: 50,
  c: 255,
  name: "Matti",
  move: function(){
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  },
  draw: function(){
    circle(this.x, this.y, this.s);
    textAlign(CENTER);
    text(this.name, this.x, this.y);
  }
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  walker.move();
  walker.draw();
}
{{</p5js>}}

{{<hint danger>}}
**While this works just fine, we are not generally going to use methods in objects like this!**

JavaScript has multiple ways to do many things, including how to work with objects. Adding methods like this in the objects works and you might see it used in other people's code. However, we are going to do this in a slightly different way using classes. [We are going to learn how classes work in the next lesson.](../lesson-02)
{{</hint>}}

---

## Examples

[Jump to the next lesson to see the examples we did in class about classes.](../lesson-02)

---

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_classes.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_this.asp)