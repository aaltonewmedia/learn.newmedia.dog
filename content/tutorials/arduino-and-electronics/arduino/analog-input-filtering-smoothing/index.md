---
title: "Analog Input: Filtering and Smoothing"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 240
---

# Analog Input: Filtering and Smothing

---

Quite often the readings you get from sensors or other inputs are noisy. The noise might be due to electrical noise in the circuit, faulty sensors, or just from how the physical world works (shaky hands, unstable movements, wind etc.)

## Average

A simple way to filter out noise is to take multiple readings and take an average of them.

Add together a number of measurements and then divide the total by the number of measurements you added together. Here is a simple example.

```c
int lightValue;
int sum;
int readings = 16;
int averageValue;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  for (int i = 0; i < readings; i++) {
    lightValue = analogRead(A0);
    sum += lightValue;
    delay(1);
  }
  averageValue = sum / readings;
  Serial.println(averageValue);
}
```

## Moving Average

The normal average makes the program somewhat unresponsive and slow as it has to read through many values in the same loop(). A moving average speeds up the reading as it only reads one value to an array each loop.

[There is an Arduino tutorial showing how to do this.](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Smoothing)

## Exponential Moving Average

[![Exponential Moving Average image](https://newmedia.dog/wp-content/uploads/2021/11/Screenshot-2021-11-09-at-18.03.52.png)](https://newmedia.dog/wp-content/uploads/2021/11/Screenshot-2021-11-09-at-18.03.52.png)

*The orange line shows the filtered signal, green is the raw values from analogRead()*

Exponential moving average (or weighted average) reduces memory usage since it only stores the previous smoothed value in memory. However, it requires the use of floats which increases memory use.

It also has the advantage that it can react to new changes more quickly.

- Use a library: https://github.com/jonnieZG/EWMA
- Or do it manually (see code below)

This is based on this algorithm:

```c
smoothedValue = weight * sensorValue + (1 - weight) * prevSmoothedValue;
```

Here is an example of how to use it in your code:

```c
int lightValue;
int threshold = 320;
// trigger variable is used to visualize the output on the plotter
int trigger = 0;

float smoothedValue = 0.0;
float prevSmoothedValue = 0.0;
// weight is the smoothing factor, in range [0,1].
// Higher the value - less smoothing (higher the latest reading impact)
float weight = 0.1; 

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  lightValue = analogRead(A0);
  smoothedValue = filter(lightValue, weight, prevSmoothedValue);
  prevSmoothedValue = smoothedValue;
  if (smoothedValue > threshold) {
    digitalWrite(9, HIGH);
    trigger = 1023;
  } else {
    digitalWrite(9, LOW);
    trigger = 0;
  }

  // 0 and 1023 are printed to make sure the plotter doesn't autoscale
  Serial.print(0);
  Serial.print(" ");
  Serial.print(1023);
  Serial.print(" ");
  Serial.print(lightValue);
  Serial.print(" ");
  Serial.print(smoothedValue);
  Serial.print(" ");
  Serial.print(threshold);
  Serial.print(" ");
  Serial.println(trigger);
  delay(10);
}

float filter (float rawValue, float w, float prevValue) {
  float result = w * rawValue + (1.0 - w) * prevValue;
  return result;
}
```