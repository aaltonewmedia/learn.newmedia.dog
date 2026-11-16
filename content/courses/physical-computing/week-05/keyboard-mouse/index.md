---
title: "USB: Keyboard, Mouse"
bookCollapseSection: false
weight: 20
p5js-widget: true
draft: false
---

## Keyboard

You can make the Raspberry Pi Pico and Arduino Uno R4 WiFi boards appear as a USB keyboard for your computer.

- [Keyboard reference](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/)

{{<hint danger>}}
Be careful with this. It's quite easy to accidentally create something that is constantly typing something, which can make it really hard to reprogram your board.
{{</hint>}}

### Basic Project Setup

```c
#include "Keyboard.h"

void setup(){
  // initialize control over the keyboard:
  Keyboard.begin();
}

void loop(){
}
```

### Sending individual keystrokes

```c
// Send an individual keystroke
Keyboard.press('a');
delay(1);
Keyboard.release('a');

// Use modifier keys
Keyboard.press(KEY_LEFT_SHIFT);
Keyboard.press('a');
delay(1);
Keyboard.releaseAll();
```

### Sending text

```c
// use println() to write text followed by a newline character
Keyboard.println("Hello world!");
```

### Special keys

You can find the [full list of supported special keys here](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/keyboardmodifiers/).

### Example

```c
#include "Keyboard.h"

void setup(){
  // initialize control over the keyboard:
  Keyboard.begin();
}

void loop(){
  delay(5000);
  Keyboard.print('a');
  delay(5000);
  Keyboard.press(KEY_LEFT_SHIFT);
  Keyboard.print('a');
  delay(100);
  Keyboard.releaseAll();
  delay(5000);
  Keyboard.println("Hello World!");
}
```

---

## Mouse

- [Mouse reference](https://www.arduino.cc/reference/en/language/functions/usb/mouse/)

{{<hint danger>}}
Be careful with this. It's quite easy to accidentally create something that is constantly moving the mouse, which can make it really hard to reprogram your board.
{{</hint>}}

```c
#include <Mouse.h>

void setup() {
  // put your setup code here, to run once:
  Mouse.begin();
  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  Mouse.move(100,100);
  delay(1000);
  Mouse.move(-100,-100);
  delay(1000);
}
```