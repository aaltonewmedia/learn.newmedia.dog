---
title: "Output Devices: Motors, Actuators, Lights"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Output Devices: Motors, Actuators, Lights

---

## How to Choose the Right Motor or Actuator?

- [Motor guide from Sparkfun](https://learn.sparkfun.com/tutorials/motors-and-selecting-the-right-one)
- [Motor guide from Adafruit](https://learn.adafruit.com/adafruit-motor-selection-guide)

## How to work with motors and other actuators?

I have created tutorials for different types of actuators.

- [Servo Motors](../../../tutorials/arduino-and-electronics/motors-and-actuators/servo-motors/)
- [DC Motors](../../../tutorials/arduino-and-electronics/motors-and-actuators/dc-motors/)
- [Stepper Motors](../../../tutorials/arduino-and-electronics/motors-and-actuators/stepper-motors/)
- [Solenoids](../../../../tutorials/arduino-and-electronics/motors-and-actuators/solenoids-and-electromagnets/)

## Working with addressable digital LEDs (Neopixels)

[I have made a simple tutorial and some examples here.](../../../tutorials/arduino-and-electronics/leds-and-other-lights/neopixels/)

Neopixel is a brand name by Adafruit for certain types of addressable LEDs.

- [Adafruit Neopixel Überguide](https://learn.adafruit.com/adafruit-neopixel-uberguide)

---

## Examples done in class

### Accelerometer to Servo

#### Code

```c
// Basic demo for accelerometer readings from Adafruit MSA301

#include <Wire.h>
#include <Adafruit_MSA301.h>
#include <Adafruit_Sensor.h>
#include <Servo.h>

Adafruit_MSA301 msa;
Servo myServo;

// variable to store the servo position
int pos = 0;    

void setup(void) {
  Serial.begin(115200);
  msa.begin();
  myServo.attach(9);
}

void loop() {
  // get X Y and Z data at once
  msa.read(); 
  
  // Then print out the raw data
  Serial.print("X: "); Serial.print(msa.x); 
  Serial.print(" Y: "); Serial.print(msa.y); 
  Serial.print(" Z: "); Serial.print(msa.z);
  Serial.println();
  pos = map(msa.x, -2100, 2100, 0, 180);
  myServo.write(pos);
  delay(5); 
}
```