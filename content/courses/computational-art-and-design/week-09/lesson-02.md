---
title: "FRI | Sound Analysis Using FFT"
bookCollapseSection: false
weight: 30
p5js-widget: true
---

{{<hint info>}}
- November 4, 2022
- Room L208
- 9:15–12:00
{{</hint>}}

---

{{<hint info>}}
We start off by continuing with the examples from yesterday.
{{</hint>}}

## Inspiration

{{<youtube pLAma-lrJRM>}}

{{<vimeo 72155493>}}

Product Placement is an animation I made in 2009. Most of the animation is driven by the sound of the characters speaking.

{{<vimeo 5565786>}}

{{<vimeo 4056231>}}

## Visualizing Sound

### Download files

Here are some files we need today:

- Some music file. I'm going to use [Alinoe: Motugh (cc-by-nc-sa-4.0)](https://www.bumpfoot.net/bump222.html)

### Recap: Amplitude Analysis

- [Amplitude in the p5.js Sound Library](https://p5js.org/reference/#/p5.Amplitude)
- [AudioIn in the p5.js Sound Library](https://p5js.org/reference/#/p5.AudioIn)

### FFT Analysis

- [FFT in the p5.js Sound Library](https://p5js.org/reference/#/p5.FFT)

What is FFT (Fast Fourier transform)? [The actual definition of it is very complex](https://en.wikipedia.org/wiki/Fast_Fourier_transform), but with what we are doing here, we can describe it in a bit simpler way.

We are essentially able to get multiple amplitude values of different frequency bands. What does that mean? FFT frequency analysis allows you to isolate the different frequencies of a sound, like the low frequencies of a bass drum or high frequencies of a hi-hat. You could then make parts of your sketch react differently to different frequencies, create a beat detection algorithm, or make a game where you have to whistle at a specific frequency to play it.

{{<vimeo 5558134>}}

<iframe src="https://openprocessing.org/sketch/1724489/embed/?plusEmbedHash=ZTlkMzFkZTMzZGZhYjY1NjJlNjNiNmUxYjU2ZTk3NGExNDA5YmE0ZDhjNDU2YWFjYjQ5NjllMDJkNzI4NzA2MDRlNTlkZWIyZTdjOTljYTQ3YTlkZjljMDI3NzAzNjEzYTViNWIzMGQwYzU1OGExNjdkNGIyNDE4MzQ5MjU0MGFCSDBNMDhncmZOdWpidTJRZHB4eXoyQkZ6dk55blRkUHZmdmJhLzdKRVJKaklFaWtUNTdiQy9JTkhvaXJoUldzMG5aT1BRQUJYeVRUbGgvRExPT0Nkdz09&plusEmbedTitle=true" width="100%" height="650"></iframe>

---

# Resources and References

