---
title: "FRI | Conditional Statements"
bookCollapseSection: false
weight: 30
p5js-widget: false
---

# Week 02 | ...

---

## Inspiration

## switch

### Example

<iframe src="https://openprocessing.org/sketch/1382646/embed/?plusEmbedHash=YmEyOWVlNjVjMzQ0NWM2MjgzMzgzMjQ5NzVjMjI0YmZjODY3OGJkYTA3NWQxNzZmNWZhMjhiOWYwMzM5YzA2ZjY3Y2RmZjU4ZGFjZDMwYTY3NDc2NjEyNDVmYzc0ZTNiY2I2NDk5ODAwMTllNzg5YWQzYTdjMjcwNzE3NWJmMmZlRGFJUkJROEs4N3lYWVVpdTlSTFFNVVZhV3U3NmdCaDB6ajdGOWN1bnI4R0VWeDZnQTJGaE85YUVnZVRDRkxYbVhnSWxyN2lEMVVpa0hPYkZpalFmUT09&plusEmbedTitle=true" width="100%" height="400"></iframe>

{{< hint warning >}}
Using mouseIsPressed and keyIsPressed inside the draw() means that the program looks if they are pressed **every frame**. This might sometimes have unintended consequences. A better way would be to use the mousePressed() and keyPressed() functions. We will go through them in later classes but feel free to explore them already.
{{< /hint >}}

---

## Logical operators && and ||

### Example #03 | Bouncing Ball

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

---

## Resources

- [JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)