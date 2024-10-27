---
title: "Analog Input: Simple Threshold"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 200
---

Often the simplest way to work with analog values is to check if the signal has risen above a certain threshold value. This can be done with a simple if statement.

## Code

```c
int lightValue;
int threshold = 320;
// trigger variable is used to visualize the output on the plotter
int trigger = 0;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  lightValue = analogRead(A0);
  if (lightValue > threshold) {
    digitalWrite(9, HIGH);
    trigger = 1023;
  } else {
    digitalWrite(9, LOW);
    trigger = 0;
  }

  // 0 and 1023 are printed to make sure the plotter doesn't autoscale
  Serial.println("Min:0, Max:1023");

  Serial.print(lightValue);
  Serial.print(" ");
  Serial.print(threshold);
  Serial.print(" ");
  Serial.println(trigger);
  delay(10);
}
```
