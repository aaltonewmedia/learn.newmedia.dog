---
title: "THU | Objects"
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

Objects are a 

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

In JavaScript we could also have **functions** in the objects, which is a very common way to use objects in JavaScript. Functions that are part of objects are called **methods**.

```js
let car = {
  brand:"Toyota", 
  model:"Yaris", 
  color:"white", 
  year:2020,
  x:0,
  drive: function(){
    this.x = this.x + 1;
  }
};
```

{{<hint danger>}}
JavaScript has multiple ways to do many things, including how to work with objects. Adding methods like this in the objects works and you might see it used in other people's code. However, we are going to do this in a slightly different way using classes. [We are going to learn how classes work in the next lesson.](../lesson-02)
{{</hint>}}

---

## Examples

---

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_objects.asp)