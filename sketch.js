const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14
var block15,block16
var sling,ball, ballImg;


function preload(){
ballImg=loadImage("polygon.png")
   }

function setup() {
  
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;



  ball=Bodies.circle(100,400,30);
  World.add(world,ball);

  stand1 = new Stand(510,342,250,10);

  block1 = new Block(420,315,30,40);
  block2 = new Block(450,315,30,40);
  block3 = new Block(480,315,30,40);
  block4 = new Block(510,315,30,40);
  block5 = new Block(540,315,30,40);
  block6 = new Block(570,315,30,40);
  block7 = new Block(600,315,30,40);

  block8 = new Block(450,275,30,40);
  block9 = new Block(480,275,30,40);
  block10 = new Block(510,275,30,40);
  block11 = new Block(540,275,30,40);
  block12 = new Block(570,275,30,40);

  block13 = new Block(480,235,30,40);
  block14 = new Block(510,235,30,40);
  block15 = new Block(540,235,30,40);

  block16 = new Block(510,195,30,40);

  ball = Bodies.circle(50, 200, 20);
  
  World.add(world, ball);
  sling = new Slingshot(this.ball,{x:100,y:200});

  
}




function draw() {
  background("white"); 
  textSize(20)
text("press space to get second chance to play", 100, 20)
  Engine.update(engine);

  stand1.display("orange");


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  sling.display();

  image(ballImg, ball.position.x, ball.position.y, 40, 50)
 
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(this.ball);

  }
}
  