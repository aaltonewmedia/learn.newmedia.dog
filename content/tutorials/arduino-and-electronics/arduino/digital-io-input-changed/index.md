---
title: "Digital Input: Input Changed"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 101
---

The previous code works fine for many things but it has some problems. It’s going to run the code inside your if statements every single loop, which might be undesirable in many cases. Quite often you want your code to only do something once when the input signal has changed. For example, starting to play a sound, triggering some light pattern etc. This example shows how to do something only when the input signal changes.

## Schematic

## Breadboard View

[![Arduino with LED and Button](/images/tutorials/electronics/arduino-button-led-bb.png)](/images/tutorials/electronics/arduino-button-led-bb.png)

## Code

The code below does the following:

- Read the state of a digital input pin
- Check if the state has changed from the previous loop
- Save the current state to a variable called prevBtnState for the next loop

```c
int btnPin = 2;
int btnState = 0;
int prevBtnState = 0;

void setup() {
  // Open the serial port
  Serial.begin(9600);
  // set the button pin to be an input
  pinMode(btnPin, INPUT);
}

void loop() {
  // read the button pin
  btnState = digitalRead(btnPin);

  // check if the button state has changed
  if(btnState != prevBtnState){
    // print the changed state
    Serial.print("Button state changed to: ");
    Serial.println(btnState);
  }

  // save the previous button state for the next loop
  prevBtnState = btnState;
}
```
