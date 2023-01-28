---
title: "Mediapipe"
bookCollapseSection: false
weight: 20
---   

# Mediapipe

---

## Mediapipe + TouchDesigner

---

### Aalto Windows Computers

Setting up Mediapipe to work with TouchDesigner on Aalto computers needs to be done in a very specific way. Please follow the instructions carefully.

TouchDesigner comes with Python built-in. The current version is Python 3.9.5 (January 2023, TouchDesigner version 2022.31030). You need to install a matching version on your computer to be able to setup Mediapipe for Python.

Here is a video of the whole process. 

<iframe src="https://aalto.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=6760d89f-464c-4703-aa65-af970158adf5&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all" width="100%" height="480" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

You can also follow the text instructions below.

#### 1. Install Python 3.9

1. Open the Microsoft Store
2. Search for Python 3.9
3. Install the Python 3.9 version that comes up

#### 2. Install Mediapipe for Python

1. Open the Windows Comman Prompt
2. Type `pip3.9 install mediapipe`
3. After a couple of minutes, you should see a message saying that everything has been installed successfully.
4. In order to know where the computer installs the package, type `pip3.9 show mediapipe`. Copy the folder for `Location:`. **Note that you can copy text in the Command Prompt by selecting the text and right-clicking the mouse.**

#### 3. Make Mediapipe available in TouchDesigner

1. Open TouchDesigner
2. Open `Preferences` (alt + p)
3. Select the folder icon for Python 64-bit Module Path
4. Select the folder you found out in the previous step (or copy-paste the path)
5. Click `Save` and close the Preferences window
6. Restart TouchDesigner
7. Open  `Dialogs-->Textport and DATs`
8. Type `ìmport mediapipe as mp` and press enter
9. Then type `print(dir(mp.solutions))` and press enter
10. You should get something like this

```python
python >>> import mediapipe as mp
python >>> print(dir(mp.solutions))
['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__',
'__path__', '__spec__', 'download_utils', 'drawing_styles', 'drawing_utils', 'face_detection',
'face_mesh', 'face_mesh_connections', 'hands', 'hands_connections', 'holistic', 'mediapipe',
'objectron', 'pose', 'pose_connections', 'selfie_segmentation']
python >>> 
```

If you see a similar response, you have successfully installed mediapipe on your computer and it's ready to be used with TouchDesigner.

---

### MacOS (Silicon)

If you have an Apple computer with the new M-series chip, follow these instructions.

#### 1. Install pyenv

There are many ways of installing Python for macOS. My recommendation would be to install pyenv which then allows you to easily install and control multiple Python versions.

[Follow the installation instructions in GitHub](https://github.com/pyenv/pyenv#installation)

#### 2. Install the Correct Version of Python

Once you have pyenv installed, you can install Python. TouchDesigner comes with Python built-in. The current version is Python 3.9.5 (January 2023, TouchDesigner version 2022.31030). You need to install a matching version on your computer to be able to setup Mediapipe for Python.

1. 


#### 2. Install Mediapipe for Python

1. Open the Terminal
2. Type `pip3.9 install mediapipe-silicon`
3. After a couple of minutes, you should see a message saying that everything has been installed successfully.
4. In order to know where the computer installs the package, type `pip show mediapipe-silicon`. Copy the folder for `Location:`.

#### 3. Make Mediapipe available in TouchDesigner

1. Open TouchDesigner
2. Open `Preferences` (alt + p)
3. Select the folder icon for Python 64-bit Module Path
4. Select the folder you found out in the previous step (or copy-paste the path)
5. Click `Save` and close the Preferences window
6. Restart TouchDesigner
7. Open  `Dialogs-->Textport and DATs`
8. Type `ìmport mediapipe as mp` and press enter
9. Then type `print(dir(mp.solutions))` and press enter
10. You should get something like this

```python
python >>> import mediapipe as mp
python >>> print(dir(mp.solutions))
['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__',
'__path__', '__spec__', 'download_utils', 'drawing_styles', 'drawing_utils', 'face_detection',
'face_mesh', 'face_mesh_connections', 'hands', 'hands_connections', 'holistic', 'mediapipe',
'objectron', 'pose', 'pose_connections', 'selfie_segmentation']
python >>> 
```

If you see a similar response, you have successfully installed mediapipe on your computer and it's ready to be used with TouchDesigner.


---

### TouchDesigner Examples

- Download some of the examples below.
- See the official documentation
- [Bryan Chung has made nice tutorials and excellent examples on how to use Mediapipe with TouchDesigner](https://github.com/chungbwc/TouchDesigner)
