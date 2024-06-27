let ws = new WebSocket("wss://newmedia-dog-cc8c45e11fe4.herokuapp.com/:443");
let sliderId = Math.floor(Math.random() * 1000);
let lastDataSentTime = Date.now();
const timeoutDuration = 10000;

let controllTD = document.querySelector(".controllTD");
controllTD.addEventListener(
  "input",
  (event) => {
    ws.send(
      JSON.stringify({
        type: "update",
        x: controllTD.value / 100,
        sliderId: sliderId,
      })
    );
    lastDataSentTime = Date.now(); // Update the last data submission time
  },
  false
);

let controlledByTD = document.querySelector(".controlledByTD");

function checkTimeout() {
  const currentTime = Date.now();
  if (currentTime - lastDataSentTime > timeoutDuration) {
    // It has been more than 10 seconds since the last data submission
    sendDeleteCommand();
    lastDataSentTime = Date.now(); // Timer reset
  }
}

function sendDeleteCommand() {
  var data = {
    type: "delete",
    sliderId: sliderId,
  };
  data = JSON.stringify(data);
  console.log("Sending delete command:", data);
  ws.send(data);
}

setInterval(checkTimeout, 1000); // Check every second

ws.addEventListener("open", (event) => {
  console.log("Socket connection open");
  // alert('Successfully connected to socket server 🎉');
  ws.send("pong");
});

ws.addEventListener("message", (message) => {
  if (message && message.data) {
    if (message.data === "ping") {
      console.log("got ping");
      ws.send("pong");
      return;
    }
    let data = JSON.parse(message.data);
    if (data) {
      if ("slider1" in data) {
        controlledByTD.value = data["slider1"] * 100;
      }
      console.log("got data", data);
    }
  }
  console.log("message", message);
});

ws.addEventListener("error", (error) => {
  console.error("Error in the connection", error);
  alert("error connecting socket server", error);
});

ws.addEventListener("close", (event) => {
  console.log("Socket connection closed");
  alert("closing socket server");
});
