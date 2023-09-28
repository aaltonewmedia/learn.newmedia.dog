---
title: "THU | Images & Video"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 04 | Images & Video

---

## Inspiration

{{<youtube d8Op4cTZChs>}}

[Kimchi & Chips](https://www.kimchiandchips.com/)

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

You can use your own images, or if you want to follow along with my examples, you can download the image below:
[![Mushroom png](img/shroom.png)](/img/shroom.png)

Or if you want to make the Chromatrope example that I showed, you can download this .zip file.
[Chromatrope Images](/images/examples/chromatrope.zip)

I also made this png image with transparent background you can use:

[![Brush png](img/brush.png)](img/brush.png)

- [loadImage()](https://p5js.org/reference/#/p5/loadImage)
- [image()](https://p5js.org/reference/#/p5/image)
- [tint()](https://p5js.org/reference/#/p5/tint)
- [preload()](https://p5js.org/reference/#/p5/preload)

```js
let img;

// Loading the image file is usually done with the preload() function.
// This function makes sure that the file is loaded before it goes to setup() and draw()
function preload(){
  img = loadImage("shroom.png");
}

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(0,20);
  tint(255);
  image(img,0,0,width,height);
  tint(255,100);
  image(img,mouseX,mouseY,256,256);
}
```

<iframe src="https://openprocessing.org/sketch/2024435/embed/?plusEmbedHash=ZmI1YjZjNmYwM2EwYTkzYmYwYmQ5ODEwMTBiZWM5MzQyNjRkNmQxMDhmZWFhODQ1OWNmNTI0NGIzNzEyOGU2ZWIwOWM5NDk4N2NmYzY5MWM2YzVhMTg4MTk0MjExMzUzZGU5MWU5ZTYwYzdkNWVmY2QxMGYwZjEyNmE4OTljNzJkaERyTUFXRjk3RytxOGFsVjdrR25Oc2xBdHpDdjJwR3pITHk2S1dqSGpENjRONytSN3J2cGx6eGxBNTlHdUpFelkxU24yNEVEU25ncFNzU3lIRXRQZz09&plusEmbedTitle=true" width="100%" height="600"></iframe>

```js
let brush;
let img;

function preload(){
  img = loadImage("shroom.png");
  brush = loadImage("brush.png");
}

function setup() {
  createCanvas(512, 512);
  imageMode(CENTER);
}

function draw() {
  background(0,20);
  tint(255);
  imageMode(CORNER);
  tint(255);
  image(img,0,0,width,height);
  imageMode(CENTER);
  tint(180,0,0);
  image(brush,mouseX,mouseY,32,32);
}
```

<iframe src="https://openprocessing.org/sketch/2024421/embed/?plusEmbedHash=MGE1MDZiZWVlZjdhNzEwNmZkOTc0M2YyM2U1MzJlZGJiMGE2NGJkMzYxMzE1NjgyM2NhYjU4YzQ0YmEwMTYyMmU3MmE2NjAxZjdmOTQ5NDUxYTViMjhmMDdkYWRiZTc0ZTczNjMyMWY3Zjc2MzhhY2FiNTMwZjUwZThkMTI2NTIxTWRyZG5NM0ZTcy92akNGMGlIVXRTU1lLUkhUMkZidE0vdXcwVDgwZU5iRFZCd01JbjZKS0xWa0dWUnEyNDNDUzlFK3pKYVpkRnovRy9tdmZjRy9pZz09&plusEmbedTitle=true" width="100%" height="600"></iframe>

## Working with video

### Video files

Working with video files is quite similar to working with images. The loading of the video file and enabling playback of it just needs to be done in a specific way. Once that is done, you draw the video the same way you would draw any image.

- [createVideo](https://p5js.org/reference/#/p5/createVideo)

### Live video

Using video camera instead of a video file works in a similar way. You need to enable the capturing of the video in a specific way, after that it's just a moving image.

- [createCapture](https://p5js.org/reference/#/p5/createCapture)

{{<hint warning>}}
The p5js widget that I have been using does not work with the live video. So I will just provide the code examples and links to the projects on the p5js editor. **Links will be updated after the class.**
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