---
title: "Potentiometers"
bookCollapseSection: false
p5js-widget: true
draft: false
---

Potentiometers are essentially voltage dividers built into a single component with an interface that you can manipulate. You can imagine them as two variable resistors that you are controlling by turning a knob or moving a slider.

## Rotational potentiometers

{{< p5js width="400" height="400" autoplay="true">}}
let slider;
let r1, r2, rPot, vIn;
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0,1023,200,1);
  slider.position(width/2-slider.width/2,height-height/6);
  vIn = 5;
  rPot = 10000;
}

function draw() {
  background(220);
  
  // voltage divider
  let sliderVal = slider.value();
  let sliderNorm = sliderVal/1023;
  r2 = rPot*sliderNorm;
  r1 = rPot - r2;
  let vOut = nfs( (vIn*r2) / rPot, 0, 2 );
  //console.log(vOut);
  
  textAlign(CENTER);
  textFont('monospace');
  textSize(32);
  fill(0);
  noStroke();
  text("Potentiometer",width/2,60);
  textSize(12);
  text(sliderVal + " /" + vOut + "V" ,width/2,height-height/7);
  noFill();
  stroke(0);
  strokeWeight(5);
  circle(width/2,height/2,height/3);
  circle(width/2,height/2,height/10);
  
  //resistive material
  stroke(100);
  strokeWeight(15);
  arc(width/2,height/2,height/4,height/4,radians(-240),radians(60),OPEN);
  
  // legs
  strokeWeight(5);
  let xGND = width/2 + (height/8) * cos(radians(-240));
  let yGND = height/2 + (height/8) * sin(radians(60));
  stroke(0,0,0);
  circle(xGND,yGND,height/20);
  line(xGND,yGND,xGND,yGND+height/7);
  push();
  noStroke();
  fill(0);
  text("GND",xGND,yGND+height/7+16);
  pop();
  
  strokeWeight(5);
  let x5V= width/2 + (height/8) * cos(radians(60));
  let y5V = height/2 + (height/8) * sin(radians(60));
  stroke(255,0,0);
  circle(x5V,y5V,height/20);
  line(x5V,y5V,x5V,y5V+height/7);
  push();
  noStroke();
  fill(0);
  text("VCC",x5V,y5V+height/7+16);
  pop();
  
  // wiper
  stroke("#7E9662");
  strokeWeight(10);
  let a = map(slider.value(),0,1023,-150,150);
  push();
  translate(width/2,height/2);
  rotate(radians(a));
  line(0,0,0,-height/7);
  pop();
  push();
  translate(width/2,height/2);
  strokeWeight(5);
  line(0,0,0,height/4);
  pop();
  push();
  noStroke();
  fill(0);
  text("W",width/2,height/2+height/4+16);
  pop();
}
{{</p5js>}}

## Linear potentiometers

## Code Example

```c
// Read and display the value from the potentiometer.

int pot = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  pot = analogRead(A0);
  Serial.print("potentiometer: ");
  Serial.println(pot);
  // slow down the loop
  delay(1);
}
```