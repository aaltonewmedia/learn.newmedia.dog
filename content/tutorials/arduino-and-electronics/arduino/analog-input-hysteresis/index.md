---
title: "Analog Input: Hysteresis"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 220
---

# Analog Input: Hysteresis

---

Hysteresis is a phenomenon in which the value of a physical property lags behind changes in the effect causing it, as for instance when magnetic induction lags behind the magnetizing force. In electronics this could mean the lag between an input value and a corresponding output.

Sometimes you might want to try to minimize hysteresis in your circuits to get rid of any lag. **However, when working with interactive systems and sensors (inputs) you often want to add hysteresis in your system to prevent unwanted flickering between two different states due to noisy signals.** We saw this happening in the examples above when using just a simple threshold.

You can add hysteresis to your input signal by using two threshold values:

- High threshold – the input value needs to go above this value to turn on the output
- Low threshold – the input value needs to go below this value to turn off the output

![Hysteresis image](https://newmedia.dog/wp-content/uploads/2021/11/Screenshot-2021-11-09-at-16.56.42.png)

```c
int lightValue;
int hThreshold = 320;
int lThreshold = 250;
int trigger = 0;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  lightValue = analogRead(A0);
  if(lightValue > hThreshold){
    trigger = 1023;
    digitalWrite(9,HIGH);
  }else if(lightValue < lThreshold){
    trigger = 0;
    digitalWrite(9,LOW);
  }
  
  // 0 and 1023 are printed to make sure the plotter doesn't autoscale
  Serial.print(0);
  Serial.print(" ");
  Serial.print(1023);
  Serial.print(" ");
  Serial.print(lightValue);
  Serial.print(" ");
  Serial.print(hThreshold);
  Serial.print(" ");
  Serial.print(lThreshold);
  Serial.print(" ");
  Serial.println(trigger);
  delay(10);
}
```