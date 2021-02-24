
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball
var box1,box2,box3
var trashImage
var paperImage
function preload()
{
	trashImage=loadImage("dustbingreen.png")
	paperImage=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;
	box1=new Box(480,610,20,100)
	box2=new Box(700,610,20,100)
	box3=new Box(590,650,200,20)
	ball=new Ball(40,650,25)
	connect=new Connection(ball.body,{x:100,y:360})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  connect.display()
  image(trashImage,460,340,300,350)
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){
		console.log("hi")
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	connect.breaktheConnection()
  }



