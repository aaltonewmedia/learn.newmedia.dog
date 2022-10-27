---
title: "Analog Input: Threshold with Rising/Falling Signal"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 200
---

# Analog Input: Threshold With Rising/Falling Signal

---

Just like we already did with the digital signals, we can also make a small change to the code to have the output triggered only once when the input goes above or below the threshold.

## Code

### Rising Signal

```c
int lightValue;
int prevLightValue;
int threshold = 320
// trigger variable is used to visualize the output on the plotter
int trigger = 0;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  lightValue = analogRead(A0);
  if (lightValue > threshold) {
    // check if the previous value was below threshold
    if (prevLightValue < threshold) {
      // do something once (blink LED)
      digitalWrite(9, HIGH);
      delay(100);
      digitalWrite(9, LOW);
    }
  }
  prevLightValue = lightValue;

  // 0 and 1023 are printed to make sure the plotter doesn't autoscale
  Serial.print(0);
  Serial.print(" ");
  Serial.print(1023);
  Serial.print(" ");
  Serial.print(lightValue);
  Serial.print(" ");
  Serial.println(threshold);
  delay(10);
}
```

### Falling Signal

```c
int lightValue;
int prevLightValue;
int threshold = 320;
// trigger variable is used to visualize the output on the plotter
int trigger = 0;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  lightValue = analogRead(A0);
  if (lightValue < threshold) {
    // check if the previous value was above threshold
    if (prevLightValue > threshold) {
      // do something once
      digitalWrite(9, HIGH);
      delay(100);
      digitalWrite(9, LOW);
    }
  }
  prevLightValue = lightValue;

  // 0 and 1023 are printed to make sure the plotter doesn't autoscale
  Serial.print(0);
  Serial.print(" ");
  Serial.print(1023);
  Serial.print(" ");
  Serial.print(lightValue);
  Serial.print(" ");
  Serial.println(threshold);
  delay(10);
}
```