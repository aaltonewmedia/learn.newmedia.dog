---
title: "Advanced sensors (I2C)"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

## Inspiration

{{<vimeo 20897840>}}

{{<vimeo 3737365>}}

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

Your kit includes four sensors that can be connected using this handy system:

- [Accelerometer | MSA301](../../../tutorials/arduino-and-electronics/sensors/accelerometer-msa301/)
- [Distance Sensor | VL53L1X](../../../tutorials/arduino-and-electronics/sensors/distance-vl53l1x/)
- [Temperature and Humidity Sensor | AHT20](../../../tutorials/arduino-and-electronics/sensors/temperature-and-humidity-aht20/)
- [Magnetometer | TLV493D](../../../tutorials/arduino-and-electronics/sensors/magnetometer-tlv493d/)
- [Proximity, Light, RGB, and Gesture Sensor | APDS9960 ](../../../tutorials/arduino-and-electronics/sensors/proximity-gesture-light-rgb-apds9960/)
- [Capacitive Touch Sensor | MPR121](../../../tutorials/arduino-and-electronics/sensors/touch-capacitive-mpr121/)

{{<hint info>}}
You don't have to use the Qwiic connectors to work with these sensors. You could solder wires or header pins to them just as well. The connectors are very handy for quick prototyping without worrying about damaging the sensors.
{{</hint>}}

---

## Deliverables for Week 2

[See the landing page for this week](./)