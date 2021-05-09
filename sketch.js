const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine ,myworld;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box15,box16,box17,box18;
var ground1,ground2,ground3;
var ball,polygonimage;
var slingshot;

function preload(){
polygonimage = loadImage("polygon.png");

  

}


function setup(){
    createCanvas(800,700);
engine = Engine.create();
myworld = engine.world;

//level2
box1 = new Box(330,235);
box2 = new Box(360,235);
box3 = new Box(390,235);
box4 = new Box(420,235);
 box5 = new Box(450,235);

//level2
box6 = new Box(360,195);
box7 = new Box(390,195);
box8 = new Box(420,195);
//top
box9 = new Box(390,155);


//level1
//first five
box10 = new Box(520,530); 
box11 = new Box(535,530);
box12 = new Box(550,530);
box13 = new Box(565,530);
box14 = new Box(680,530);
//three
box15 = new Box(530,520);
box16 = new Box(540,520);
box18 = new Box(560,520);
//top bottom
box17 = new Box(570,500);





ground1 = new Ground(400,650,800,20);
ground2 = new Ground(580,540,350,20);//bottom bar
ground3 = new Ground(400,250,270,20);//top bar
ball = Bodies.circle(50,200,20);
World.add(myworld,ball);
slingshot = new SlingShot(this.ball,{x:100,y:200});

Engine.run(engine);



}

function draw(){
    background(0);
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
box17.display();
box18.display();

ground1.display();
ground2.display();
ground3.display();

//circleMode(RADIUS);


 
imageMode(CENTER);
image(polygonimage,ball.position.x,ball.position.y,40,40);


}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


