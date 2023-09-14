---
title: Distance | VL53L1X
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 100
---

# Distance | VL53L1X

---

## Features

The VL53L1X is a Time of Flight (ToF) module that is able to measure the distance to an object

- Operating Voltage: 2.6V-3.5V
- Power Consumption: 20 mW @10Hz
- Measurement Range: ~40mm to 4,000mm
- Resolution: +/-1mm
- Light Source: Class 1 940nm VCSEL
- 7-bit unshifted I2C Address: 0x29
- Field of View: 15° - 27°
- Max Read Rate: 50Hz

## Links and Resources

- [Dataheet for the sensor](./files/VL53L1X_Datasheet.pdf)
- [Sparkfun hookup guide](https://learn.sparkfun.com/tutorials/qwiic-distance-sensor-vl53l1x-vl53l4cd-hookup-guide)
- [Sparkfun product page](https://www.sparkfun.com/products/14722)
- Other manufacturers:
  - Pololu

## Libraries

There are many libraries for this sensor. All of them should work.

- **Recommended: Pololu VL53L1X**
- Sparkfun VL53L1X
- ...

### Using the Pololu library

The Pololu library for VL53L1X is the best one that I have tested. It has been the most reliable ad most of the sensors features are available for configuring through the library.

#### Install

1. Go to the Libraries
2. Search for VL53L1X
3. It should be named just with the part number and it should say that it's made by Pololu

---

## Example

### Code




---
## Other resources

You often need to filter or smooth out the data from these sensors. Check out the tutorials on the following topics.