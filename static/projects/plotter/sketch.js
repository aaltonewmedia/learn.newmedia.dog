let angleVal;
let angleSlider;

let pointVal;
let pointSlider;

let sizeVal;
let sizeSlider;

let amtVal;
let amtSlider;

let rotateOn;
let rotateSlider;
let rotateVal=0;

let saveButton;

let maxSize;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  noFill();
	// setup sliders
  angleSlider = createSlider(-0.2,0.2,0,0);
  pointSlider = createSlider(3,10,6,1);
  sizeSlider = createSlider(0.1,10,3,0);
	amtSlider = createSlider(1,400,100,0);
	angleSlider.position(10, 10);
	pointSlider.position(10, 30);
	sizeSlider.position(10, 50);
	amtSlider.position(10, 70);
	rotateSlider = createSlider(-0.001,0.001,0,0);
	rotateOn = createCheckbox('rotate',false);
	rotateSlider.position(10, 90);
	rotateOn.position(180, 90);
	// other settings
	maxSize = height/2;
  saveButton = createButton('Save SVG');
  saveButton.mousePressed(downloadSVG);
  saveButton.position(10,150)
  strokeWeight(1);
}

function draw() {
  background(255);
  angleVal = angleSlider.value();
  pointVal = pointSlider.value();
  sizeVal = sizeSlider.value();
	amtVal = amtSlider.value();
  translate(width/2,height/2);
	if(rotateOn.checked()){
		 rotateVal = rotateVal + rotateSlider.value();
	}
  for(let i=0; i<amtVal; i++){
    rotate(radians(i*angleVal)+rotateVal);
    polygon(0, 0, maxSize-i*sizeVal, pointVal);
  }
}

// this is from here: https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// not working
function saveSVG(){
  save("mySVG.svg");
}

// this one worked
function downloadSVG()
{
    let svgElement = document.getElementsByTagName('svg')[0];
    let svg = svgElement.outerHTML;
    let file = new Blob([svg], { type: 'plain/text' });
    let a = document.createElement("a"), url = URL.createObjectURL(file);

    a.href = url;
    a.download = 'exported.svg';    
    document.body.appendChild(a);
    a.click();

    setTimeout(function() 
    {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}

/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/