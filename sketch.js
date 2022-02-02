var barco
var flotando


function preload(){
flotando=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  barco= createSprite(200,200,80,80);
  barco.addAnimation("barcoenelmar",flotando);
  barco.scale=0.45
}

function draw() {
  background("lightblue");
 drawSprites();
}