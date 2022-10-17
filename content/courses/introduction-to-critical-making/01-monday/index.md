---
title: "MON | Introduction"
bookCollapseSection: false
weight: 10
draft: false
---

# Introduction to Critical Making

---

{{<hint info>}}
- October 17, 2022
- Room H003
- 9:15–17:00
{{</hint>}}

## Introduction to the course

This workshop is mainly intended for students who are coming to my Physical Computing course in Period 2, but do not have any experience in 3D printing, laser cutting, or other digital fabrication tools.

### Teacher: Matti Niinimäki

## Preliminary tasks (independent work)

Do the following before the class if you have the time (it's ok to also do these during Monday):

### Needed accounts

- Make an Autodesk account with your Aalto email and apply for the educational access: [https://www.autodesk.com/education/edu-software/overview](https://www.autodesk.com/education/edu-software/overview)
- Create an account for [IFTTT](https://ifttt.com/join?referral_code=erwiuxfE6WRNosBe7ueSl6FDLHdoiYV2) You can also get the 7-day free trial for the duration of the workshop, but it's not necessary. The free account is enough, but the trial adds some extra features.
- I would also recommend install the IFTTT mobile app for your phone. Search for IFTTT on your phone's app store or whatever is the way to install apps for your phone.
- Make sure you have access to at least a couple of [these services](https://ifttt.com/explore/services). Telegram works well for testing, email is the simplest one. The more possibilities you have the more interesting it will be.

### Software

We have these installed on the computers at ARTS but you can also install and download them to your own computer:

- [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/overview)
- [Arduino](https://www.arduino.cc/)
- [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura)

### Workshop access

In order to use the Väre workshops in Aalto, you need to complete these two courses on MyCourses. Do both latest on Monday afternoon.

- [Complete the 3D Print course in MyCourses](https://mycourses.aalto.fi/course/view.php?id=23273)
- [Complete the Laser Cutter course in MyCourses](https://mycourses.aalto.fi/course/view.php?id=19552)

## Project Brief

[See the project brief page.](../project/)

--- 

## CAD Tutorial #001 – Fusion 360 Basics

### Using Cura to prepare your file for 3D Printing

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

[Complete the preliminary tasks listed above](./01-monday/#preliminary-tasks-independent-work)

### Reading

Read pages 8 to 28 from the book:
[The Critical Makers Reader: (Un)learning Technology](https://networkcultures.org/blog/publication/the-critical-makers-reader-unlearning-technology/)

---