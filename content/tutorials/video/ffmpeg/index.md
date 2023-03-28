---
title: ffmpeg
bookCollapseSection: true
p5js-widget: true
draft: false
---

---

# ffmpeg

## Useful commands

### Convert YouTube 360° video to different formats

YouTube EAC to Equirectangular:

```zsh
ffmpeg -i input.mkv -vf "v360=eac:equirect" output.mkv
```

- [More formats here.](https://ffmpeg.org/ffmpeg-filters.html#v360)
- [Write-up by Paul Bourke](http://paulbourke.net/panorama/youtubeformat/)