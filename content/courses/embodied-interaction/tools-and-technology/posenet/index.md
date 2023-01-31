---
title: "Posenet"
bookCollapseSection: false
---   

# Posenet

---

PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

## How Can You Use Posenet in Your Projects

### Runway ML

https://runwayml.com/

Runway ML is a very nice tool for experimenting with various Machine Learning models. You can even easily connect the output of one model to the input of another.

Unfortunately, unless you have a Linux computer with a very powerful GPU, Runway ML is going to run very slowly.

### ml5.js - Friendly Machine Learning for The Web

ml5.js is a library that implements various machine learning models in a very friendly way. ml5.js works nicely together with p5.js so the easiest way to get started with it is using the p5.js web editor. See the instructions here: https://learn.ml5js.org/docs/#/

See below for an example application I made using this library.

{{<video src="videos/posenet.mp4">}}

[Try it yourself](https://editor.p5js.org/mnstri/full/BDTV_V2IU)

### PoseNet for Installations

I haven't tried this, but seems pretty nice
https://github.com/oveddan/posenet-for-installations

It seems that there was some bug that made it crash, Oskar has a fix:
https://github.com/Havdon/posenet-for-installations

## p5-poses-osc

I have made a simple posenet tracker that also sends out the joint positions as OSC messages:

[https://github.com/mnstri/Embodied-Interaction/tree/master/code/posenet](https://github.com/mnstri/Embodied-Interaction/tree/master/code/posenet)

### What is it?

A simple example made with p5.js that uses ml5js (https://ml5js.org/) and posenet to detect poses from the real-time camera image. The positions of the poses is sent via osc to any application capable of receiving osc messages.

- Port: 12000
- Dependencies: 
    - [node.js](https://nodejs.org/en/)
    - [p5js-osc](https://github.com/genekogan/p5js-osc)

#### How to use?

- Download and install Node.js (LTS is fine) [https://nodejs.org/en/](https://nodejs.org/en/)
- Clone or download [p5js-osc](https://github.com/genekogan/p5js-osc)
- Install p5js-osc with Terminal (Mac) or Command Prompt (Windows):  
  `cd path/to/p5js-osc/`  
  `npm install`  
- Start the p5js-osc bridge  
  `node bridge.js`  
- Download the folder in this repository (p5-poses-osc)
- Open the p5-poses-osc/index.html in a browser (Chrome seems to be the fastest)
- Give the browser the permission to use the camera (make sure no other application is using it)
- Create something that is able to receive the osc messages

#### OSC format

Currently, the OSC messages are formatted in the following way. This might change in future versions or I might give the user the opportunity to easily change the format in order to support different software.

##### Wekinator Format

Change the format with:
`let format = 'wekinator'`

| Order of Value | Keypoint  | values |
| ------------- | ------------- | ------------- |
| 1-3 | nose  | confidence score, x, y |
| 4-6| leftEye  | confidence score, x, y  |
| 7-9 | rightEye  | confidence score, x, y  |
| 10-12 | leftEar  | confidence score, x, y  |
| 13-15 | rightEar  | confidence score, x, y  |
| 16-18 | leftShoulder  | confidence score, x, y  |
| 19-21 | rightShoulder  | confidence score, x, y  |
| 22-24 | leftElbow  | confidence score, x, y  |
| 25-27 | rightElbow  | confidence score, x, yl  |
| 28-30 | leftWrist  | confidence score, x, yl  |
| 31-33 | rightWrist  | confidence score, x, y  |
| 34-36 | leftHip  | confidence score, x, y  |
| 37-39 | rightHip  | confidence score, x, y  |
| 40-42 | leftKnee  | confidence score, x, y  |
| 43-45  | rightKnee  | confidence score, x, y  |
| 46-48 | leftAnkle  | confidence score, x, y  |
| 49-51 | rightAnkle  | confidence score, x, y  |

##### Individual Format

Change the format with:
`let format = 'individual'`

## More Information

### Posenet Reference
[https://learn.ml5js.org/docs/#/reference/posenet](https://learn.ml5js.org/docs/#/reference/posenet)

### Examples
{{<youtube OIo-DIOkNVg>}}

{{<youtube FYgYyq-xqAw>}}

{{<youtube lob74HqHYJ0>}}