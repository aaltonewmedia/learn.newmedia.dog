---
title: "Tools: Multimeter"
bookCollapseSection: false
p5js-widget: true
draft: false
weight: 210
---

# Tools: Multimeter

---

Multimeters are very handy tools for multiple purposes (hence the name MULTImeter). Usually, a multimeter will have different modes for measuring voltage, current, and resistance. Most multimeters also have a special continuity mode where the meter will make a little beep sound when the tested points are electrically connected.

## Multimeters at the Aalto Mechatronics Workshop

We are using the [Fluke 115 multimeters](https://www.fluke.com/en/product/electrical-testing/digital-multimeters/fluke-115). They have a handy auto-ranging feature, which means that they are quite easy to use.

Below I have explained the very basic features. For more information, [download the manual](https://newmedia.dog/wp-content/uploads/2018/10/115_manual.pdf).

### Measuring Voltage (DC)

[![Multimeter voltage](/images/tutorials/electronics/multimeter-voltage.jpg)](/images/tutorials/electronics/multimeter-voltage.jpg)

- Make sure your probes are connected correctly: the red one to the port marked with **V, Ω etc.** and the black one should be connected to the port marked **COM**
- Set the meter to V with the lines on top of it (for DC voltage)
- Measure between two points in your circuit

### Measuring Resistance

[![Multimeter resistance](/images/tutorials/electronics/multimeter-resistance.jpg)](/images/tutorials/electronics/multimeter-resistance.jpg)

- Make sure your probes are connected correctly: the red one to the port marked with **V, Ω etc.** and the black one should be connected to the port marked **COM**
- Set the meter to the **Ω** setting
- **Turn off the power from your circuit**
- Measure between two points in your circuit

### Measuring Continuity

[![Multimeter continuity](/images/tutorials/electronics/multimeter-continuity.jpg)](/images/tutorials/electronics/multimeter-continuity.jpg)

There is a special mode on the multimeter that you can use to test if two points are connected or not. The multimeter will make a little beep noise when they are. Useful for finding short circuits or just to test what connects to where.

- Make sure your probes are connected correctly: the red one to the port marked with **V, Ω etc.** and the black one should be connected to the port marked **COM**
- **Turn off the power from your circuit**
- Set the meter to the **)))))** setting
- Measure between two point in your circuit and you will here a beep, if the points are connected (short circuit).

### Measuring Current

[![Multimeter current](/images/tutorials/electronics/multimeter-current-dc.jpg)](/images/tutorials/electronics/multimeter-current-dc.jpg)

- Move the other probe to the port marked with **A**, the other probe should be connected to the **COM** port.
- If you are measuring DC current set the meter to the setting with the A and straight lines (one solid, one dashed) above it
- In order to measure current, you need to connect your meter in series to the circuit. You have to feed the current through the meter at the point where you want to measure

## More information

[There is another nice tutorial out there from Sparkfun.](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter)

{{<youtube SLkPtmnglOI>}}