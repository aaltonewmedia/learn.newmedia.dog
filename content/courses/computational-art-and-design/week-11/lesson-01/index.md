---
title: "THU | WebSocket & socket.io"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- November 14, 2024
- 9:15–12:00
- Room 3448 (Marsio)
{{</hint>}}

---

## Using WebSocket

WebSocket is a communication protocol that allows you to

{{<hint info>}}
WebSockets could be used for chat rooms, multiplayer games, collaborative drawing tools etc.
{{</hint>}}

For this class, our server is going to be hosted on a service called Heroku, and all of us will create a client that connects to it. The specific library we use is [socket.io](https://socket.io/) that is based on WebSocket but adds a couple of extra features.

[![socket.io](./img/socketio.jpg)](./img/socketio.jpg)

### socket.io library

Import the socket.io library to your sketch by adding the following line to your `index.html` file.

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
```

### Server

For this class I have made a simple server that receives all incoming messages and broadcasts them to the other clients. See the link in MyCourses. The coding train tutorial shows how you could make your own server.

- [This is the code for the serve I used](https://github.com/mnstri/node-socket.io/tree/main)
- [Documentation here](https://devcenter.heroku.com/articles/node-websockets#option-2-socket-io)

### Client | p5.js code

```js
let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect(""); //Add the server url here. You can find it from Mycourses.
  socket.on('mouse', gotData);
}

function draw() {
  //background(220);
}

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", data);
  // Draw a circle with the defined color
  fill(255,0,0);
  noStroke();
  ellipse(data.x, data.y, 20, 20);
}

function gotData(data) {
  console.log("Got: " + data.x + " " + data.y);
  // Draw a blue circle
  fill(data.c);
  noStroke();
  ellipse(data.x, data.y, 20, 20);
}
```