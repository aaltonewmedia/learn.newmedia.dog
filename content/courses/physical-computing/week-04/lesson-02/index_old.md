---
title: "Wireless: WiFi, OSC"
bookCollapseSection: false
weight: 30
p5js-widget: true
draft: false
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

---

### Install the ArduinoOSC library

{{<hint info>}}
- [ArduinoOSC](https://github.com/hideakitai/ArduinoOSC)
- The Arduino OSC Library is used to be able to send and receive wireless data from various devices (computer, phone, other microcontrollers)
{{</hint>}}

---

## Example: HTTP Requests

[See this tutorial from Arduino.](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-ap-web-server-rgb)

---

## Example: Simple OSC Send and Receive

{{<hint warning>}}
Note that there are two separate codes here. The two different codes are meant to be uploaded to two different boards.

1. Arduino #1 is the access point and creates a WiFi network
2. Arduino #2 connects to this WiFi network
{{</hint>}}

### Arduino #1: Access Point (AP)

{{< details title="Show the Code" open=false >}}
```c
// Arduino #1
// This Arduino is the Access Point (AP) and creates a WiFi network

#include <ArduinoOSCWiFi.h>

// The name and password of the network
char ssid[] = "physicalcomputing";
char pass[] = "12345678";
int status = WL_IDLE_STATUS;

// The IP of THIS Arduino board
const IPAddress ip(192, 168, 4, 1);
const IPAddress gateway(192, 168, 4, 1);
const IPAddress subnet(255, 255, 0, 0);

// The IP of the OTHER Arduino board
const char* other_ip = "192.168.4.10";
// send and receive ports
const int send_port = 12345;
const int recv_port = 54321;
WiFiUDP Udp;

int light;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
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
  WiFi.config(ip, gateway, subnet);
  status = WiFi.beginAP(ssid,pass);
  Udp.begin(send_port);
  printWifiStatus();
  OscWiFi.publish(other_ip, send_port, "/arduino/ap",light)->setFrameRate(60.f);
  OscWiFi.subscribe(recv_port, "/arduino/client", onOscReceived);
}

void loop() {
  OscWiFi.update();
  light = analogRead(A3);
}

void onOscReceived(const OscMessage& m) {
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

### Arduino #2: Client

{{< details title="Show the Code" open=false >}}
```c
// Arduino #2
// This Arduino connects to the AP

#include <ArduinoOSCWiFi.h>

// The name and password of the network
char ssid[] = "physicalcomputing";
char pass[] = "12345678";

int status = WL_IDLE_STATUS;

// The IP of THIS Arduino board
const IPAddress ip(192, 168, 4, 10);
const IPAddress gateway(192, 168, 4, 1);
const IPAddress subnet(255, 255, 0, 0);

// The IP of the OTHER Arduino board
const char* other_ip = "192.168.4.1";
// send and receive ports
const int send_port = 54321;
const int recv_port = 12345;
WiFiUDP Udp;

int light;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true)
      ;
  }
  // print the network name (SSID);
  Serial.print("Connecting to network: ");
  Serial.println(ssid);
  WiFi.config(ip, gateway, subnet);
  status = WiFi.begin(ssid,pass);
  while (status != WL_CONNECTED) {
        Serial.println("connecting...");
        delay(500);
        status = WiFi.begin(ssid,pass);
  }
  Udp.begin(send_port);
  printWifiStatus();
  OscWiFi.publish(other_ip, send_port, "/arduino/client",light)->setFrameRate(60.f);
  OscWiFi.subscribe(recv_port, "/arduino/ap", onOscReceived);
}

void loop() {
  OscWiFi.update();
  light = analogRead(A3);
}

