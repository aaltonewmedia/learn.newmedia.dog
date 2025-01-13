---
title: "Week 04 | Tools & Technology #1 | TouchDesigner Tutoring | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: true
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