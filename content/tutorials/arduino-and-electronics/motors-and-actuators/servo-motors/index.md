---
title: Servo Motors
bookCollapseSection: true
p5js-widget: false
draft: false
---

# Servo Motors

---

[![Servo motor](https://newmedia.dog/wp-content/uploads/2019/11/10333-01_1024x1024@2x.jpg)](https://newmedia.dog/wp-content/uploads/2019/11/10333-01_1024x1024@2x.jpg)

- Servo motors usually have 3 wires (VCC,GND,DATA)
- No need for special controlling circuits if you have an Arduino
-  Needs a PWM signal for controlling it
- In Arduino you can use the Servo library
- Small servo motors will be ok to power from the Arduino 5V (max 500 mA), but it is recommended to always use an external power supply
- Standard servo motors are usually limited to a range between 0-180 degrees, but continuous and multi-turn servos also exist

[![Standard Servo](./img/servo-movement.jpg)](./img/servo-movement.jpg)

[![Continuous Servo](./img/servo-movement-continuous.jpg)](./img/servo-movement-continuous.jpg)
