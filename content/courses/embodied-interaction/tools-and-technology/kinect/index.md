---
title: "Kinect"
bookCollapseSection: false
---   

# Kinect Tutorials

---

## Kinect versions

### Azure Kinect

Azure Kinect is the device that we are going to mainly use for different types of body tracking. It is the latest version of the Kinect sensor and it is not specifically tied to work with the Xbox like the previous version.

#### Azure Kinect + TouchDesigner

---

### Older Kinect Versions

#### Original Kinect for XBox 360

The original Kinect sensor
Model Versions for Kinect V1

There are three different model numbers for the original Kinect. All of them look identical, but you can find the model number on the base of Kinect. Microsoft has discontinued all of these models so you are most likely only going to find used devices on eBay etc. (There is also a white version of the original Kinect, it’s the same except for the color).

- 1414 (the oldest model, most reliable in most software)
- 1473 (updated model, might cause some issues in some software)
- 1517 (Kinect for Windows model, might cause some issues in some software)

The main issue that I have run into with models other than the 1414 is that it does not correctly report the serial number of the device. This is not really an issue in most cases, but if you want to do something where you need to use multiple Kinect sensors with one computer, you might have problems identifying which Kinect is which. There are workarounds for this. You can for example use the serial number of the audio device to differentiate between the devices.

##### Where to get it?

The Kinect V1 has been discontinued, you might be able to find used ones. Make sure it comes with the USB adapter/power supply.

We have a couple of these at the Media Lab. Ask Matti.

#### Kinect V2

This is the newer version of the Kinect Sensor. Unfortunately, the naming policy in Microsoft is very confusing so sometimes this version is called the Kinect One (since is was made for the XBox One). I will be calling this the Kinect V2 and the older original Kinect sensor will be referred to as the Kinect V1.

##### Where to get it?

The Kinect V2 has been discontinued, you might be able to find used ones. Also remember to get the USB adapter.

Aalto Takeout has one of these. Search Kinect on the website.

---

## Alternatives to the Kinect sensor

- Intel RealSense
- [Zed](https://www.stereolabs.com/zed/)
    - [Body Tracking](https://www.stereolabs.com/docs/body-tracking/)
- Webcam + OpenPose
- Webcam + Mediapipe

## Software

### Processing

#### OpenKinect Library

https://github.com/shiffman/OpenKinect-for-Processing

Install from the Library Manager. Works with Kinect V1 and V2.

#### SimpleOpenNI Library

A version that works with Processing 3.5.x on Mac https://github.com/totovr/SimpleOpenni

## TouchDesigner

### Examples

Here are some examples I have shown in class

- [Kinect skeleton tracking + particles](./files/KinectAllJoints.toe)
- [Blob Tracking Particle Field](./files/KinectMetaballs.toe)
- [Kinect Depth Reveal with Particles](./files/KinectDepthRevealParticles.toe)