---
title: "THU | 2D transformations"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- October 3, 2024
- 9:15–12:00
- Room 2420 (Marsio)
{{</hint>}}

## Inspiration



## 2D Transformations

### Summary as an AI Podcast

{{<hint info>}}
I am trying out something new this time. I used [NotebookLM](https://notebooklm.google.com) to generate a podcast based on the course materials on this page, YouTube video from the Coding Train, p5.js reference, and the Wikipedia article on Transformation Matrix.

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1927412996&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mansteri" title="Månsteri" target="_blank" style="color: #cccccc; text-decoration: none;">Månsteri</a> · <a href="https://soundcloud.com/mansteri/notebooklm-deep-dive-2d-transformations-in-p5js" title="NotebookLM Deep Dive | 2D Transformations in p5.js" target="_blank" style="color: #cccccc; text-decoration: none;">NotebookLM Deep Dive | 2D Transformations in p5.js</a></div>

[Download the .mp3 file](../audio/deep-dive_2d-transformations.mp3)

Let me know if you feel that it is helpful and I can keep on making more of them from the other topics. Or better yet, learn how to use NotebookLM yourself.
{{</hint>}}

This week is going to be about finding ways to structure, simplify and compartmentalize your code. We will learn about **transformations** that allow you to rotate, move and scale things that you draw. Additionally, we will learn the basics of using **functions**.

Let's take an example sketch, where we would like to draw a simple face that is centerd on the canvas. We could use some variables to store the x and y coordinates of the center of the screen and use these as a reference point for drawing the shapes. I am calling these variables ```offsetX``` and ```offsetY```.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  point(offsetX,offsetY);
  circle(offsetX,offsetY,100);
  circle(offsetX-20,offsetY-20,20);
  circle(offsetX+20,offsetY-20,20);
  line(offsetX-20,offsetY+20, offsetX+20, offsetY+20);
}
{{</p5js >}}

I can even make this interctive by connecting the ```mouseX``` and ```mouseY``` coordinates to these offset values.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  offsetX = mouseX;
  offsetY = mouseY;
  point(offsetX,offsetY);
  circle(offsetX,offsetY,100);
  circle(offsetX-20,offsetY-20,20);
  circle(offsetX+20,offsetY-20,20);
  line(offsetX-20,offsetY+20, offsetX+20, offsetY+20);
}
{{</p5js >}}

You will notice that there is a lot of repetition of these variable names ```offsetX``` and ```offsetY```. As I have said before, whenever you see your code repeating the same things over and over again, there probably is a better way to do it. There is. It's called [translate()](https://p5js.org/reference/#/p5/translate).

### translate()

The [translate()](https://p5js.org/reference/#/p5/translate) transformation essentially moves anything you draw after calling it by the amount you define in the parameters. Here is an example based on what we did earlier.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  translate(offsetX,offsetY);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Note how the code looks much simpler. We call the translate() only once and everything we draw after that inside the draw function uses this location as the reference point.

That is the key to understanding how ```translate()``` works. It doesn't really move the shapes themselves. It moves the reference point for all the drawing functions away from the 0,0 corner in the top-left of the canvas. So for the circle() 0,0 is now in the middle of the screen (or whateve you define as the coordinates). We can do the same thing with simple interaction.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  offsetX = mouseX;
  offsetY = mouseY;
  translate(offsetX,offsetY);
  point(0,0);
  circle(0,0,100);
  circle(-20,-20,20);
  circle(20,-20,20);
  line(-20,20,20,20);
}
{{</p5js >}}

Let's look at how this same idea would work with images. You can dowload the image below to follow these examples.

![Tranlation Grid](../img/transformation_grid.png)

<iframe src="https://openprocessing.org/sketch/1682862/embed/?plusEmbedHash=MmY2ZTA4ZDUyNWY1NTIxMTIzMjljZDVkZmM2NjZiODZiYjA0OGRmZmRmZGQxNjhjNDc4MGUxY2NkMGMyM2I1OGI5OWIxNzhkMDhhZjE4YTU5MmM5NWNiYjdiYTA1ZjdjMGQwNDEyZjA0NGVhNTIxZDcyMzc4ZTVmNmZlZDQxNGJsb3VZaC9PbTdnUzdRVW1lQ1hvWnFnMXZnNlV5SWlLaUFCM083cm5WcnJmVGxnMXBYc3hicXU3bU85M1JkU1FkL0RPakNQWTErZDlpY1pTcVhkMkdsQT09&plusEmbedTitle=true" width="100%" height="600"></iframe>

