---
title: "Touch | Capacitive"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 100
---

Capacitive sensing is based on the fact that your body is able to store an electric charge. You can use almost any conductive object as a sensor with just one wire connecting the object to the microcontroller/sensor.

- [CapacitiveSensor Library](https://github.com/PaulStoffregen/CapacitiveSensor) – Works with most microcontrollers. Requires a couple of extra components.
- Teensy Touch Pins – [The Teensy microcontrollers](https://www.pjrc.com/teensy/) have built in functionality for capacitive sensing. Use touchRead() on a pin that has the hardware capability for touch sensing.
- [MPR121](https://learn.adafruit.com/adafruit-mpr121-12-key-capacitive-touch-sensor-breakout-tutorial) – A commonly used capacitive sensor. You can connect 12 individual conductive objects as sensors to it.
- [Trill touch sensors](https://bela.io/products/trill/) – High quality capacitive sensors that come in different forms. The Trill Craft can be used to connect up to 30 sensors to one board.