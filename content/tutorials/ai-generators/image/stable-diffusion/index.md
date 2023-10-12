---
title: Stable Diffusion
bookCollapseSection: false
draft: false
---

# Stable Diffusion

---

[![Wide AI Lulo](/images/tutorials/ai/widelulo.png)](/images/tutorials/ai/widelulo.png)

---

## Introduction

Stable Diffusion is a latent text-to-image diffusion that uses machine learning to generate images. It was developed by StabilityAI and several research institutions, and released in 2022.

It is primarily used to generate detailed images conditioned on text descriptions, though it can also be applied to other tasks such as inpainting, outpainting, and generating image-to-image translations , animations, videos and imge-to-audio transformations.

[![Difussion Process 1](/images/tutorials/ai/sd_process_1.png)](/images/tutorials/ai/sd_process_1.png)

It works by by diffusing noise over a series of steps. The model uses a text encoder to encode the input text into a latent space (representation of data), which is then used to generate the image, by reversing the a initial noise or "diffusing" an image. Different noise decoders (samplers) produce different results, which can achive different aestehtic goals. This is different than a more tradition GAN approach, beacuse the process is faster and yiled more accurate results.

The process works with noise seeds, not unlike generaative art systems, whica can be used to "lock" the latetn space in order to procude consistent results. This is useful for animation, where the same seed can be used to generate a sequence of images.

[![Difussion Process 2](/images/tutorials/ai/sd_process_2.jpg)](/images/tutorials/ai/sd_process_2.jpg)

Similarly, the diffusion porcess can be trained. This is useful for generating images that are consistent with a given text description, or for generating images that are consistent with a given set of images, that have not been previously enconded in to the model. Different models contain different knowledge, and can be used to generate different results.

Stable Diffusion is open-source and can be used for free.

- [Stable Diffusion Original Release](https://github.com/CompVis/stable-diffusion)
- [Latent Diffusion Models](https://github.com/CompVis/latent-diffusion)
- [Diffusion vs GANs](https://developer.nvidia.com/blog/improving-diffusion-models-as-an-alternative-to-gans-part-1/)
- [How Diffusion Models Work](https://theaisummer.com/diffusion-models/)
- [Stability AI](https://stability.ai/)

---

## Installation

The base configuration of Stable Diffusion is meant to be modular, open-source and easy to use, and it can be extended with additional models and features. This is why there is several solutions that have been build on top of the base Stable Diffusion code. This tutorial will focus on Automatic 1111, but you can find more information about other open-source solutions on the links below.

- [Invoke AI](https://invoke.ai/)
- [Vladmandic](https://github.com/vladmandic/automatic)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)

### Automatic 1111

A browser interface based on Gradio library for Stable Diffusion. IT is the most popular and extendable solution for Stable Diffusion. Automatic 1111 has hundreds of extensions and a large community of users, that are constantly developing new models and features.

The general installation guide and repo is here [Automatic 1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

{{<hint warning>}}
The following are instructions for windows, for other operating systems, please refer to the [Automatic 1111 on MAC](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon) and [Automatic 1111 on Linux](https://github.com/AUTOMATIC1111/stable-diffusion-webui#automatic-installation-on-linux)
{{</hint>}}

In order to install Automatic 1111 on a PC, there are some requirements that you need to satisfy first. Make sure you have python 3.8 or higher installed, and Git. If you dont have those, please install them first. You can get them from the following links:

- [Python](https://www.python.org/downloads/release/python-3106/)
- [Git](https://git-scm.com/download/win)

Now first browse to your desired folder, open the terminal in that folder (by typing cmd on the address bar in the explorer), and then clone the repository by typing the following command:

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git

```

This wil create a folder called sd-webui. Now browse to that folder and open the file called webui-user.bat. Now the system should start.

{{<hint warning>}}
You can create a shortcut to the webui-user.bat file and place it on your desktop for easy access.
{{</hint>}}

```

## Prompt Engineering

### Embeddings

### ChatGPT

---

## Generation and Parameters

### Txt2Img

### Img2Img

### Upscaling

## Models

### SD 1.5

### SDXL

### Lora

### Textual Inversion

### Hypernetworks

### Training

### Merging

## Extensions

## ControlNet

### Models

## Animation

### Deforum

### Batch

### AnimateDiff

## API

### Setup

### Touchdesigner

## Other Resources

- Stable Diffusion
- [ControlNet](https://arxiv.org/abs/2302.05543)
```
