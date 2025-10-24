---
title: "FRI | Advanced Animation: noise(), trigonometric functions"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

{{<hint info>}}
- October 24, 2025
- 9:15–12:00
- Room 2420 (Marsio)
{{</hint>}}

## Advanced techniques for animating with code

### setInterval()

[setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) is a convenient JavaSript method for timing things, but it's not often the best when you want to keep things accurate and connected to specific frames or timings in your p5.js project. It can very easily drift or get out of sync with your project that runs at a specific frame rate.

### % remainder

[See the tutorial on the remainder operator](../../../tutorials/p5-js/remainder.md)

### millis()

This technique is very commonly needed with Arduino so you will find this very useful in Physical Computing.

[millis()](https://p5js.org/reference/p5/millis)

```js
let lastTime = 0;
let interval = 1000; // 1 second
function setup(){
  createCanvas(400,400);
}
function draw() {
  if (millis() - lastTime > interval) {
    console.log("tick");
    lastTime = millis();
  }
}
```

### noise()

[See the tutorial on noise()](../../../tutorials/p5-js/noise.md)

### sin(), cos()

[See the tutorial on noise()](../../../tutorials/p5-js/trigonometry.md)