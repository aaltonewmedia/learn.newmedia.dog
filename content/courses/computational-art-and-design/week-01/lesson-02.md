---
title: "FRI | Animating With Code"
bookCollapseSection: false
weight: 30
p5js-widget: true
draft: false
---

{{<hint info>}}
- September 5, 2024  
- 9:15–12:00  
- Room 2420 (Marsio)
{{</hint>}}

## Inspiration

{{<vimeo 88190418>}}

{{<vimeo 369952685>}}

- [Golan Levin](http://flong.com/)
- [Michael Naimark](http://www.naimark.net/index.html)
- [Lauren Lee McCarthy](https://lauren-mccarthy.com/)

## Making Things Move

For now, we have been just creating still images with our code. Although, the way we have structured our code using the p5.js Editor has meant that we are already creating sketches that are getting updated 60 times per second. We just don't see it yet since the code always draws the shapes in the same location.

It's time to start moving things around!

### setup() and draw() functions

A key thing to understand today is the difference between the two functions that are already written for us every time we create a new sketch in the p5js editor.

- ```setup()``` runs only once when you start the program. Code that needs to run only once in the beginning of the program should go into ```setup()```. Like setting up the size of the canvas with ```createCanvas()```.
- ```draw()``` starts running in an endless loop after the setup part. Most of your code will generally go inside the ```draw()```. By default, it tries to run 60 times per second.

### Console, console.log(), print()

As we start slowly creating interactive and dynamically changing content, it's going to be very useful to be able to display messages as text and numbers. We can do that with the ```console.log()``` function. Try adding the following line inside the ```setup()``` part of your code.

```js
console.log("Hello World!");
```

{{<hint danger>}}
You might sometimes see ```print()``` instead of ```console.log()```.  
Both of them do the same thing so you can use either one, but be careful with `print()` if you use it without any arguments, it will try to print the webpage using an actual printer and you might end up getting stuck with the site trying to print infinite copies of the page. I would recommend using ```console.log()```.
{{</hint>}}

### Drawing text on the canvas

You can also draw text on the screen using the [`text()`](https://p5js.org/reference/#/p5/text) function.

```js
text("Hello World!", 50, 50);
```

### Simple interactions with the mouse

In your homework, you were trying to draw something with code. Probably one of the most difficult aspects of it was just figuring out what x and y values a certain specific spot on the screen has. We can use the ```console.log()``` function to display the mouse coordinates on the console.

<iframe src="https://editor.p5js.org/mnstri/sketches/aHKx82Wj6" width="600" height="600"></iframe>

You might be thinking: "If ```mouseX``` and ```mouseY``` magically turn into numbers when the code runs, could I replace the numbers in some of the commands we have been using with those words?" The answer is "Yes, you can!"

Try using mouseX and mouseY instead of fixed numbers with one of the 2D Primitives like the ```circle()```. The position of the circle gets updated 60 times per second based on the mouse location.

{{< p5js width="400" height="400">}}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // change the background color
  background(130, 80, 130);
  // draw a circle where the mouse is
  circle(mouseX, mouseY, 20, 20);
}
{{</ p5js >}}

{{<hint info>}}
Using ```//``` to create comments in the code have another very useful purpose. You can temporarily disable some parts of the code. See what happens if you put ```//``` in front of the line that says:  
```background(130, 80, 130);```.
{{</hint>}}

## Variables

This seemingly magical ability for words like ```mouseX``` to turn into numbers is one of the most fundamental aspects of programming. We are able to store, access and modify data using something called **variables**.

{{<hint info>}}
It might be helpful to think of a variable as a box or some other type of container.
- you can put something in a box
- you can write a label on the side of the box to describe what it contains
- you can later come and open the box and see what is inside it
- you can change the contents of the box
{{</hint>}}

### System variables: mouseX, mouseY, width, height

The example below draws a circle where the mouse is. I'm not using the background() so that the circles get drawn on top of the previous frame. Note that I'm using two values in the ```fill()```. The second number is for the **alpha** channel of the color (opacity).

{{< p5js width="400" height="400">}}
function setup() {
  createCanvas(400, 400);
  // draw the background in the setup() to only do it once
  background(130, 80, 130);
}

function draw() {
  // the background here is commented out to get the feedback effect
  //background(130, 80, 130);

  // change the colors
  noStroke();
  fill(255,50);
  // draw a circle where the mouse is
  circle(mouseX, mouseY, 20, 20);
}
{{</ p5js >}}

These variables called [```mouseX```](https://p5js.org/reference/#/p5/mouseX) and [```mouseY```](https://p5js.org/reference/#/p5/mouseY) are **system variables** that come with the p5.js library. They get updated behind the scenes and you can just use them to get the mouse position.

p5.js comes with a bunch of other **system variables**. We are not going to cover all of them today but there are two other variables that we should know today:

- [```width```](https://p5js.org/reference/#/p5/width) – This system variable stores the width of the canvas that you set with ```createCanvas()```
- [```height```]((https://p5js.org/reference/#/p5/height)) – This system variable stores the height of the canvas that you set with ```createCanvas()```

How to use these? For example, you can figure out the center of the canvas. If you change the size of the canvas, you don't have to update the rest of the code.

{{< p5js autoplay="1" width="200" height="300">}}
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(130, 80, 130);
  // draw multiple circles in the center of the canvas
  circle(width/2, height/2, 100);
  circle(width/2, height/2, 80);
  circle(width/2, height/2, 60);
  circle(width/2, height/2, 40);
}
{{</ p5js >}}

### Using our own variables

You are not limited to just the system variables. You can make your own also! As described above, imagine variables as containers or boxes where you can store some data (numbers, text etc.). 

There are three basic steps with using variables:

1. **Declare** a variable. With JavaScript you declare it using the keyword ```let```. You also have to come up with a name (**identifier**) for your variable.
2. **Assign** a value to the variable using ```=```. This can be done as many times as you want. Whenever you want to change the value stored in the variable, just assign a new value using ```=```.
3. **Use** the variable somewhere in your code.

For example, we could declare a variable called ```circleSize```.

```js
let circleSize;
```

You can assign a value to the variable later, or you can do it at the same time as you declare it.

```js
let circleSize = 50;
```

Here is an example on how we could use the variable in our code. Note that we are declaring the variable **before the setup**. It's really important to declare the variables in a very specific place depending on your code. This is called the **scope** of the variable. We will discuss it next week.

{{< p5js autoplay="1" width="400" height="400">}}
let circleSize = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(130, 80, 130);
  // draw multiple circles in the center of the canvas
  circle(100, height/2, circleSize);
  circle(200, height/2, circleSize);
  circle(300, height/2, circleSize);
}
{{</ p5js >}}

{{<hint info>}}
We are going to spend a lot of time talking about variables as we go further. We have just scratched the surface.
{{</hint>}}

## random()

To end the week, let's explore something that is more fun than learning about variables. Randomness.

You can use the [`random()`](https://p5js.org/reference/#/p5/random) function to get a random value every time this function is called.

```js
// you can use two values as parameters to define the minimum and maximum values
random(100,200); // this would give you a vlaue betweeen 100 and 200

// if you just use one value, it will be a value between 0 and the one you wrote.
random(width); // this would give you a value between 0 and the width of the canvas
```

{{<hint info>}}
Random values are... well, random...  
Sometimes you want something that is still unpredictable but smoother. In those cases you can use [`noise()`](https://p5js.org/reference/#/p5/noise). Using `noise()` is a bit more complicated so this is more of an advanced topic, but good to know of its existence already.

[I have made a tutorial about noise that you can find here.]({{< ref "tutorials/p5-js/noise" >}}  )
{{</hint>}}

### Example: Random Lines

{{< p5js autoplay="1" width="400" height="600">}}
function setup() {
  createCanvas(400, 400);
  background(130, 80, 130);
}

function draw() {
  stroke(0,50);
  line( random(width), random(height), random(width), random(height) );
}
{{</ p5js >}}

### Example: Random Circles

{{< p5js autoplay="1" width="400" height="600">}}
let x;
let y;
let s;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  //background(220);
  x = random(0,400);
  y = random(0,400);
  s = random(1,25);
  fill( random(0,255), random(0,255), random(0,255), 50 );
  noStroke();
  circle(x,y,s);
}
{{</ p5js >}}

### Example Random Walker

{{< p5js autoplay="1" width="400" height="600">}}
let x;
let y;
let s;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(100,width-100);
  y = random(100,height-100);
  s = random(10,40);
  c = random(0,200);
  background(130, 80, 130);
}

function draw() {
  //background(130, 80, 130);
  stroke(0);
  fill(c);
  ellipse(x, y, s);
  x = x + random(-3,3);
  y = y + random(-3,3);
}
{{</ p5js >}}

---

## Homework

### Recap

Go through the course materials for week 1. If you did not understand something we did, go through the examples and tutorials again. Rewrite the code, read through the explanations, try changing things and see what happens.

### Readings

- [Naimark, Michael. First Word Art / Last Word Art. 2001.](http://www.naimark.net/writing/firstword.html)

### Research

- Watch the rest of the talk by Golan Levin and explore [this website](http://flong.com/archive/index.html) to learn more about the works he presents.
- [Explore the works by Lauren Lee MacCarthy.](https://lauren-mccarthy.com/)
- [Explore the works by Casey Reas.](https://reas.com/)
- [Explore the works by Bret Victor.](http://worrydream.com/)

### Reflect

After reading and watching, consider the following questions:
- Do you see your interest in new media art aligning with some specific area of this spectrum between First Word Art and Last Word Art? Are you interested more in constantly exploring new and emerging things or are you more interested in finding some medium that you want to master?
- After exploring the work by artists and designers we covered this week, can you find any specific works that interest or resonate with you?

**I'm not expecting you to write this down anywhere beyond your own notebook but I would like to hear some of your thoughts next week.**

### Assignment

Use the random() function and the 2D shapes to draw some interesting patterns. Try using the random on different things: size, position, color etc. You can also use the drawing you made in the previous assignment.

For extra challenge, also include some simple interaction with ```mouseX``` and ```mouseY```.

[Upload it to our Open Processing class page.](https://openprocessing.org/class/101465#/)