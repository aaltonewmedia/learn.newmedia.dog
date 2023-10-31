---
title: "Potentiometers"
bookCollapseSection: false
p5js-widget: true
draft: false
---

Potentiometers are essentially voltage dividers built into a single component with an interface that you can manipulate. You can imagine them as two variable resistors that you are controlling by turning a knog or moving a slider.

## Rotational potentiometers

## Linear potentiometers

```c
// Read and display the value from the potentiometer.

int pot = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  pot = analogRead(A0);
  Serial.print("potentiometer: ");
  Serial.println(pot);
  // slow down the loop
  delay(1);
}
```