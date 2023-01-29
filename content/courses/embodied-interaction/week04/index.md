---
title: "Week 04 | Tools & Technology #1 | Depth Cameras (Kinect)"
bookCollapseSection: false
weight: 20
draft: false
---

{{<hint info>}}
**Monday, January 30, 2023**

*We start in Room L208*
{{</hint>}}

# Week 04 | Tools & Technology #1 | Depth Cameras (Kinect)

---

This week, we are going to dive into the tools and technology we have available for actually creating embodied experiences.

## Inspiration

This week will be our first introduction to working with tracking people and their bodily movements in a space. These are some examples I have been working on previously.

The projects below are from a time before the Kinect existed and these kinds of things were much harder to do. Couple of them use the basic blob tracking technique we will build today.

### Animoitu Liike, 2009

{{<youtube SdYoUv858yg>}}

### Mortimer, 2009

Mortimer includes some scenes where we used real-time dynamic projection mapping. This was achieved using infrared camera and LEDs.

{{<vimeo 17220295>}}

[Mortimer Full Performance](https://vimeo.com/48965637)

### Giants of the Hoods, 2010

Giants of the Hoods was a project where we went to different neighborhoods in Helsinki and Espoo and projected real-time animations on the facades of buildings. The characters were controlled by people dancing

People were also able to have themselves photographed and they could decide which part of their body they would lioke to donate to the "Giant" projected on the wall. The character basically ended up being a collage of the people who participated.

This was based on a similar setup used in the [Reverse Shadow Theatre](https://www.youtube.com/watch?v=gY2dC9fi02s) and used the Animata software.

{<vimeo 12910372>}}

{{<vimeo 13420275>}}

{{<vimeo 14546692>}}

{{<vimeo 14651074>}}

{{<vimeo 15770729>}}

{{<vimeo 15305239>}}

## Animoitu Liike, 2011

After the original Kinect was released, [new experimental projects popped into existence everyday](https://www.kinecthacks.com/). This is my update on the Animoitu Liike project.

{{<vimeo 19715093>}}

### AHNE, 2011

Ahne was a research project created in the SOPI research group. It started out as an exploration to create spatial interface that would not have any visual feedback. The only feedback would be sound and haptics. The user would wear a glove that had a haptic feedback motor and wireless sensors.

{{<vimeo 28448717>}}

{{<vimeo 39778872>}}



---

## Kinect and Other Depth Cameras

{{<hint danger>}}
Before you do anything, make sure that TouchDesigner is able to launch properly and the Educational license is found.
{{</hint>}}

### Example Created in Class: Blob Tracking with Azure Kinect

This examples shows you how to work with the Azure Kinect and blob tracking. This way of doing tracking on the image does not rely on the Kinect's skeleton tracking algorithms and the same results could be achieved with other depth cameras, or even color or infrared cameras as long as you are able to control the lighting of your environment.

#### Setup

{{<hint info>}}
Unfortunately, we have "only" 10 Azure Kinects at Aalto Takeout and additional two devices from Matti. This means that all of you cannot work with them at the same time.

You can download a short image sequence capture I made using the Azure Kinect:

[Download the image sequence](https://www.dropbox.com/s/d5hd2oqpf92ve2q/kinectsample.zip?dl=0)

This will allow you to complete the example we work on today during class. Unfortunately, all of the more advanced examples require you to actually have the device itself. 
{{</hint>}}

How to load the image sequence to your project:

1. Firstly, download the folder and unzip it.
2. Create a new TouchDesigner project and ssave it to a specific folder.
3. Drag the `kinectsample` folder to your project folder.
4. Add a `Movie File In` TOP to your project.
5. Type `kinectsample`to the `File` propert in the properties window of the `Movie File In` TOP.
6. Turn on the `Play`toggle.
7. Set the `Speed`to 30.

Now you should have the short capture of me moving in front of the Kinect. You can use this as your source instead of the real-time capture from the actual Azure Kinect device.

#### Video Tutorial

We will build this entire project together in class, but you can also follow this tutorial if you missed something.

<iframe src="https://aalto.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=dbcba88b-e377-4343-b5d1-acec016e2065&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=true&amp;showbrand=false&amp;start=0&amp;interactivity=all" style="border: 1px solid #464646;" allowfullscreen="" allow="autoplay" width="100%" height="720"></iframe>

<iframe src="https://aalto.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=b0915fc3-8dde-4bc4-ad3a-acf4015d69aa&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=true&amp;showbrand=false&amp;start=0&amp;interactivity=all" style="border: 1px solid #464646;" allowfullscreen="" allow="autoplay" width="100%" height="405"></iframe>

#### More Advanced Techniques

[See the tutorials here for more advanced techniques.](../../../tutorials/touchdesigner/) We will cover other techniques in Period IV.

---

## Other Tools

We will come back to some of these in later classes, but feel free to explore some possibilities on your own.

- [Mediapipe](../tools-and-technology/mediapipe/) is a collection of cross-platform Machine Learning solutions for detecting faces, hands, body positions etc. Works quite well inside TouchDesigner.

