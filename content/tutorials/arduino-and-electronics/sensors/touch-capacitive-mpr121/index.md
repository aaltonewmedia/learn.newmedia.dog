---
title: Touch Capacitive | MPR121 
bookCollapseSection: false
p5js-widget: false
draft: false
---

[![Adafruit MPR121 12-Key Capacitive Touch Sensor](./images/mpr121.jpg)](./images/mpr121.jpg)

{{<hint danger>}}
Note that I have had some issues sometins connecting to the sensor with the Arduino Uno R4 boards that we use. I am looking into the issues and hopefully be able to solve it. For now, just disconnecting the power and trying again seems to work. -Matti
{{</hint>}}

## Links and Resources

- [Datasheet of the sensor](./files/mpr121.pdf)
- [Adafruit tutorial for the breakout board](https://learn.adafruit.com/adafruit-mpr121-gator)
- [Adafruit product page](https://www.adafruit.com/product/4830)

## Connecting the Sensor

These sensors come with a very handy connector that allows us to use it without any soldering or having to use the breadboard.

### Using the Qwiic/STEMMA QT connector

Just use a Qwiic/STEMMA QT cable to connect the sensor to your board. It does not matter which of the connectors you use, they are all connected together.

[![Adafruit MPR121 Qwiic](./images/apds9960-qwiic.jpg)](./images/mpr121-qwiic.jpg)

### Connecting directly to the pins

Sometimes you might not have the connector on your microcontroller so you need to wire it up manually. **This board does not have any additional pin connectors, so you always need to use a Qwiic/STEMMA QT cable.**

- **VIN** - this is the power pin.  To power the board, give it the same power as the logic level of your microcontroller - e.g. for a 5V micro like Arduino, use 5V
- **3Vo** - this is the 3.3V output from the voltage regulator, you can grab up to 100mA from this if you like
- **GND** – common ground for power and logic, connect to GND on your board
- **SCL** - this is the I2C clock pin, connect to your microcontrollers I2C clock line. There is a 10K pullup on this pin and it is level shifted so you can use 3-5VDC.
- **SDA** - this is the I2C data pin, connect to your microcontrollers I2C data line. There is a 10K pullup on this pin and it is level shifted so you can use 3-5VDC.
- **INT** - this is the interrupt-output pin. It is 3V logic and you can use it to detect when a new reading is ready or when a reading gets too high or too low.

## Recommended Library

Use the [Adafruit MPR121 Library](https://adafruit.github.io/Adafruit_MPR121/html/index.html). You should be able to find it directly from the library tool in Arduino IDE.

## I2C Bus on the Uno R4 boards

{{<hint warning>}}
**Please note! The default examples do not work directly with the Qwiic connectors on the Arduino Uno R4 WiFi boards.** This due to the fact that the R4 boards have a different I2C port connected to the Qwiic connectors. We need to somehow configure the library for each sensor to use `Wire1` I2C bus instead of the default one (`Wire`). Each library does this slightly differently, I try to provide the details for all the sensors that you have in your Physical Computing kit, but for many other devices, you need to figure this out on your own.

[See this page for details](https://docs.arduino.cc/tutorials/uno-r4-wifi/qwiic)

This is quite often done in the `begin()` method in the libraries.

```c
Wire1.begin();
libraryName.begin(&Wire1);
```

**Sometimes** there is a specific method to switch the I2C bus.

```c
Wire1.begin();
libraryName.begin();
libraryName.setBus(&Wire1);
```

{{</hint>}}

### Selecting Wire1 I2C Bus with the Adafruit MPR121 Library

{{<hint info>}}
For the **Adafruit MPR121** sensor breakout boards, you do it like this:

```c
cap.begin(0x5A,&Wire1);
```

The `&` means that we are passing a reference to the address of the variable. This is a pretty confusing and complicated topic, but you can read up on it:

- [Pointers (Wikipedia)](https://en.wikipedia.org/wiki/Pointer_%28computer_programming%29)
- [Pointer Access Operator &](https://www.arduino.cc/reference/en/language/structure/pointer-access-operators/reference/)

{{</hint>}}

## Full example code - Read Filtered Dara

```c
#include "Wire.h"
#include "Adafruit_MPR121.h"

// You can have up to 4 on one i2c bus but one is enough for testing!
Adafruit_MPR121 cap = Adafruit_MPR121();

void setup() {
  Serial.begin(115200);

  Serial.println("Adafruit MPR121 Capacitive Touch sensor test"); 
  // Default address is 0x5A, if tied to 3.3V its 0x5B
  // If tied to SDA its 0x5C and if SCL then 0x5D
  // &Wire1 is needed for Arduino Uno R4
  while (!cap.begin(0x5A, &Wire1)) {
    Serial.println("MPR121 not found, check wiring?");
    delay(500);
  }
  Serial.println("MPR121 found!");
}

void loop() {
  Serial.print("Filtered: ");
  for (int i=0; i<12; i++) {
    // print the touchpad number
    Serial.print(i);
    Serial.print(": ");

    // print the filtered value from the sensor
    Serial.print(cap.filteredData(i));
    
    // \t means tab character
    Serial.print("\t");
  }
  Serial.println();
  
  // put a delay so it isn't overwhelming
  delay(100);
}
```