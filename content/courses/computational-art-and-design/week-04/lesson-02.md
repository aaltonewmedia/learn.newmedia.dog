---
title: "Sound Visualizations"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Week 04 | Sound, Sound Visualizations

---

## Download example files

[Download the foghorn sample](/sounds/foghorn.wav)


## p5js Sound Library

[Sound library reference](https://p5js.org/reference/#/libraries/p5.sound)

The p5.js sound library allows you to:
- load, play and manipulate sound files
- synthesize sounds
- use audio filters
- get audio input from microphones and other input devices
- analyze sound

![Files](../img/p5js_files.png)

## Examples

{{<hint warning>}}
There seems to be something wrong with the sound library on some browsers. Use Chrome to make sure all theses examples work.
{{</hint>}}

### Example: Play a SoundFile

<iframe src="https://editor.p5js.org/mnstri/full/fhv6vN4z1" width="100%" height="450"></iframe>

```js
let sample;

function preload(){
  sample = loadSound("data/foghorn.wav");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function mousePressed(){
  sample.play();
}
```

### Example: Mic Input

<iframe src="https://editor.p5js.org/mnstri/full/gJVPvB5ST"width="100%" height="450"></iframe>

```js
let mic;
let loudness;
let s=10;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw() {
  background(220);
  loudness = mic.getLevel();
  s = map(loudness,0,1,10,100);
  
  circle(width/2,height/2,s);
  text(loudness,width/2,20);
}

function mousePressed(){
  userStartAudio();
}
```

The ```userStartAudio``` is required since modern browsers require the user to activaly start audio playback and input with a specific action. In the p5.js examples, you will probably see it done this way:

```js
function setup(){
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}
```

I used the mousePressed() function since we have been talking about in the class. Both ways will work.

### Example: Advanced

<iframe src="https://editor.p5js.org/mnstri/full/k21MpFuTt" width="100%" height="600"></iframe>

