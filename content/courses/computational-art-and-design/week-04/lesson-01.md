---
title: "Images & Video"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 04 | Images & Video

---

## Inspiration

{{<youtube d8Op4cTZChs>}}

[Kimchi & Chips](https://www.kimchiandchips.com/)

## Rubber ducks?

[Why have I given you rubber ducks?](https://rubberduckdebugging.com/)

## New p5js functions that we are going to need today

- [keyPressed()](https://p5js.org/reference/#/p5/keyPressed)
- [mousePressed()](https://p5js.org/reference/#/p5/mousePressed)

These functions are called ***once*** when you either press a key on your keyboard or a button on your mouse/touchpad. This is often more desired functionality compared to the [keyIsPressed](https://p5js.org/reference/#/p5/keyIsPressed) and [mouseIsPressed](https://p5js.org/reference/#/p5/mouseIsPressed) system variables that we have been using.

## External files

Take a look at this arrow icon on the p5js web editor. Click it!

[![Files](../img/p5js_files.png)](../img/p5js_files.png)

This reveals something very importatnt about working with p5.js. Our code is part of a website with some additional files.

- ***index.html*** The html file that provides the structure for the website. It uses the HTML markup language to describe how the page is structures.
- ***sketch.js*** This is the file we have been working with so far. The actual JavaScript file that has all of our code.
- ***style.css*** This CSS file is used to describe how all of the elements on the webpage should look like

We can add additional files here (images, videos, sound, text etc.) if we want to use them in our code. 

- Click the arrow icon pointing down next to where it says "Sketch Files"
- "Create Folder"
- Name the folder ***data***. Note that you can name this however you want but I'm using data as that name is used in Processing and other creative coding environments.
- Select the folder you just created and press the arrow icon next to it
- This menu shows options to create or upload files to the folder

[![Files](../img/p5js-data-folder.png)](../img/p5js-data-folder.png)

***Upload all of your files to this folder in today's examples.***

## Working with images

You can use your own images, or if you want to follow along with my examples, you can download this .zip file:

[Chromatrope Images](/images/examples/chromatrope.zip)

- [loadImage()](https://p5js.org/reference/#/p5/loadImage)
- [image()](https://p5js.org/reference/#/p5/image)
- [tint()](https://p5js.org/reference/#/p5/tint)

```js

```

## Working with video

### Video files

### Live video

Using live video capture from your webcam is not really that much more difficult than using any other image.

{{<hint warning>}}
The p5js widget that I have been using does not work with the live video. So I will just provide the code examples and links to the projects on the p5js editor.
{{</hint>}}

```js
let capture;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  // you can use this to hide the video preview under the canvas
  capture.hide();
}

function draw() {
  background(220);
   image(capture, 0, 0, width, width * capture.height / capture.width);
}
```

{{<p5js autoplay=1 width="400" height="400">}}
let capture;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  // you can use this to hide the video preview under the canvas
  capture.hide();
}

function draw() {
  background(220);
   image(capture, 0, 0, width, width * capture.height / capture.width);
}
{{</p5js >}}