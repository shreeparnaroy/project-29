const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,polygon


function preload() {
   polygonimage=loadImage("polygon.png") 
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    polygon= Bodies.circle(50,200,20)
    World.add(world,polygon)
    Slingshot = new Slingshot(this.polygon,{ x:100, y:200 })

    ground = new Ground(600,height,1200,20)         
    box1=new Box(200,235,30,40)
    box2=new Box(230,235,30,40)
    box3=new Box(260,235,30,40)
    box4=new Box(290,235,30,40)
    box5=new Box(320,235,30,40)
    box6=new Box(350,235,30,40)
    box7=new Box(380,235,30,40)
    box8=new Box(420,235,30,40)
    box9=new Box(450,235,30,40)
    box10=new Box(480,235,30,40)
    box11=new Box(520,235,30,40)
    box12=new Box(550,235,30,40)
    box13=new Box(580,235,30,40)
    box14=new Box(620,235,30,40)
    box15=new Box(650,235,30,40)
    box16=new Box(680,235,30,40)
   

}


function draw(){
    background("lightblue");
    
imageMode (CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,40,40)



    Engine.update(engine);
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


    ground.display();
}