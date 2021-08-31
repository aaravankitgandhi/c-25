
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var paperImage;

function preload() {
	paperImage=loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper=Bodies.circle(400,640,30,30);
	World.add(world,paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  image(paperImage,paper.position.x,paper.position.y,30,30)

}

function keyPressed(){

	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper,paper.position,{x:50,y:-50})
	}
  }

