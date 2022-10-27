---
title: "Arduino Basics"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 1
---

# Arduino Basics

---

## How To Get Started?

[Download the Arduino software](https://www.arduino.cc/en/software) and follow the instructions on the Arduino website if you have problems setting things up. The Arduino boards that you have are Arduino Unos and do not require any driver installation for Mac or Linux. Windows will require a driver that comes with the installer package.

[Getting Started With Arduino from the Arduino website.](https://www.arduino.cc/en/Guide)

## Arduino Code Structure

The Arduino software is used to program the Arduino board. You will notice that it is very similar to Processing or p5.js. The code structure is also very similar. All Arduino sketches need to have the following functions.

- setup()
  - Runs once when the board starts or is reset
  - You use the setup() for things that you usually only need to do once (like opening the serial port, defining pin modes etc.)
- loop()
  - Note that Arduino uses loop instead of draw
  - Runs continuously as long as the board has power
  - Not based on a framerate like Processing. The board will try to run the code as fast as it can. [Check here for some real world tests of the speed (read the comments too)](https://learn.sparkfun.com/blog/1687).
