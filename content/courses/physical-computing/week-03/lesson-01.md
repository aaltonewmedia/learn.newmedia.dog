---
title: "Output Devices: Motors, Actuators, Lights"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Output Devices: Motors, Actuators, Lights

---

# Making Things Move

---

## Inspiration

Simple movements can make objects seem very alive.

{{<youtube Yx2RY9wr0ts>}}

- [Jennifer Greb: Electronic Creature](http://www.jennifergreb.com/demos#creature)

{{<youtube Q9gP3GaFgNQ>}}

- [Jennifer Greb: Electronic Hand](http://www.jennifergreb.com/demos#box)

{{<vimeo 58533050>}}

[@><#!!! Overtaxed Surface](http://www.overtaxedsurface.de/#video)

{{<vimeo 84880475>}}

{{<vimeo 84887127>}}

{{<vimeo 203351109>}}

{{<vimeo 142410721>}}

{{<youtube U5qHMgZJ2w4>}}

{{<youtube mDe6q6RMUtY>}}

### Jinhee Kim

{{<vimeo 138692537>}}

{{<vimeo 138696659>}}

- [Jinhee Kim: A Fortune Tweeeting Bird](http://www.kimjinhee.com/A-Fortune-Telling-BIrd)
- [Jinhee Kim: A Lucky Charm Drawing Robot](http://www.kimjinhee.com/A-Lucky-Charm-Drawing-Robot)

## Artists working with robotics, mechanics and kinetic sculptures

- [Daniel Rozin](https://www.smoothware.com/danny/)
- [Niklas Roy](http://niklasroy.com/) – Berlin-based artist working a lot with mechanical devices
- [Teija ja Pekka Isorättyä](http://www.isorattya.com/Videos.xhtml) – Finnish artist couple working with robotic installations
- [Markus Copper](https://kiasma.fi/en/exhibitions/markus-copper/)
- [Tommi Grönlund & Petteri Nisunen](https://vimeo.com/usergronlundnisunen) – Finnish artists working with kinetic sculptures
- [Tim Hunkin](http://www.timhunkin.com/) – A engineer/artist who builds weird and elaborate machines. Also worked on making the [Secret Life of Machines animation](http://www.exploratorium.edu/ronh/SLOM/)
- [Jeppe Hein](http://www.jeppehein.net/pages/works.php) – Very minimalistic installations using kinetic elements
- [ART+COM](http://www.artcom.de/en/projects/) – A German design studio that specializes in creating big kinetic sculptures
- [Ben Hopson](http://www.benhopson.com/?page_id=3) – An industrial designer who has a lot of very interesting Kinetic Sketches on his website. [Also this article about designing motion might be of interest to you.](http://www.core77.com/blog/featured_items/kinetic_design_and_the_animation_of_products_by_ben_hopson_12642.asp)
- [Theo Jansen](http://www.strandbeest.com/index.php) – Amazing wind-powered artificial creatures
- [Jie Qi](https://technolojie.com/) – Some interesting projects using muscle wire, paper electronics
- [Eunyoung Park](https://eunyoungpark.co/studio/) – From Aalto Media Lab, her thesis project was [LINKKI](http://eunyoungpark.co/linkki/)

## Resources

- [Soft Robots](https://softroboticstoolkit.com/)
- [Muscle Wire + Paper Electronics](https://technolojie.com/origami-robotics/) by Jie Qi
- [Design with Movement](https://designwithmovement.aalto.fi/) by Eunyoung Park

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