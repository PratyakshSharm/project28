
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;



function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1190,200,30);
	mango2 =new Mango(1000,110,30);
	mango3 = new Mango(900,180,30);
	mango4 = new Mango(1090,150,30);
	mango5 = new Mango(1240,190,30);
	stoneObj = new Stone(235,410,25);
	launcherObject = new Launcher(stoneObj.body,{x:235,y:410});

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
	

  background(230);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  launcherObject.display();

  

  groundObject.display();

  detectCollision(stoneObj,mango1);
detectCollision(stoneObj,mango2);
detectCollision(stoneObj,mango3);
detectCollision(stoneObj,mango4);
detectCollision(stoneObj,mango5);
  
  
  

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
	launcherObject.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=Lmango.r+Lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode ===32 ){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body); 
	}
}






