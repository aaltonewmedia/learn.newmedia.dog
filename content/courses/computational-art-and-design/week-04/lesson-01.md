---
title: "Images & Video"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 04 | Images & Video

---

## External files

![Files](../img/p5js_files.png)

## Working with images

Loading images

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