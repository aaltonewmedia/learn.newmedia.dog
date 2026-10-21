---
title: "THU | Working with Hardware"
bookCollapseSection: false
weight: 20
p5js-widget: true
draft: true
---

{{<hint info>}}
- November 14, 2024
- 9:15–12:00
- Room 3448 (Marsio)
{{</hint>}}

---

## Mobile phone sensors

Many mobile phones have built-in sensors (accelerometers, gyroscopes, compass etc.). You are able to access some of this data in your p5.js sketch. [See the Events section from the p5.js reference.](https://p5js.org/reference/#group-Events)

We are going to use the rotation values today:

- [rotationX](https://p5js.org/reference/p5/rotationX)
- [rotationY](https://p5js.org/reference/p5/rotationY)
- [rotationZ](https://p5js.org/reference/p5/rotationZ) (only if your device has a compass)

- [My example](https://editor.p5js.org/mnstri/sketches/3FMgL5M0f)

### Request Permission (iOS 13)

On some devices, you are able to just use the sensor data directly. On Apple mobile devices that are running iOS 13 or higher, you need to specifically ask for the permission to use the sensors.

```js
let button;
function setup() {
  createCanvas(400, 400);
  button = createButton("Click to allow access to sensor");
  button.mousePressed(DeviceOrientationEvent.requestPermission);
}

function draw() {
  background(220);
  text(rotationY, 100,100);
  let x = map(rotationY,-90,90,0,width);
  let y = map(rotationX,-90,90,0,height);
  circle(x,y,50);
}
```

---

## Serial communication with Arduino and other devices

[See the materials from the Physical Computing class.]({{< relref "/courses/physical-computing/week-04/lesson-01" >}})

---

## OSC (Open Sound Control)

[OSC (Open Sound Control)](https://ccrma.stanford.edu/groups/osc/index.html) is a protocol for communicating among applications and hardware over a network connection. It was originally developed for realtime musical performances.

{{<hint info>}}
I like to think of OSC as the duct tape of new media. Quite often, we have to deal with connecting hardware and software together in unexpected ways. OSC makes this possible.
{{</hint>}}

### Anatomy of OSC Messages

OSC messages are sent over a network so you must define where you want to send your message. You must define the following things:

- IP Address – The IP address of the device where you send your message. If you want to send data from one software to another on your computer, you can use the `localhost` IP address `127.0.0.1`
- Port – The port number where you are sending/receiving your message. This could basically any number, but many ports are reserved for other purposes. Use a 4- or 5-digit number to stay out of the range of most common ports.
  - Example: 7777
- Address Pattern – This usually looks like an URL. It is used to differentiate between different messages you are sending/receiving on one port. You can define the address pattern yourself.
  - Example: /sensor/flex
- The actual message is the data that you are sending/receiving. You have to also define what the data type is (string, int, float etc.) Many OSC implementations take care of the data type

Examples of OSC messages:

```
/sensor/accelerometer/x 0.765
/sensor/accelerometer/y 0.482
/sensor/accelerometer/xyz 0.765 0.482 0.112
/text/matti hello
```

### OSC in p5.js

Ironically, using OSC is not very easy with p5.js although both are dealing dealing with networks.

The problem is that OSC is based on [UDP networking protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol). UDP and OSC are great for things where you want to have the minimum amount of latency and don't want to deal with the extra complications of connecting/disconnecting or error correction. UDP unfortunately is not so well supported in JavaScript.

OSC libraries for JavaScript:

- [p5js-osc](https://github.com/genekogan/p5js-osc) | This works fine, but gives security errors when you use it. These issues are generally not a problem since you generally use OSC on local network and not over the internet. Fairly simple to setup but hasn't been updated for a while.
- [osc.js](https://github.com/adzialocha/osc-js) | Uses websockets to route the OSC data. A little bit harder to get running but this library is actively being developed and updated.

### OSC in Processing

OSC communication in Processing can be done using the [oscP5 library](https://sojamo.de/libraries/oscP5/). You can install it with the Library manager in Processing.

### ZIG SIM

[ZIG SIM](https://zig-project.com/) is an application for your mobile device that allows you to stream many of the sensors from your phone to any other device that is able to receive OSC messages.

Download the app on your mobile device from the app store of your mobile device. The free version works for most of the sensors.

### Debugging OSC Messages

#### Protokol

[Protokol](https://hexler.net/protokol) is an excellent tool for monitoring and debugging OSC, MIDI and Gamepad data. I use it all the time to see what kind of data is being received.

### TUIO

[TUIO](https://www.tuio.org/) is a specific format of OSC messages that were developed originally for the [Reactable](http://reactable.com/) project in 2005.

{{<youtube 0h-RhyopUmc>}}

{{<youtube I9AeUISg-Og>}}

After this initial development, TUIO as a protocol was also implement to many other tangible user interfaces that include multi-touch or object detection.

More information:

- [Reactable](http://reactable.com/)
- [TUIO.org](https://www.tuio.org/)
- [reacTIVision software](https://reactivision.sourceforge.net/)
- [Source Code](https://github.com/mkalten)

{{<hint info>}}
I would not recommend to rely on this technology for new designs but it is a very interesting example and might become useful in some situations even still. [The latest update to the TUIO protocol itself was done in 2014.](http://www.tuio.org/?tuio20)
{{</hint>}}

---

## Example




---

## Using WebSocket

WebSocket is a communication protocol that allows you to send and receive data over the local network or the internet.

{{<hint info>}}
WebSockets could be used for chat rooms, multiplayer games, collaborative drawing tools etc.
{{</hint>}}

For this class, our server is going to be hosted on a service called Heroku, and all of us will create a client that connects to it. The specific library we use is [socket.io](https://socket.io/) that is based on WebSocket but adds a couple of extra features.

[![socket.io](./img/socketio.jpg)](./img/socketio.jpg)

### socket.io library

Import the socket.io library to your sketch by adding the following line to your `index.html` file.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
```

### Server

For this class I have made a simple server that receives all incoming messages and broadcasts them to the other clients. See the link in MyCourses.

- [This is the code for the server I used](https://github.com/mnstri/node-socket.io/tree/main)
- [Documentation here](https://devcenter.heroku.com/articles/node-websockets#option-2-socket-io)

The coding train tutorial shows how you could make your own server.

{{<youtube bjULmG8fqc8>}}

{{<youtube 2hhEOGXcCvg>}}

### Client | p5.js code

Our client allows each one to draw on the canvas and to choose the size and color of the brush. All drawings should be synced to the other clients.

```js
let socket;
let myPicker;
let slider;
let c;
function setup() {
  createCanvas(800, 800);
  socket = io.connect(" "); //Add the server url here. You can find it from Mycourses.
  socket.on('mouse', gotData);
  myPicker = createColorPicker('deeppink');
  slider = createSlider(1,30,10,1);
}

function draw() {
  //background(220);
}

function mouseDragged() {
  c = myPicker.color();
  let data = {
    x: mouseX,
    y: mouseY,
    r: c.levels[0],
    g: c.levels[1],
    b: c.levels[2],
    s: slider.value()
  };
  socket.emit("mouse", data);
  // Draw a circle with the defined color
  fill(c);
  noStroke();
  circle(data.x, data.y, data.s);
}

function gotData(data) {
  //console.log("Got: " + data.x + " " + data.y);
  fill(data.r,data.g,data.b);
  noStroke();
  circle(data.x, data.y, data.s);
}
```

#### Coding Train Tutorial

Once again, Dan Shiffman is there to the rescue if you didn't understand something.

{{<youtube HZWmrt3Jy10>}}

{{<youtube i6eP1Lw4gZk>}}


----

## Axidraw Plotter

## Tools for Plotter Machines

- [AxiDraw Manual](https://wiki.evilmadscientist.com/AxiDraw_User_Guide)
- [AxiDraw Software](https://wiki.evilmadscientist.com/Axidraw_Software_Installation)
- [Inkscape](https://inkscape.org/)
- [DrawingBotV3](https://drawingbotv3.com/) (there are paid and free versions available)

---

## SVG Library for p5.js

- [Library](https://github.com/zenozeng/p5.js-svg)

Just include the following in your `index.html`

```html
<script src="https://unpkg.com/p5.js-svg@1.6.0"></script>
```

And then set your canvas mode to `SVG`

```js
createCanvas(400, 400, SVG);
```

{{<hint info>}}
The latest version of the library is compatible with p5.js version 1.11.11
{{</hint>}}

---

## Examples

- [Pen Plotter example](https://learn.newmedia.dog/projects/plotter/)

```js
let angleVal;
let angleSlider;

let pointVal;
let pointSlider;

let sizeVal;
let sizeSlider;

let amtVal;
let amtSlider;

let rotateOn;
let rotateSlider;
let rotateVal=0;

let saveButton;

let maxSize;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  noFill();
	// setup sliders
  angleSlider = createSlider(-0.2,0.2,0,0);
  pointSlider = createSlider(3,10,6,1);
  sizeSlider = createSlider(0.1,10,3,0);
	amtSlider = createSlider(1,400,100,0);
	angleSlider.position(10, 10);
	pointSlider.position(10, 30);
	sizeSlider.position(10, 50);
	amtSlider.position(10, 70);
	rotateSlider = createSlider(-0.001,0.001,0,0);
	rotateOn = createCheckbox('rotate',false);
	rotateSlider.position(10, 90);
	rotateOn.position(180, 90);
	// other settings
	maxSize = height/2;
  saveButton = createButton('Save SVG');
  saveButton.mousePressed(downloadSVG);
  saveButton.position(10,150)
  strokeWeight(1);
}

function draw() {
  background(255);
  angleVal = angleSlider.value();
  pointVal = pointSlider.value();
  sizeVal = sizeSlider.value();
	amtVal = amtSlider.value();
  translate(width/2,height/2);
	if(rotateOn.checked()){
		 rotateVal = rotateVal + rotateSlider.value();
	}
  for(let i=0; i<amtVal; i++){
    rotate(radians(i*angleVal)+rotateVal);
    polygon(0, 0, maxSize-i*sizeVal, pointVal);
  }
}

// this is from here: https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// this one worked
function downloadSVG()
{
    let svgElement = document.getElementsByTagName('svg')[0];
    let svg = svgElement.outerHTML;
    let file = new Blob([svg], { type: 'plain/text' });
    let a = document.createElement("a"), url = URL.createObjectURL(file);

    a.href = url;
    a.download = 'exported.svg';    
    document.body.appendChild(a);
    a.click();

    setTimeout(function() 
    {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

```

---

## Directly Controlling the Plotter (with serial)

There is a library that allows you to directly control the AxiDraw Plotter from p5.js.

- [GitHub page](https://github.com/jmpinit/p5.axidraw)


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