---
title: "FRI | Arrays"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

## Arrays

[Arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp) enable you to store multiple values under a single variable name. [JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are really flexible and allow you to do many things that are not possible with arrays in many other programming languages:

- JavaScript arrays can be resized
- JavaScript arrays can contain a mix of different data types. [There are also special arrays that only contain specific data types.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

### Declaring

There are two ways to declare an array

```js
let arr = new Array();
let arr = [];
```

Usually, you will use the second option and you can already add elements to the array.

```js
let cities = ["Helsinki", "Espoo", "Vantaa"];
```

You can get each element in the array by using its index number in square brackets:

```js
let cities = ["Helsinki", "Espoo", "Vantaa"];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
```

{{<hint warning>}}
Remember that we start counting from 0!
{{</hint>}}

{{<p5js autoplay=1 width="200" height="400">}}
let cities = ["Helsinki", "Espoo", "Vantaa"];

function setup(){
  createCanvas(200, 200);
}

function draw() {
  background(130,80,120);
  fill(255);
  text(cities[0], 20, 20);
  text(cities[1], 20, 40);
  text(cities[2], 20, 60);
}

{{</p5js >}}

{{<hint warning>}}
It is recommended to use `const` when you declare arrays. But I will generally just use `let` in this class to keep things simple. [You can learn more about const here.](https://www.w3schools.com/js/js_const.asp). If you want to start following best practices right from the beginning, you can start using `const` with arrays, but you can also use `let` for now (it will work just fine in all cases that we will run into during this course) and come back to this when you feel like you are ready to start learning JavaScript on a bit more in-depth level. We will come back to this topic later, since there are some confusing things about the differences between `let` and `const` that we are not really prepared to discuss in detail yet.

For example:

```js
const cities = ["Helsinki", "Espoo", "Vantaa"];
```
{{</hint>}}




### Modifying the array

You can change each individual element like you would a normal variable:

```js
let cities = ["Helsinki", "Espoo", "Vantaa"];
cities[2] = "Rovaniemi"; 
console.log(cities); // now ["Helsinki", "Espoo", "Rovaniemi"]
```

Or you can add a new element:

```js
let cities = ["Helsinki", "Espoo", "Vantaa"];
cities[3] = "Inari";
console.log(cities); // now ["Helsinki", "Espoo", "Vantaa", "Inari"]
```

### Length of the array (length)

You can get the total length of the array using `length`

```js
let cities = ["Helsinki", "Espoo", "Vantaa"];
console.log(cities.length); // prints out 3
```

## Using for loops with arrays

Since we learned how to use for loops in the previous lesson, we are able to loop through all of the elements in an array in a convenient way.

{{<p5js autoplay=1 width="200" height="400">}}
let cities = ["Helsinki", "Espoo", "Vantaa"];

function setup(){
  createCanvas(200, 200);
}

function draw() {
  background(130,80,120);
  fill(255);
  
  for(let i = 0; i < cities.length; i++){
    let x = 20;
    let y = 20 + i * 20;
    text(cities[i], x, y);
  }
}
{{</p5js >}}

We can use multiple arrays to store different properties. For example, let's try to draw a bunch of randomly placed shapes on the screen. We can create an array for the ```x``` coordinates of our shapes.

```js
let x = [];
```

We can use a for loop in the setup part of our code to fill the array with random values. Note that I added another variable called ```num``` so that we can easily change how many elements we have in the array.

```js
let num = 10;
let x = [];

// this for loop goes to the setup function:
for(let i = 0; i < num; i++){
  x[i] = random(width);
}
```

{{<p5js autoplay=1 width="200" height="400">}}
let num = 10; // how many shapes do we want 
let x = [];

function setup(){
  createCanvas(200, 200);
  // we can use a for loop to fill the array with random values
  for(let i = 0; i < num; i++){
    x[i] = random(width);
  }
}

function draw() {
  background(130,80,120);
  noFill();
  stroke(255);
  
  for(let i = 0; i < num; i++){
    circle(x[i], 100, 20);
  }
}
{{</p5js >}}

This seems to work, so we can do the same thing for the ```y``` and the size ```s``` of the circles.

{{<p5js autoplay=1 width="200" height="400">}}
let num = 10; // how many shapes do we want 
let x = [];
let y = [];
let s = [];

function setup(){
  createCanvas(200, 200);
  // we can use a for loop to fill the array with random values
  for(let i = 0; i < num; i++){
    x[i] = random(width);
    y[i] = random(height);
    s[i] = random(10,30);
  }
}

function draw() {
  background(130,80,120);
  noFill();
  stroke(255);
  
  for(let i = 0; i < num; i++){
    circle(x[i], y[i], s[i]);
  }
}
{{</p5js >}}

{{<hint info>}}
Once we learn about objects, we can do this in a more efficient way.
{{</hint>}}

Now that we have a way to keep track of the coordinates of each circle using arrays, we can start modifying those values. For example, let's add the random walk behavior to each circle.

```js
for(let i = 0; i < num; i++){
  x[i] = x[i] + random(-3,3);
  y[i] = y[i] + random(-3,3);
  circle(x[i], y[i], s[i]);
}
```

{{<p5js autoplay=1 width="200" height="400">}}
let num = 10; // how many shapes do we want 
let x = [];
let y = [];
let s = [];

function setup(){
  createCanvas(200, 200);
  // we can use a for loop to fill the array with random values
  for(let i = 0; i < num; i++){
    x[i] = random(width);
    y[i] = random(height);
    s[i] = random(10,30);
  }
}

function draw() {
  background(130,80,120);
  noFill();
  stroke(255);
  
  for(let i = 0; i < num; i++){
    x[i] = x[i] + random(-3,3);
    y[i] = y[i] + random(-3,3);
    circle(x[i], y[i], s[i]);
  }
}
{{</p5js >}}

## Example: Lots of bouncing balls

{{<p5js autoplay=1 width="200" height="400">}}
let num = 10; // how many shapes do we want 
let x = [];
let y = [];
let xVel = [];
let yVel = [];
let s = [];

function setup(){
  createCanvas(200, 200);
  // we can use a for loop to fill the array with random values
  for(let i = 0; i < num; i++){
    // the starting point is the middle of the screen
    // so that the circles don't get stuck to the walls
    x[i] = width/2;
    y[i] = height/2;
    s[i] = random(10,30);
    xVel[i] = random (-5,5);
    yVel[i] = random (-5,5);
  }
}

function draw() {
  background(130,80,120);
  noFill();
  stroke(255);

  // We do the for loop twice
  // First one deals with the animation of the shapes
  // The second one just draws them
  // You could do both in the same loop but this structure makes things a bit clearer
  
  // 1st loop, update the values
  for(let i = 0; i < num; i++){
    x[i] = x[i] + xVel[i];
    y[i] = y[i] + yVel[i];

    if(x[i] >= width - s[i]/2 || x[i] <= s[i]/2){
      xVel[i] = -xVel[i];
    }

     if(y[i] >= height - s[i]/2 || y[i] <= s[i]/2){
      yVel[i] = -yVel[i];
    }
  }

  // 2nd loop, draw
  for(let i = 0; i < num; i++){
    circle(x[i], y[i], s[i]);
  }
}
{{</p5js >}}

## References

- [JavaScript array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaSript Array tutorial from javascript.info](https://javascript.info/array)

---

## Homework

Practice using the for loop and arrays. You are free to experiment with any of the things we have learned so far but combine it with the for loop. Or make adjustments to the examples we created in class.

{{<hint info>}}
If you don't have any ideas on what do do, you can try to do one of the following:
1. Use the for loop to draw a grid of shapes that each should have a unique random attribute color, size, strokeWeight etc.
2. Do the bouncing ball example, but with 1000 shapes that change their color individually when they hit the wall.
 
{{</hint>}}