---
title: "Week 05 | Tools & Technology #2 | Body Tracking | Working with MediaPipe"
bookCollapseSection: false
weight: 20
draft: false
---

{{<hint info>}}
**Monday, February 5, 2024**

**Room H003**  
**Note that we are in a completely different classroom today! You can access the room by going through either the Mechatronics (G014) or Laser Cutter (H001) Workshops.**

{{</hint>}}

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

In TouchDesigner, you can find the 
{{</hint>}}

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

MediaPipe is the simplest option in the sense that it doesn't require any special hardware and works wi

Pros:

- No special hardware needed (any webcam that is able to output a 720p image will work)
- Does also much more beyond the pose tracking
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