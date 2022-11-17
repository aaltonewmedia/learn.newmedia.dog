---
title: "Wireless: WiFi, Bluetooth"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Wireless: WiFi, Bluetooth

---
## WiFi

## OSC (Open Sound Control)

[OSC (Open Sound Control)](https://ccrma.stanford.edu/groups/osc/index.html) is a protocol for communicating among applications and hardware over a network connection. It was originally developed for realtime musical performances.

{{<hint info>}}
I like to think of OSC as the duct tape of new media. Quite often, we have to deal with connecting hardware and software together in unexpected ways. OSC makes this possible.
{{</hint>}}

### Anatomy of OSC Messages

OSC messages are sent over a network so you must define where you want to send your message. You must define the following things:

- IP Address – The IP address of the device where you send your message. If you want to send data from one software to another on your computer, you can use the `localhost` IP address `127.0.0.1`
- Port – The port number where you are sending/receiving your message. This could basically any number, but many ports are reserved for other purposes. Use a 4- or 5-digit number to stay out of the range of most common ports.
  - Example: 7777
- Address Pattern – This usually looks like an URL. It is used to differentiate between different messages you are sending/receiving on one port. You can define the address pattern yourself.
  - Example: /sensor/flex
- The actual message is the data that you are sending/receiving. You have to also define what the data type is (string, int, float etc.) Many OSC implementations take care of the data type

Examples of OSC messages:

```
/sensor/accelerometer/x 0.765
/sensor/accelerometer/y 0.482
/sensor/accelerometer/xyz 0.765 0.482 0.112
/text/matti hello
```

### OSC in p5.js

Ironically, using OSC is not very easy with p5.js although both are dealing dealing with networks.

The problem is that OSC is based on [UDP networking protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol). UDP and OSC are great for things where you want to have the minimum amount of latency and don't want to deal with the extra complications of connecting/disconnecting or error correction. UDP unfortunately is not so well supported in JavaScript.

OSC libraries for JavaScript:

- [p5js-osc](https://github.com/genekogan/p5js-osc) | This works fine, but gives security errors when you use it. These issues are generally not a problem since you generally use OSC on local network and not over the internet. Fairly simple to setup but hasn't been updated for a while.
- [osc.js](https://github.com/adzialocha/osc-js) | Uses websockets to route the OSC data. A little bit harder to get running but this library is actively being developed and updated.

### OSC in Processing

OSC communication in Processing can be done using the [oscP5 library](https://sojamo.de/libraries/oscP5/). You can install it with the Library manager in Processing.

### ZIG SIM

[ZIG SIM](https://zig-project.com/) is an application for your mobile device that allows you to stream many of the sensors from your phone to any other device that is able to receive OSC messages.

Download the app on your mobile device from the app store of your mobile device. The free version works for most of the sensors.

### Debugging OSC Messages

#### Protokol

[Protokol](https://hexler.net/protokol) is an excellent tool for monitoring and debugging OSC, MIDI and Gamepad data. I use it all the time to see what kind of data is being received.

### TUIO

[TUIO](https://www.tuio.org/) is a specific format of OSC messages that were developed originally for the [Reactable](http://reactable.com/) project in 2005.

{{<youtube 0h-RhyopUmc>}}

{{<youtube I9AeUISg-Og>}}

After this initial development, TUIO as a protocol was also implement to many other tangible user interfaces that include multi-touch or object detection.

More information:

- [Reactable](http://reactable.com/)
- [TUIO.org](https://www.tuio.org/)
- [reacTIVision software](https://reactivision.sourceforge.net/)
- [Source Code](https://github.com/mkalten)

{{<hint info>}}
I would not recommend to rely on this technology for new designs but it is a very interesting example and might become useful in some situations even still. [The latest update to the TUIO protocol itself was done in 2014.](http://www.tuio.org/?tuio20)
{{</hint>}}

### Install the ArduinoOSC library

{{<hint info>}}
Note! The official version of the library does not work with the Arduino Nano RP2040 Connect boards. Install this version: [https://github.com/mnstri/ArduinoOSC](https://github.com/mnstri/ArduinoOSC) manually.

1. Go to [https://github.com/mnstri/ArduinoOSC](https://github.com/mnstri/ArduinoOSC)
2. Click the green button that says Code
3. Choose `Download ZIP`
4. Unzip the folder after downloading
5. Rename the folder to just `ArduinoOSC` (remove the -master from the name)
6. Move the folder to your Arduino libraries folder. `~/Documents/Arduino/libraries` on Mac and `C:\Users\{username}\Documents\Arduino\libraries` on Windows.
{{</hint>}}

---

## Example: HTTP Requests

[See this tutorial from Arduino.](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-ap-web-server-rgb)

---

## Example: Simple OSC Send and Receive

### Arduino Code

{{< details title="Show the Arduino Code" open=false >}}
```c
#include <ArduinoOSCWiFi.h>
#include <WiFiNINA.h>

char ssid[] = "matti";
char pass[] = "robomatti";

int status = WL_IDLE_STATUS;

// for ArduinoOSC
const char* host = "192.168.4.2";
const int send_port = 55556;

int light;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true)
      ;
  }
  // print the network name (SSID);
  Serial.print("Creating access point named: ");
  Serial.println(ssid);
  status = WiFi.beginAP(ssid,pass);
  printWifiStatus();
  OscWiFi.publish(host, send_port, "/sensor",light)->setFrameRate(60.f);
}

void loop() {
  OscWiFi.update();
  light = analogRead(A3);
}


void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
}
```
{{</details>}}

### Processing Code

{{< details title="Show the Processing Code" open=false >}}
```java
import netP5.*;
import oscP5.*;
OscP5 oscP5;
int light;
void setup(){
  size(500,500);
  oscP5 = new OscP5(this, 55556);
}

void draw(){
  background(255);
  fill(0);
  textSize(36);
  text(light,100,100);
}

void oscEvent(OscMessage m){
  println(m.addrPattern());
  if(m.checkAddrPattern("/sensor")){
    light = m.get(0).intValue();
  }
}
```
{{</details>}}

---

## Example: OSC controlled robot

### Arduino Code

This code creates a WiFi network (access point) on the Arduino Nano RP2040 Connect and starts listening to OSC messages with the addresses `/direction` and `/speed`. The code also sends the values from the light and distance sensors of our robot.

[Download the code](./files/robot-osc-control.zip) or copy it from below.

{{< details title="Show the Code" open=false >}}

```c
#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoOSCWiFi.h>
#include <Wire.h>
#include <VL53L1X.h>


#define MR_EN 4
#define MR_C1 3
#define MR_C2 2

#define ML_EN 14
#define ML_C1 15
#define ML_C2 16

// Distance sensor
VL53L1X sensor;
int rawDistance;
int distance;
int sensorStatus;

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = "matti";      // your network SSID (name)
char pass[] = "robomatti";  // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;           // your network key index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiServer server(80);

// for ArduinoOSC
const char* host = "192.168.4.2";
const int recv_port = 55555;
const int send_port = 55556;
int direction;
int motorSpeed;

// sensors
int light;

void setup() {

  Serial.begin(9600);  // initialize serial communication

  pinMode(MR_EN, OUTPUT);
  pinMode(MR_C1, OUTPUT);
  pinMode(MR_C2, OUTPUT);

  pinMode(ML_EN, OUTPUT);
  pinMode(ML_C1, OUTPUT);
  pinMode(ML_C2, OUTPUT);

  leftSpeed(255);
  rightSpeed(255);
  stopAll();

    // Setup the sensor
  Wire.begin();
  Wire.setClock(400000);  // use 400 kHz I2C

  sensor.setTimeout(500);
  if (!sensor.init()) {
    Serial.println("Failed to detect and initialize sensor!");
    while (1)
      ;
  }

  // Use long distance mode and allow up to 50000 us (50 ms) for a measurement.
  // You can change these settings to adjust the performance of the sensor, but
  // the minimum timing budget is 20 ms for short distance mode and 33 ms for
  // medium and long distance modes. See the VL53L1X datasheet for more
  // information on range and timing limits.
  sensor.setDistanceMode(VL53L1X::Long);
  sensor.setMeasurementTimingBudget(20000);  // time is in microseconds

  // ROI settings
  // 199 is the center of the array

  sensor.setROICenter(199);
  int center = sensor.getROICenter();
  Serial.print("ROI center: ");
  Serial.println(center);

  // the smallest size for the ROI is 4x4
  sensor.setROISize(16, 4);

  // Start continuous readings at a rate of one measurement every 50 ms (the
  // inter-measurement period). This period should be at least as long as the
  // timing budget.
  sensor.startContinuous(20);

  // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true)
      ;
  }

  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }

  // print the network name (SSID);
  Serial.print("Creating access point named: ");
  Serial.println(ssid);

  // Create network with the ssid and password
  status = WiFi.beginAP(ssid, pass);
  if (status != WL_AP_LISTENING) {
    Serial.println("Creating access point failed");
    // don't continue
    while (true)
      ;
  }
  server.begin();     // start the web server on port 80
  printWifiStatus();  // you're connected now, so print out the status
  OscWiFi.subscribe(recv_port, "/direction", onDirReceived);
  OscWiFi.subscribe(recv_port, "/speed", onSpeedReceived);
  OscWiFi.publish(host, send_port, "/sensor/light", light)->setFrameRate(60.f);
  OscWiFi.publish(host, send_port, "/sensor/distance", rawDistance)->setFrameRate(60.f);
}

void onDirReceived(const OscMessage& m) {
  direction = m.arg<int>(0);
  Serial.print(m.remoteIP());
  Serial.print(" ");
  Serial.print(m.remotePort());
  Serial.print(" ");
  Serial.print(m.size());
  Serial.print(" ");
  Serial.print(m.address());
  Serial.print(" ");
  Serial.print(m.arg<int>(0));
  Serial.println();
}

void onSpeedReceived(const OscMessage& m) {
  motorSpeed = m.arg<int>(0);
  Serial.print(m.remoteIP());
  Serial.print(" ");
  Serial.print(m.remotePort());
  Serial.print(" ");
  Serial.print(m.size());
  Serial.print(" ");
  Serial.print(m.address());
  Serial.print(" ");
  Serial.print(m.arg<int>(0));
  Serial.println();
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
}


void loop() {
  OscWiFi.update();  // should be called to receive + send osc
  readLight();
  readDistance();

  // compare the previous status to the current status
  if (status != WiFi.status()) {
    // it has changed update the variable
    status = WiFi.status();

    if (status == WL_AP_CONNECTED) {
      // a device has connected to the AP
      Serial.println("Device connected to AP");
    } else {
      // a device has disconnected from the AP, and we are back in listening mode
      Serial.println("Device disconnected from AP");
    }
  }

  switch (direction) {
    case 0:
      stopAll();
      break;
    case 1:
      goForward();
      break;
    case 2:
      goBackward();
      break;
    case 3:
      goLeft();
      break;
    case 4:
      goRight();
      break;
    default:
      stopAll();
      break;
  }
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
  // print where to go in a browser:
  Serial.print("To see this page in action, open a browser to http://");
  Serial.println(ip);
}

void readLight() {
  light = analogRead(A3);
  //Serial.print("light: ");
  //Serial.println(light);
}

void readDistance() {
  sensor.read();
  rawDistance = sensor.ranging_data.range_mm;
  sensorStatus = sensor.ranging_data.range_status;

  // only save the reading to distance if the status is valid
  if (sensorStatus == 0 || sensorStatus == 2) {
    distance = rawDistance;
  }
}

void goForward() {
  leftMotorForward();
  rightMotorForward();
}

void goBackward() {
  leftMotorBackward();
  rightMotorBackward();
}

void goLeft() {
  rightMotorForward();
  leftMotorBackward();
}

void goRight() {
  leftMotorForward();
  rightMotorBackward();
}

void stopAll() {
  leftMotorStop();
  rightMotorStop();
}

void leftMotorForward() {
  digitalWrite(ML_C1, HIGH);
  digitalWrite(ML_C2, LOW);
}

void leftMotorBackward() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, HIGH);
}

void leftMotorStop() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, LOW);
}

void rightMotorStop() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, LOW);
}

void rightMotorForward() {
  digitalWrite(MR_C1, HIGH);
  digitalWrite(MR_C2, LOW);
}


void rightMotorBackward() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, HIGH);
}

void leftSpeed(int mSpeed) {
  analogWrite(ML_EN, mSpeed);
}

void rightSpeed(int mSpeed) {
  analogWrite(MR_EN, mSpeed);
}
```
{{</details>}}

### Processing Code

If you don't have processing installed, you can download the application:

- [MacOS](./files/macos-x86_64.zip)
- [Windows](./files/windows-amd64.zip)
- [Linux](./files/linux-amd64.zip)

{{< details title="Show the Processing Code" open=false >}}

```java
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;
int direction = 0;
String directionText = "";
int motorSpeed = 0;
int light;
float brightness;
int distance;
float distanceRect;

void setup() {
  size(400, 400);
  frameRate(25);
  /* start oscP5, listening for incoming messages at port 55556 */
  oscP5 = new OscP5(this, 55556);

  /* myRemoteLocation is a NetAddress. a NetAddress takes 2 parameters,
   * an ip address and a port number. myRemoteLocation is used as parameter in
   * oscP5.send() when sending osc packets to another computer, device,
   * application.
   */
  myRemoteLocation = new NetAddress("192.168.4.1", 55555);
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
  OscMessage myMessage;
  myMessage = new OscMessage("/direction");
  myMessage.add(direction);
  oscP5.send(myMessage, myRemoteLocation);
  fill(255);
  textSize(20);
  text("Speed: " + motorSpeed, 20, 60);
  text("Direction: " + directionText, 20, 90);
  fill(brightness);
  circle(width/2,height/2,50);
  fill(255);
  rect(width/4, height-50, distanceRect, 30);
  text("distance: " + distance, width/4, height-55);
  text("light: " + light, width/2,height/2);
}

/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
  /* print the address pattern and the typetag of the received OscMessage */
  //print("### received an osc message.");
  //print(" addrpattern: "+theOscMessage.addrPattern());
  //println(" typetag: "+theOscMessage.typetag());
  if(theOscMessage.checkAddrPattern("/sensor/light")){
    //println("got light");
    light = theOscMessage.get(0).intValue();
    //println("light: " + light);
    brightness = map(light,0,1023,0,255);
  }
  if(theOscMessage.checkAddrPattern("/sensor/distance")){
    //println("got distance");
    distance = theOscMessage.get(0).intValue();
    //println("distance: " + distance);
    distanceRect = map(distance,0,4000,0,width/2);
  }
}

void mouseMoved() {
  motorSpeed = floor(map(mouseX,0,width,0,255));
  OscMessage myMessage;
  myMessage = new OscMessage("/speed");
  myMessage.add(motorSpeed);
  oscP5.send(myMessage, myRemoteLocation);
}
```
{{</details>}}

### How to use it?

1. Download or copy the [Arduino code]({{< relref "#arduino-code" >}}) to your Arduino IDE
2. Change the `ssid`and `password` to something else

```c
char ssid[] = "matti";      // your network SSID (name)
char pass[] = "robomatti";  // your network password (use for WPA, or use as key for WEP)
```

3. Upload the Arduino code to your Arduino Nano RP2040 Connect board
4. Open Processing and copy paste the code above to your sketch
5. Install the oscP5 library. (Sketch --> Import Library --> Manage Libraries --> Search for oscP5)
6. You should see a WiFi network with the name you defined earlier. Connect to it.
7. Run the Processing Sketch
8. Activate the Processing output window by clicking on it. Use the arrow keys on your keyboard to control your robot.


---

## Bluetooth

[Arduino Tutorial: ArduinoBLE](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-ble-device-to-device)