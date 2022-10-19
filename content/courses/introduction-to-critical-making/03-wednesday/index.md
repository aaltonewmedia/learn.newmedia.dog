---
title: "WED | Electronics + Programming"
bookCollapseSection: false
weight: 30
draft: false
---

# Introduction to Critical Making

---

{{<hint info>}}
- October 19, 2022
- Room H003
- 9:15–17:00
{{</hint>}}

---

## Programming the Arduino boards

We are going to use the [Arduino software](https://www.arduino.cc/) and the [Arduino MKR1000](https://docs.arduino.cc/hardware/mkr-1000-wifi) boards for our project.

### Install board files and libraries

First we need to install some files so our code will work with this specific Arduino model.

1. Launch the Arduino IDE
2. Go to Tools --> Board --> Board Manager
3. Search for ```Arduino MKR1000```
4. It should find something called ```Arduino SAMD Boards (32-bits ARM Cortex-M0+)```. Select it and click ```Install```.

Then we need to install the ```WiFi101 Library``` to be able to use the WiFI chip on our board.

1. Go to Sketch --> Include Library --> Manage Libraries
2. Search for "WiFi101"
3. Chose the on that is called ```WiFi101``` made by Arduino and install it

Ok, setup done!

### Testing the code

First we need to test that our boards work. Let's use a very simple code for that. Create a new file and copy this code to the window.

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 6 as an output.
  pinMode(6, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(6, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(6, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

Upload the code:

1. Select the correct board model by going to: Tools --> Board --> Arduino SAMD... --> MKR1000
2. Select the correct port bt going to: Tools --> Port --> (this port depends on your computer, on Windows it will be COM followed by a number, most likely the highest number in the list.)
3. Click the Upload button (arrow pointing to the right)

### Soldering

### Reading a button

### Code for our IoT device

For this code to work, you need to update the line that says:

```c
#define IFTTT_Key ""
```

Write your personal IFTTT Webhooks key there between the quotation marks. [Where to find your key?](./03-wednesday/#where-to-find-the-ifttt-webhook-key)

```c
/* This program creates a panic button using an Arduino MKR1000 and IFTTT service. When button is pushed LED flashes and a notification, SMS, VOIP call or phonecall is initiated. It uses code from Robert 7320 for the LED and button www.instructables.com/id/5-Simple-Button-and-Led-Projects-with-Arduino/
  Additional code from Rui Santos for his version of an ESP8266 panic button www.randomnerdtutorials.com/esp8266-wi-fi-button-diy-amazon-dash-button-clone/
*/
#include <WiFi101.h>
#include <WiFiUdp.h>
#include <SPI.h>

// Set IFTTT Webhooks event name and key
#define IFTTT_Key "" // add your IFTT key here
#define IFTTT_Event "button_pressed"    // write the name of the event you creaeted
String IFTTT_Value1 = "Matti";
String IFTTT_Value2 = "milliseconds: ";
String IFTTT_Value3 = "counter: ";
int counter = 0;

const char* ssid = "aalto open";   // Your network SSID (name)
const char* password = "";  // Your network password (use for WPA, or use as key for WEP)

// Unique IFTTT URL resource

int LED = 6;  //declaring pin for LED
int BUTTON = 5;  //declaring pin for button
// Maker Webhooks IFTTT
const char* server = "maker.ifttt.com";

WiFiClient client;

void setup() {
  Serial.begin(115200);  //set rate of serial monitor
  // check for the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present, stopping.");
    // don't continue:
    while (true);
  }
  initWifi();
  //makeIFTTTRequest();

  pinMode(LED, OUTPUT); //set LED pin as output
  pinMode(BUTTON, INPUT_PULLUP); //set button pin as input
  pinMode(4, OUTPUT); //set button pin as input
  digitalWrite(4, LOW);
}
// this loop looks for a button push and if happens
//blinks LED and runs IFTTT request loop (otherwise LED off)
void loop() {
  if (digitalRead(BUTTON) == LOW) {
    digitalWrite(LED, HIGH);
    delay (200);
    initWifi();
    counter++;
    //IFTTT_Value1 = "Matti";
    IFTTT_Value2 = "milliseconds: " + String(millis());
    IFTTT_Value3 = "counter: " + String(counter);
    send_webhook();
    digitalWrite(LED, LOW);
  } else {
    digitalWrite(LED, LOW);
  }
}
// this loop helps for debugging Wifi connection
//and initiates Wifi

void initWifi() {
  Serial.print("Connecting to: ");
  Serial.print(ssid);
  //WiFi.begin(ssid);
  //delay(1000);
  int timeout = 10 * 4; // 10 seconds
  while (WiFi.status() != WL_CONNECTED ) {
    WiFi.begin(ssid);
    Serial.print(".");
    delay(5000);
  }
  Serial.println("");

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Failed to connect, going back to sleep");
  }

  Serial.print("WiFi connected in: ");
  Serial.print(millis());
  Serial.print(", IP address: ");
  Serial.println(WiFi.localIP());
}

void send_webhook() {
  Serial.print("Connecting to ");
  Serial.print(server);
  // construct the JSON payload
  String jsonString = "";
  jsonString += "{\"value1\":\"";
  jsonString += IFTTT_Value1;
  jsonString += "\",\"value2\":\"";
  jsonString += IFTTT_Value2;
  jsonString += "\",\"value3\":\"";
  jsonString += IFTTT_Value3;
  jsonString += "\"}";
  int jsonLength = jsonString.length();
  String lenString = String(jsonLength);
  // connect to the Maker event server
  client.connect(server, 80);
  // construct the POST request
  String postString = "";
  postString += "POST /trigger/";
  postString += IFTTT_Event;
  postString += "/with/key/";
  postString += IFTTT_Key;
  postString += " HTTP/1.1\r\n";
  postString += "Host: maker.ifttt.com\r\n";
  postString += "Content-Type: application/json\r\n";
  postString += "Content-Length: ";
  postString += lenString + "\r\n";
  postString += "\r\n";
  postString += jsonString; // combine post request and JSON

  client.print(postString);
  delay(500);
  int timeout = 5 * 10; // 5 seconds
  while (!!!client.available() && (timeout-- > 0)) {
    delay(100);
  }
  if (!!!client.available()) {
    Serial.println("No response, going back to sleep");
  }
  while (client.available()) {
    Serial.write(client.read());
  }
  Serial.println("\nclosing connection");
  client.stop();
}

```

---

## Setting up IFTTT

Connect some services to your IFTTT. The next step depends on what services you have available. I'm going to use Telegram for this example. You can use something else also. Of course only enable services that you are comfortable connecting. Or create new account for Twitter or some other service for the purposes of this course.

### Connect Telegram

1. [Search for Telegram in the Services](https://ifttt.com/telegram)
2. Connect
3. Follow the instructions to connect your Telegram account

### Button widget for your mobile device

The easiest way for us to start prototyping this idea of a button that does something is the Button widget available on the IFTTT mobile app.

[See the instructions here.](https://help.ifttt.com/hc/en-us/articles/115010361688-How-do-I-manage-or-add-new-widgets-on-my-device-)

### Create an applet for our Arduino MKR1000

1. Click ```Create```
2. Click ```Add``` on the ```If This``` section
3. Search for ```Webhooks```
4. Select ```Receive a web request with a JSON payload```
5. Write ```button_pressed``` in the ```Event Name``` box
6. Press ```Create Trigger```

The next step depends on what services you have available. I'm using Telegram, which I enabled earlier. Email is the easiest to setup without any additional accounts.

1. Click ```Add``` on the ```Then That``` section
2. Search for Telegram and click it
3. Choose ```Send message``` (or something else if you want to)
4. Your account should be available and selected in the ```Telegram account```
5. Select the ```Target chat``` and choose Private chat with @IFTTT or a group or channel that you admin
6. ```Message text``` can be as is for now, you can change it later.
7. Choose ```Enabled```for ```Include web page preview?```
8. ```Create action```
9. Then click ```Continue``` on the next page.
10. On the last page, you can change the name if you want to. Click ```Finish``` when you are done.

### Where to find the IFTTT Webhook key?

1. Go to [IFTTT Webhooks service page](https://ifttt.com/maker_webhooks)
2. Click ```Documentation```
3. On the top of the page, it says: ```Your key is: ...```
4. Copy the key to your [Arduino code](./03-wednesday/#code-for-our-iot-device)

---



---

## Independent work

- Finish your model for 3D printing
- Prepare the model for 3D printing using Cura