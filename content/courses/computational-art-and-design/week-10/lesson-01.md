---
title: "THU | Machine Learning with ml5.js"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- November 7, 2024
- 9:15–12:00
- Room 3448 (Marsio)
{{</hint>}}

---

## Machine Learning

Machine learning is a way to make machines do certain tasks without being explicitly programmed to do so.

## ml5.js

[ml5.js](https://ml5js.org/) is a JavaScript library that can be combined with p5.js to use and explore certain artificial intelligence and machine learning libraries in your projects.

ml5.js uses the Tensorflow library by Google. ml5.js is a library that attempts to make the usage of tensorflow a little bit easier.

### Important links

- [Tensorflow](https://www.tensorflow.org/)
- [ml5.js](https://ml5js.org/)
- [Getting Started](https://learn.ml5js.org/#/)
- [Coding Train tutorial on ml5.js](https://thecodingtrain.com/tracks/ml5js-beginners-guide)
- [Teachable Machine](https://teachablemachine.withgoogle.com/)

The new version of the ml5.js library is divided into three parts:

- ml5 Model:
  - The ml5 Model provides ready-to-use models that you directly feed inputs (image, video, audio, text, etc.) and get outputs (labels and confidence scores).
- ml5 + Teachable Machine:
  - The ml5 + Teachable Machine allows you to create models with your own input (images, sound, and poses) using Teachable Machine in a fast, easy and accessible way, and import the trained models to ml5.
- Train your own model!
  - The Train your own model! allows you to build and train your own machine learning models with your own data right using ml5 library.

These are the models that are available in ml5.js, explore the examples to understand what is possible.

### ml5 Models

- [BodyPose](https://docs.ml5js.org/#/reference/bodypose)
- [BodySegmentation](https://docs.ml5js.org/#/reference/body-segmentation)
- [HandPose](https://docs.ml5js.org/#/reference/handpose)
- [FaceMesh](https://docs.ml5js.org/#/reference/facemesh)
- [ImageClassifier](https://docs.ml5js.org/#/reference/image-classifier)
- [SoundClassifier](https://docs.ml5js.org/#/reference/sound-classifier)
- [Sentiment](https://docs.ml5js.org/#/reference/sentiment)

### ml5 + Teachable Machine

- [Image + Teachable Machine](https://docs.ml5js.org/#/reference/image-classifier-tm)

### Train Your Own Model

- [NeuralNetwork](https://docs.ml5js.org/#/reference/neural-network?id=neuralnetwork)

---

## Example: BodyPose

- [BodyPose Reference](https://docs.ml5js.org/#/reference/bodypose)

### Step #1: Prepare your sketch files

The first step is to include the ml5.js library in your `ìndex.html` file. Add the following line inside the head part of the html file:

```html
<script src="https://unpkg.com/ml5@1/dist/ml5.js"></script>
```

Here is an example sketch that we will build together:

```js
// Open up your console - if everything loaded properly you should see the version number
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log("ml5 version:", ml5.version);

let video;
let bodyPose;
let poses = [];

// draw emojis to where the eyes and nose are
let noseEmoji = "👃🏻";
let eyeEmoji = "👁️";

function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose("MoveNet", {flipped: true});
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}

function setup() {
  // the default size for video input is 640x480
  createCanvas(640, 480);

  // Create the video and hide it
  // the video is mirrored
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
  
  // set the text size and alignment for drawing the emojis
    textAlign(CENTER, CENTER);
    textSize(50);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);
  // check that there is at least one person
  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    
    // get the nose point and draw the nose emoji in that location
    let nosePoint = pose.nose;
    text(noseEmoji, nosePoint.x, nosePoint.y);
    
    // get the eye points
    let leftEyePoint = pose.left_eye;
    let rightEyePoint = pose.right_eye;
    text(eyeEmoji, leftEyePoint.x, leftEyePoint.y);
    text(eyeEmoji, rightEyePoint.x, rightEyePoint.y);
  }
}
```

### More Resources

Dan Shiffman has made a great tutorial for the BodyPose model

{{<youtube T99fNXTUUaQ>}}