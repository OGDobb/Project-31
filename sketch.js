const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(500,10,240,20);
  particles = new Particle(240,900,10);
  plinkos = new Plinko(20,700,10)
}

function draw() {
  background(255,255,255);  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

  ground.display();
  particles.display();
  plinkos.display();
  drawSprites();
}

for (var k = 0; k <=width; k=k=80) {
  divisions.push(new Divisons(k, height-divisionHeight/2, 10 divisonHeight));
}