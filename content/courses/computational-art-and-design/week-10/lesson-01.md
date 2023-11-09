---
title: "THU | Other creative coding environments"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- November 9, 2023
- Room G203
- 9:15–12:00
{{</hint>}}

---

[Awesome Creative Coding](https://github.com/terkelg/awesome-creative-coding) is and excellent resource on all things creative coding.

## Creative Coding Tools/Environments/Frameworks

I have listed some tools here under different categories. Some of them appear in multiple categories.

### Frameworks/Libraries for text-based programming languages

- [p5.js](https://p5js.org/)
  - [P5LIVE](https://teddavis.org/p5live/)
- [Processing](https://processing.org/)
- [openFrameworks](https://openframeworks.cc/)
- [Cinder](https://libcinder.org/)
- [ISF](https://isf.vidvox.net/) Interactive Shader Format for shader programming

### Visual Programming Languages

- [TouchDesigner](https://derivative.ca/)
- [vvvv](https://vvvv.org/)
- [Pure Data](https://puredata.info/)
- [Max](https://cycling74.com/)
- [Vuo](https://vuo.org/)
- [Quartz Composer](https://en.wikipedia.org/wiki/Quartz_Composer) (sadly pretty much killed by Apple)
- [Troikatronix Isadora](https://troikatronix.com/)
- [Notch](https://www.notch.one/)
- [Cables.gl](https://cables.gl/)

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

See the [Next Steps page.](../../next-steps/)

---

## Explore

Use the class time to explore one or more of the tools listed above. Try some examples, poke things, see what happens...

Suggestions:

- [Code together using P5LIVE in a shared session](https://teddavis.org/p5live/?cc=f8cse)
- Install [Vuo](https://vuo.org/) and try to make something that works together with [VDMX](https://vidvox.net/) (if you are on a Mac)
- [Go through some TouchDesigner tutorials](https://learn.derivative.ca/)
- Work on your final project idea.

---

## Example done in class 2022

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