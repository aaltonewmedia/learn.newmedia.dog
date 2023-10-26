---
title: "THU | DOM elements"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# DOM Elements

---

{{<hint info>}}
- October 26, 2022
- Room G203
- 9:15–12:00
{{</hint>}}

---

## Inspiration

Now is a good time to start thinking about what kind of project you would like to do during this course.

- [Final Project Guidelines](../../final-project/)
- [Showcase of projects from previous years](../../showcase/)

---

## Setting up p5.js to run locally

There are many options, feel free to explore them and choose the one that you like the most:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Brackets](https://brackets.io/)
- [Espresso](https://espressoapp.com/) (only for Mac)
- [Atom](https://github.com/atom/atom) This used to be a great text editor but the developers have now discontinued it.
- You can even use the [Processing IDE with the p5.js mode](https://processing.org/) as your code editor.

The text editor I recommend to use is Visual Studio Code.

### Visual Studio Code + Live Server extension

Visual Studio Code will be our text editor for writing the code but it's not quite enough on its own. In order to make your sketches actually run on the browser, you need to have a local server running on your computer. Kind of like what would happen on the server where your website is online. Easy way to do this is using an extension called Live Server.

1. [Download and install VS Code](https://code.visualstudio.com/)
2. Click the Extensions icon on the left sidebar
3. Search for Live Server and install it
4. You should now see a button called Go Live on the bottom-right part of the window.

### Creating projects

#### Manually

In order to run p5.js locally you need to download the p5.js library and setup all your other local files (.httml, .css). You can do this manually by copying the required files to your project.

1. Download the files from ps.js
2. Create a new folder with all the files needed. [Instructions here].
3. Open the project folder in VS Code

#### p5.vscode extension

Another way to do this is to use another Visual Studio Code extension that does creates the project for us.

1. Open VS Code
2. Click the Extensions icon on the left sidebar
3. Search for p5.vscode and install the extension
4. Create a new project with ```command-shift-p``` on Mac, or ```ctrl-shift-p``` on Windows
5. Choose/create a new folder for your project

---

## JavaScript DOM (Document Object Model)

- [See the W3 tutorials here.](https://www.w3schools.com/js/js_htmldom.asp)
- [p5.js examples for DOM](https://p5js.org/examples/)
- [p5.js Tutorial: Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)

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