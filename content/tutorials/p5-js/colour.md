---
title: Colour
p5js-widget: true
weight: 20
draft: true
---

# Colour Tutorials

---

Here you can find several tutorials an examples on how to understand and work with colours.

... In construction 🏗️ ...

## Colour Modes & Values

- Different types with refs (default rgb, hex, css, and such)

## Colour Functions

- stroke() fill() and such

<!-- comment the examples -->

{{< p5js width="350" height="550">}}

const canvasSizeX = 200
const canvasSizeY = 200
let squaresNumberX = 5
let squaresNumberY = 5
const colorMaxRange = 255

function setup() {
createCanvas(canvasSizeX, canvasSizeY);
colorMode(RGB, colorMaxRange);
noStroke()

let squareSizeX = canvasSizeX/squaresNumberX
let squareSizeY = canvasSizeY/squaresNumberY
let stepX = colorMaxRange/squaresNumberX
let stepY = colorMaxRange/squaresNumberY

    for (let i = 0; i < squaresNumberX; i++) {
        for (let j = 0; j < squaresNumberY; j++) {
            fill(colorMaxRange-(i*stepX), colorMaxRange-(j*stepY), 0);
            rect(i*squareSizeX,j*squareSizeY,squareSizeX,squareSizeY)
        }
    }

}

{{</ p5js >}}

<!-- in plain english what is this snippet doing

try changin the RGB to HSL and see what happens -->

... In construction 🏗️ ...

{{< hint info >}}
HSB / HSL max values are (360,100,100,1.0)
{{</ hint >}}

<!-- https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html -->

{{< p5js width="350" height="470">}}

const circleNumber = 36

function setup() {
createCanvas(200, 200);
colorMode(HSB);
angleMode(DEGREES)

let step = 360/circleNumber
noStroke()

    for (let i = 0; i < 360; i+= step) {
        fill(i,100,100,1)
        push()
        translate(width/2,height/2)
        rotate(i)
        circle(0,50,25)
        pop()
    }

}

{{</ p5js >}}

## Colour Mixing

... In construction 🏗️ ...

<!-- in plain english what is this snippet doing

explain results -->

{{< p5js width="350" height="400">}}

const pointsNumber = 50

function setup() {
createCanvas(windowWidth, windowHeight);
blendMode(MULTIPLY)

    for (let i = 0; i < pointsNumber; i++) {
      strokeWeight(random(10,50))
      if(i % 2){
      	stroke(255,random(100),random(100))}
      else{
      	stroke(random(100),random(100,200),255)
      }
    	point(random(width),random(height))
    }

}

{{</ p5js >}}

## Transparency

... In construction 🏗️ ...

{{< p5js width="350" height="400">}}

function setup() {
createCanvas(200, 200);

    for (let i = 0; i < 5; i++) {
        stroke("red")
        strokeWeight(3)
        line(20+(40*i),50,20+(40*i),150,)
        noStroke()
        fill(0,50+(50*i))
        rect(40*i,80,40,40)

    }

}

{{</ p5js >}}

## Lerping

... In construction 🏗️ ...

## Gradients

- Looping shapes

... In construction 🏗️ ...

---

## Resources
