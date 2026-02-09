---
title: "Week 05 | Tools & Technology #1 | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: false
---


---

{{<hint info>}}
**Monday, February 2, 2026**

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

---