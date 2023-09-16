---
title: "FRI | Conditional Statements"
bookCollapseSection: false
weight: 30
p5js-widget: false
---

# Week 02 | Conditional Statements Continued

---

## Inspiration

{{<youtube 5eMSPtm6u5Y>}}

<iframe src="https://archive.org/embed/experimentsinmotiongraphics" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

{{<youtube cP5Mj6ZvZJc>}}

[John Whitney](https://en.wikipedia.org/wiki/John_Whitney_(animator))

---

## Bouncing Ball

Today, we finally get to the **dumb fish** phase, where we learn how to animate shapes using code with some level of behavior. Let's create the classic DVD logo animation that entertained me and my peers during many of the lectures during my time at the University of Lapland.

{{<youtube QOtuX0jL85Y>}}

### Incrementation operators

- [Addition +](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Substratction -](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)

We can use the incrementation operators to manipulate variables over time. For example, here we have a variable `x` that increases by one pixel every frame.

```js
let x = 0;
x = x + 1;
```

...or you can move left by subtracting

```js
let x = 0;
x = x - 1;
```

{{<hint info>}}
You might also see the following ways to write these:

```js
x++; // this is the same as x = x + 1;
x--; // this is the same as x = x - 1;

x += 5; // this is the same as x = x + 5;
x -= 5; // this is the same as x = x - 5;
```

You will evantually start using these shorter versions, but I will use the long form in the beginning of the course.
{{</hint>}}

In the example below, the circle starts moving to the right but there is nothing stopping it from going beyond the edges of the canvas.

{{< p5js width="400" height="400">}}
let x;
let y;

function setup() {
  createCanvas(300, 300);
  //start from the middle of the screen
  x = width/2;
  y = height/2;
}

function draw() {
  background(130,80,130);

  x = x + 1;
  circle(x,y,50);
}
{{</ p5js >}}

We can add an `if` to check for the boundaries and change the direction. In order to do this in a more efficient way, let's also make the amount we increment a variable (the speed of the movement).

{{< p5js width="400" height="400">}}
let x;
let y;
let xSpeed = 1;

function setup() {
  createCanvas(300, 300);
  //start from the middle of the screen
  x = width/2;
  y = height/2;
}

function draw() {
  background(130,80,130);

  x = x + xSpeed;
  
  // check if we hit the wall on the right
  if(x > width){
    // multiply by -1 to change the direction
    xSpeed = xSpeed * -1;
  }

  // check if we hit the wall on the left
  if(x < 0){
    // multiply by -1 to change the direction
    xSpeed = xSpeed * -1;
  }

  circle(x,y,50);
}
{{</ p5js >}}

#### Example | Bouncing Ball

The following code adds the following features that we go through in more detail in class:

- animation for the y axis
- fix the issue where the shape goes through the screen by taking into account the size of the circle
- randomize the starting speed so that we get more interesting animations

{{< p5js width="400" height="400">}}
let x;
let y;
let xSpeed;
let ySpeed;
let s = 50; // size of the circle

function setup() {
  createCanvas(300, 300);
  //start from the middle of the screen
  x = width/2;
  y = height/2;
  xSpeed = random(2,5);
  ySpeed = random(2,5);
}

function draw() {
  background(130,80,130);

  x = x + xSpeed;
  y = y + ySpeed;
  
  // check if we hit the wall on the right
  if(x > width - s/2){
    // multiply by -1 to change the direction
    xSpeed = xSpeed * -1;
  }

  // check if we hit the wall on the left
  if(x < s/2){
    // multiply by -1 to change the direction
    xSpeed = xSpeed * -1;
  }

  // check if we hit the wall on the bottom
  if(y > height - s/2){
    // multiply by -1 to change the direction
    ySpeed = ySpeed * -1;
  }

  // check if we hit the wall on the top
  if(y < s/2){
    // multiply by -1 to change the direction
    ySpeed = ySpeed * -1;
  }

  circle(x,y,50);
}
{{</ p5js >}}


### Logical operators && and ||

- [AND &&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [OR ||](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

It is possible to combine multiple conditions inside one if statement using the logical operators `OR` and `AND`. 

#### &&

```js
// AND is written with && in JavaScript
// && checks if both of the conditions are true

// check if the mouse is on the right side of the screen AND mouse is pressed
if(mouseX > width/2 && mouseIsPressed == true){
  console.log("clicked on the right side");
}
```

{{< p5js width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(130,80,130);
  if(mouseX > width/2 && mouseIsPressed == true){
    text("clicked on the right side",20,100)
  }
}
{{</ p5js >}}

#### ||

```js
// OR is written with || in JavaScript
// || checks if both of the conditions are true

// check if either mouse or key is pressed
if(mouseIsPressed == true || keyIsPressed == true){
  console.log("something was pressed");
}
```

{{< p5js width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(130,80,130);
  if(mouseIsPressed == true || keyIsPressed == true){
    text("something was pressed",20,100)
  }
}
{{</ p5js >}}

#### Example | Bouncing Ball with logical operators

This version of our code uses the logical operators to combine multiple conditions inside one if statement. It works exactly the same as the one we made earlier but is just a bit more condensed.

<iframe src="https://openprocessing.org/sketch/1380977/embed/?plusEmbedHash=YWUyZDcwODRmNjk2NmQwYzJiYTBlY2VhZmI3YTM3MGIxYWY5NWQ3YTk3YjMwYjk4NjY4YzA5OGMyOTBmMWUxYWI5MTY2ZjgwNTUwNmZiNmU4ZmM0MjYzNTM0ZjIwMDNiMTA0MGZjM2U4NTBjZGU0MTg0NzQ1ZWZhYzY4NTllNGNTd2E1dk56NTA5V05aVXNJSHZoQ1pHNGE5ZWJldmdLcnJTNVhNYktpNGhHbCtMK0R3M1llc2owdTZIci9qb1ZkdXc2bTFUOHpzd3ZEVVZzZTdZN2hzUT09&plusEmbedTitle=true" width="100%" height="600"></iframe>

{{< details title="Click to see the code" >}}

```
let x;
let y;
let s = 100;
let xSpeed;
let ySpeed;

function setup() {
  createCanvas(500, 450);
  background(130, 80, 130);
  x = random(100, width - 100);
  y = random(100, height - 100);
  xSpeed = random(1, 5);
  ySpeed = random(1, 5);
}

function draw() {
  
  // draw background with some transparency
  background(130, 80, 130);
  
  // update values
  x = x + xSpeed;
  y = y + ySpeed;
  
  // check if the circle hit the wall
  if (x >= width - s / 2 || x <= 0 + s / 2) {
    xSpeed = -xSpeed;
  }
  if (y >= height - s / 2 || y <= 0 + s / 2) {
    ySpeed = -ySpeed;
  }

  // draw
  noStroke();
  fill(255);
  circle(x, y, s);
}
```

{{< /details >}}

## switch

The [switch](https://www.w3schools.com/js/js_switch.asp) statement is used to perform different actions based on different conditions. It's really useful in situations where the input value has three or more possible options (like the keys from a keyboard).

```js
switch(expression) {
  case a:
    // code block
    break;
  case b:
    // code block
    break;
  default:
    // code block
} 
```

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

### Example

This example checks what key is pressed and does different things based on the input.
- Keys `1` to `5` change the color
- Keys `u` and `d` change the size of the brush
- Pressing `space` will clear the drawing

<iframe src="https://openprocessing.org/sketch/1382646/embed/?plusEmbedHash=YmEyOWVlNjVjMzQ0NWM2MjgzMzgzMjQ5NzVjMjI0YmZjODY3OGJkYTA3NWQxNzZmNWZhMjhiOWYwMzM5YzA2ZjY3Y2RmZjU4ZGFjZDMwYTY3NDc2NjEyNDVmYzc0ZTNiY2I2NDk5ODAwMTllNzg5YWQzYTdjMjcwNzE3NWJmMmZlRGFJUkJROEs4N3lYWVVpdTlSTFFNVVZhV3U3NmdCaDB6ajdGOWN1bnI4R0VWeDZnQTJGaE85YUVnZVRDRkxYbVhnSWxyN2lEMVVpa0hPYkZpalFmUT09&plusEmbedTitle=true" width="100%" height="400"></iframe>

{{< hint warning >}}
Using mouseIsPressed and keyIsPressed inside the draw() means that the program looks if they are pressed **every frame**. This might sometimes have unintended consequences. A better way would be to use the mousePressed() and keyPressed() functions. We will go through them in later classes but feel free to explore them already.
{{< /hint >}}

---

## Resources

- [JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

---

## Homework

### Research

- [Explore the works by Zach Liebermann.](http://zach.li/)
- [Learn more about John Whitney](https://www.youtube.com/watch?v=cP5Mj6ZvZJc)

### Recap

- [mouseIsPressed](https://p5js.org/reference/#/p5/mouseIsPressed)
- [keyIsPressed](https://p5js.org/reference/#/p5/keyIsPressed)
- [if](https://www.w3schools.com/js/js_if_else.asp)
- [Comparison and Logical operators](https://www.w3schools.com/js/js_comparisons.asp)
- [switch](https://www.w3schools.com/js/js_switch.asp)

Go through the course materials for week 2. If you did not understand something we did, go through the examples and tutorials again. Rewrite the code, read through the explanations, try changing things and see what happens.

### Assignment

Add your version of the bouncing ball sketch to our [Open Processing class](https://openprocessing.org/class/86575). It can just be pretty much the same we did in class, but maybe try adding some of your own flavor to it.

For extra challenge, try the following:

- something happens when the ball hits the wall (color changes)
- try adding gravity and friction
- try replacing the 2d shape with an image

