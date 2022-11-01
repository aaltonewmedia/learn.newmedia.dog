---
title: "Simple Sensors"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# 02 | Simple Sensors

---

## Inspiration

{{<vimeo 59829961>}}
{{<vimeo 48937359>}}

- [Peter Vogel](http://vogelexhibition.weebly.com/)
- [Yuri Suzuki](https://www.yurisuzuki.com/)
- [Mohit Bhoite](https://www.bhoite.com/sculptures/)
- [Tim Hunkin](https://www.timhunkin.com/)
  - [The Secret Life of Machines](https://www.secretlifeofmachines.com/)
  - [Watch the episodes](https://www.exploratorium.edu/ronh/SLOM/)

## Variable resistors

Many sensors are just variable resistors that change their resistance value based on some external input (light, temperature, force etc.). The Arduino is not able to read the change in resistance directly, but we can convert that resistance change into a change in voltage using a voltage divider.

### Voltage Divider | Converting resistance to voltage

If you connect two resistors in series as in the image below, the voltage read from Vout depends on the ratio of the two resistors. Read the [Wikipedia article](https://en.wikipedia.org/wiki/Voltage_divider) or check [this tutorial from Sparkfun](https://learn.sparkfun.com/tutorials/voltage-dividers/all), if you want to learn how to calculate the values.

[![Voltage Divider](/images/tutorials/electronics/voltage-divider.jpg)](/images/tutorials/electronics/voltage-divider.jpg)

## Sensors with analog output

There are also many sensors that have an analog outpput. Analog in this case meaning that they are directly outputting a varyying level of voltage

---

## References

There are various sites that list out sensors:

- [Aalto New Media: Sensors tutorials.](../../../tutorials/arduino-and-electronics/sensors/) The tutorials on this site. Specifically focusing on components we have in our kits and otherwise available.
- [sensorwiki.org](https://sensorwiki.org/) by The Working Group on Interactive Systems and Instrument Design in Music (ISIDM)

I find it useful to browse some online shops that sell sensor boards to get an understanding what kind of things are possible. 

- [Adafruit sensors](https://www.adafruit.com/category/35)
- [Sparkfun sensors](https://www.sparkfun.com/categories/23)

