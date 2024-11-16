---
title: "FRI | Working with Hardware: Pen plotters"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

{{<hint info>}}
- November 15, 2024
- 9:15–12:00
- Room 3448 (Marsio)
{{</hint>}}

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
<script src="https://unpkg.com/p5.js-svg@1.5.1"></script>
```

And then set your canvas mode to `SVG`

```js
createCanvas(100, 100, SVG);
```

{{<hint danger>}}
The SVG library is not compatible with the newest version of the p5.js library. You need to use an older version of p5. Use p5.js version 1.6.0

You can do this in two ways:

1. Download the older version from: [https://github.com/processing/p5.js/releases/tag/v1.6.0](https://github.com/processing/p5.js/releases/tag/v1.6.0) Replace the files in your library folder with these older versions if you use Visual Studio Code

**OR**

2. Change the `index.html` to load the older version from CDN

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.sound.min.js"></script>
```
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