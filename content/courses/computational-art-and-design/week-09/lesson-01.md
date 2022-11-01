---
title: "Lesson 01"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

# Week 09 | ...

---

## Inspiration

{{<youtube okFtJ1iMARM>}}

- [Nadieh Bremer | Visual Cinnamon](https://www.visualcinnamon.com/)
- [Nadieh Bremer | My Journey into Data Visualization](https://www.visualcinnamon.com/2017/03/my-journey-into-dataviz/)
- [Nadieh Bremer | Fab Academy](https://fabacademy.org/2021/labs/waag/students/nadieh-bremer/)
- [Nadieh Bremer | fxHash](https://www.fxhash.xyz/u/Nadieh/creations)
- [Shirley Wu](https://shirleywu.studio/)
- [Data Sketches](https://www.datasketch.es/)

---



## Where to get data?

We are going to work with [Corpora](https://github.com/dariusk/corpora), a collection of different [corpus](https://en.wikipedia.org/wiki/Text_corpus). A wonderful resource of json files on all kinds of topics.

{{<p5js autoplay=1 width="300" height="500">}}
let data;
function preload(){
  data = loadJSON("./files/data.json");         
}

function setup() {
  noCanvas();
  noLoop();
  let bg = select('body');
  bg.style('background-color', '#ffffff');
  
  let cards = data.tarot_interpretations;
  for(let i = 0; i < cards.length; i++){
    createElement('h1', cards[i].name);
    let fortunes = cards[i].fortune_telling;
    let list = createElement('ul');
    for(let j=0; j<fortunes.length; j++){
      let item = createElement('li', fortunes[j]);
      list.child(item);
    }
  }
}
{{</p5js>}}