void onOscReceived(const OscMessage& m) {
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

void printWifiStatus() {
  Serial.println("Connected!");
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

---

## Example: OSC controlled robot

### Arduino Code

This code creates a WiFi network (access point) on the Arduino Uno R4 WiFi and starts listening to OSC messages with the addresses `/direction` and `/speed`. The code also sends the values from the light and distance sensors of our robot.

{{<hint info>}}
The code has been broken into separate tabs so that it is easier to focus on specific functions. You can download the entire project from the link below 

[You can download the entire project](./files/RobotOSCControl.zip) or you can copy paste all of the tabs into a new sketch.

**It might look very complicated at a first glance. Take a deep breath and go through it sections. It combines together many thing we have tried out individually into one larger project.**
{{</hint>}}

{{< tabs "osc-robot" >}}
{{< tab "robot-osc-control.ino" >}}

```c
#include "WiFiS3.h"
#include "ArduinoOSCWiFi.h"
#include "Wire.h"
#include "VL53L1X.h"
#include "Arduino_LED_Matrix.h"   // Include the LED_Matrix library

// Create an instance of the ArduinoLEDMatrix class
ArduinoLEDMatrix matrix;

// Distance sensor
VL53L1X sensor;
int rawDistance;
int distance;
int sensorStatus;
// light sensor
int light;

int direction;
int motorSpeed;

// WiFi AP settings
char ssid[] = "matti";      // your network SSID (name)
char pass[] = "robomatti";  // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;           // your network key index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiUDP Udp;

// WiFi stuff
const IPAddress ip(192, 168, 0, 201);
const IPAddress gateway(192, 168, 0, 1);
const IPAddress subnet(255, 255, 0, 0);

// for ArduinoOSC
const char* host = "192.168.0.202";
const int recv_port = 1234;
const int send_port = 4321;

void setup() {
  // initialize serial communication
  Serial.begin(115200);  
  // Initialize the LED matrix
  matrix.begin();
  // configure the motors
  setupMotors();
  // configure the distance sensor
  setupDistanceSensor();
  // configure WiFi and OSC settings
  setupWifi();
}

void loop() {
  OscWiFi.update();  // should be called to receive + send osc
  readLight();
  readDistance();

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

```

{{< /tab >}}

{{< tab "matrix.ino" >}} 
```c
const uint32_t up[] = {
	0x600f,
	0x1680600,
	0x60060000
};

const uint32_t down[] = {
	0x6006,
	0x601680,
	0xf0060000
};

const uint32_t left[] = {
	0x4008,
	0x1f81f80,
	0x80040000
};

const uint32_t right[] = {
	0x2001,
	0x1f81f80,
	0x10020000
};

const uint32_t heart[] = {
	0x3184a444,
	0x44042081,
	0x100a0040
};
```

{{< /tab >}}


{{< tab "motors.ino" >}}

```c
#define ML_EN 9
#define ML_C1 10
#define ML_C2 11

#define MR_EN 5
#define MR_C1 6
#define MR_C2 7

void setupMotors(){
  pinMode(MR_EN, OUTPUT);
  pinMode(MR_C1, OUTPUT);
  pinMode(MR_C2, OUTPUT);

  pinMode(ML_EN, OUTPUT);
  pinMode(ML_C1, OUTPUT);
  pinMode(ML_C2, OUTPUT);

  motorSpeed = 255;
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  stopAll();
}

void goForward() {
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  leftMotorForward();
  rightMotorForward();
  matrix.loadFrame(up);
}

void goBackward() {
  leftSpeed(motorSpeed);
  rightSpeed(motorSpeed);
  leftMotorBackward();
  rightMotorBackward();
  matrix.loadFrame(down);
}

void goLeft() {
  leftSpeed(motorSpeed/2);
  rightSpeed(motorSpeed/2);
  rightMotorForward();
  leftMotorBackward();
  matrix.loadFrame(left);
}

void goRight() {
  leftSpeed(motorSpeed/2);
  rightSpeed(motorSpeed/2);
  leftMotorForward();
  rightMotorBackward();
  matrix.loadFrame(right);
}

void stopAll() {
  leftMotorStop();
  rightMotorStop();
  matrix.loadFrame(heart);
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
{{< /tab >}}

{{< tab "sensors.ino" >}} 

```c
void setupDistanceSensor(){
  // Setup the sensor
  // Wire1 is used with the Uno R4 WiFi
  Wire1.begin();
  Wire1.setClock(400000);  // use 400 kHz I2C
  sensor.setBus(&Wire1);
  sensor.setTimeout(3300);
  if (!sensor.init()) {
    Serial.println("Failed to detect and initialize sensor!");
    while (1)
      ;
  }

  // ROI settings
  // 195 is the center of the array
  sensor.setROICenter(195);
  int center = sensor.getROICenter();
  Serial.print("ROI center: ");
  Serial.println(center);

  // the smallest size for the ROI is 4x4
  sensor.setROISize(16, 8);

  // Start continuous readings at a rate of one measurement every 33 ms (the
  // inter-measurement period). This period should be at least as long as the
  // timing budget.
  sensor.setDistanceMode(VL53L1X::Long);
  sensor.setMeasurementTimingBudget(33000);  // time is in microseconds
  sensor.startContinuous(33);
}

void readLight() {
  light = analogRead(A0);
}

void readDistance() {
  sensor.read();
  rawDistance = sensor.ranging_data.range_mm;
  sensorStatus = sensor.ranging_data.range_status;
  if (sensorStatus == 0 || sensorStatus == 2) {
    distance = rawDistance;
  }
}
```

{{< /tab >}}

{{< tab "wifi.ino" >}} 
```c
void configureWifi(){
  WiFi.config(ip, gateway, subnet);
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

  Udp.begin(recv_port);
  printWifiStatus();  // you're connected now, so print out the status
  OscWiFi.subscribe(recv_port, "/direction", onDirReceived);
  OscWiFi.publish(host, send_port, "/sensor/light", light)->setFrameRate(60.f);
  OscWiFi.publish(host, send_port, "/sensor/rawdistance", rawDistance)->setFrameRate(60.f);
}

void onDirReceived(const OscMessage& m) {
  direction = m.arg<int>(0);
  Serial.println(direction);
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
}
```
{{< /tab >}}

{{< /tabs >}}

### Processing Code

Here you can find the Processing code for controlling the robot using OSC.

{{< details title="Show the Processing Code" open=false >}}

```java
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
  oscP5 = new OscP5(this, 4321);

  /* myRemoteLocation is a NetAddress. a NetAddress takes 2 parameters,
   * an ip address and a port number. myRemoteLocation is used as parameter in
   * oscP5.send() when sending osc packets to another computer, device,
   * application.
   */
  myRemoteLocation = new NetAddress("192.168.0.201", 1234);
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
    myMessage = new OscMessage("/direction");
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
  if(theOscMessage.checkAddrPattern("/sensor/rawdistance")){
    //println("got distance");
    distance = theOscMessage.get(0).intValue();
    //println("distance: " + distance);
    distanceRect = map(distance,0,4000,0,width/2);
  }
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

3. Upload the Arduino code to your Arduino Uno R4 WiFi board
4. Open Processing and copy paste the code above to your sketch
5. Install the oscP5 library. (Sketch --> Import Library --> Manage Libraries --> Search for oscP5)
6. You should see a WiFi network with the name you defined earlier. Connect to it.
7. Run the Processing Sketch
8. Activate the Processing output window by clicking on it. Use the arrow keys on your keyboard to control your robot.

---

## Bluetooth

[Arduino Tutorial: ArduinoBLE](https://docs.arduino.cc/tutorials/nano-rp2040-connect/rp2040-ble-device-to-device)