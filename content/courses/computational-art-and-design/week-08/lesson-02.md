---
title: "FRI | DOM elements"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# DOM Elements

---

## JavaScript DOM  (Document Object Model)

- [See the W3 tutorials here.](https://www.w3schools.com/js/js_htmldom.asp)
- [p5.js examples for DOM](https://p5js.org/examples/)

## p5.js Reference

Here are some of the things that you will mostly use, but see the reference for all of the functions under the DOM category.

-[createSlider](https://p5js.org/reference/#/p5/createSlider)
-[createButton](https://p5js.org/reference/#/p5/createButton)
-[createCheckbox](https://p5js.org/reference/#/p5/createCheckbox)
-[createSelect](https://p5js.org/reference/#/p5/createSelect)
-[createRadio](https://p5js.org/reference/#/p5/createRadio)
-[createColorPicker](https://p5js.org/reference/#/p5/createColorPicker)

## Sliders

{{<p5js autoplay=1 width="300" height="500">}}
let slider;
function setup() {
  createCanvas(300, 400);
  slider = createSlider(0,255,127);
  slider.position(100,100);
  slider.size(100);
}

function draw() {
  background(slider.value());
}
{{</p5js>}}

## Buttons

{{<p5js autoplay=1 width="300" height="500">}}
let button;
let c;
function setup() {
  createCanvas(300, 400);
  background(0);
  button = createButton('randomize');
  button.position(width/2-button.width/2, height/2);
  button.mousePressed(changeBG);
  c = color(255);
}

function draw(){
  background(c);
}

function changeBG() {
  c = color(random(255),random(255),random(255));
}
{{</p5js>}}

---

## Assignment

Create a sketch that uses sliders, buttons and other DOM elements to control colors and other variables in your sketch. Place the elements on top of the canvas so that it works well inside Open Processing.

[Post it to our Open Processing class.](https://openprocessing.org/class/80657)