import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;
int direction = 0;
int prevDirection = -1;
String directionText = "";
int light;
float brightness;
int distance;
float distanceRect;

void setup() {
  size(400, 400);
  frameRate(60);
  /* start oscP5, listening for incoming messages at port 55556 */
  oscP5 = new OscP5(this, 54321);

  /* myRemoteLocation is a NetAddress. a NetAddress takes 2 parameters,
   * an ip address and a port number. myRemoteLocation is used as parameter in
   * oscP5.send() when sending osc packets to another computer, device,
   * application.
   */
  myRemoteLocation = new NetAddress("192.168.50.213", 12345);
}


void draw() {
  background(0);
  if (keyPressed) {
    if (key == CODED) {
      switch(keyCode) {
      case UP:
        direction = 1;
        directionText = "Forward";
        break;
      case DOWN:
        direction = 2;
        directionText = "Backward";
        break;
      case LEFT:
        direction = 3;
        directionText = "Left";
        break;
      case RIGHT:
        direction = 4;
        directionText = "Right";
        break;
      }
    }
  } else {
    direction = 0;
    directionText = "Stop";
  }
  if(direction!=prevDirection){
    OscMessage myMessage;
    myMessage = new OscMessage("/robot");
    myMessage.add(direction);
    oscP5.send(myMessage, myRemoteLocation);
  }
  prevDirection=direction;
  fill(255);
  textSize(20);
  text("Direction: " + directionText, 20, 90);
  fill(brightness);
  circle(width/2,height/2,50);
  fill(255);
  rect(width/4, height-50, distanceRect, 30);
  text("distance: " + distance, width/4, height-55);
}

/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
  /* print the address pattern and the typetag of the received OscMessage */
  //print("### received an osc message.");
  //print(" addrpattern: "+theOscMessage.addrPattern());
  //println(" typetag: "+theOscMessage.typetag());
  if(theOscMessage.checkAddrPattern("/distance")){
    //println("got distance");
    distance = theOscMessage.get(0).intValue();
    //println("distance: " + distance);
    distanceRect = map(distance,0,4000,0,width/2);
  }
}