### rotate()

Here is an example with the grid image.

<iframe src="https://openprocessing.org/sketch/1682870/embed/?plusEmbedHash=NWQzNzBjYTgwYmM2ZWNjYjIzNjUwYmUwYmI1ZWI0YzhhZjE4YmNjOTM2YzdiNWFmZDlkNjMyZWZjOTI3NTA2ZTQwYWE4OGUyMTZiZDI4M2FmMWQ3OWQxNDUyZWY0NjFkNjEyMjA3ZGFhMDRjZTE5MTY2Y2Y2M2ExOTRiZGJjMDdESklGWTlKVWRoT1EwNTdxK3VGUkRTVEp6bzJKd0lZK0VxUVhqZU9oM25QWjhNUFluRWdLWFduazZtZnFqY0FuZTNHT1dBckpSRm1YNVB5MkNsVk5mdz09&plusEmbedTitle=true" width="100%" height="600"></iframe>

### scale()

We can also control the size of things we draw using the [scale()](https://p5js.org/reference/#/p5/push) transformation. 

{{<hint info>}}
***Please note!*** The order of transformation operations matters. You will get very different results depending on the order you translate, rotate and scale.
{{</hint>}}

<iframe src="https://openprocessing.org/sketch/1683572/embed/?plusEmbedHash=OWE3ZDJhZTRmZTRjMjllOWI0MjVhOThmYjdlMTU0ZWI0MWZlNWRmYzZmMDcxOTlkNGRjYzQ5MTg3OGYyMGU1ODJlMTFiMWY0MzQ1MjZjOThiZmU3ZGE2ZGJhYzUyZmQwMTY3YWM0OWY0MDc4OWVlYzZlODgyODliMTEwMmFjOGVScFozZThEcHFtOFFMcHBpZ1RlMmloNWlBcXJQMTZOU2liZ1Q4YmFyOElUNVBvRm9mWkZzZ3NpNEV2RXdmd3BVODRIaWorSUdncGRtUjBYWnZaQzNEQT09&plusEmbedTitle=true" width="100%" height="600"></iframe>

### Transformations stack!

{{<hint danger>}}
***Please note!*** All of the transformations that you do in one frame (one loop of the draw() function) keep on adding on top of each other. Sometimes this could be useful, sometimes it creates lots of confusion and problems.
{{</hint>}}

A useful feature of this stacking would be using the transformation in a for loop. We could say that a shape should rotate 10 degrees more each time that the for loop repeats.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(130,70,120);
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  translate(offsetX,offsetY);
  let num = map(mouseX,0,width,1,36);
  for(let i = 0; i < num; i++){
    rotate(radians(10));
    rect(0,0,100,50);
  }
}
{{</p5js >}}

If we want to draw anything above these shapes–let's say some text connected to the mouse coordinates–we end up with the text also offset and rotated.

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  background(130,70,120);
  noFill();
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  noFill();
  stroke(255);
  translate(offsetX,offsetY);
  let num = map(mouseX,0,width,1,36);
  for(let i = 0; i < num; i++){
    rotate(radians(10));
    rect(0,0,100,50);
  }
  fill(0);
  noStroke();
  text("This is cool!", mouseX, mouseY);
}
{{</p5js >}}

We could try something where we undo all the translations and rotations after drawing the rectangles by repeating the rotations and translate in the negative direction.

```js
  // undo rotations
  for(let i = 0; i < num; i++){
    rotate(radians(-10));
  }
  
  // undo translate
  translate(-offsetX,-offsetY);
```

{{<hint warning>}}
Don't do this, we will learn a better way very soon. It's good to still understand that you can do this.
{{</hint>}}

{{<p5js autoplay=1 width="400" height="400">}}
let offsetX;
let offsetY;

