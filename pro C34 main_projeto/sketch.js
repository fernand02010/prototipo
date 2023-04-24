const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var backgroundImg,predioimg,predio;

var score = 0;

function preload() {
 predioimg.loadImage('predio.png');


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  predio = createSprite(900,700);
  predio.addImage(predioimg);
  predio.scale = 0.5;

}

function draw(){
  drawSprites()
}

