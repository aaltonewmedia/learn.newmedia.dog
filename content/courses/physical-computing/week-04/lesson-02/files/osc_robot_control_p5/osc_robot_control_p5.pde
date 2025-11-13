import processing.serial.*;

Serial myPort;  // Create object from Serial class
String str;      // Data received from the serial port
float x,y,z;
float circleX;
float circleY;
float s=100;
void setup(){
  size(500, 500);
  // Open whatever port is the one you're using.
  // Change the 0 in  Serial.list()[0] to the correct device
  printArray(Serial.list());
  String portName = Serial.list()[5];
  myPort = new Serial(this, portName, 115200);
}

void draw(){
  if ( myPort.available() > 0) {  // If data is available,
    str = myPort.readStringUntil('\n');         // read it and store it in str
    if(str != null){
      String[] splitData = split(str, ",");
      x = float(splitData[0]);
      y = float(splitData[1]);
      z = float(splitData[2]);
      circleX = map(x,-2000,2000,0,width);
      circleY = map(y,-2000,2000,0,height);
    }
  }
  background(130,70,90);   
  fill(255);
  text("x: " + x,20,20);
  text("y: " + y,20,40);
  text("z: " + y,20,60);
  circle(circleX, circleY, s);
}
