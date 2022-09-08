---
title: "THU | Drawing With Code"
bookCollapseSection: false
weight: 20
p5js-widget: true
draft: false
---

# Week 01 | Drawing With Code

---

Welcome 👋 to the first steps in your creative coding journey!

## Inspiration

Every week, I introduce you to different artists and designers who use code/computational processes in their work.

{{<vimeo 64895205>}}

{{< youtube _8DMEHxOLQE >}}

- [Bret Victor](http://worrydream.com/)
- [Casey Reas](https://reas.com/)

## Introduction

The content of the course is based on classes that Matti Niinimäki has been teaching at Aalto University for the past 10+ years. They have had different names over the years:

- Software Studies: Programming for Artists
- Programming for Visual Artists
- Introduction to Creative Coding

AXM-E7001 Computational Art and Design is the latest version of this course that was created during the curriculum renewal process for the new Master's Programme in Art and Media at Aalto University.

This track of the course is aimed for beginners. The course also has another track taught by Markku Reunanen for students who already have some experience in coding. You can find the details of that implementation on the MyCourses page of this course.

## Important resources

- [MyCourses page (2022)](https://mycourses.aalto.fi/course/view.php?id=37604)
- [Our OpenProcessing class](https://openprocessing.org/class/80657). Go to MyCourses to find the link to join our class. It's under the Beginner Group section. Or write down the code that Matti shows during the first class.
- [p5js Home](https://p5js.org/)
- [p5js Editor](https://editor.p5js.org/)
- [p5js Reference](https://p5js.org/reference/)
- [The Coding Train by Daniel Shiffman.](https://thecodingtrain.com/) The classes in the beginning of the course are structured in a very similar way to the [Code! Programming with p5.js track on Coding Train](https://thecodingtrain.com/tracks/code-programming-with-p5-js) if you missed something during the class or just need to recap some of the topics, check out the excellent videos from Dan.

## Tools

### p5.js

The programming language we use on this course is JavaScript. More specifically, we use a creative coding library called p5.js

- [p5.js website](https://p5js.org/)

### p5js Editor

Whenever you work with your own code, I recommend that you write it using [the official p5.js editor](https://editor.p5js.org/). Especially in the beginning. However, these are some other options:

- [p5.js Editor](https://editor.p5js.org/) (We start with this one and move on to the other ways later).
- [Open Processing](https://openprocessing.org/class/80657) (We will also use this today).
- [CodePen](https://codepen.io/) (Another way to share code. I will show this one later.)
- [How to setup Visual Studio Code for p5.j5](https://www.youtube.com/watch?v=yJw0SyKO9IU) (This will be the preffered way to work after you get the hang of how things work. I will explain how to do this later.)

### This website

My goal is to make this website a very thorough learning resource for the course and for anyone wanting to learn creative coding. I use many examples together with the written instructions and explanations. On some pages I use this interactive p5js-widget that allows you to play with the code right here as you go through the examples and materials:

{{< p5js width="400" height="400">}}
function setup() {
  createCanvas(200, 100);
}

function draw() {
  background(255, 0, 200);
}
{{</ p5js >}}

{{< hint danger >}}
Try editing the code above. See the **Revert** button that appears? That allows you to revert back to the original code. The widget saves your edits even if you go to a different page on the website so it might have saved something you did earlier that broke the code. Make sure to keep an eye out for that button!
{{</ hint >}}

The widget does not work so well for more complex programs or sketches where I want to use some other libraries. Therefore, I sometimes embed example code using Open Processing. You can edit the code with this as well.

<iframe src="https://openprocessing.org/sketch/679821/embed/?plusEmbedHash=NzhkMzBlNzY0NmRjMWJhN2U2NjhkZDA4ZTNmZDgzZWIwZmE2OTYzNzIyYzhmYTZlZThmY2Y2MWJlYmZlYmYyYmYyZjNlNTUyYTc5ZGMwZmZiNzc0NjBjZDhmOWFlZTM1YjkzZjdhODI4MDBlYmVkZTBiYjRlNmU5ZTMzYTZiMDIrLzNjYkk0Q0lqVXlrendRL1JvL1pYWGtOS3NubHJnSE1renlRaVYxY1VkNUNWQTVaQnpzNkcwQis4WVZOUHJuMVArd3R2R3JVSm5oOWZaYTRkUHNaQT09&plusEmbedTitle=true" width="660" height="660"></iframe>

### Your keyboard

Writing code requires you to use special characters on your keyboard. Make sure you figure out how to type the following characters on your keyboard (especially if you use the computers at Aalto that have Finnish keyboards).

- parentheses ```( )```
- square brackets ```[ ]```
- braces/curly brackets ```{ }```
- asterisk ```*```
- slash ```/```
- pipe ```|```
- ampersand ```&```
- equal sign ```=```
- colon ```:```
- semicolon ```;```
- comma ```,```
- hash ```#```
- tilde ```~```
- single quote ```‘``` – note that this is not the same as accent ```´```
- double quote ```“```
- less/greater than ```< >```


## Our First Sketch

The first sketch that we create is going to use the drawing functions available in the p5.js library. The programs that you write in p5.js and Processing are often referred to as **sketches**. In JavaScript, you might often also hear the word **script**.

So open a new sketch in the p5.js Editor.

### setup() and draw()?

There is always some code written for us whenever we create a new sketch with the p5.js Editor. We are going to learn more details about these two ```functions``` a little bit later. For now, the most important parts to understand:

- The ```setup()``` and ```draw()``` functions are part of how the p5.js library is structured.
- You need to always have them in your code. If you remove them you will get error messages popping up in the console and nothing will work.
- Today, we will leave the setup part untouched and write all of our code inside the curly brackets ```{  }``` of the draw() function.

This is enough information for now, we will learn more details during the next lecture.

### Canvas

When you draw on paper with a pen, the first thing you need is a piece of paper. With our digital drawings on the computer, the first thing to decide is the size of our "paper" on the screen. In p5.js this "paper" is called the canvas.

You define the size of the canvas in pixels using the command (function) called:

```js
createCanvas(400, 400);
```

The two ```parameters``` inside the parenthesis of ```createCanvas()``` define the size of our canvas. The first value is the **width** and the second is the **height**. You can find a detailed explanation of how it works in the [reference](https://p5js.org/reference/#/p5/createCanvas).

{{< hint info >}}
Note that you can use ```windowWidth``` and ```windowHeight``` to stretch the canvas to the entire window.
{{</ hint >}}

### Color

Try changing the numbers in the ```background()``` command. The way p5.js understands the values depends on how many parameters you provide.

- If you just use one value ```background(100);``` the number will be interpreted as a grayscale value between 0–255
- If you use three values ```background(255,0,0);``` the numbers will be interpreted as red, green, and blue channels (RGB). These values also range between 0–255.

{{< p5js width="200" height="300">}}
background(100);
{{</ p5js >}}

{{< p5js width="200" height="300">}}
background(255,0,0);
{{</ p5js >}}

These functions will be useful for you today:

- background()
- fill()
- noFill()
- stroke()
- noStroke()

You can also change the way the color channel values are interpreted using [```colorMode()```](https://p5js.org/reference/#/p5/colorMode) but let's stick with RGB for now.

### Shapes (2D Primitives)

- [point()](https://p5js.org/reference/#/p5/point)
- [line()](https://p5js.org/reference/#/p5/line)
- [circle()](https://p5js.org/reference/#/p5/circle)
- [ellipse()](https://p5js.org/reference/#/p5/ellipse)
- [square()](https://p5js.org/reference/#/p5/square)
- [rect()](https://p5js.org/reference/#/p5/rect)
- [triangle()](https://p5js.org/reference/#/p5/triangle)
- [quad()](https://p5js.org/reference/#/p5/quad)
- [arc()](https://p5js.org/reference/#/p5/arc)

There are a couple of attributes that will be useful today also:

- [strokeWeight()](https://p5js.org/reference/#/p5/strokeWeight)
- [strokeCap()](https://p5js.org/reference/#/p5/strokeCap)

### Comments

By the way, any line of text in the code that starts with // is a comment and gets ignored by the program. Comments are there for you to remind yourself what you are doing or to explain to others what the code does. You can create multiline comments with /* and */

```js
// this is a comment
```

```js

/*
With multiline comments you can write poems 
or love letters inside your code:

roses are red
violets are blue
boolean is either false or true
*/

```

{{< p5js width="400" height="400">}}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // change the background color
  background(134, 82, 132);
  // Change the color of the stroke
  stroke(92, 31, 89);
  // Draw a line. The numbers define the start and end points of the line
  line(150, 300, 250, 300);

  // Define the fill color
  fill(160, 119, 158);
  // Draw a triangle. You need to define the three points.
  triangle(200, 250, 150, 150, 250, 150);
  // Change the fill color
  fill(112, 53, 110);
  // Draw a couple of ellipses
  ellipse(120, 100, 70, 70);
  ellipse(280, 100, 70, 70);
}
{{</ p5js >}}

---

## Homework

### Assignment

Experiment with the various shapes and drawing possibilities and try to create some sort of illustration using only these basics shapes. You can draw anything you want (self portrait, some kind of character or animal, something more abstract).

Limit yourself only to the following functions:
- Shape --> 2D Primitives (all of them should be quite simple to use except arc())
- Shape --> Attributes --> strokeWeight()
- Color --> Setting --> background(), fill(), noFill(), stroke(), noStroke()

[Add your sketch to our Open Processing page.](https://openprocessing.org/class/80657)


