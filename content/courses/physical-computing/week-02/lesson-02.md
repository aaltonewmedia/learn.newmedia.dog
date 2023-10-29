---
title: "Advanced sensors (I2C)"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

## I2C

Benefits of I2C sensors:
- Only two wires needed for communication for the entire bus
- You can daisy chain multiple devices to each other
- Theoretically, you can connect up to 128 devices in one I2C bus.

{{<hint info>}}
I2C is not just for sensors. There are many other types of devices that use I2C as the communication protocol.
{{</hint>}}

### Qwiic/Stemma QT Connectors

The boards we use have a specific connector for easily working with I2C devices. The actual connector is a 4-pin JST SH connector but it is called Qwiic by Sparkfun and STEMMA QT by Adafruit.

Your kit includes three sensors that can be connected using this handy system:

- [MSA301](../../../tutorials/arduino-and-electronics/sensors/accelerometer-msa301/)
- [VL53L1X](../../../tutorials/arduino-and-electronics/sensors/distance-vl53l1x/)

{{<hint info>}}
You don't have to use the Qwiic connectors to work with these sensors. You could solder wires or header pins to them just as well. The connectors are very handy for quick prototyping without worrying about damaging the sensors.
{{</hint>}}

## Built-in Sensors in the Arduino Nano RP2040 Connect

The Arduino Nanon Rp2040 Connect has these sensors built-in:
- [LSM6DSOX IMU](https://www.arduino.cc/reference/en/libraries/arduino_lsm6dsox/)
- [MP34DT05 Microphone](https://docs.arduino.cc/learn/built-in-libraries/pdm)

---

## Related Tutorials