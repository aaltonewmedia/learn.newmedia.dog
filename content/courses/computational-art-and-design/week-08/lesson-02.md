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

...

---

Before we go to today's topic. Make sure that you are able to access your [users.aalto.fi](https://users.aalto.fi/) folder. This is a simple, traditional WWW-service, a tool for one specific job, serving static content. This means that you can upload files to your user folder and it will then be accessible online from https://users.aalto.fi/yourusername. For example, Matti's user site is here: https://users.aalto.fi/~niinimm1/

- [You will need to use the Aalto VPN.](https://www.aalto.fi/en/services/establishing-a-remote-connection-vpn-to-an-aalto-network) Make sure you get it to work before going to the next step.
- [Instructions for setting up your site are here](https://www.aalto.fi/en/services/usersaaltofi)

We will use this feature today to better understand how your p5.js sketch is connected to the .html file and how you can manipulate html elements using JavaScript.

This also demonstrates a simple way for you to share your sketches without using OpenProcessing or the p5.js editor.

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