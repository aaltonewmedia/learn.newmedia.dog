---
title: "Notes"
bookCollapseSection: false
weight: 20
draft: true
---


## For 2025

- Define the video documentation specs very specifically!
- Streamline syllabus, make a pdf
- individual assignments: Hands/Touch, Face, Body
- Exhibition planning


{{<hint info>}}
**Monday, February 6, 2023**

*We are going to be in room G203*
{{</hint>}}

## Homework

Start thinking about your final project and what you want to do. You have until March 10, 2023 to come up with a project proposal. Start working on it now. Document your process on your website. You will get more detailed instructions on the format of the project proposal next week.

See the following pages for information:

- [Final Project Guidelines](../final-project/)
- [Final Project: How to get started?](../final-project/how-to-get-started/)




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

## Inspiration

### Rafael Lozano-Hemmer – Standards and Double Standards, 2004

{{<vimeo 33931469>}}

[More information](https://www.lozano-hemmer.com/standards_and_double_standards.php)

### Random International – Audience, 2010

{{<vimeo 9852175>}}

[More Information](https://www.random-international.com/audience-2008)

### MIT Media Lab | Put That There

{{<youtube RyBEUyEtxQo>}}

{{<youtube sC5Zg0fU2e8>}}

{{<youtube CbIn8p4_4CQ>}}

- https://www.media.mit.edu/publications/put-that-there-voice-and-gesture-at-the-graphics-interface/

### Myron Krueger | Videoplace, Responsive Environment, 1972-1990s

{{<youtube dmmxVA5xhuo>}}

{{<youtube d4DUIeXSEpk>}}

- https://aboutmyronkrueger.weebly.com/videoplace.html


### Papers and Books

You have access to these pdf files via the Aalto University library or [you can also find them from MyCourses by logging in.](https://mycourses.aalto.fi/course/view.php?id=35386&section=3)

- Hall, Edward, T. [The Hidden Dimension](https://archive.org/details/hiddendimensionhall00hall)
- [Proxemic Interactions](https://interactions.acm.org/archive/view/january-february-2011/proxemic-interactions1)
- [Proxemic Interactions: From Theory to Practice](https://www.morganclaypool.com/doi/abs/10.2200/S00619ED1V01Y201502HCI025)
- [Dark patterns in proxemic interactions: a critical perspective](https://dl.acm.org/doi/abs/10.1145/2598510.2598541)

### Videos and lectures

#### Saul Greenberg: Proxemic Interactions: the New Ubicomp?

{{<youtube hBANQ3blCiw>}}

---

## Inspiration

Watch this performance and demonstration by Imogen Heap.

{{<youtube 6btFObRRD9k>}}

- [MiMu Gloves](https://mimugloves.com/)

---

## Azure Kinect | Skeleton Tracking

- [Azure Kinect TOP](https://derivative.ca/UserGuide/Kinect_Azure_TOP)
- [Azure Kinect CHOP](https://derivative.ca/UserGuide/Kinect_Azure_CHOP)
- [Examples on learn.newmedia.dog](../../../../tutorials/touchdesigner/)
- [Comparison between Kinect V2 and Azure Kinect](https://www.youtube.com/watch?v=Fv35hjl4qRI)

---

## Mediapipe | Pose

We are going to use the [Mediapipe](../../tools-and-technology/mediapipe/) library from Google to do tracking of poses from a video image. **Poses** refers to what is sometimes also called **skeleton tracking** with the Kinect and some other tools. Essentially, it means the different body parts of a human being. The image below shows all of the points that Mediapipe is able to detect

[![Mediapipe poses chart](./images/mediapipe_poses.png)](./images/mediapipe_poses.png)

### Setting Up

Be patient, Mediapipe in TouchDesigner will take a little bit of time to setup. But once you have it running you shouldn't have to do it again. I would like to have everyone do the installation on the Aalto computers today. You can also do the same thing on your own laptop later.

[Follow the instructions here to setup Python and Mediapipe for TouchDesigner.](../../tools-and-technology/mediapipe/) and come back to this page when you are done. We will spend the last segment of the class today to solve any issues with the installation.

{{<hint danger>}}
If you are doing this on the computers in room L208, always use the same computer, since python and the other settings will be installed locally on the computer's hard drive.
{{</hint>}}

### Download the mediapipePose.tox

I have made a little helper file for you to use.

1. [Download the mediapipePose.tox file](../../tools-and-technology/mediapipe/examples/mediapipePose.tox)
2. Open a new TouchDesigner project
3. Drag the .tox file you downloaded to the project's network editor

I would also recommend to add this file to your **Palette**.

1. Open the Palette in TouchDesigner if it's not open
2. Scroll down to the My Components folder
3. Right click that folder and select **Add Folder**. Name it Mediapipe.
4. Drag the mediapipePose operator to this newly created folder.

[![Palette folder](./images/palette_mediapipe.png)](./images/palette_mediapipe.png)

So what does it do? It handles all the code for getting the tracking data in two formats. Firstly, it gives you an image with a visualization of the pose data as a TOP. Secondly, it gives you the data from each point:

- `pose:x` and `pose:y` | Landmark coordinates normalized to [0.0, 1.0] by the image width and height respectively.
- `pose:z` | Represents the landmark depth with the depth at the midpoint of hips being the origin, and the smaller the value the closer the landmark is to the camera. The magnitude of z uses roughly the same scale as x.
- `pose:x_world`, `pose:y_world` and `pose:z_world` | Real-world 3D coordinates in meters with the origin at the center between hips.
- `pose:visibility` A value in [0.0, 1.0] indicating the likelihood of the landmark being visible (present and not occluded) in the image.

[![Pose CHOP data](./images/posedata.png)](./images/posedata.png)

---

## Examples created during class

We will examine how this works in more detail during class. I will upload the file here at the end of the day.

[Download the example](./files/ei_week8_medipipe-pose.toe)

---

## Comparison: Kinect VS Mediapipe

### Reasons to use the Kinect over Mediapipe

- Easy setup with TouchDesigner, just plug and play, the SDK is already there and working.
- Kinect gives you real 3D data in a space. Mediapipe provides only relative 3D pose data.
- Kinect works with multiple people, tracking multiple people with Mediapipe is not supported, [but you can do it through some workaraounds.](https://shawntng.medium.com/multi-person-pose-estimation-with-mediapipe-52e6a60839dd)
- Kinect can also be used to get point cloud data or for other use case where depth image is needed
- Kinect generally gives more accurate results
- Kinect works in complete darkness since it uses infrared light.
- Mediapipe is generally slower than the Kinect (in TouchDesiger at least since it is not able to use the GPU for tracking)

### Reasons to use the Mediapipe over Kinect

- Works on multiple platforms including desktop (Windows/Mac/Linux), Android, iOS, web. Kinect is Windows only.
- Good support for many different programming languages
- Doesn't need expensive and specific hardware. Pretty much any webcam will work.
- Azure Kinect is only properly supported on NVIDIA graphics cards. Mediapipe works with almost anything. Performance is of course affected by the hardware.

---

## References for Mediapipe

- [Examples partly based on work from Bryan Chung](https://github.com/chungbwc/TouchDesigner)
- [Mediapipe website](https://mediapipe.dev/)
- [More information on learn.newmedia.dog](../../tools-and-technology/mediapipe/), I will update this as I build more materials

---

## Inspiration: Faces

{{<vimeo 211271693>}}

[Zach Liebermann Más Que la Cara](https://zachlieberman.medium.com/m%C3%A1s-que-la-cara-overview-48331a0202c0)

---

## Inspiration: Hands

{{<youtube 3paLKLZbRY4>}}

[Manual Input Workstation](http://www.tmema.org/mis/)

---

## Downloads

- [mediapipeFace component](../../tools-and-technology/mediapipe/examples/mediapipeFace.tox)
- [mediaPipeHands component](../../tools-and-technology/mediapipe/examples/mediapipeHands.tox)

---

## Examples

[Download the example we built in class](./files/mediapipeFace-example.toe)

---

# Week 09 | Lesson 01 | 08/03/2023

---

## Inspiration

{{<youtube d-yHULQ2V5c>}}

---

## Current Events and Recommendations

- [Musica Nova Festival](https://musicanova.fi/en/event/aanituhkaa-sounding-ashes-2/)
  - [Unity Switch](https://musicanova.fi/en/event/alexander-schubert-defunensemble-unity-switch-2/)
  - [Sounding Ashes](https://musicanova.fi/en/event/aanituhkaa-sounding-ashes-2/)
- [Love Simulation Eve](https://www.lovesimulationeve.com/) by Eero Tiainen who graduated from the Aalto Media Lab + a large group of our current and graduated students
- [Art and Tech Open Call](https://studios.aalto.fi/art-tech-open-call-23/)

---

## Lecture

[Miro link](https://miro.com/app/board/uXjVPi2Zgtc=/)

---

## Technical Lecture

Files from the lecture will be provided here after the class.

- [Download example built in class (08/03/2023)](./files/08-03-2023_classExample.toe)

---

## Additional references

{{<youtube fcCRmf_tHW8>}}

---

# Week 09 | Lesson 02 | 09/03/2023

- [Download the updated mediapipeHands.tox file](../../tools-and-technology/mediapipe/examples/mediapipeHands.tox) This one provides also the 3D coordinates.
- [Download the starting point for today](../../tools-and-technology/mediapipe/examples/tests/mediapipeHands_2D-VS-3D.toe)
- Downlad a .zip of the TouchDesigner and Wekinator projects that were made during the class.

We are going to take a look at a machine learning tool called [Wekinator](http://www.wekinator.org/). It is unfortunately not yet installed on the computers at Aalto. So I recommend just following the demonstration today.

Matti will make a video tutorial detailing the use of the tool in the next couple of days so you can come back to it if you wish to use it yourself.

---

## References

- [Mediapipe built-in gesture recognition](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer)
- [Mediapipe Gesture Recognition Web Demo](https://codepen.io/mediapipe-preview/pen/zYamdVd)
- [Gesture recognition example in Python](https://github.com/Kazuhito00/hand-gesture-recognition-using-mediapipe)

---


**Unprocessed class materials, will be cleaned before the class.**

## Robotics and Embodied AI

So far we have been focusing on technology that somehow connects to or enhances the human body or capabilities in one way or another. But what if we look at this from the other side of the coin? What if we create bodies for digital technology?

## Robotic Art

{{<youtube ZS4Bpr2BgnE>}}

This is a series of videos 

## Embodied AI

{{<youtube Qob2k_ldLuw>}}

{{<youtube Q5MKo7Idsok>}}

{{<youtube EjXcEU3Bbw>}}

## Other Resources

- [HRI (Human-Robot Interaction)](https://humanrobotinteraction.org/)

---

## Biosensors

### Pulse, oximeter, heart rate

{{<youtube FVOD5SdEAFA>}}

<iframe src="https://aalto.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=47118bcd-af60-4e4b-b646-ac7c01123449&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all" height="650" width="100%" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

<iframe src="https://aalto.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=782bb396-1bef-4b30-99b4-ac7c01254c32&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all" height="650" width="100%" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### EMG (electromyography)

{{<youtube -VbCPRMfBnE>}}

### EEG

We have a couple of the Muse Headbands. The video below explains how you could access the data.

{{<youtube Br0JXvuzWEI>}}

#### Qi Chen – Brainwave Project

Qi Chen did her exchange studies in New Media a couple of years ago. During her studies, she worked with the Muse Headband which eventually led to the project below.

- [Qi Chen – Brainwave Project](https://mp.weixin.qq.com/s?__biz=Mzk0ODM5ODYzMA==&mid=2247491550&idx=1&sn=e35c034e8112c4a674943a34407a95fd&source=41#wechat_redirect)

{{<youtube PMCQRuucMM4>}}

### Aalto Behavior Lab

[ALB](https://www.aalto.fi/en/aalto-neuroimaging-ani-infrastructure/aalto-behavioral-laboratory)

{{<youtube QpyoRUFkZiA>}}

---

## Haptics

- [Hsieh, Wan-Ting – Wireless haptic system design for a multiplayer VR game scenario](https://aaltodoc.aalto.fi/handle/123456789/111855)
- [Hands-on research and prototyping for haptics](https://www.microsoft.com/en-us/research/blog/research-collection-hands-on-research-and-prototyping-for-haptics/)


---


## Project

### Week 11 | 20.–21.3. Matti in Admissio interviews

Note that Matti will be in the New Media MA admission interviews during this week so you will be working on your own on Wednesday and Thursday.

### Easter holiday: 28.03.–03.04.2024

I will be out of office during the Easter Holiday. You can of course work during that time, but I recommend you to take some rest as well. You should be able to acceess the school with your keycard.

### Friday, 12.04.2023 | Final Project Presentations

Present your work to the class. We have so many students that we need to start 9:15 sharp.

### Friday, 19.04.2023 | Final Project Documetation deadline 

You have until April 19 to finish up your documentation. I will check your sites/documents after that point to evaluate your work.