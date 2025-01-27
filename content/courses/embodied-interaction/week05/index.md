---
title: "Week 05 | Tools & Technology #1 | TouchDesigner Tutoring | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: true
---


---

{{<hint info>}}
**Monday, January 29, 2024**

**Room L208**
{{</hint>}}

This week, we are going to dive into the tools and technology we have available for actually creating embodied experiences.

The first part of the class today is reserved for your questions that might have risen from following the [TouchDesigner Fundamentals course](https://learn.derivative.ca/courses/100-fundamentals/).

---

## Using TouchDesigner with the Aalto licenses

You can download and use the non-commercial version on your own computer, but I would highly recommend working on the Aalto computers. We have a total 20 educational licenses available. The license is allocated to you when you launch the software. **It is not possible to get the Aalto license on your own computer.**

{{<hint warning>}}
Sometimes the license manager does not work and it cannot connect to the the server. In those cases, it seems that restarting the computer usually seems to fix the issue.
{{</hint>}}

### Using the physical computers at Väre

These classrooms have TouchDesigner installed. You can use any of them when there is space.

- [Room L208](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=IT-luokka&sijainti=R028&ctila=28138) (This room is booked for us during most of the classes. Not a great GPU but will do the trick for most cases.)
- [Room H003](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=IT-luokka&sijainti=R028&ctila=28766) (These have the most powerful graphics cards that we have available (RTX 3080 or RTX A5000), use these when you need to do more complex things.)
- [Room K103](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=Pajat+ja+piirustussalit&sijainti=R028&ctila=28174) (These are the second best option we have. RTX 2080 Ti GPUs)
- [Room G203](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=Luokka&sijainti=R028&ctila=28139) We have two computers in the G203 space available for working on your projects.
- [Media Lab Homebase]() We also have some computers in the Media Lab Homebase rooms. Specifications differ from computer to computer. The best GPU is in room O102.

### Using vdi.aalto.fi to connect to the Aalto computers remotely
  
Log in to [vdi.aalto.fi](https://vdi.aalto.fi/) with your Aalto account and choose any of the rooms listed above and you should have access to a computer with TD installed.

{{<hint info>}}
This actually works really well and it's very convenient! Can be used with a low-power machine like a laptop with much better performance. Also great for using on your Mac to access some of the Windows-only features.
{{</hint>}}

---

## Setting up MediaPipe GPU with TouchDesigner

During the second half of the class, we will setup the MediaPipe GPU plugin for your TouchDesigner installations.

[Torin Blankensmith](https://www.torinblankensmith.com/) has created an excellent plugin for TouchDesigner that enables many of the tracking posibilities of MediaPipe straight in a very TD friendly formatting.

{{<youtube Cx4Ellaj6kk>}}

Do the following in order to have an easy access to the components throughout the rest of the course:

1. Download the plugin from the [GitHub repository](https://github.com/torinmb/mediapipe-touchdesigner). Click Releases and download the latest `release.zip` file(v0.3.3 when writing this).
2. Unzip the .zip archive somewhere on your computer.
3. Open TouchDesigner.
4. Find the Palette on the left side of the interface and scroll down to `My Components`.
5. Right-click on `My Components` and choose `Add Folder`. Name it `MediaPipe GPU`.
6. Right-click on this new folder you created and choose `Browse Folder`. It opens your File Explorer (Windows) or Finder(Mac) in a location where your custom paletette components are stored.
7. Copy all of the .tox files from the `toxes` folder into the `MediaPipe GPU` folder you had created earlier.
8. Go back to TouchDesigner. Right-click on top of the `MediaPipe GPU` folder in the Palette and choose `Refresh Folder`.
9. You can open the `MediaPipe TouchDesigner.toe` file to see an example on how to to use some of this data. We will make our own experimentations next week.

More information:

- [MediaPipe Developer Guide](https://developers.google.com/mediapipe)
- [MediaPipe GPU Plugin for TouchDesigner](https://github.com/torinmb/mediapipe-touchdesigner)


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

## Homework

Continue the video lectures by Jelle van Dijk

- [Embodied Interaction - Lecture #03, Part 1](https://www.youtube.com/watch?v=DkRbHlbOff8)
- [Embodied Interaction - Lecture #03, Part 2](https://www.youtube.com/watch?v=JdMnwRlKoRU)