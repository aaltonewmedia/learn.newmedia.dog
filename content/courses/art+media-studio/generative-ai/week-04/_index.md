---
title: "04 | Fake Everything"
bookCollapseSection: true
draft: false
weight: 40
---

## Advanced ComfyUI

There are many extension for ComfyUI. One of the most powerful is the IP-Adapter. This extension allows us to extract semantic meaning from images, and use it to guide the generation process

## Krita

Krita is a professional FREE and open source painting program. It is made by artists that want to see affordable art tools for everyone. concept art, texture and matte painters, illustrations and comics. We can enhance Krita using the ComfyUI extension.

To set Krita up:

- Download and install Krita from [here](https://krita.org/en/download/krita-desktop/)
- Download the ComfyUI extension from [here](https://github.com/Acly/krita-ai-diffusion)
- Follow the instructions in the README file to install the extension

For the course, all the computers at K103 have Krita installed already, however we need to setup the plugin everytime we log into our accounts. To get things running:

- Open Krita
- Go to `Tools` > `Scripts` > `Import Python Plugin From File ...`
- Find the `Krita-ai-diffusion.zip` file in the `automatic1111/krita-comfy` folder
- Click on `Open`
- Krita will ask you to restart the application
- Open ComfyUI and let it run in the background
- Once restarted, create a new canvas of any size, but ideally 1024x1024 pixels
- Go to `Settings` > `Dockers` > `AI Image Generation`
- A new panel will be open.
- Click on `Configure` and select `Local Server`
- Press `Connect`

Finally save your Krita file before starting the generation process. Now you can press the `Play` and `Record` buttons. The system will genenerate a new image every time you press `Play` or if you are in the "Live mode", everytime you make a change in the canvas. You can change the style on the dropdown menu, and the strength of the diffusion process with the slider.

## Fake Music & Voices

We can also use diffusion systems (or other AI implementations) to generate music and voices. Some of the tools that we can use are:

- [Riffusion](https://github.com/riffusion/riffusion) (Requires Login, limited generations, also works with Auto1111)
- [Suno](https://suno.com/) (Requires Login, limited generations)
- [Udio](https://www.udio.com/) (Requires Login, limited generations)
- [ElevenLabs](https://elevenlabs.io/) (Requires Login, limited generations)
- [Tortoise TTS](https://github.com/neonbjb/tortoise-tts)
- [Resemble](https://app.resemble.ai/)
- [Voice AI](https://voice.ai/) (Requires Login, limited generations)
- [Coqui TTS](https://github.com/coqui-ai/TTS)
- [Coqui XTTS2](https://huggingface.co/spaces/coqui/xtts)
- [Bark](https://github.com/suno-ai/bark)
- [Bark Voice Clone](https://github.com/serp-ai/bark-with-voice-clone)
- [OpenVoice](https://huggingface.co/myshell-ai/OpenVoice)
- [Huggingface Voice Clone](https://huggingface.co/spaces/tonyassi/voice-clone)
- [Huggingface Voice Cloning Space](https://huggingface.co/spaces/BilalSardar/Voice-Cloning)
- [SadTalker](https://github.com/OpenTalker/SadTalker)
- [Gooey LipSync](https://gooey.ai/Lipsync/)
- [Gooey TTS](https://gooey.ai/lipsync-maker/)
- [ComfyUI TTS](https://github.com/AIFSH/ComfyUI-XTTS?tab=readme-ov-file)
