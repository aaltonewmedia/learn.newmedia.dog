---
title: "THU | Advanced Animation"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Advanced Animation

---

## Setting up p5.js to run locally

There are many options, feel free to explore them and choose the one that you like the most:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Brackets](https://brackets.io/)
- [Espresso](https://espressoapp.com/) (only for Mac)
- [Atom](https://github.com/atom/atom) This used to be a great text editor but the developers have now discontinued it.

The text editor I recommend to use is Visual Studio Code.

### Visual Studio Code + Live Server extension

Visual Studio Code will be our text editor for writing the code but it's not quite enough on its own. In order to make your sketches actually run on the browser, you need to have a local werver running on your computer. Kind of like what would happen on the server where your website is online. Easy way to do this is using an extension called Live Server.

1. [Download and install VS Code](https://code.visualstudio.com/)
2. Click the Extensions icon on the left sidebar
3. Search for Live Server and install it
4. You should now see a button called Go Live on the bottom-left part of the window.

### Creating projects

In order to run p5.js locally you need to download the p5.js library and setup all your other local files (.httml, .css).

1. Download the files from ps.js
2. Create a new folder with all the files needed. [Instructions here].
3. Open the project folder in VS Code

#### p5.vscode extension

1. Open VS Code
2. Click the Extensions icon on the left sidebar
3. Search for p5.vscode and install the extension
4. Create a new project with ```command-shift-p``` on Mac, or ```ctrl-shift-p``` on Windows
5. Choose/create a new folder for your project

## Advanced techniques for animating with code

### % remainder

[See the tutorial on the remainder operator](../../../tutorials/p5-js/remainder.md)

### millis()

This technique is very commonly needed with Arduino so you will find this very useful in Physical Computing.

[millis()](https://p5js.org/reference/#/p5/millis)

### noise()

[See the tutorial on noise()](../../../tutorials/p5-js/noise.md)