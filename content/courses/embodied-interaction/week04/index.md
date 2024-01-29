---
title: "Week 04 | Tools & Technology #1 | TouchDesigner Tutoring | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: false
---

{{<hint info>}}
**Monday, January 29, 2024**

**Room L208**
{{</hint>}}

This week, we are going to dive into the tools and technology we have available for actually creating embodied experiences.

The first part of the class today is reserved for your questions that might have risen from following the [TouchDesigner Fundamentals course](https://learn.derivative.ca/courses/100-fundamentals/).

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