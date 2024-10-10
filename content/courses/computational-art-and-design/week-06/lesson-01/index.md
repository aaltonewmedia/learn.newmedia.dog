---
title: "THU | Objects"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- October 10, 2024
- 9:15–12:00
- Room 2420 (Marsio)
{{</hint>}}

## Inspiration

{{<vimeo 140057053>}}

{{<vimeo 174734638>}}

{{<vimeo 213658343>}}

- [Marshmallow Laser Feast](https://www.marshmallowlaserfeast.com/)

---

## Summary as an AI Podcast

{{<hint info>}}
I am trying out something new this time. I used [NotebookLM](https://notebooklm.google.com) to generate a podcast based on the course materials on this page.

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1932204935&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mansteri" title="Månsteri" target="_blank" style="color: #cccccc; text-decoration: none;">Månsteri</a> · <a href="https://soundcloud.com/mansteri/notebooklm-deep-dive-javascript-objects" title="NotebookLM Deep Dive | JavaScript Objects" target="_blank" style="color: #cccccc; text-decoration: none;">NotebookLM Deep Dive | JavaScript Objects</a></div>

Let me know if you feel that it is helpful and I can keep on making more of them from the other topics. Or better yet, learn how to use NotebookLM yourself.
{{</hint>}}

{{<hint danger>}}
**The topic this week can be complex, overwhelming, and confusing at first. Don't be discouraged if you feel that way. Just keep on going. Many of these things will be repeated over and over again and they will slowly get more familiar.**
{{</hint>}}

## Objects in JavaScript

Objects are a handy way to **encapsulate** data and functions together. Or to be more precice we can create objects that have:

- different **properties** (like x, y, name etc.)
- **property values** stored into these properties (x:100, y:100, name:"Matti").
- **methods** that are actions that can be performed on objects (functions of the object)

[Take a look at the Objects tutorial from W3 School.](https://www.w3schools.com/js/js_objects.asp)

### Objects VS Arrays?

Arrays store multiple ***values***, objects also store multiple ***values***.

The difference is that in objects, each ***value*** also has a unique ***name***. The data in an object is stored as ***name:value*** pairs. These are very similar to how we have understood **variables**, but they exist inside the object.

```js
// these are arrays:
let x = [100,10,20,58];
let names = ["Matti", "Maija", "Hermanni"];
// note that arrays can also contain different types of data
let stuff = ["book", 99, true];

// these are objects:
let dog = {name:"Kimchi", breed: "Husky", age: 5};
let person = {name: "Matti", age: 21, liar: true};
```

{{<hint info>}}
You recognize arrays in JavaScript from the square brackets `[ ]`  
Objects have curly brackets `{ }`
{{</hint>}}

### Properties

These variables or **name:value** pairs inside objects are called ***properties***.

```js
let dog = {name:"Kimchi", breed: "Husky", age: 5};
```

You can also write it like this. Linebreaks and spaces do not matter. It might be easier to read this way.

```js
let dog = {
  name:"Kimchi",
  breed: "Husky",
  age: 5
};
```

This creates a table like this:

| Property | Property Value |
| -- | -- |
| name | "Kimchi" |
| breed | "Husky" |
| age | 5 |

Accessing the properties of the object can be done using the dot syntax:

```js
objectName.propertyName
```

In our case

```js
console.log(dog.name);
```

You can change the values of the properties like you would any other variable:

```js
// Happy birthday!
dog.age = dog.age + 1;
```

You can also add more properties to an object:

```js
dog.eyeColor = "blue";
```

### Methods

Dogs have properties, but they also have some type of behaviors, such as **bark**, **eat**, **run**. Objects can also have behaviors, or **functions** encapsulated inside the object. When a **function** is inside an object it is called a **method**. Here we create a **method** called `bark()`.

```js
let dog = {
  breed: "Husky",
  name:"Kimchi",
  age: 5,
  bark: function(){
    console.log("Bark!");
  }
};
```

You call the method like this:
```js
  dog.bark();
```


### const

{{<hint warning>}}
It is recommended to use `const` when you define and create an object (just like with arrays). But I will generally just use `let` in this class to keep things simple.

```js
const names = ["Matti", "Maija", "Hermanni"];
const dog = {name:"Kimchi", breed: "Husky",  age: 5};
```

[You can learn more about const here.](https://www.w3schools.com/js/js_const.asp)
{{</hint>}}

---

## Walker Object

Let's try doing this again with a familiar example. We could create an object called `walker` that stores all the properties we need for a random walker that we have coded many times before in the class.

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

Then we can use these properties of the object in our code. For example, we can create two functions: ```moveWalker()``` and ```drawWalker()```.

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

### Walker methods

As we learned above, we can move these functions to be part of the object itself by creating methods inside the objects.

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

## More objects?

When we create objects this way, we can only create one object at a time. What if we would like to make lots of walker objects with slighly different values for the properties like we have done previously with multiple arrays for each variable? Seems like it would be very complicated or impossible to do this with objects? That is where ***classes*** come into play!

[Jump to the next lesson to learn about classes.](../lesson-02)

---

## Resources

- [W3 School Objects Tutorial](https://www.w3schools.com/js/js_objects.asp)
- [W3 School Classes Tutorial](https://www.w3schools.com/js/js_classes.asp)
- [W3 School This Tutorial](https://www.w3schools.com/js/js_this.asp)