---
title: Stable Diffusion
bookCollapseSection: false
draft: false
---

# Stable Diffusion

---

<video autoplay muted loop width="100%">
    <source src="/images/tutorials/ai/lulo_vid.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

## Introduction

Stable Diffusion is a latent text-to-image diffusion that uses machine learning to generate images. It was developed by StabilityAI and several research institutions, and released in 2022.

It is primarily used to generate detailed images conditioned on text descriptions, though it can also be applied to other tasks such as inpainting, outpainting, and generating image-to-image translations , animations, videos and imge-to-audio transformations.

[![Difussion Process 1](/images/tutorials/ai/sd_process_1.png)](/images/tutorials/ai/sd_process_1.png)

It works by by diffusing noise over a series of steps. The model uses a text encoder to encode the input text into a latent space (representation of data), which is then used to generate the image, by reversing the a initial noise or "diffusing" an image. Different noise decoders (samplers) produce different results, which can achive different aestehtic goals. This is different than a more traditional GAN approach(which involves two networks competing against eachother), beacuse the process is faster and yiled more accurate results.

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

The general installation guide and repo is here [Automatic 1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui).

{{<hint warning>}}
The following are instructions for windows, for other operating systems, please refer to the [Automatic 1111 on Mac](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon) and [Automatic 1111 on Linux](https://github.com/AUTOMATIC1111/stable-diffusion-webui#automatic-installation-on-linux).
{{</hint>}}

In order to install Automatic 1111 on a PC, there are some requirements that you need to satisfy first. Make sure you have python 3.8 or higher installed, and Git. If you dont have those, please install them first. You can get them from the following links:

- [Python](https://www.python.org/downloads/release/python-3106/)
- [Git](https://git-scm.com/download/win)

Now first browse to your desired folder, open the terminal in that folder (by typing cmd on the address bar in the explorer), and then clone the repository by typing the following command:

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git

```

This wil create a folder called sd-webui. Now browse into that folder and open the file called webui-user.bat. Now the system should start.

{{<hint info>}}
You can create a shortcut to the webui-user.bat file and place it on your desktop for easy access.
{{</hint>}}

---

## Prompt Engineering

The underlying sytem that understands the text that we input into Stable Diffusion is called CLIP. [CLIP](https://openai.com/research/clip) is a neural network that has been trained to understand text and images. It is a very powerful system, but it is also very sensitive to the way we write our prompts. This is why we need to learn how to write prompts that will produce the results that we want.

This meand that the descriptions have to be tailored in a way that the system can understand them. This is not always easy, and it requires some practice. The following are some tips that can help you write better prompts.

- Be as descriptive and declarative as possible
- Use simple language in short sentences
- Having a really long prompt will hinder the results because the will start converging
- You can use text weight to accetuate the "importance of a word" in the prompt
- You can use negative prompt to steering the generation away from concepts

{{<hint info>}}
Use parenthesis to increase the importance example: (dog), ((dog)). (((dog))). Each parenthsis increaseis the importance of that work by 1.1 times
Use bracket to reduce the importance of a word example: [dog], [[dog]], [[[dog]]]. Each bracket reduces the importance of that word by 0.9 times
Similarly you can just assing the importance of the word directly as a number example: (dog:1.5), (dog:0.5)
{{</hint>}}

{{<hint warning>}}
In Autoamtic 1111 and other solutions there is always two boxes for propmting. One for the "normal" or positive prompt and one for the negative prompt.
{{</hint>}}

An example of a good prompt would be:

```
A realistic painting of a dog in a forest, by Van Gogh, at night
```

An example of a bad prompt would be:

```
I want a painting of a dog painted by van gogh in a forest at night. I want it to be realistic too and maybe with some lights
```

An example of a prompt with text weights and negative prompt too would be:

```
A realistic painting of a dog in a forest, by Van Gogh, at night
negative: cartoon, drawing, sketch, illustration, 2 dogs, deformed
```

[![Prompt Differences1](/images/tutorials/ai/lulos_diff.png)](/images/tutorials/ai/lulos_diff.png)

<!-- Concepts are often separted by commas, and the system will try to generate an image that contains all of the concepts. Someties these are also called tokens. -->

You can find more detailed information about prompt engineering here:

- [Stable Diffusion Prompt Guide for Beginners](https://aituts.com/stable-diffusion-prompts/)
- [Stable Diffusion prompt: a definitive guide](https://stable-diffusion-art.com/prompt-guide/)
- [The Ultimate Prompt Guide](https://prompthero.com/stable-diffusion-prompt-guide)

### ChatGPT

We could also query ChatGPT or Bing Chat (which is more up-to-date) about the prompt we want to use. This can be useful to get a better understanding of the prompt, and to get some ideas about what we can write. This way we could have a better idea of what the system can understand. There are some extensions that can be integrated into Automatic 1111 that can use ChatGPT to generate prompts withing the interface. In the Extensions section you can find more information about this.

---

## Interface and Parameters

[![Main Interface](/images/tutorials/ai/interface_basic.png)](/images/tutorials/ai/interface_basic.png)

<!-- model loader
input prompt
generate button with ulnimeted -->

### Txt2Img

<!-- samplimen methods IMG HERE
steps (PUT IMAGE HERE)
hires fix

witdh
height
batch count
batchsize
seed
extra variation
scripts -->

### Img2Img

<!-- drop
batch
denoising -->

### Inpainting

<!-- painting
latent space -->

### Upscaling

<!-- upscaler -->

---

## Models

<!-- where to get models from -->

### SD 1.5

### SDXL

### Embeddings

### Lora

### Textual Inversion

### Hypernetworks

### Training

### Merging

---

## Extensions

<!-- https://github.com/hallatore/stable-diffusion-webui-chatgpt-utilities -->

---

## ControlNet

### Models

---

## Animation

### Deforum

### Batch

### AnimateDiff

---

## API

### Setup

### Touchdesigner

---

## Other Resources

<!-- - Stable Diffusion
- [ControlNet](https://arxiv.org/abs/2302.05543) -->
