let result;
let sentence;
let btn;

async function setup() {
	createCanvas(windowWidth, windowHeight);
  result = await loadStrings('assets/shalli.txt');
	background(100);
	textAlign(CENTER,CENTER);
	textSize(16);
	textFont('monospace')
	sentence = random(result);
	btn = createButton("Click for a new sentence");
	btn.mousePressed(pickNew);
	btn.size(200,50);
}

function draw() {
	background(100);
	btn.position(width/2-100,100);
	text(sentence,width/2,height/2);
}

function pickNew(){
	sentence = random(result);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}