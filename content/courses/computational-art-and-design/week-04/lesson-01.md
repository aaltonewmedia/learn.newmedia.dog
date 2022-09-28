---
title: "Images & Video"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 04 | Images & Video

---

## Working with images

## Working with video

### Video files

### Live video

```js
function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  // you can use this to hide the video preview under the canvas
  capture.hide();
}

function draw() {
  background(220);
   image(capture, 0, 0, width, width * capture.height / capture.width);
}
```

<iframe src="https://openprocessing.org/sketch/1672488/embed/?plusEmbedHash=MWJmOGRlMWUxMjU4MzFmMjUwNjJjMzU3YjI0MmY5ZTBkY2FjZTJhZDAwOTU1NzJiNTg3YzczNGU5ZGNlNDgwYTQ0NjJiYWQ3MjcyYTNjMzVmYjkwNzYwNWFmNWNhNmNiYTY1ZGEyZWRjNjdkMTZjMTVmNjJlOTUyYTMxZGU1MGFoRGkyUUo5WGwyYi8zMTk1UGUzT3J0ck5ZWmpuN0l2OTZza3laVWZMQmE0eFlqT2xVcWRGMHFrdU1KbjdBdjNuMEtybTE1cGtkc1FOWEluaWcyZ0xQUT09&plusEmbedTitle=true" width="400" height="400"></iframe>