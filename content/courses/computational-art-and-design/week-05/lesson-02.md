---
title: "FRI | Functions"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Week 05 | Functions

---

## Inspiration

{{<youtube 0GH04htPuxI>}}

{{<youtube xHsXfmHaBUo>}}

{{<youtube B7dbz9qepe0>}}

{{<vimeo 72611093>}}

- [John Maeda](https://maedastudio.com/)
- [John Maeda's Blog](https://maeda.pm/)
- [Design by Numbers](https://mitpress.mit.edu/9780262632447/design-by-numbers/)

## Functions

So far, we have written functions that are part of the p5.js library.

- [setup()](https://p5js.org/reference/#/p5/setup)
- [draw()](https://p5js.org/reference/#/p5/draw)
- [preload()](https://p5js.org/reference/#/p5/preload)
- [mousePressed()](https://p5js.org/reference/#/p5/mousePressed)
- [keyPressed()](https://p5js.org/reference/#/p5/keyPressed)

{{<hint info>}}
The functions I listed above are the ones that we actually write out in the code and the program decides when to call them. For example, ```setup()``` is called once when the program starts, ```draw()``` gets called 60 times per second, ```mousePressed()``` when a person presses the mouse etc. Check the [reference](https://p5js.org/reference/) for more functions that behave in similar ways. Most of them are in the **Sructure**, **Mouse** or **Keyboard** sections.
{{</hint>}}

Other type of functions we have been using from the p5.js library are functions that we don't have to write/define in our code. We just call them by using them.

- [circle()](https://p5js.org/reference/#/p5/circle)
- [background()](https://p5js.org/reference/#/p5/background)
- [translate()](https://p5js.org/reference/#/p5/translate)
- etc.

You can see how the library looks like by [opening this link that is the actual code of the p5.js library (version 1.4.2)](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.js). Or a more friendlier version is the [actual source code on GitHub](https://github.com/processing/p5.js). If you are interested, you can dig into them to see how the library works under the hood.

We can also create our own functions that will work in the sketches/programs we create!

### Creating Functions

Creating functions in p5.js (or JavaScript) is quite straightforward. You come up with a name for it and just write it.

```js
function myFunction(){
  // your code here
}
```

Our example in the last class drew a simple face on the screen. We could make that code into a function. 

```js
function drawFace(){
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
```

And use it by **calling** the function.

```js
drawFace();
```

Then we can use the 2D Transformations to decide where we draw the face.

{{<p5js autoplay=1 width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(130,70,120);
  translate(width/2,height/2);
  drawFace();
}

function drawFace(){
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Using push() and pop() we can draw it in multiple places.

{{<p5js autoplay=1 width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(130,70,120);
  // one face in the center of the screen
  push();
    translate(width/2,height/2);
    drawFace();
  pop();
  // one face following the mouse
  push();
    translate(mouseX,mouseY);
    drawFace();
  pop();
  // one tiny face
  push();
    translate(100,100);
    scale(0.2);
    drawFace();
  pop();
}

function drawFace(){
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Or we can draw 100 random faces:

{{<p5js autoplay=1 width="400" height="400">}}
let num = 20;
let x = [];
let y = [];
function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  for(let i = 0; i < num; i++){
    x[i] = random(width);
    y[i] = random(height);
  }
}

function draw() {
  background(130,70,120);
  for(let i = 0; i < num; i++){
    push();
      translate(x[i],y[i]);
      drawFace();
    pop();
  }
}

function drawFace(){
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

### Passing parameters to a function

Using the `drawFace()` function seems to be quite similar to using `circle()` or any other built-in function. However, with circle we are able to define directly where to draw the shape by using parameters. How could we use those? It's also quite simple, you just define what kind of parameters your function should be expecting.

We could decide that our function needs two values passed to it. One value for `x` and one for `y`. We use push(), translate() and pop() inside the function.

```js
function drawFace(x,y){
  push();
  translate(x,y);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
  pop();
}
```

{{<p5js autoplay=1 width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(130,70,120);
  drawFace(width/2, height/2);
}

function drawFace(x,y){
  push();
  translate(x,y);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
  pop();
}
{{</p5js >}}

{{<hint warning>}}
Note that you don't need to use **let** when you define the expected parameters.
{{</hint>}}

### Returning values from a function

Functions do not necessarily have to draw something. They could also do some calculations, process other values, or in some other way provide you with **return value**. We use these types of functions all the time. For example, `random()` returns a random value, `map()` scales values from one range to another. Here is how to create these types of functions.

```js
// this function returns the squared value of the one passed to it
function squareValue(n){
 let result = n * n;
 return result;
}
```

```js
// this function checks which of the values is larger and returns that
function checkLarger(a,b){
 if(a>b){
  return a;
 }else{
  return b;
 }
}
```

Both of these functions already exist in p5.js [sq()](https://p5js.org/reference/#/p5/sq) and [max()](https://p5js.org/reference/#/p5/max) so there is no need to re-invent them. These were just used to illustrate how the return values could work.

Here are two handy functions that do not directly exist in p5.js:

```js
// this function checks if the mouse is inside a circle
function insideCircle(x,y,s){
  let result;
  let d = dist(mouseX,mouseY,x,y);
  if(d < s/2){
    result = true;
  }else{
    result = false;
  }
  return result;
}
```

```js
// this function checks if the mouse is inside a rectangle
function insideRectangle(x,y,w,h){
  let result;
  if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
    result = true;
  }else{
    result = false;
  }
  return result;
}
```

{{<hint info>}}
These functions can be written in a shorter/more efficient way, but we are creating these in a way where it should be very obvious to you what is happening.
{{</hint>}}

{{<p5js autoplay=1 width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(130,70,120);

  let cX = width/2;
  let cY = height/2;
  let cS = 50;

  if(insideCircle(cX,cY,cS)){
    fill(255,0,0);
  }else{
    fill(255);
  }
  circle(cX,cY,cS);

  let rW = 100;
  let rH = 50;
  let rX = width/2-rW/2;
  let rY = height/2+50;

  if(insideRectangle(rX,rY,rW,rH)){
    fill(255,0,0);
  }else{
    fill(255);
  }
  rect(rX,rY,rW,rH);

}

// this function checks if the mouse is inside a circle
function insideCircle(x,y,s){
  let result;
  let d = dist(mouseX,mouseY,x,y);
  if(d < s/2){
    result = true;
  }else{
    result = false;
  }
  return result;
}

// this function checks if the mouse is inside a rectangle
function insideRectangle(x,y,w,h){
  let result;
  if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h){
    result = true;
  }else{
    result = false;
  }
  return result;
}
{{</p5js >}}

## Example: Clock

Let's try to draw a clock using functions and 2D Transformations. p5.js comes with functions to get the system time.

```js
let h = hour();
let m = minute();
let s = second();

text(h + ":" + m + ":" + s);
```

{{<p5js autoplay=1 width="400" height="600">}}
// we can create multiple variables on the same line
let h, m, s;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  h = hour();
  m = minute();
  s = second();
  text(h + ":" + m + ":" + s, 20, 20);
}
{{</p5js >}}

That looks like a clock to me. We are done, right?  
**No, I meant an analog clock.**

{{<p5js autoplay=1 width="400" height="600">}}
// we can create multiple variables on the same line
let h, m, s;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  h = hour();
  m = minute();
  s = second();
  text(h + ":" + m + ":" + s, 20, 20);
  let x = width/2;
  let y = height/2;
  drawHour(x,y);
  drawMinute(x,y);
  drawSecond(x,y);
}

function drawHour(x,y){
  let angle = map(h,0,12,0,360);
  let length = 50;
  push();
  strokeWeight(8);
  stroke(0);
  translate(x,y);
  rotate(radians(angle));
  line(0,0,0,-length);
  pop();
}

function drawMinute(x,y){
  let angle = map(m,0,60,0,360);
  let length = 100;
  push();
  strokeWeight(6);
  stroke(0);
  translate(x,y);
  rotate(radians(angle));
  line(0,0,0,-length);
  pop();
}

function drawSecond(x,y){
  let angle = map(s,0,60,0,360);
  let length = 100;
  push();
  strokeWeight(2);
  stroke(255,0,0);
  translate(x,y);
  rotate(radians(angle));
  line(0,0,0,-length);
  pop();
}
{{</p5js >}}

---

## References and More Information

- [Mozilla Guide: JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

## Homework

Make a new type of clock that visualizes time using color, shapes, movement, sound, images, text etc. Something that is not so literal as a normal clock.

Requirements:
- You need to use at least hour(), minute() and second()
- You need to create a separate function for drawing each value (like we did in the example: drawHour(), drawMinute(), drawSecond())
- For extra challenge, you can also use the date
- The time does not have to be necessarily readable