function setup() {
  createCanvas(400, 400);
  background(130,70,120);
  noFill();
  stroke(255);
  strokeWeight(4);
  offsetX = width/2;
  offsetY = height/2;
}

function draw() {
  background(130,70,120);
  noFill();
  stroke(255);
  translate(offsetX,offsetY);
  let num = map(mouseX,0,width,1,36);
  for(let i = 0; i < num; i++){
    rotate(radians(10));
    rect(0,0,100,50);
  }

  // undo rotations
  for(let i = 0; i < num; i++){
    rotate(radians(-10));
  }

  // undo translate
  translate(-offsetX,-offsetY);

  fill(0);
  noStroke();
  text("This is cool!", mouseX, mouseY);
}
{{</p5js >}}

For this simple example, it's not such a complicated thing to do. But what if we want to have lots of different shapes, images or text moving, rotating or scaling independently of each other? Keeping track of all this would get really complicated. Surely there must be some way to get around this issue? The solution is to use [push()](https://p5js.org/reference/#/p5/push) and [pop()](https://p5js.org/reference/#/p5/pop).

### push() and pop()

These two handy functions are used to **save** and **restore** the transformation matrix back to a certain state.

- [push()](https://p5js.org/reference/#/p5/push) tells your program to save whatever the state of the transformation is at that specific point in the code.
- [pop()](https://p5js.org/reference/#/p5/pop) tells your program to restore the state of the transformation matrix to the previously saved state. Meaning the last time you called push().

{{<hint info>}}
You could think of them like layers in Photoshop. Each section of your code that is between the push() and pop() commands is sort of like its own layer.
{{</hint>}}

This example does the following:

- Draw the grid in the background without any transformations
- Draw the green rectangle where the mouse is and rotate it constantly clockwise
- Draw the red rectangle in the middle of the screen and rotate it constantly anti-clockwise
- **Note that the transformations reset back to the origin when the next frame starts**

<iframe src="https://openprocessing.org/sketch/1682880/embed/?plusEmbedHash=ZGYwNzc1ZmY2NTQyYzg1MGNmNmFkMDdlYzQxOTA0MGQ0ZDkxYmY1YzdkYzMzZTZjMjUwODk2MDAyY2JmZmYwM2VmZDUxMjM2OWVlZGYzZmJjMWQzNjAzMTlkY2EwZjUyNjg2MjQyMjk1OWQ0ODQ1YTIyMjkyNmNjZTk5NTA2YzExWUVVK3FuKzJLVGlGVGZJTFg2UFgzbmNJSkhteG9Oc2QvOVpWZU1lK2JlbWgzNytNUk1QOEZkMWpHRTh5VWp0UzQraTJhalFZT1NlMnBnS1l5WTFsQT09&plusEmbedTitle=true" width="100%" height="600"></iframe>

## References and more information

I have been talking about the transformation **matrix**. What is that? Are you expected to choose between a red or blue pill? Is reality just a simulation? Maybe, but none of this has to do with the movie. 

<iframe src="https://openprocessing.org/sketch/408631/embed/?plusEmbedHash=YzBmMDUzYTJhYWViYzJhOGQ4ZTdmMTY4NTE5ODYwYjU5YWQwNWM4MWEwMjg3MWQyZTc4ZmNmMTI3YzliMDhjNDhmZDY1MzI2M2MxYzdmMjE0NGUwYTYyYzE2MWE3MzJlOTliNGIwMmZlYzI3ZGQzZTdmZmUwNDY1YjU1NThkNWFPTzlJa1pENS9MZ3o5QThxNFExSEtySE5RVkJ1N1k5K1NtUGV2Wm9FZUtrWDFvT3pRTHJzYndyQlRUZG4xOXFMMHNwaXdmdXp1Y3ppb1hLbTJjNnNOQT09&plusEmbedTitle=true" width="100%" height="400"></iframe>

You can learn more about transformation matrices on [Wikipedia](https://en.wikipedia.org/wiki/Transformation_matrix).

Does everything on that page look completely alien to you? If so, you can keep on living in the simulation and just ignore all of the technical details. For our purposes this level of understanding that we covered on this page is enough. You do not have to necessarily know all the technical details. That is why we have computers. They can do all the complex technical stuff and we can focus on making something interesting with them.