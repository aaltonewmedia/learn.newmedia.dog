---
title: Comfy UI
bookCollapseSection: false
draft: false
---

## Introduction

ComfyUI is an opensource Nodes/graph/flowchart interface to experiment and create complex Stable Diffusion workflows without needing to code anything. In many cases it is superior to Automatic 1111 because it has a better memoery management, which allows you to create more complex nad larger and longer images and videos. Because it is workflow-based, this means that it is also highly customizable and can be extended with add-ons. This makes it a very powerful tool for artists and creators that want to experiment with AI and create new and unique pieces.

### Installation

You can find more information about how to install ComfyUI in your onw machine below:

- [ComfyUI Git](https://github.com/comfyanonymous/ComfyUI)

It is reccomended to install the portable version in Windows. That should have everything you need to start generating images and videos.

{{<hint warning>}}
If you are using a computer at K103, you don't need to install ComfyUI. It is already installed in all the computers. But maybe you need to create a custom shortcut to the executable file.
{{</hint>}}

## Basic Usage

[![Comfy Basic](/images/tutorials/ai/comfy_basic.png)](/images/tutorials/ai/comfy_basic.png)

After learning how Automatic 1111 works, we can have a better graps of how ComfyUI can be operated. The basic idea is to create these "flows" of information, wheere we connect inputs (models, Loras, parameters, etc...) to outputs (fucntions, samplers, renderers etc...).

### Models and Parameters

The paarameters work the same way as

You can find the base models here:

- [SD 1.5 from Stability AI](https://huggingface.co/runwayml/stable-diffusion-v1-5)
- [SDXL from Stability AI](https://huggingface.co/runwayml/stable-diffusion-xl)

And community models(checkpoints, Loras, embeddings) here:

- [Civitai](https://civitai.com/)
- [HuggingFace](https://huggingface.co/models?other=stable-diffusion)
- [Models in General](https://github.com/awesome-stable-diffusion/awesome-stable-diffusion)

## Workflows

ComfyUI works byt reading a JSON configuration file. This is called a workflow. These workflows can be uses in the form of an image or a txt file.

To start using a workflow we press the "Load Default" button. This will load a default workflow that we start modifying. Additionally, we can drag and drop and image or txt file containing a workflow into the ComfyUI interface, or press the "Load" button to load a workflow from a file.

It is reccomended to press the "Refresh" button after loading a workflow to make sure that all the nodes are correctly displayed, and all the models are correctly loaded.

You can find plenty of workflows in the "Workflows" folder in the GenAI course Folder in OneDrive. Addtionally you can find more workflows and some resources about how to crete workflows below:

- [Comfy Workflows](https://comfyworkflows.com/)
- [OpenArt Workflows](https://openart.ai/workflows/home)
- [Rundiffusion Workflows](https://rundiffusion.com/comfyui-workflows)
- [ComfyUI Workflows](https://github.com/comfyanonymous/ComfyUI_examples)
- [CivitAI Workflows](https://civitai.com/articles?view=feed&tags=127048)
- [ComfyUI ICU Workflows](https://comfy.icu/explore)

## Add-ons

ComfyUI can be easily extended with add-ons. These add-ons can be used to create new workflows or to modify existing ones. The most important add-on is the ComfyUI Manager that you can find here:

[![Comfy Manager](/images/tutorials/ai/comfy_manager.png)](/images/tutorials/ai/comfy_manager.png)

- [ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager)

{{<hint info>}}
All the computers at K103 already have the ComfyUI Manager installed. It should appear as a tab on the sidebar of the ComfyUI user interface.
{{</hint>}}

As we progress in our explorations of ComfyUi we will discovere more and more addons that can be used to extend its capabilities.Follow closely the Youtube tutorials and the documentation to install them correctly. However for aourn 95% of them the ComfyUI Manager is enough. You just have to press "Install Missing Addons" and you are good to go.

## Krita

### Installation on K103

We can connect Krita to ComfyUI using the Krita-Comfy Plugin. This allows us to send images from ComfyUI to Krita and viceversa. This is very useful when we want to use e.g. our drwinsg in Krita and then apply some AI filters to them in ComfyUI.

If you want to install Krita and the Krita-Comfy Plugin in your own machine you can follow the instructions and find some examples of the usage below:

- [Krita Download](https://krita.org/en/download/)
- [Krita Comfy Plugin](https://github.com/Acly/krita-ai-diffusion)
- [Krita Comfy Required Models](https://github.com/Acly/krita-ai-diffusion/wiki/ComfyUI-Setup)
- [Hooking up Krita and ComfyUI](https://www.interstice.cloud/plugin#localServerInstallationSection)
- [Krita Comfy Realtime](https://www.reddit.com/r/StableDiffusion/comments/181fn3k/kritasdcompyui_for_a_realtime_painting/?rdt=45395)
- [Acly Krita Youtube](https://www.reddit.com/r/StableDiffusion/comments/181fn3k/kritasdcompyui_for_a_realtime_painting/?rdt=45395)

{{<hint warning>}}
All the computers at K103 already have the Krita-Comfy Plugin installed, however due to limitations on the computer rights we have to reinstall the plugin the first time we use it.
{{</hint>}}

## Animation

Coming soon...

## 3D

Coming soon...

## TouchDesigner

You can try to integrate your own API with python in TouchDesginer but by far the best way it to use DotSimualted .tox file that includes ComfyUI. You can find more information about it on his page below, however for GenAI course you can find the .tox file in the TouchDesigner Folder in OneDrive. Same goes with the StreamDiffusion extension.

- [DotSimulate ComfyUI](https://www.youtube.com/watch?v=jIIqE8cp420&t=2s&ab_channel=dotsimulate)
- [DotSimulate StreamDiffusion](https://www.youtube.com/watch?v=X4rlC6y1ahw&ab_channel=dotsimulate)

## API

You can find information about using the API below:

- [ComfyUI API How to](https://medium.com/@yushantripleseven/comfyui-using-the-api-261293aa055a)
- [ComfyUI API Example](https://github.com/comfyanonymous/ComfyUI/blob/master/script_examples/basic_api_example.py)

---

## Relevant Links

- [Comfy UI Examples nad Basics](https://comfyanonymous.github.io/ComfyUI_examples/)
- [Nerdy Rodent Youtube](https://www.youtube.com/@NerdyRodent)
- [CivitAI Inner Reflections](https://civitai.com/user/Inner_Reflections_AI)
- [DotSimulate Youtube](https://www.youtube.com/@dotsimulate)
- [EnigmaticE Youtube](https://www.youtube.com/@enigmatic_e)
- [Ai Davos Youtube](https://www.youtube.com/@Ai_Davos)
- [Latent Vision Youtube](https://www.youtube.com/@latentvision)
