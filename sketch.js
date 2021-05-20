var bg;
var start,name;

function preload(){
  bg = loadImage("bg.png")
}

function setup() {
  createCanvas(1530,750);
  start = new Start();
}

function draw() {
  background(bg);  
  start.display();
  drawSprites();
}