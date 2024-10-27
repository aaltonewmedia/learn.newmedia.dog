---
title: "Digital Input: digitalRead()"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 100
---

Reading digital signals with the Arduino or any other microcontroller is quite simple. You can just use the function digitalRead() which returns a HIGH or LOW depending on the voltage of the pin that you read.

## Schematic

## Breadboard View

[![Arduino with LED and Button](/images/tutorials/electronics/arduino-button-led-bb.png)](/images/tutorials/electronics/arduino-button-led-bb.png)

## Code

The code below does the following:

```c
int btnPin = 2;
int ledPin = 9;
int btnState = 0;

void setup() {
  // Open the serial port
  Serial.begin(9600);
  // set the button pin to be an input
  pinMode(btnPin, INPUT);
  // set the LED pin to be an OUTPUT
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the button pin
  btnState = digitalRead(btnPin);
  Serial.print("Button state: ");
  Serial.print(btnState);
  if (btnState == HIGH) {
    digitalWrite(ledPin, HIGH);
  }
  if (btnState == LOW) {
    digitalWrite(ledPin, LOW);
  }
}
```
