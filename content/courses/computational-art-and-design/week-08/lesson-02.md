---
title: "FRI | DOM elements"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# DOM Elements

---

{{<hint info>}}
- October 28, 2022
- Room L208
- 9:15–12:00
{{</hint>}}

---

## Inspiration

- [Juhani Halkomäki Instagram](https://www.instagram.com/juhani.halkomaki/?hl=en)
- [Juhani Halkomäki fxHash](https://www.fxhash.xyz/u/Juhani%20Halkom%C3%A4ki)
- [Juhani Halkomäki Open Processing](https://openprocessing.org/user/208584/?view=sketches)
- [Juhani Halkomäki objkt.com](https://objkt.com/profile/tz2LQg9NqXfgyMVrihTwzzXfUVdZTnmxpYts/created)

---

## JavaScript DOM  (Document Object Model)

- [See the W3 tutorials here.](https://www.w3schools.com/js/js_htmldom.asp)
- [p5.js examples for DOM](https://p5js.org/examples/)

## p5.js Reference

Here are some of the things that you will mostly use, but see the reference for all of the functions under the DOM category.

- [createSlider](https://p5js.org/reference/#/p5/createSlider)
- [createButton](https://p5js.org/reference/#/p5/createButton)
- [createCheckbox](https://p5js.org/reference/#/p5/createCheckbox)
- [createSelect](https://p5js.org/reference/#/p5/createSelect)
- [createRadio](https://p5js.org/reference/#/p5/createRadio)
- [createColorPicker](https://p5js.org/reference/#/p5/createColorPicker)

## Sliders

{{<p5js autoplay=1 width="300" height="500">}}
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
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

## Assignments

## DOM Elements

Create a sketch that uses sliders, buttons and other DOM elements to control colors and other variables in your sketch. Place the elements on top of the canvas and use `createCanvas(windowWidth, windowHeight);` so that it works well inside Open Processing.

[Post it to our Open Processing class.](https://openprocessing.org/class/)

## Classes

Let's also practice using classes and obejcts. Create a sketch that does the following:

- Create a class called Bouncer
- Make it behave like our earlier bouncing ball example
- Create 100 bouncers bouncing on the canvas
- [Post it to our Open Processing class](https://openprocessing.org/class/86575) in the Object/Classes collection.

**Or if you want more challenge, make a particle that uses noise() for animating it.**