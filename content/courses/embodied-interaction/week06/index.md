---
title: "Week 06 | Context-Aware Computing | Spatial Computing"
bookCollapseSection: false
weight: 20
draft: true
---

---

{{<hint info>}}
**Monday, February 5, 2024**

**Room H003**  
**Note that we are in a completely different classroom today! You can access the room by going through either the Mechatronics (G014) or Laser Cutter (H001) Workshops.**

{{</hint>}}

---

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

### Animoitu Liike, 2011

After the original Kinect was released, [new experimental projects popped into existence everyday](https://www.kinecthacks.com/). This is my update on the Animoitu Liike project.

{{<vimeo 19715093>}}

### AHNE, 2011

Ahne was a research project created in the SOPI research group. It started out as an exploration to create spatial interface that would not have any visual feedback. The only feedback would be sound and haptics. The user would wear a glove that had a haptic feedback motor and wireless sensors.

{{<vimeo 28448717>}}

{{<vimeo 39778872>}}

---

## Body Tracking (Pose Detection)

### Kinect (Azure)

Pros:
- Works in complete darkness since it uses infrared
- Works directly in TouchDesigner
- You also get depth image and point cloud

Cons:
- Expensive sensor
- Windows only
- Has been discontinued

{{<hint info>}}
Although the Azure Kinect is discontinued by Microsoft, there are a couple of options that are almost direct replacements. Orbbec makes two cameras that use the samer Body Tracking models as the Kinect.
- [Femto Mega](https://www.orbbec.com/products/tof-camera/femto-mega/)
- [Femto Bolt](https://www.orbbec.com/products/tof-camera/femto-bolt/)
{{</hint>}}

In TouchDesigner, you can find the Kinect Azure TOP and CHOP that give you the image and tracking data from the Kincet Azure sensor.

---

### ZED

Pros:
- Actively maintained and supported
- Works directly in TouchDesigner
- You also get depth image and point cloud

Cons:
- Expensive sensor
- Windows only

---

### MediaPipe

MediaPipe is the simplest option in the sense that it doesn't require any special hardware and works with different operating systems.

Pros:

- No special hardware needed (any webcam that is able to output a 720p image will work)
- Does also much more beyond the pose tracking (face tracking, hand tracking, object tracking, image classification, image segmentation)
- Multiplatform

Cons:

- No true 3D information. The Z-coordinate is a relative coordinate based on the center-of-mass
- The TouchDesigner plugin is sometimes buggy and doesn't load the camera. Especially with the Aalto computers.

#### Workaround to get the camera image working with Aalto computers

{{<hint warning>}}
Some of the computers we have do not for some reason load the camera inputs correctly with the MediaPipe GPU plugin. If that is the case with you, use this workaround:

1. Open OBS Studio
2. Change the video settings to 1280x720/60 fps
2. Add a Video Capture Device into as the Source
3. Change the settings of the webcam to also be 1270x720/60fps
4. Scale the source image to the output by selecting it and pressing Ctrl+F (Fit to screen)
5. Turn on the Virtual Camera by pressing the Start Virtual Camera button.
{{</hint>}}


{{<hint info>}}
You can also dowload the profile and scene files by [clicking here](.files/mediapipeobs.zip). Once you have downloaded them, do the following:

- Unzip the files
- Select Profile -> Import
- Select the mediapipeobs folder
- Select Profile -> mediapipe
- Select Scene Collection -> Import
- Click the ... to open the filebrowser
- Select the `mediapipe.json` file that you downloaded
- Select Scene Collection -> mediapipe
{{</hint>}}

---

{{<hint info>}}
**Monday, February 12, 2024**

*We are going to be in room G203*
{{</hint>}}

---

## Lecture Slides

[See the lecture slides here.](https://miro.com/app/board/uXjVNuPCLRs=/)

---

## MIT Media Lab | Put That There

{{<youtube RyBEUyEtxQo>}}

{{<youtube sC5Zg0fU2e8>}}

{{<youtube CbIn8p4_4CQ>}}

- https://www.media.mit.edu/publications/put-that-there-voice-and-gesture-at-the-graphics-interface/

---

## Myron Krueger | Videoplace, Responsive Environment, 1972-1990s

{{<youtube dmmxVA5xhuo>}}

{{<youtube d4DUIeXSEpk>}}

- https://aboutmyronkrueger.weebly.com/videoplace.html

---

## Spatial Computing

### HoloLens

{{<youtube me8AzTCiabI>}}

### Apple Vision Pro

{{<youtube Vb0dG-2huJE>}}

## Homework

### Read

[Dourish, Paul. 2001. “Seeking a Foundation for Context-Aware Computing.” Human-Computer Interaction 16 (2–4): 229–41.](https://primo.aalto.fi/permalink/358AALTO_INST/cis3s6/cdi_openaire_primary_doi_80527708dd595e384eaa79f51ed0040d)

### Watch

- [Embodied Interaction - Lecture #04, Part 1](https://www.youtube.com/watch?v=DPUZ-Uk0sf4)
- [Embodied Interaction - Lecture #04, Part 2](https://www.youtube.com/watch?v=xWXHn4jUfGg)