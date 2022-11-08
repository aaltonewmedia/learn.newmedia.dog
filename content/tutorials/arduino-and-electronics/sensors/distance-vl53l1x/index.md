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


```c
#define MR_EN 4
#define MR_C1 3
#define MR_C2 2

#define ML_EN 14
#define ML_C1 15
#define ML_C2 16

#include <Wire.h>
#include <VL53L1X.h>

VL53L1X sensor;
int rawDistance;
int distance;
int sensorStatus;

int light;
int lightThreshold = 800;

void setup() {
  Serial.begin(9600);

  pinMode(MR_EN, OUTPUT);
  pinMode(MR_C1, OUTPUT);
  pinMode(MR_C2, OUTPUT);

  pinMode(ML_EN, OUTPUT);
  pinMode(ML_C1, OUTPUT);
  pinMode(ML_C2, OUTPUT);

  leftSpeed(255);
  rightSpeed(255);
  stopAll();

  // Setup the sensor
  Wire.begin();
  Wire.setClock(400000);  // use 400 kHz I2C

  sensor.setTimeout(500);
  if (!sensor.init()) {
    Serial.println("Failed to detect and initialize sensor!");
    while (1)
      ;
  }

  // Use long distance mode and allow up to 50000 us (50 ms) for a measurement.
  // You can change these settings to adjust the performance of the sensor, but
  // the minimum timing budget is 20 ms for short distance mode and 33 ms for
  // medium and long distance modes. See the VL53L1X datasheet for more
  // information on range and timing limits.
  sensor.setDistanceMode(VL53L1X::Long);
  sensor.setMeasurementTimingBudget(50000);  // time is in microseconds

  // ROI settings
  // 199 is the center of the array

  sensor.setROICenter(199);
  int center = sensor.getROICenter();
  Serial.print("ROI center: ");
  Serial.println(center);

  // the smallest size for the ROI is 4x4
  sensor.setROISize(16, 4);

  // Start continuous readings at a rate of one measurement every 50 ms (the
  // inter-measurement period). This period should be at least as long as the
  // timing budget.
  sensor.startContinuous(50);
}

void loop() {
  readDistance();
  if (rawDistance > 300) {
    goForward();
  } else {
    goLeft();
  }
}

void readLight() {
  light = analogRead(A0);
  Serial.print("light: ");
  Serial.println(light);
}

void readDistance() {
  sensor.read();
  rawDistance = sensor.ranging_data.range_mm;
  sensorStatus = sensor.ranging_data.range_status;

  // only save the reading to distance if the status is valid
  if (sensorStatus == 0 ||sensorStatus == 2 ) {
    distance = rawDistance;
  }

  Serial.print(rawDistance);
  Serial.print(" ");
  Serial.print(sensorStatus);
  Serial.print(" ");
  Serial.print(distance);
  Serial.println();
}

void goForward() {
  leftMotorForward();
  rightMotorForward();
}

void goBackward() {
  leftMotorBackward();
  rightMotorBackward();
}

void goLeft() {
  rightMotorForward();
  leftMotorBackward();
}

void goRight() {
  leftMotorForward();
  rightMotorBackward();
}

void stopAll() {
  leftMotorStop();
  rightMotorStop();
}

void leftMotorForward() {
  digitalWrite(ML_C1, HIGH);
  digitalWrite(ML_C2, LOW);
}

void leftMotorBackward() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, HIGH);
}

void leftMotorStop() {
  digitalWrite(ML_C1, LOW);
  digitalWrite(ML_C2, LOW);
}

void rightMotorStop() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, LOW);
}

void rightMotorForward() {
  digitalWrite(MR_C1, HIGH);
  digitalWrite(MR_C2, LOW);
}


void rightMotorBackward() {
  digitalWrite(MR_C1, LOW);
  digitalWrite(MR_C2, HIGH);
}

void leftSpeed(int mSpeed) {
  analogWrite(ML_EN, mSpeed);
}

void rightSpeed(int mSpeed) {
  analogWrite(MR_EN, mSpeed);
}

```

---
## Other resources

You often need to filter or smooth out the data from these sensors. Check out the tutorials on the following topics.