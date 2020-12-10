
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1


function preload()
{
	
}

function setup() {
	 createCanvas(800, 700);
	 p1 = new Paper(50,450,40) ;



	 box1=new Box(450,610,20,100);
	 
	

	 box2=new Box(350,610,20,100);
	
	 
  
	 box3=new Box(400,650,100,20);
	 
	 
	 
	 groundObject=new ground(width/2,670,width,20);

} 	 
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
 box1.display();
 box2.display();
 box3.display();
 p1.display()
 groundObject.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(p1.body,p1.body.position,{x:10,y:-10});
  
	}
}




