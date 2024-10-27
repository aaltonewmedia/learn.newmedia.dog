---
title: "Analog Input: map() and constrain()"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 230
---

## map()

Arduino has a a very useful [map()](https://www.arduino.cc/reference/en/language/functions/math/map/) function that might be familiar to you from Processing or p5.js.  

```c
int sensorValue;
int mappedValue;

sensorValue = analogRead(A0);
mappedValue = map(sensorValue, 0, 1023, 0, 255);
```

## constrain()

The map() function only scales the values from one range to another, it does not clamp or constrain the values to the range that you have set. Fortunately, there is also [constrain()](https://www.arduino.cc/reference/en/language/functions/math/constrain/) that we can use. Just add it after your map() like in the example below.

```c
int sensorValue;
int mappedValue;

sensorValue = analogRead(A0);
mappedValue = map(sensorValue, 0, 1023, 0, 255);
mappedValue = constrain(mappedValue, 0, 255);
```