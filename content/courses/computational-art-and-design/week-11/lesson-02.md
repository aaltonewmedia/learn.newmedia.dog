---
title: "Machine Learning with ml5js"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Machine Learning with ml5.js

---

## Machine Learning

Machine learning is a way to make machines do certain tasks without being explicitly programmed to do so.

## ml5.js

[ml5.js](https://ml5js.org/) is a JavaScript library that can be combined with p5.js to use and explore certain artificial intelligence and machine learning libraries in your projects.

ml5.js uses the Tensorflow library by Google. ml5.js is a library that attempts to make the usage of tensorflow a little bit easier.

Important links

- [Tensorflow](https://www.tensorflow.org/)
- [ml5.js](https://ml5js.org/)
- [Getting Started](https://learn.ml5js.org/#/)
- [Coding Train tutorial on ml5.js](https://thecodingtrain.com/tracks/ml5js-beginners-guide)

These are the models that are available in ml5.js, explore the examples to understand what is possible.

Image

- [Image Classifier](https://learn.ml5js.org/#/reference/image-classifier) uses neural networks to recognize the content of images. 
- [PoseNet](https://learn.ml5js.org/#/reference/posenet) allows you to estimate "poses" from an image (still or video). This means that you can detect specific features of a human being from an image. These features would be your eyes, nose, hands, arms, legs, feet etc.
- [BodyPix](https://learn.ml5js.org/#/reference/bodypix) allows for person and body-part segmentation from an image.
- [UNET](https://learn.ml5js.org/#/reference/unet)
- [Handpose](https://learn.ml5js.org/#/reference/handpose)
- [Facemesh](https://learn.ml5js.org/#/reference/facemesh)
- [FaceApi](https://learn.ml5js.org/#/reference/face-api)
- [Styletransfer](https://learn.ml5js.org/#/reference/style-transfer)
- [pix2pix](https://learn.ml5js.org/#/reference/pix2pix)
- [CVAE](https://learn.ml5js.org/#/reference/cvae)
- [DCGAN](https://learn.ml5js.org/#/reference/dcgan)
- [SketchRNN](https://learn.ml5js.org/#/reference/sketchrnn)
- [ObjectDetector](https://learn.ml5js.org/#/reference/object-detector)

Text

- [CharRNN](https://learn.ml5js.org/#/reference/charrnn)
- [Sentiment](https://learn.ml5js.org/#/reference/sentiment)
- [Word2Vec](https://learn.ml5js.org/#/reference/word2vec?id=examples) (currently disabled)


Sound

- [SoundClassification](https://learn.ml5js.org/#/reference/sound-classifier)
- [PitchDetection](https://learn.ml5js.org/#/reference/pitch-detection)

---

## Example: PoseNet

As we saw above, ml5.js allows you to use various models but we are going to explore just one of them in detail. This model is PoseNet.

### Step #1: Prepare your sketch files

The first step is to include the ml5.js library in your `ìndex.html` file. Add the following line inside the head part of the html file:

```html
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
```

The basic starting poinf for your p5.js sketch is here:

```js
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

function setup(){
  createCanvas(640, 480);
}

function draw(){
  background(200);
}
```

### Step 2: Enable Video Camera Input

Next, make sure your webcam works.

{{<hint warning>}}
There seems to be something wrong with setting the video camera image size in p5.js. It seems to always default to 640x480 no matter what i try to resize it.
{{</hint>}}

```js
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let cam;

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO, videoLoaded);
  cam.hide();
}

function draw(){
  background(200);
  image(cam,0,0);
}

function videoLoaded(){
  // resize the canvas to be the same size as you camera resolution
  resizeCanvas(cam.width,cam.height);
}
```

### Step 3: Load the PoseNet model and save the poses to an array 

```js
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let cam;
let posenet;
// create an empty array to store the data from the posenet tracking
let poses = [];

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO, videoLoaded);
  cam.hide();
  
  // Create a new poseNet method with a single detection
  // modelReady function is called when the model has been loaded
  poseNet = ml5.poseNet(cam, modelReady);
  
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', poseResults);
}

function draw(){
  background(200);
  image(cam,0,0);
}

function videoLoaded(){
  // resize the canvas to be the same size as you camera resolution
  resizeCanvas(cam.width,cam.height);
}

function modelReady(){
  console.log("model loaded!")
}

function poseResults(results){
   poses = results;
}

function mousePressed(){
  console.log(poses);
}
```

### Step 4: Draw all the keypoints for one person (pose)

```js
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let cam;
let posenet;
// create an empty array to store the data from the posenet tracking
let poses = [];

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO, videoLoaded);
  cam.hide();
  
  // Create a new poseNet method with a single detection
  // modelReady function is called when the model has been loaded
  poseNet = ml5.poseNet(cam, modelReady);
  
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', poseResults);
}

function draw(){
  background(200);
  image(cam,0,0);
  
  // check that there is at least one person
  if (poses.length > 0) {
    // get the first pose (person) in the array
    let person = poses[0].pose;
    fill(255);
    noStroke();
    // loop through all of the keypoints in the pose
    for(let i=0; i < person.keypoints.length; i++){
      let x = person.keypoints[i].position.x;
      let y = person.keypoints[i].position.y;
      circle(x,y,10);
    }
  }
}

function videoLoaded(){
  // resize the canvas to be the same size as you camera resolution
  resizeCanvas(cam.width,cam.height);
}

function modelReady(){
  console.log("model loaded!")
}

function poseResults(results){
   poses = results;
}

function mousePressed(){
  // print the poses in the console when the mouse is pressed
  console.log(poses);
}
```

### Step 5: Get individual points

```js
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let cam;
let posenet;
// create an empty array to store the data from the posenet tracking
let poses = [];
let noseEmoji = "👃🏻";
let eyeEmoji = "👁️";

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO, videoLoaded);
  cam.hide();
  
  // Create a new poseNet method with a single detection
  // modelReady function is called when the model has been loaded
  poseNet = ml5.poseNet(cam, modelReady);
  
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', poseResults);
}

function draw(){
  background(200);
  image(cam,0,0);
  
  // check that there is at least one person
  if (poses.length > 0) {
    // get the first pose (person) in the array
    let person = poses[0].pose;
    fill(255);
    noStroke();
    // loop through all of the keypoints in the pose
    for(let i=0; i < person.keypoints.length; i++){
      let x = person.keypoints[i].position.x;
      let y = person.keypoints[i].position.y;
      circle(x,y,10);
    }
    
    // set the text size and alignment for drawing the emojis
    textAlign(CENTER, CENTER);
    textSize(50);
    
    // get the nose point and draw the nose emoji in that location
    let nosePoint = person.nose;
    text(noseEmoji,nosePoint.x,nosePoint.y);
    
    // get the eye points
    let leftEyePoint = person.leftEye;
    let rightEyePoint = person.rightEye;
    text(eyeEmoji,leftEyePoint.x,leftEyePoint.y);
    text(eyeEmoji,rightEyePoint.x,rightEyePoint.y);
    
  }
}

function videoLoaded(){
  // resize the canvas to be the same size as you camera resolution
  resizeCanvas(cam.width,cam.height);
}

function modelReady(){
  console.log("model loaded!")
}

function poseResults(results){
   poses = results;
}

function mousePressed(){
  // print the poses in the console when the mouse is pressed
  console.log(poses);
}
```