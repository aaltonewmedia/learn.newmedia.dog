---
title: "Light | Photoresistor (LDR, Light Sensor)"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 100
---

The following circuit can be used to read the values from various sensors, such as the light sensor we are using.

[![LDR Breadboard circuit](https://newmedia.dog/wp-content/uploads/2016/10/Screen-Shot-2016-10-20-at-14.08.58.png)](https://newmedia.dog/wp-content/uploads/2016/10/Screen-Shot-2016-10-20-at-14.08.58.png)

[![LDR Schematic](https://newmedia.dog/wp-content/uploads/2016/10/Screen-Shot-2016-10-20-at-14.12.40.png)](https://newmedia.dog/wp-content/uploads/2016/10/Screen-Shot-2016-10-20-at-14.12.40.png)

```c
// Read and display the value from the light sensor.

int lightSensor = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  lightSensor = analogRead(A0);
  Serial.print("light: ");
  Serial.println(lightSensor);
}
```