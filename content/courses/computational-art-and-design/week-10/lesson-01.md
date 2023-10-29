---
title: "THU | Other creative coding environments"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

[Awesome Creative Coding](https://github.com/terkelg/awesome-creative-coding) is and excellent resource on all things creative coding.

## Creative Coding Tools/Environments/Frameworks

I have listed some tools here under different categories. Some of them appear in multiple categories.

### Frameworks/Libraries for text-based programming languages

- [p5.js](https://p5js.org/)
- [Processing](https://processing.org/)
- [openFrameworks](https://openframeworks.cc/)
- [Cinder](https://libcinder.org/)
- 

### Visual Programming Languages

- [TouchDesigner](https://derivative.ca/)
- [vvvv](https://vvvv.org/)
- [Pure Data](https://puredata.info/)
- [Max](https://cycling74.com/)
- [Vuo](https://vuo.org/)
- [Quartz Composer](https://en.wikipedia.org/wiki/Quartz_Composer) (sadly pretty much killed by Apple)
- [Troikatronix Isadora](https://troikatronix.com/)
- [Notch](https://www.notch.one/)

### Sound Programming

- [SuperCollider](https://supercollider.github.io/)
- [Pure Data](https://puredata.info/)
- [Max](https://cycling74.com/)
- [SonicPi](https://sonic-pi.net/)

### Visual Effects (Realtime)

- [TouchDesigner](https://derivative.ca/)
- [Houdini](https://www.sidefx.com/)
- [Notch](https://www.notch.one/)
- [Unity](https://unity.com/)
- [Unreal Engine](https://www.unrealengine.com/)

### Game Engines

- [Unity](https://unity.com/)
- [Unreal Engine](https://www.unrealengine.com/)

## Courses in Aalto

### Processing

- Computational Art and Design

### p5.js

- Computational Art and Design
- Programming for Visual Artists (TAITE)
- AXM-E2002 Creative computation for Visual Communication

### TouchDesigner

- Embodied Interaction
- Art & Media Studio: Audiovisual Studio

## openFrameworks

- Workshop period 3: Generative Media Coding

### Pure Data

- AXM-E6003 Composing with New Musical Instruments
- AXM-E6009	Procedural Audio

### SuperCollider

- AXM-E6006	IXI Workshop

### Unity

- Software Studies for Game Designers
- Coding Virtual Worlds

### Unreal Engine

- 

---

## Example done in class

```js
let theta;
function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);
  stroke(255);
  let a = (mouseX/width) * 90;
  theta = radians(a);
  translate(width/2,height);
  line(0,0,0,-120);
  translate(0,-120);
  branch(120);
}

function branch(h){
  h *= 0.66; // h = h * 0.66;
  if(h>2){
    push();
    rotate(theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h);
    pop();
    
    push();
    rotate(-theta);
    line(0,0,0,-h);
    translate(0,-h);
    branch(h);
    pop();
  }
}
```