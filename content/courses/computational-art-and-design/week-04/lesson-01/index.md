---
title: "THU | Images & Video"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- September 24, 2026
- 9:15–12:00
- Room 2420 (Marsio)
{{</hint>}}

## Inspiration

{{<youtube HerCR8bw_GE>}}
{{<youtube ofdJNNSrkjM>}}
{{<youtube 8KZoM6PvKDY>}}
{{<youtube X4XMhpRFKvU>}}

- [Dan Shiffman](https://thecodingtrain.com/)
  - [Website](https://thecodingtrain.com/)
  - [YouTube Tutorials](https://www.youtube.com/thecodingtrain)
  - [Nature of Code](https://natureofcode.com/)

- Patt Vira
  - [Website](https://www.pattvira.com/)
  - [YouTube Tutorials](https://www.youtube.com/@pattvira)
  - [Instagram](https://www.instagram.com/pattvira)

## External files

Take a look at this arrow icon on the p5js web editor. Click it!

[![Files](../img/p5js_files.png)](../img/p5js_files.png)

This reveals something very important about working with p5.js. Our code is part of a website with some additional files.

- **_index.html_** The html file that provides the structure for the website. It uses the HTML markup language to describe how the page is structures.
- **_sketch.js_** This is the file we have been working with so far. The actual JavaScript file that has all of our code.
- **_style.css_** This CSS file is used to describe how all of the elements on the webpage should look like

We can add additional files here (images, videos, sound, text etc.) if we want to use them in our code.

- Click the arrow icon pointing down next to where it says "Sketch Files"
- "Create Folder"
- Name the folder **_data_**. Note that you can name this however you want but I'm using data as that name is used in Processing and other creative coding environments.
- Select the folder you just created and press the arrow icon next to it
- This menu shows options to create or upload files to the folder

[![Files](../img/p5js-data-folder.png)](../img/p5js-data-folder.png)

**_Upload all of your files to this folder in today's examples._**

## Working with images

You can use your own images, or if you want to follow along with my examples, you can download the image below:
[![Mushroom png](img/snake.jpg)](/img/snake.jpg)

I also made this png image with transparent background you can use (right click and save image as):

[![Brush png](img/brush.png)](img/brush.png)

- [async_await](https://p5js.org/reference/p5/async_await/)
- [loadImage()](https://p5js.org/reference/p5/loadImage/)
- [image()](https://p5js.org/reference/p5/image)
- [tint()](https://p5js.org/reference/p5/tint)
- [get()](https://p5js.org/reference/p5/get)


### async and await

{{<hint danger>}}
The latest version of p5.js library does the loading of files in an updated version compered to the old library. Please see the video that explains the concept.
{{</hint>}}

{{<youtube 25omXt_OjD4>}}


```js
let img;

// Loading the image file is done using the loadImage() function. 
// It should be used within an async function using the await kayword

async function setup() {
  createCanvas(750, 1000);
  img = await loadImage("snake.jpg");
}

function draw() {
  background(0, 20);
  tint(255);
  image(img, 0, 0);
  tint(255, 100);
  image(img, mouseX, mouseY, 256, 256);
}
```

<iframe src="https://openprocessing.org/sketch/3017884/embed/?plusEmbedHash=dadb6d28&userID=7588&plusEmbedTitle=true&show=sketch" width="400" height="400"></iframe>

```js
let brush;
let img;

async function setup() {
  createCanvas(750, 1000);
  img = await loadImage("snake.jpg");
  brush = await loadImage("brush.png");
  imageMode(CENTER);
}

function draw() {
  background(0, 20);
  tint(255);
  imageMode(CORNER);
  tint(255);
  image(img, 0, 0, width, height);
  imageMode(CENTER);
  tint(180, 0, 0);
  image(brush, mouseX, mouseY, 32, 32);
}
```

<iframe src="https://openprocessing.org/sketch/3017885/embed/?plusEmbedHash=4e3b2661&userID=7588&plusEmbedTitle=true&show=sketch" width="400" height="400"></iframe>

### get()

The get() function in p5.js is used to get the color of an idividual pixel or a region.

This could be used for many purposes. For example, you could check the color of the pixel where the mouse cursor is.

```js
let img;
let c; // variable to store the color

async function setup() {
  createCanvas(750, 1000);
  img = await loadImage("snake.jpg");
  strokeWeight(3);
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);
  c = get(mouseX, mouseY);
  fill(c);
  circle(mouseX, mouseY, 25);
}
```

<iframe src="https://openprocessing.org/sketch/3017887/embed/?plusEmbedHash=d4457319&userID=7588&plusEmbedTitle=true&show=sketch" width="400" height="400"></iframe>

Or you can do the same thing we did with the random walkers last week, but pick a color for each particle based on the image.

```js
/*
This code does adds the same random walkers as we did last week,
but each walker picks its color in the beginning based on an image.
*/

let img;

let x = [];
let y = [];
let c = []; // variable to store the color
let num = 8000;

function preload(){
  img = loadImage("snake.jpg");
}

function setup() {
  createCanvas(750, 1000);
  noStroke();
	for(let i=0; i<num; i++){
		x[i] = random(width);
		y[i] = random(height);
		// store the color from each randomly picked coordinate from the image
		// note that we use img.get() not just the get() which would pick the color from the canvas
		c[i] = img.get(x[i],y[i]);
	}
}

function draw() {
  //background(0);
  //image(img,0,0,width,height);
	for(let i=0; i<num; i++){
  	fill(c[i]);
  	circle(x[i],y[i],4);
		x[i] = x[i] + random(-1,1);
		y[i] = y[i] + random(-1,1);
	}
}
```


<iframe src="https://openprocessing.org/sketch/3017889/embed/?plusEmbedHash=f264e8ce&userID=7588&plusEmbedTitle=true&show=sketch" width="400" height="400"></iframe>


## Working with video

### Video files

Working with video files is quite similar to working with images. The loading of the video file and enabling playback of it just needs to be done in a specific way. Once that is done, you draw the video the same way you would draw any image.

- [createVideo](https://p5js.org/reference/p5/createVideo)

Ypu can dowload some videos here if you don't have anything on your hard drive (right click --> save as):

- [video.mov](./img/video.mov)

When loading videos, you need to do a slightly different approach to loading images. The way to play a video file is done using the createVideo() function, which creates an HTML video player. It does not need the async-await pattern, but you can use something called a **callback function.**

In the code below, the function vidLoad() runs once the video finishes loading, you can use that to wait until the video is loaded before playing it.

```js
let vid;

function setup() {
	createCanvas(640, 480);
	vid =  createVideo("video.mov", vidLoad);
	background(100);
}

function draw() {
	image(vid, 0, 0, width, height);
}

// This function is called when the video loads
function vidLoad() {
	vid.loop();
	vid.hide();
}
```

<iframe src="https://openprocessing.org/sketch/3017892/embed/?plusEmbedHash=25040977&userID=7588&plusEmbedTitle=true&show=sketch" width="640" height="480"></iframe>

### Live video

Using video camera instead of a video file works in a similar way. You need to enable the capturing of the video in a specific way, after that it's just a moving image.

- [createCapture](https://p5js.org/reference/p5/createCapture)

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
  image(capture, 0, 0, width, (width * capture.height) / capture.width);
}
```

### Camera Aspect Fix

Unfortutely, the video capture is not fetched with the correct aspect ratio. This could change depending on the browser you are using too. So we need to do some extra step to make sure the video is displayed correctly. The following code access the stream object from the browser and sets the resolution to 960x540. This is done before the createCapture() function is called. It works in all browsers because it uses the native browser API.

{{<hint warning>}}
You could use the native resolution of your camera example 1280x720, or use a ratio like 16:9. The example below is using 960x540 which is still 16:9 but a 1920x1080 divided by two. Or you can fetch the full resolution of the camera and resize it inside the setup() function.
{{</hint>}}

```js
/*

MORE INFO

https://w3c.github.io/mediacapture-main/getusermedia.html#dom-constraindouble
https://www.folkstalk.com/tech/how-to-force-a-16-9-ratio-with-getusermedia-on-all-devices-solution/
https://calculateaspectratio.com/16-9-calculator

*/

let video;

const cameraWidth = 960; // modify your resolution x here
const cameraHeight = 540; // modify your resolution y here

function setup() {
  // canvas and other p5 functions HERE

  const constraints = {
    video: { width: cameraWidth, height: cameraHeight, facingMode: "user" },
  };
  // Dont remove or change anything from the function below
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => (video.srcObject = stream))
    .then(() => new Promise((resolve) => (video.onloadedmetadata = resolve)))
    .then(() => log(video.videoWidth + "x" + video.videoHeight))
    .catch((e) => {});

  // Shows video
  video = createCapture(constraints);
  // video.hide()

  // canvas and other p5 functions HERE
}
```

## More Information

- [JavaScript async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)