let crayons;
let colorData;
let colors = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  crayons = await loadJSON("assets/crayola.json");
  colorData = crayons.colors;
  console.log(colorData.length);
  for(let i=0; i<colorData.length; i++){
    colors.push(color(colorData[i].hex));
  }
  strokeWeight(2);
}

function draw() {
  background(127);
  let s = 24;
  let cols = floor(width/s) - 1;
  for(let i=0; i<colors.length; i++){
    let x = s+(i%cols)*s;
    let y = s + floor(i/cols)*s;
    stroke(0);
    fill(colors[i]);
    circle(x,y,s);
    let d = dist(mouseX,mouseY,x,y,);
    if(d < s/2){
      fill(255);
      noStroke();
      text(colorData[i].color,s,height-s);
    }
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}