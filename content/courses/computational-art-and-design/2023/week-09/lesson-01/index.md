---
title: "THU | Reading Data"
bookCollapseSection: false
weight: 20
p5js-widget: true
---

{{<hint info>}}
- November 2, 2023
- Room G203
- 9:15–12:00
{{</hint>}}

## Inspiration

{{<youtube okFtJ1iMARM>}}

- [Nadieh Bremer | Visual Cinnamon](https://www.visualcinnamon.com/)
- [Nadieh Bremer | My Journey into Data Visualization](https://www.visualcinnamon.com/2017/03/my-journey-into-dataviz/)
- [Nadieh Bremer | Fab Academy](https://fabacademy.org/2021/labs/waag/students/nadieh-bremer/)
- [Nadieh Bremer | fxHash](https://www.fxhash.xyz/u/Nadieh/creations)
- [Shirley Wu](https://shirleywu.studio/)
- [Data Sketches](https://www.datasketch.es/)
- [The Pudding](https://pudding.cool/)
- [Forensic Architecture](https://forensic-architecture.org/)
- [Bellingcat](https://www.bellingcat.com/)

---

## Reading data with p5.js

- [loadStrings](https://p5js.org/reference/p5/loadStrings)
- [loadTable](https://p5js.org/reference/p5/loadTable)
- [loadXML](https://p5js.org/reference/p5/loadXML)
- [loadJSON](https://p5js.org/reference/p5/loadJSON)

We are going to jump right into reading JSON files, but I have also provided some infromation and examples for how to read text files, CSV files, and XML files.

## Reading text files

<iframe src="https://openprocessing.org/sketch/2071219/embed/?plusEmbedHash=18be9346&userID=7588&plusEmbedTitle=true#sketch" width="100%" height="500"></iframe>

```js
let result;
let sentence;
let btn;
function preload() {
  result = loadStrings('shalli.txt');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	textAlign(CENTER,CENTER);
	textSize(16);
	textFont('monospace')
	sentence = random(result);
	btn = createButton("Click for a new sentence");
	btn.mousePressed(pickNew);
	btn.size(200,50);
	btn.position(width/2-100,100);
}

function draw() {
	background(100);
	text(sentence,width/2,height/2);
}

function pickNew(){
	sentence = random(result);
}
```

## Reading tables (CSV files)

[See the loadTable example](https://p5js.org/reference/p5/loadTable)

## Reading XML files

[See the loadXML example](https://p5js.org/reference/p5/loadXML)

## JSON

[JSON](https://www.json.org/json-en.html) (JavaScript Objct Notation) is a file-format that stores data in a human-readable way but it is also very easy and convenient for machines to parse and generate.

JSON is built on two structures:

1. A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
2. An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

It was originally derived from JavaScript so it works really well with p5.js. JSON files look a lot like [JavaScript Objects](../week-06/lesson-01.md). However, it is not tied to just being used with JavaScript. Many other programming languages are able to work with JSON files.

### How does a JSON file look like?

This is an example of a JSON representation describing a person.

```json
{
  "firstName": "Matti",
  "lastName": "Niinimäki",
  "isAlive": true,
  "age": 21,
  "liar": true,
  "address": {
    "street": "Imaginary Avenue",
    "apartment": "20 A 5",
    "postalCode": 99999,
    "city": "Helsinki"
  },
  "pets": [
    {
      "animal": "dog",
      "name": "Kimchi"
    },
    {
      "animal": "cat",
      "name": "Pancake"
    },
    {
      "animal": "duck",
      "name": "Tale"
    }
  ]
}
```

As you can see, a JSON file is one object that can contain other objects, arrays and values.

We could try to parse the data with p5.js in the following way:

<iframe src="https://openprocessing.org/sketch/2071253/embed/?plusEmbedHash=13051fdd&userID=7588&plusEmbedTitle=true#sketch" width="100%" height="300"></iframe>

```js
let person;
function preload() {
  person = loadJSON("person.json");
}
function setup() {
  noCanvas();
  noLoop();

  let name = person.firstName + " " + person.lastName;
  createElement("h2", name);

  createElement("p", name + " has the following pets:");
  let pets = person.pets;
  let list = createElement("ul");
  for (let i = 0; i < pets.length; i++) {
    let p = createElement("li", pets[i].name + ", " + pets[i].animal);
    list.child(p);
  }
}
```

---

## Examples

These examples show you how to parse and access data from a .json file.

### Where to get data?

We are going to work with [Corpora](https://github.com/dariusk/corpora), a collection of different [corpus](https://en.wikipedia.org/wiki/Text_corpus). A wonderful resource of json files on all kinds of topics.

### Creating HTML elements from the data

This example reads data from a json file and creates html elements (headings and lists) from the data.

<iframe src="https://editor.p5js.org/mnstri/full/bpE0uVBr3" width="100%" height="600"></iframe>

```js
let data;
function preload() {
  data = loadJSON("data.json");
}

function setup() {
  noCanvas();
  noLoop();
  let bg = select("body");
  bg.style("background-color", "#ffffff");

  let cards = data.tarot_interpretations;
  for (let i = 0; i < cards.length; i++) {
    createElement("h1", cards[i].name);
    let fortunes = cards[i].fortune_telling;
    let list = createElement("ul");
    for (let j = 0; j < fortunes.length; j++) {
      let item = createElement("li", fortunes[j]);
      list.child(item);
    }
  }
}
```

### Pick random tarot cards

<iframe src="https://editor.p5js.org/mnstri/full/eCYtWAvZv" width="100%" height="600"></iframe>

```js
let data;
let button;
let resetButton;
let cards;
function preload() {
  data = loadJSON("data.json");
}

function setup() {
  noCanvas();
  button = createButton("Pick a card");
  button.mousePressed(pickACard);
  resetButton = createButton("Reset");
  resetButton.mousePressed(resetCards);
  let bg = select("body");
  bg.style("background-color", "#ffffff");
  cards = data.tarot_interpretations;
}

function pickACard() {
  let r = floor(random(cards.length));
  createElement("h1", cards[r].name);
  let fortunes = cards[r].fortune_telling;
  let list = createElement("ul");
  for (let j = 0; j < fortunes.length; j++) {
    let item = createElement("li", fortunes[j]);
    list.child(item);
  }
}

function resetCards(){
  removeElements();
  button = createButton("Pick a card");
  button.mousePressed(pickACard);
  resetButton = createButton("Reset");
  resetButton.mousePressed(resetCards);
}
```

### Crayon Colors

This example visualizes Crayola crayon colors from the json file.

<iframe src="https://openprocessing.org/sketch/1722470/embed/?plusEmbedHash=MjA3ZDg3MGYyZGI0Y2E2NDYxMzM2NTk5YTdmODUyNWJiNmU5OTVjNjFhZjczYzJiN2QzNmY3MDE2NmE5NzNkNjEzYTFlMmFhZjM2YzUwMTQwNWY2MDA5ZjI1NWEzNTliMzhlMjZiMmYxM2UyZGE2ZmIzZmQyNTcwMDU4NWZlMGJZbkE4Nk9TM2NvNmtQTG9qV1BEaTlhNW9JV3RtUm9LUlpES2VqaVNqZmtXMWZObmtjdGxOVkVkVE83YlJ6Vm5QUmQxT1VWRmZQS2F2aVhYdGI5RUh3UT09&plusEmbedTitle=true" width="100%" height="400"></iframe>

---

## References and Resources

- [Coding Train playlist for Working with Data and APIs using p5.js](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)
- [Coding Train playlist for Working with Data and APIs with JavaScript (not using p5.js)](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)

Courses in Aalto:

- [Information Design Minor from VCD (+ New Media)](https://into.aalto.fi/pages/viewpage.action?pageId=62653698)
  - [AXM-E2004 Introduction to Information Design](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932490-20220801/brochure)
  - [AXM-E2006 Design and Data](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932492-20220801/brochure)
  - [AXM-E0301 Art & Media Studio: Information Design](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932222-20220801/brochure)
  - [AXM-E2002 Creative computation for Visual Communication](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932676-20220801/brochure) (this is similar to the course you are doing now)
  - [AXM-E7005 Internet Technologies and Web Development](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932211-20220801/brochure)
  - [AXM-E7006 Systems of Representation: Culture Lab](https://sisu.aalto.fi/student/courseunit/aalto-CU-1150932209-20220801/brochure)
