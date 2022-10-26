---
title: "Arduino Basics"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 1
---

# Arduino Basics

---

## Arduino Code Structure

The Arduino software is used to program the Arduino board. You will notice that it is very similar to Processing or p5.js. The code structure is also very similar. All Arduino sketches need to have the following functions.

- setup()
  - Runs once when the board starts or is reset
  - You use the setup() for things that you usually only need to do once (like opening the serial port, defining pin modes etc.)
- loop()
  - Note that Arduino uses loop instead of draw
  - Runs continuously as long as the board has power
  - Not based on a framerate like Processing. The board will try to run the code as fast as it can. [Check here for some real world tests of the speed (read the comments too)](https://learn.sparkfun.com/blog/1687).
