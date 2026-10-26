---
title: "Setting up for this week"
bookCollapseSection: false
weight: 10
p5js-widget: true
---

The Monday class will be spent on setting up libraries and other things for the rest of the week. You will also have time to prepare the project proposal.

## Install These Libraries

- [Adafruit TinyUSB Library](https://github.com/hathach/tinyusb)
  - This library is used to program your Pico board to appear as different types of USB devices to the computer. You can make it a USB keyboard, mouse, joystick, MIDI controller
  - The [documentation of the library is here](https://docs.tinyusb.org/en/latest/)
- [ArduinoOSC](https://github.com/hideakitai/ArduinoOSC)
  - The Arduino OSC Library is used to be able to sen and receive wireless data from various devices (computer, phone, other microcontrollers)

You can find both from the Arduino IDE Library Manager. Install the latest versions of each.

## Install OSC Sender Apps to Your Phone

- I recommend [ZIG SIM](https://1-10.github.io/zigsim/getting-started.html#install). It is available for both iOS and Android. The Pro version has some more advanced features, but the free version should be enough for what we do this week. ZIG SIM allows you to send sensor data from your phone wirelessly to any device that is able to receive OSC messages.
- Another very commonly used one is [TouchOSC](https://hexler.net/touchosc)

## Optional: Install Protokol on Your Computer for Monitoring OSC Messages

[Protokol](https://hexler.net/protokol)