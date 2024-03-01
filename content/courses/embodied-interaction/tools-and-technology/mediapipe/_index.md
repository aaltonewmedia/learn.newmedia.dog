---
title: MediaPipe in TouchDesigner
bookCollapseSection: true
p5js-widget: false
draft: false
---

Mediapipe is an excellent way to prototype projects involving face tracking, hand tracking, pose detection and other advanced detection solutions based on machine learning. Google originally used it internally for many of their products (Google Lens, NestCam etc.) and in 2019 they released it for public use.

## Pros and Cons of Mediapipe

### Pros

- Cross-platform (C++, Android, iOS, Python, JavaScript).
- Doesn't need any specific hardware like the Azure Kinect. You can just use your webcam.
- Runs on mobile devices as well.
- Very fast (compared to past solutions)!

### Cons

- Most of the tracking data is not fully 3D. If you need to get real 3D coordinates of all the tracking points with a fixed reference in the real world, the Kinect and some other depth camera solutions will work better.
- Documentation is not very detailed so it can be a little bit confusing to work with it sometimes.
- It is using just your normal webcam, so you might run into issues when you are trying track people in a space where you have projections and other types of constantly changing lights.
- The quality is very good, but not perfect.
- The pose estimation only detects one skeleton at a time.

## References

- [MediaPipe Developer Guide](https://developers.google.com/mediapipe)

---

## MediaPipe in TouchDesigner

### MediaPipe GPU

- [MediaPipe GPU Plugin for TouchDesigner](https://github.com/torinmb/mediapipe-touchdesigner)

[Torin Blankensmith](https://www.torinblankensmith.com/) has created an excellent plugin for TouchDesigner that enables many of the tracking posibilities of MediaPipe straight in a very TD friendly formatting.

{{<youtube Cx4Ellaj6kk>}}

---

### Mediapipe CPU (Python Inside TouchDesigner)

{{<hint danger>}}
The instructions below explains how to setup Mediapipe to run on Python inside TouchDesigner. This method does not run quite as fast as the GPU version above. I am providing these instructions for archival purposes and also for cases where you cannot make the GPU version work. **It is recommended to use the GPU version above.**
{{</hint>}}

- [MediaPipe CPU (Python inside TouchDesigner)](./mediapipe-cpu-python/)

---

## MediaPipe in Unity

- [Unity plugin for MediaPipe](https://github.com/homuler/MediaPipeUnityPlugin)