---
title: "FRI | Functions"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

# Week 05 | Functions

---

## Inspiration


## Functions

So far, we have written functions that are part of the p5.js library.

- [setup()](https://p5js.org/reference/#/p5/setup)
- [draw()](https://p5js.org/reference/#/p5/draw)
- [preload()](https://p5js.org/reference/#/p5/preload)
- [mousePressed()](https://p5js.org/reference/#/p5/mousePressed)
- [keyPressed()](https://p5js.org/reference/#/p5/keyPressed)

{{<hint info>}}
The functions I listed above are the ones that we actually write out in the code and the program decides when to call them. For example, ```setup()``` is called once when the program starts, ```draw()``` gets called 60 times per second, ```mousePressed()``` when a person presses the mouse etc. Check the [reference](https://p5js.org/reference/) for more functions that behave in similar ways. Most of them are in the **Sructure**, **Mouse** or **Keyboard** sections.
{{</hint>}}

Other type of functions we have been using from the p5.js library are functions that we don't have to write/define in our code. We just call them by using them.

- circle()
- background()
- translate()
- etc.

You can see how the library looks like by [opening this link that is the actual code of the p5.js library (version 1.4.2)](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.js).

Or a more friendlier version is the [actual source code on GitHub](https://github.com/processing/p5.js).

If you are interested, you can dig into them to see how the library works under the hood.

We can also create our own functions that will work in the sketches/programs we create!