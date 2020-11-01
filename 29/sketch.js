const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , polygon,polygomImg;

function preload(){
  polygonImg = loadImage("polygon_image.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Chain(this.polygon,{x:100,y:200});


  ground1 = new Ground(350,220,300,20);
  ground2 = new Ground(600,350,250,20);

  box1 = new Box (225,190,30,40);
  box2 = new Box (255,190,30,40);
  box3 = new Box (285,190,30,40);
  box4 = new Box (315,190,30,40);
  box5 = new Box (345,190,30,40);
  box6 = new Box (375,190,30,40);
  box7 = new Box (405,190,30,40);
  box8 = new Box (435,190,30,40);
  box9 = new Box (465,190,30,40);
  
  box10 = new Box (255,150,30,40);
  box11 = new Box (285,150,30,40);
  box12 = new Box (315,150,30,40);
  box13 = new Box (345,150,30,40);
  box14 = new Box (375,150,30,40);
  box15 = new Box (405,150,30,40);
  box16 = new Box (435,150,30,40);

  box17 = new Box (285,110,30,40);
  box18 = new Box (315,110,30,40);
  box19 = new Box (345,110,30,40);
  box20 = new Box (375,110,30,40);
  box21 = new Box (405,110,30,40);
  
  box22 = new Box (315,70,30,40);
  box23 = new Box (345,70,30,40);
  box24 = new Box (375,70,30,40);

  box25 = new Box (345,30,30,40);

  box26 = new Box (510,320,30,40);
  box27 = new Box (540,320,30,40);
  box28 = new Box (570,320,30,40);
  box29 = new Box (600,320,30,40);
  box30 = new Box (630,320,30,40);
  box31 = new Box (660,320,30,40);
  box32 = new Box (690,320,30,40);
  
  box33 = new Box (540,280,30,40);
  box34 = new Box (570,280,30,40);
  box35 = new Box (600,280,30,40);
  box36 = new Box (630,280,30,40);
  box37 = new Box (660,280,30,40);

  box38 = new Box (570,240,30,40);
  box39 = new Box (600,240,30,40);
  box40 = new Box (630,240,30,40);

  box41 = new Box (600,200,30,40);
}

function draw() {
  background("blue");  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();

  box38.display();
  box39.display();
  box40.display();

  box41.display();

  slingshot.display();

  rectMode(CENTER);
  rect();
  
  imageMode(CENTER);
  image(polygonImg,700,600,300,300);


  drawSprites();
}