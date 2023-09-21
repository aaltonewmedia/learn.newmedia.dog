---
title: "THU | Loops"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 03 | Loops

---

## Inspiration

{{<vimeo 73939362>}}

{{<youtube cywFvcRR-QI>}}

- [Rafael Lozano-Hemmer](https://www.lozano-hemmer.com/)
- [Ryoji Ikeda](https://www.ryojiikeda.com/)

---

## Mapping values

Our main topic today is loops but let's take a quick look at two very useful functions in p5.js that will help us create interesting interactions.

- [`map()`](https://p5js.org/reference/#/p5/map)
- [`constrain()`](https://p5js.org/reference/#/p5/constrain)

### map()

Another very useful function that we are going to need all the time is the [`map()`](https://p5js.org/reference/#/p5/map) function. It allows you to convert values from one range to another. For example, if you would like to have the mouseX control a color value and you would want to use the full width of your canvas to have an effect on the value.


{{< p5js width="400" height="400">}}
let brightness = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  brightness = map(mouseX,0,width,0,255);
  background(brightness);
  text(mouseX,mouseX,mouseY);
}
{{</ p5js >}}

### constrain()

Usually, it is not enough to just **map** the values, you might also need to **constrain** them. Let's use the previous example and modify the values a little bit.

{{< p5js width="400" height="400">}}
let brightness = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  brightness = map(mouseX,100,200,0,255);
  background(brightness);
  fill(255,0,0);
  text(mouseX,mouseX,mouseY);
  text("brightness: " + brightness,20,100);
}
{{</ p5js >}}

Note that the `map()` now uses the mouse input only from 100 to 200 pixels and converts that range to 0 to 255. However, `map()` does not clamp or constrain the values to the desired output (0-255). The brightness is able to become negative or go over 255. You can use [`constrain()`](https://p5js.org/reference/#/p5/constrain) to clamp the values to whatever range you want to.

```js
brightness = map(mouseX,100,200,0,255);
brightness = constrain(brightness,0,255);
```

{{< p5js width="400" height="400">}}
let brightness = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  brightness = map(mouseX,100,200,0,255);
  brightness = constrain(brightness,0,255);

  background(brightness);
  fill(255,0,0);
  text(mouseX,mouseX,mouseY);
  text("brightness: " + brightness,20,100);
}
{{</ p5js >}}

{{<hint info>}}
p5.js doesn't generally completely break down if you use values outside the expected range but sometimes you need this extra level of control. **If you continue to Physical Computing where we use Arduino, using constrain will become very important.**
{{</hint>}} 

---

## Loops

We are going to learn about two different ways to create loops AKA repeat something AKA iterate. Those two options are [while](https://www.w3schools.com/js/js_loop_while.asp) and [for](https://www.w3schools.com/js/js_loop_for.asp). A simple rule of thumb for choosing which one to use

- [while](https://www.w3schools.com/js/js_loop_while.asp): when you want to repeat something, but you don’t know exactly how many times
- [for](https://www.w3schools.com/js/js_loop_for.asp): when you want to repeat something, and you know the amount of times that you want to do it

But there are other things to also know about while and for. Let’s try to go through them.

{{<hint info>}}
There are two other loops available in JavaScript that are really useful:
- [For In](https://www.w3schools.com/js/js_loop_forin.asp)
- [For Of](https://www.w3schools.com/js/js_loop_forof.asp)

We might need or want to use them later in the course, but let's try to understand the basic while and for loops first.
{{</hint>}}

## While

The while loop structure resembles the if statement, with one key difference: an if statement is only executed once and the while loop is going to repeat itself as long as the expression is true.

```js
while (condition) {
  // code block to be executed
}
```

[![while loop](../img/while.jpg)](../img/while.jpg)

{{<hint danger>}}
When you use while loops, you always have to provide a condition that will eventually become false. If you don't, the code will get stuck in an infinite loop and might crash your browser.

The example in the image below will get stuck in an infinite loop. The condition has no way of becoming false.
{{</hint>}}

[![while loop example](../img/while_example1.jpg)](../img/while_example1.jpg)

This example has a condition that will eventually become false. `counter` increases by one on each loop and eventually becomes greater than or equal to 10.

[![while loop example](../img/while_example2.jpg)](../img/while_example1.jpg)

In general, you use the while loop when you want to repeat something, but you do not know exactly how many times you want to repeat it. Some examples of cases like these that you might run into:

- Your program waits for the user to give some sort of input to move on to the next part of your code.
- Your program waits for a device to connect before moving to the next part of your code. You might run into this in the Physical Computing class.

Or you can also use the while loop in a way where you create a specific variable that you control to be able to escape from the loop. How is this useful? Let’s say you wanted to draw a bunch of circles side by side. The way we know how to do it so far, would be just to repeat the same line again and again:

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(200, 200);
  background(130, 80, 130);
}

function draw() {
  circle(0, 100, 25);
  circle(25, 100, 25);
  circle(50, 100, 25);
  circle(75, 100, 25);
  circle(100, 100, 25);
  circle(125, 100, 25);
  circle(150, 100, 25);
  circle(175, 100, 25);
  circle(200, 100, 25);
}
{{</p5js >}}

The value for the x coordinate increases by 25 after each circle. If I would want to change the distance between the circles, I would need to adjust this on every single line. Based on what we know so far, this seems like a job for a variable! Let's see if we can improve our code.

The example below uses a varible called ```x``` that we increment after drawing each circle.

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130, 80, 130);
  let x = 0;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
  x = x + 25;
  circle(x, 100, 25);
}
{{</p5js >}}

Seems like we are getting somewhere but our code seems to become even more complicated! We are also constantly repeating the same lines. There really must be a better way to do this, right?

There is! We can use loops. Here we use the ```while``` loop to repeat the two lines of code that we were manually writing multiple times. The condition ```x <= width``` tells the code to repeat the loop until the condition becomes false. In our case, the loop repeats until the x becomes larger than or equal to the width of the canvas. ***Note that we have the declaration of the variable inside the draw function. This is because we want the value of x to reset back to 0 on each frame.***

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130, 80, 130);
  let x = 0;
  while(x <= width){
    circle(x,100, 25);
    x = x + 25;
 }
}
{{</p5js >}}

## For

As you can see, when you use the while loop you might often need:

1. A variable that you reset in the beginning (**initialization**)
2. An expression that compares that variable to some kind of limit (**condition**)
3. Some kind of update statement that changes the variable. Often you increment this value by some amount. (**update**)

This is a very common structure and you often end up using it all the time. Therefore, a specific loop exists to do just this. This is the [for](https://www.w3schools.com/js/js_loop_for.asp) loop.

```js
for (initialization; condition; update) {
  // code block to be executed
}
```

- ```initialization``` is executed (one time) before the execution of the code block.
- ```condition``` defines the condition for executing the code block. This is done at the beginning of each repetition of the loop.
- ```update``` is executed (every time) after the code block has been executed.

[![for loop](../img/for.jpg)](../img/for.jpg)

This is a simple example that prints out a number every time the loop repeats.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

[![for loop example](../img/for_example.jpg)](../img/for_example.jpg)

Our example with the circles looks like this using the for loop:

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130, 80, 130);
  for(let x = 0; x <= width; x = x + 25){
    circle(x,100, 25);
 }
}
{{</p5js >}}

[![for loop example](../img/for_x_example.jpg)](../img/for_x_example.jpg)

What happens when the loop of our example code runs:

1. The initialization is done once: ```variable x is created and the value 0 is assigned to it```
2. The condition is checked: ```Is x less than or equal to width of the canvas?```
3. If the condition evaluates to true, continue to step 4, otherwise skip to step 7.
4. Run the code inside the loop. ```Draw a circle```
5. Run the update expression. ```Add 25 to the value of x```
6. Go back to step 2.
7. Escape the loop and continue with the rest of the code.

{{<hint info>}}
You are going to use for loops much often than the while loop. I still wanted to show it and build up to this example, so that you hopefully understand why the for loop is structured the way it is.
{{</hint>}}

### Index

There is a certain way that the for loop is commonly used. The initialized variable is often called ```i``` (meaning index). This makes more sense after we learn about arrays, but even without them it's very helpful to start thinking about for loops this way. The variable name does not have to be called ```i```, but it is a convention that you will see a lot.

```js
for(let i = 0; i < 10; i++){
  // repeat the loop the amount of times in the condition
  // this loop would repeat 10 times, it counts from 0 to 9
  // i++ is the same as i = i + 1;
}
```
Think of this structure of the for loop as a counter that repeats as many times as the number in the condition expression. In the example above, we count from 0 to 9.

## Example: Using the index (i)

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130,80,120);
  for(let i = 0; i < 5; i++){
    let x = i*50;
    circle(x, height/2, 50);
  }
}
{{</p5js >}}

{{<hint info>}}
You can then use `map()` to scale the index into pixels or whatever other range you would need.
{{</hint>}}

{{<p5js autoplay=1 width="200" height="400">}}
let num=5;
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130,80,120);
  for(let i = 0; i < num; i++){
    // use map to scale the amount of shapes to the screen size
    let x = map(i,0,num-1,0,width);
    circle(x, height/2, 50);
  }
}
{{</p5js >}}

## Example: For Loop Circle Tunnel

{{<p5js autoplay=1 width="200" height="400">}}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(130,80,120);
  noFill();
  strokeWeight(3);
  // i++ is the same as i = i + 1;
  // i-- is the same as i = i - 1;
  for(let i = 0; i < 200; i++){
    //console.log(i);
    let x = width/2 + i * map(mouseX, 0, width, -10, 10);
    let y = height/2 + i * map(mouseY, 0, height, -10, 10);
    let a = map(i, 0, 200, 255, 0);
    stroke(255, a);
    circle(x, y, 10 + i*12);
  }
}
{{</p5js >}}

---

## Resources

- [JavaScript While](https://www.w3schools.com/js/js_loop_while.asp)
- [JavaScript For](https://www.w3schools.com/js/js_loop_for.asp)