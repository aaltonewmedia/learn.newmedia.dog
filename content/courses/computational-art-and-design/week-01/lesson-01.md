---
title: "Drawing With Code"
bookCollapseSection: false
weight: 20
p5js-widget: true
draft: true
---

# Week 01 | Drawing With Code

---

Welcome 👋 to the first steps in your creative coding journey!

## Introduction

## Tools

The programming language we use on this course is JavaScript. More specifically, we use a creative coding library called p5.js

- [p5.js website](https://p5js.org/)

Whenever you work with your own code, I recommend that you edit it in the official p5.js editor or setup a local testing environment for yourself using Visual Studio Code or any other text editor. These are some recommended options on how to work with your own code:

- p5.js Editor
- Open Processing
- CodePen
- [How to setup Visual Studio Code for p5.j5](https://www.youtube.com/watch?v=yJw0SyKO9IU)

On some pages I use this interactive p5js-widget that allows you to play with the code right here as you go through the examples and materials:

{{< p5js width="200" height="400">}}
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

Sometimes I also just link to the p5.js editor or embed the p5js editor itself:

## p5js Editor

{{< hint info >}}
Note that you can use ```windowWidth``` and ```windowHeight``` to stretch the canvas to the entire window.
{{</ hint >}}

## Canvas