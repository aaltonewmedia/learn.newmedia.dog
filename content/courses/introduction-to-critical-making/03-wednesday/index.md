---
title: "WED | Electronics + Programming"
bookCollapseSection: false
weight: 30
draft: false
---

# Introduction to Critical Making

---

{{<hint info>}}
- October 19, 2022
- Room H003
- 9:15–17:00
{{</hint>}}

---

## Programming the Arduino

### Soldering

### Reading a button

### Code for our IoT device

---

## Setting up IFTTT

Connect some services to your IFTTT. The next step depends on what services you have available. I'm going to use Telegram for this example. You can use something else also. Of course only enable services that you are comfortable connecting. Or create new account for Twitter or some other service for the purposes of this course.

### Connect Telegram

1. [Search for Telegram in the Services](https://ifttt.com/telegram)
2. Connect
3. Follow the instructions to connect your Telegram account

### Button widget for your mobile device

The easiest way for us to start prototyping this idea of a button that does something is the Button widget available on the IFTTT mobile app.

### Create an applet for our Arduino MKR1000

1. Click ```Create```
2. Click ```Add``` on the ```If This``` section
3. Search for ```Webhooks```
4. Select ```Receive a web request with a JSON payload```
5. Write ```button_pressed``` in the ```Event Name``` box
6. Press ```Create Trigger```

The next step depends on what services you have available. I'm using Telegram, which I enabled earlier.

1. Click ```Add``` on the ```Then That``` section
2. Search for Telegram and click it
3. Choose ```Send message``` (or something else if you want to)
4. Your account should be available and selected in the ```Telegram account```
5. Select the ```Target chat``` and choose Private chat with @IFTTT or a group or channel that you admin
6. ```Message text``` can be as is for now, you can change it later.
7. Choose ```Enabled```for ```Include web page preview?```
8. ```Create action```
9. Then click ```Continue``` on the next page.
10. On the last page, you can change the name if you want to. Click ```Finish``` when you are done.

---

## Independent work