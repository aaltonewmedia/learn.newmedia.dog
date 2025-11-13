---
title: "Wireless: WiFi, OSC"
bookCollapseSection: false
weight: 30
p5js-widget: true
draft: false
---

## Serial

{{<hint danger>}}
We didn't have time to go through the serial communication, so we start from that part from the [Tuesday's class](../lesson-01/).
{{</hint>}}

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

## Example: OSC controlled robot

### Arduino Code

This code connects to the WiFi router we have in the workshop and sends and receives data between the Pico and your computer.

{{<hint info>}}
Connect to the WiFi in Mechatronics:

- ssid: mainframe
- pwd: 12345678
{{</hint>}}

The code is quite long so it might be easiest to [download it from here.](./files/week_four_robot_osc.zip)

{{< details title="Show the Arduino Code" open=false >}}

```c
// include sensor libraries
#include <Wire.h>
#include <VL53L1X.h>

// include OSC library
#include <ArduinoOSCWiFi.h>

VL53L1X sensor;
int distance;
int distanceThreshold = 300;

// pins for MOTOR 1
int M1_C1 = 2;
int M1_C2 = 3;

// pins for MOTOR 2
int M2_C1 = 6;
int M2_C2 = 7;

// speed of the motors 0-255
int speed = 200;

// WiFi stuff
const char* ssid = "mainframe";
const char* pwd = "12345678";

// for ArduinoOSC
// The IP address below is the IP of the device sending the control signal to your robot (computer, phone etc.)
const char* host = "192.168.50.173";
// port for receiving data
const int recv_port = 12345;
// port for sending
const int publish_port = 54321;

// receive varibale
int direction = 0;

void setup() {
  Serial.begin(115200);
  // change the pins to outputs
  pinMode(M1_C1, OUTPUT);
  pinMode(M1_C2, OUTPUT);
  pinMode(M2_C1, OUTPUT);
  pinMode(M2_C2, OUTPUT);

  // make sure that the motors are stopped in the beginning
  stopAll();

  // Setup the sensor
  Wire.begin();
  Wire.setClock(400000);  // use 400 kHz I2C
  sensor.setTimeout(500);
  if (!sensor.init()) {
    Serial.println("Failed to detect and initialize sensor!");
    while (1);
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
  sensor.startContinuous(33); // time is in milliseconds

  // WiFi ------------------>
  // WiFi stuff (no timeout setting for WiFi)
    WiFi.mode(WIFI_STA);

    // Connect to the WiFi network
    WiFi.begin(ssid,pwd);
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.print("WiFi connected, IP = ");
    Serial.println(WiFi.localIP());

    // publish osc messages (default publish rate = 30 [Hz])
    // publishing the distance value
    OscWiFi.publish(host, publish_port, "/distance", distance)
        ->setFrameRate(60.f);

    // subscribe to receive osc messages that control the robot
    OscWiFi.subscribe(recv_port, "/robot",
        [](const OscMessage& m) {
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

            // take the first value in the message (that should be an int).
            direction = m.arg<int>(0);
        });
}

void loop() {
  // read the sensor data
  sensor.read();
  distance = sensor.ranging_data.range_mm;
  Serial.print("distance:");
  Serial.println(distance);

  // update the OSC sending and receiving
  OscWiFi.update();

  switch (direction) {
    case 0:
      stopAll();
      break;
    case 1:
      goForward();
      break;
    case 2:
      goReverse();
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

  // small delay to slow down the loop
  delay(1);
}

void goForward() {
  motorTwoForward();
  motorOneForward();
}

void goReverse() {
  motorTwoReverse();
  motorOneReverse();
}

void goLeft() {
  motorOneForward();
  motorTwoReverse();
}

void goRight() {
  motorTwoForward();
  motorOneReverse();
}

void stopAll() {
  motorTwoStop();
  motorOneStop();
}

// MOTOR 1

void motorOneForward() {
  analogWrite(M1_C1, speed);
  analogWrite(M1_C2, 0);
}

void motorOneReverse() {
  analogWrite(M1_C1, 0);
  analogWrite(M1_C2, speed);
}

void motorOneStop() {
  analogWrite(M1_C1, 0);
  analogWrite(M1_C2, 0);
}

// MOTOR 2

void motorTwoForward() {
  analogWrite(M2_C1, speed);
  analogWrite(M2_C2, 0);
}

void motorTwoReverse() {
  analogWrite(M2_C1, 0);
  analogWrite(M2_C2, speed);
}

void motorTwoStop() {
  analogWrite(M2_C1, 0);
  analogWrite(M2_C2, 0);
}
```
{{</details>}}

---

### Processing Code

Here you can find the Processing code for controlling the robot using OSC.

Or [download it here.](./files/osc_robot_control_p5/osc_robot_control_p5.pde)

{{< details title="Show the Processing Code" open=false >}}

```java
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
```
{{</details>}}

---

### How to use it?

1. Download or copy the [Arduino code]({{< relref "#arduino-code" >}}) to your Arduino IDE
2. Change the `ssid`and `password` to the network you want to connect to

```c
char ssid[] = "mainframe";      // your network SSID (name)
char pass[] = "12345678";  // your network password (use for WPA, or use as key for WEP)
```

3. Connect your computer to the same WiFi network. Check the IP address of your computer and write it to the Arduino code in the line that says:
```c
// The IP address below is the IP of the device sending the control signal to your robot (computer, phone etc.)
const char* host = "192.168.50.173";
```
4. Upload the Arduino code to your Pico board.
5. Open the Serial Monitor and write down the IP address that gets printed out. You will need it in the Processing code. 
6. Open Processing and copy paste the code above to your sketch
7. Install the oscP5 library. (Sketch --> Import Library --> Manage Libraries --> Search for oscP5)
8. Paste the IP address from step 5 into the line that says:
```java
myRemoteLocation = new NetAddress("192.168.50.213", 12345);
```
8. Run the Processing Sketch
9. Activate the Processing output window by clicking on it. Use the arrow keys on your keyboard to control your robot.

---
