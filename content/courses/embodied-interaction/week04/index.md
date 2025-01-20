---
title: "Week 04 | Tools & Technology #1 | TouchDesigner Tutoring | Setting Up MediaPipe"
bookCollapseSection: false
weight: 20
draft: true
---

### Lecture Slides

[Lecture slides Miro board](https://miro.com/app/board/uXjVPx9O_0A=/)

---

For the last two weeks we have been exploring in general some different ways that humans interact with technology (and each other). Today we try to go deeper into understanding this topic of Embodied Interaction that has been approached from many directions by different people. 

Specifically, we are going to focus on how the space around you and the objects in that space can become part of your thinking.

Mark Weiser called his ideas **Ubiquitous Computing** in 1988 in the form of computational, networked devices embedded to our surroundings and everyday objects in three different sizes: tabs, pads and boards.

Hiroshi Ishii and the Tangible Media Group call their vision **Tangible Bits and Radical Atoms** since the 1990s. As an example, a more physical or experimental version of the idea of Ubiquitous Computing was explored in the [ambientROOM project](https://tangible.media.mit.edu/project/ambientroom/).

{{<vimeo 48815734>}}

Saul Greenberg has investigated **Proxemic Interaction** that builds on **Proxemics** by Edward T. Hall and many of the ideas above.

{{<youtube hBANQ3blCiw>}}

{{<youtube Q13dM4hmEJQ>}}

Bret Victor and collaborators are hoping to create a more **humane representation of thought**. The first prototype was called **Dynamicland** or **Realtalk**. Originally developed at the Dynamicland space and right now at [UCSF](https://cmp.ucsf.edu/). 

This talk was your homework:

{{<vimeo 115154289>}}

This is what Dynamicland looked like:

{{<youtube cErKuEHWCpM>}}

This is what he is doing with it now:

{{<youtube -80VsIdAHZw>}}

---

## Homework

### Watch

Continue with the video lectures by Jelle van Dijk. This time about External representation and computation.

- [Embodied Interaction - Lecture #03, Part 1](https://www.youtube.com/watch?v=DkRbHlbOff8)
- [Embodied Interaction - Lecture #03, Part 2](https://www.youtube.com/watch?v=JdMnwRlKoRU)

Additionally, watch the [Proxemic Interactions presentation from Nicolai Marquadt.](https://www.youtube.com/watch?v=Q13dM4hmEJQ)

### Read

Greenberg, Saul, Nicolai Marquardt, Till Ballendat, Rob Diaz-Marino, and Miaosen Wang. 2011. “Proxemic Interactions: The New Ubicomp?” Interactions 18 (1): 42–50. https://doi.org/10.1145/1897239.1897250. [**Access it through Aalto library.**](https://primo.aalto.fi/permalink/358AALTO_INST/cis3s6/cdi_openaire_primary_doi_80527708dd595e384eaa79f51ed0040d)

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