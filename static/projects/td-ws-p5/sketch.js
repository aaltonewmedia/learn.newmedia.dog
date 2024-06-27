let ws = new WebSocket("wss://newmedia-dog-cc8c45e11fe4.herokuapp.com/:443");
let id;
let lastDataSentTime = Date.now();
const timeoutDuration = 10000;
setInterval(checkTimeout, 1000); // Check every second
let alive;

function checkTimeout() {
  const currentTime = Date.now();
  if (currentTime - lastDataSentTime > timeoutDuration) {
    // It has been more than 10 seconds since the last data submission
    sendDeleteCommand();
    lastDataSentTime = Date.now(); // Timer reset
  }
}

function sendDeleteCommand() {
  let data = {
    type: "delete",
    sliderId: id,
  };
  data = JSON.stringify(data);
  console.log("Sending delete command:", data);
  ws.send(data);
  alive = false;
}


ws.addEventListener("open", (event) => {
  console.log("Socket connection open");
  // alert('Successfully connected to socket server 🎉');
  ws.send("pong");
  loop();
  alive = true;
});

ws.addEventListener("message", (message) => {
  if (message && message.data) {
    if (message.data === "ping") {
      console.log("got ping");
      ws.send("pong");
      return;
    }
  }
  //console.log("message", message);
});

ws.addEventListener("error", (error) => {
  console.error("Error in the connection", error);
  alert("error connecting socket server", error);
});

ws.addEventListener("close", (event) => {
  console.log("Socket connection closed");
  alert("closing socket server");
});

function setup() {
  createCanvas(400, 400);
  id = floor(random(1000));
  noLoop();
}

function draw() {
  background(220);
  //let x_val = mouseX;
  if(alive){
    circle(mouseX,mouseY,100);
    for (let touch of touches) {
      circle(touch.x, touch.y, 40);
    }
  }
}

function mouseMoved(){
  alive = true;
  let data = {
    type: "update",
    x: mouseX,
    y: mouseY,
    sliderId: id};
  //console.log(data);
  sendWS(data);
}

function touchMoved(){
  for (let i = 0; i<touches.length; i++) {
    if(i==0){
      let data = {
        type: "update",
        x: touches[i].x,
        y: touches[i].y,
        sliderId: id};
    }
  }
  sendWS(data);
}

function sendWS(data){
  if(ws.readyState !== WebSocket.CLOSED){
    ws.send(JSON.stringify(data));
    lastDataSentTime = Date.now();
  }
}