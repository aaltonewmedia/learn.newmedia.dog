---
title: "Build a Robot"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Build a Robot

---

## Physcomp Robot

### Schematic

#### Distance Sensor

#### H-Bridge L293D

[![L293D](/images/tutorials/electronics/l293d.png)](/images/tutorials/electronics/l293d.png)

#### Light Sensor

### Breadboard View

### Assembly


### Code for testing the motors

{{< details title="Show the Code" open=false >}}

```c
#define MR_EN 4
#define MR_C1 3
#define MR_C2 2

#define ML_EN 14
#define ML_C1 15
#define ML_C2 16

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
}

void loop(){
  // test the motor functions here:
  // leftSpeed(255);
  // rightSpeed(255);
  // goForward();
  // goBackward();
  // goLeft();
  // goRight();
  // stopAll();
  // leftMotorForward();
  // leftMotorBackward();
  // rightMotorForward();
  // rightMotorBackward();
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
{{</ details >}}

### Final Code

{{< details title="Show the Code" open=false >}}
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
  readLight();
  readDistance();
  if(light > 400){
    if (rawDistance > 300) {
      goForward();
    } else {
      goLeft();
    }
  }else{
    stopAll();
  }
}

void readLight() {
  light = analogRead(A3);
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


{{</ details >}}