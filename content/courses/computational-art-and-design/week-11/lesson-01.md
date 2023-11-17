---
title: "THU | Working with Hardware"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- November 15, 2023
- Room G203
- 9:15–12:00

**We continue with the ml5.js examples which we were not able to complete last week.**
{{</hint>}}

---

## Mobile phone sensors

Many mobile phones have built-in sensors (accelerometers, gyroscopes, compass etc.). You are able to access some of this data in your p5.js sketch. [See the Events section from the p5.js reference.](https://p5js.org/reference/#group-Events)

We are going to use the rotation values today:

- [rotationX](https://p5js.org/reference/#/p5/rotationX)
- [rotationY](https://p5js.org/reference/#/p5/rotationY)
- [rotationZ](https://p5js.org/reference/#/p5/rotationZ) (only if your device has a compass)

- [My example](https://editor.p5js.org/mnstri/sketches/3FMgL5M0f)

### Request Permission (iOS 13)

On some devices, you are able to just use the sensor data directly. On Apple mobile devices that are running iOS 13 or higher, you need to specifically ask for the permission to use the sensors.

```js
let button;
function setup() {
  createCanvas(400, 400);
  button = createButton("Click to allow access to sensor");
  button.mousePressed(DeviceOrientationEvent.requestPermission);
}

function draw() {
  background(220);
  text(rotationY, 100,100);
  let x = map(rotationY,-90,90,0,width);
  let y = map(rotationX,-90,90,0,height);
  circle(x,y,50);
}
```

---

## Serial communication with Arduino and other devices

[See the materials from the Physical Computing class.]({{< relref "/courses/physical-computing/week-04/lesson-01" >}})

---

## OSC (Open Sound Control)

[OSC (Open Sound Control)](https://ccrma.stanford.edu/groups/osc/index.html) is a protocol for communicating among applications and hardware over a network connection. It was originally developed for realtime musical performances.

{{<hint info>}}
I like to think of OSC as the duct tape of new media. Quite often, we have to deal with connecting hardware and software together in unexpected ways. OSC makes this possible.
{{</hint>}}

### Anatomy of OSC Messages

OSC messages are sent over a network so you must define where you want to send your message. You must define the following things:

- IP Address – The IP address of the device where you send your message. If you want to send data from one software to another on your computer, you can use the `localhost` IP address `127.0.0.1`
- Port – The port number where you are sending/receiving your message. This could basically any number, but many ports are reserved for other purposes. Use a 4- or 5-digit number to stay out of the range of most common ports.
  - Example: 7777
- Address Pattern – This usually looks like an URL. It is used to differentiate between different messages you are sending/receiving on one port. You can define the address pattern yourself.
  - Example: /sensor/flex
- The actual message is the data that you are sending/receiving. You have to also define what the data type is (string, int, float etc.) Many OSC implementations take care of the data type

Examples of OSC messages:

```
/sensor/accelerometer/x 0.765
/sensor/accelerometer/y 0.482
/sensor/accelerometer/xyz 0.765 0.482 0.112
/text/matti hello
```

### OSC in p5.js

Ironically, using OSC is not very easy with p5.js although both are dealing dealing with networks.

The problem is that OSC is based on [UDP networking protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol). UDP and OSC are great for things where you want to have the minimum amount of latency and don't want to deal with the extra complications of connecting/disconnecting or error correction. UDP unfortunately is not so well supported in JavaScript.

OSC libraries for JavaScript:

- [p5js-osc](https://github.com/genekogan/p5js-osc) | This works fine, but gives security errors when you use it. These issues are generally not a problem since you generally use OSC on local network and not over the internet. Fairly simple to setup but hasn't been updated for a while.
- [osc.js](https://github.com/adzialocha/osc-js) | Uses websockets to route the OSC data. A little bit harder to get running but this library is actively being developed and updated.

### OSC in Processing

OSC communication in Processing can be done using the [oscP5 library](https://sojamo.de/libraries/oscP5/). You can install it with the Library manager in Processing.

### ZIG SIM

[ZIG SIM](https://zig-project.com/) is an application for your mobile device that allows you to stream many of the sensors from your phone to any other device that is able to receive OSC messages.

Download the app on your mobile device from the app store of your mobile device. The free version works for most of the sensors.

### Debugging OSC Messages

#### Protokol

[Protokol](https://hexler.net/protokol) is an excellent tool for monitoring and debugging OSC, MIDI and Gamepad data. I use it all the time to see what kind of data is being received.

### TUIO

[TUIO](https://www.tuio.org/) is a specific format of OSC messages that were developed originally for the [Reactable](http://reactable.com/) project in 2005.

{{<youtube 0h-RhyopUmc>}}

{{<youtube I9AeUISg-Og>}}

After this initial development, TUIO as a protocol was also implement to many other tangible user interfaces that include multi-touch or object detection.

More information:

- [Reactable](http://reactable.com/)
- [TUIO.org](https://www.tuio.org/)
- [reacTIVision software](https://reactivision.sourceforge.net/)
- [Source Code](https://github.com/mkalten)

{{<hint info>}}
I would not recommend to rely on this technology for new designs but it is a very interesting example and might become useful in some situations even still. [The latest update to the TUIO protocol itself was done in 2014.](http://www.tuio.org/?tuio20)
{{</hint>}}

---

## Example