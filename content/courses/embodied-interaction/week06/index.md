---
title: "Week 06 | Tools & Technology #2: Depth Cameras and Body Tracking"
bookCollapseSection: false
weight: 20
draft: false
---

{{<hint info>}}
**Monday, February 9, 2026**

**Room 3420 (Marsio), Computer classrooom**
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

{{<vimeo 12910372>}}

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

---

## Setting up MediaPipe GPU with TouchDesigner

During the second half of the class, we will setup the MediaPipe GPU plugin for your TouchDesigner installations.

[Torin Blankensmith](https://www.torinblankensmith.com/) and [Dom Scott](https://art.domscott.ca/art/mediapipe-for-touchdesigner) have created an excellent plugin for TouchDesigner that enables many of the tracking posibilities of MediaPipe straight in a very TD friendly formatting.

{{<youtube Cx4Ellaj6kk>}}

### Add the MediaPipe files to Your TouchDesigner Palette

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

## Using MediaPipe in your own projects

After you have added the components to your Palette, you have access to the .tox files easily. Just make sure you do the following step to not make your file size too large.

1. Drag the main MediaPipe component to your project from the Palette
2. Select the component and go to the Common page of the properties.
3. Turn on `Enable External .tox`
4. Add the path of the component to the `External .tox Path` to point to the location where your Palette folder is. Easisest way to do this is to go to the Palette and find the folder you created earlier (MediaPipe GPU), right click and select Browse Folder, drag the MediaPipe.tox into the text box for `External .tox Path`

Doing this makes sure that the component is properly loaded and you need to only have one copy of the component on your hard drive.

### Workaround to get the camera image working with Aalto computers

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

### Information About MediaPipe

More information:

- [MediaPipe Developer Guide](https://developers.google.com/mediapipe)
- [MediaPipe GPU Plugin for TouchDesigner](https://github.com/torinmb/mediapipe-touchdesigner)

## Artists

- [Soyun Park](https://soyunparrrk.com/)
- [Yehwan Song](https://www.yhsong.com/) also see her [Instagram](https://www.instagram.com/yehwan.yen.song/)
- [Torin Blankensmith](https://www.torinblankensmith.com/) | [Instagram](https://www.instagram.com/blankensmithing/)
- [The Poet Engineer](https://www.instagram.com/the.poet.engineer/)
- [Bonnie Pham](https://www.instagram.com/bonnie2.0.0/)
- [Immersive Arts Space](https://www.zhdk.ch/en/immersive-arts-space-10984) and their [blog](https://blog.zhdk.ch/immersivearts/)
- [reshapedbody IG](https://www.instagram.com/reshapedbody)

---

## Example Done in Class

I made some sample files from two different body tracking sensors. You can use these in TouchDesigner to understand the data coming from the sensors without having them.

- [Kinect Azure](./files/kinect_azure.chan)
- [Zed 2i](./files/zed_neural_plus_34.chan)

You can also [download the example file](./files/embodied-sample.zip) that shows how to visualize the data.

---

## Homework

### Final Project Ideation

If you haven't already, now is the time to start planning your final project for the course. [See the guidelines here.](../../final-project/) We will go over the details in class today and get this process started.

### Watch

- [Embodied Interaction - Lecture #04, Part 1](https://www.youtube.com/watch?v=DPUZ-Uk0sf4)
- [Embodied Interaction - Lecture #04, Part 2](https://www.youtube.com/watch?v=xWXHn4jUfGg)
