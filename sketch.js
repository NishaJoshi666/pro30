const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var box1;
var stone1;
var stand1;
var ground1;


function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
 
    box1 = new Box(780,225,30,40);
  box2 = new Box(730,225,30,40);
  box3 = new Box(680,225,30,40);
  box4 = new Box(630,225,30,40);
  box5 = new Box(705,185,30,40);
  box6 = new Box(655,185,30,40);
  box7 = new Box(755,185,30,40);
  box8 = new Box(680,145,30,40);
  box9 = new Box(730,145,30,40);
  box10 = new Box(705,105,30,40);
  box11 = new Box(1080,165,30,40);
  box12 = new Box(1030,165,30,40);
  box13 = new Box(980,165,30,40);
  box14 = new Box(930,165,30,40);
  box15 = new Box(1055,125,30,40);
  box16 = new Box(1005,125,30,40);
  box17 = new Box(955,125,30,40);
  box18 = new Box(1030,85,30,40);
  box19 = new Box(980,85,30,40);
  box20 = new Box(1005,45,30,40);
  
  stone1 = new stone(200,300);
  
  ground1 = new Ground(600,400,1200,40);

  stand1 = new stand(700,250,200,10);
  stand2 = new stand(1000,190,200,10);
   
  slingshot = new SlingShot(stone1.body,{x:100, y:210});

}

function draw() {
  background(223,223,223);  
  Engine.update(engine);
  strokeWeight(4);

  ground1.display();
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
  stone1.display();
  stand1.display();
  stand2.display();
  slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone1.body);
  }
}