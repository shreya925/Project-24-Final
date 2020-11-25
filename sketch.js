
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 100, 20);

	dustbin1 = new Dustbin(1090, 785, 200, 20);
	dustbin2 = new Dustbin(1190, 755, 20, 200);
	dustbin3 = new Dustbin(990, 755, 20, 200);

	ground = new Ground(700, 800, 1500, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground.display();
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:140, y:-140});
}
}