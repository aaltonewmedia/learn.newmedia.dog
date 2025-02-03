---
title: "Week 05 | Tools & Technology #1 | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: false
---


---

{{<hint info>}}
**Monday, February 3, 2025**

**Room 3420 (Marsio)**
{{</hint>}}

This week, we are going to dive into the tools and technology we have available for actually creating embodied experiences.

---

## Using TouchDesigner with the Aalto licenses

You can download and use the non-commercial version on your own computer, but I would highly recommend working on the Aalto computers. We have a total 20 educational licenses available. The license is allocated to you when you launch the software. **It is not possible to get the Aalto license on your own computer.**

{{<hint warning>}}
Sometimes the license manager does not work and it cannot connect to the the server. In those cases, it seems that restarting the computer usually seems to fix the issue.
{{</hint>}}

### Using the physical computers at Väre

These classrooms have TouchDesigner installed. You can use any of them when there is space.

- [Marsio, 3420](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=fav&laji=IT-luokka&sijainti=&ctila=43857) Computer classroom in Marsio.
- [Marsio, Experimental Studio 3430](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=fav&laji=Erityistilat&sijainti=&ctila=43858) We have theee computers in the Experimental Studio available for working on your projects.
- [Marsio, Extended Reality Studio 3401](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=fav&laji=Erityistilat&sijainti=&ctila=43856). The XR Studio can also be used when it's free.
- [Väre, Room L208](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=IT-luokka&sijainti=R028&ctila=28138) (This room is booked for us during most of the classes. Not a great GPU but will do the trick for most cases.)
- [Väre, Room K103](https://booking.aalto.fi/onlinekalenteri/aaltobooking/?kt=tila%2C39790&laji=Pajat+ja+piirustussalit&sijainti=R028&ctila=28174) (RTX 3080 GPUs)
- [Väre, Media Lab Homebase]() We also have some computers in the Media Lab Homebase rooms. Specifications differ from computer to computer. The best GPU is in room O102.

### Using vdi.aalto.fi to connect to the Aalto computers remotely
  
Log in to [vdi.aalto.fi](https://vdi.aalto.fi/) with your Aalto account and choose any of the rooms listed above and you should have access to a computer with TD installed.

{{<hint info>}}
This actually works really well and it's very convenient! Can be used with a low-power machine like a laptop with much better performance. Also great for using on your Mac to access some of the Windows-only features.
{{</hint>}}

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

---

## Homework

### Watch

Continue the video lectures by Jelle van Dijk

- [Embodied Interaction - Lecture #03, Part 1](https://www.youtube.com/watch?v=DkRbHlbOff8)
- [Embodied Interaction - Lecture #03, Part 2](https://www.youtube.com/watch?v=JdMnwRlKoRU)

### Experiment

Experiment with gestural interactions using MediaPipe or some other tool of your choice. Create a **simple** interactive sketch that does the following:

- It should use some form of tracking with live video (hands, face, body, object tracking, classification etc.)
- Use the data to control **one output** graphics, video, animation, sound, lights, mechanical movement etc.
- Record a short video of it and submit to MyCourses
- Try to do something that is not just one-to-one mapping of your movements to the movements of a virtual avatar. Think about interactions and different types of controls or conversions from input to output.
- **Keep it simple, no need to do anything beyond one type of interaction.** This is not yet your final project.

I recommend experimenting with TouchDesigner and MediaPipe, but you are free to use some other tools as well, such as:

- p5.js with ml5.js
- Unity (there is also a [MediaPipe plugin for Unity](https://github.com/homuler/MediaPipeUnityPlugin))
- Unreal Engine (for example with Live Link)
- Kinect camera
- ZED camera

**Deadline: Tuesday, February 25, 23:59**