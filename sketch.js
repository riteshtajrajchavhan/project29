const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(750,height,1500,20)
    ground2 = new Ground(620,580,300,20)
    
    
   
    
    stone= new Stone(220,750,90);
    chain = new Chain(stone.body,{x:240,y:500});
   
    log1= new Log(530,530,60);
    log2= new Log(565,530,60);
    log3= new Log(605,530,60);
    log4= new Log(650,530,60);
    log5= new Log(700,530,60);
    log6= new Log2(555,470,60);
    log7= new Log2(600,470,60);
    log8= new Log2(650,470,60);
    log9= new Log2(700,470,60);
    log10= new Log(580,400,60);
    log11= new Log(630,400,60);
    log12= new Log(680,400,60);
    log13= new Log2(600,330,60);
    log14= new Log2(650,330,60);
    log15= new Log(625,270,60);

}

function draw(){
    background(0);
    Engine.update(engine);
   
ground.display();

ground2.display();

stone.display();
chain.display();
log1.display();
log2.display();
log3.display();
log4.display();
log5.display();
log6.display();
log7.display();
log8.display();
log9.display();
log10.display();
log11.display();
log12.display();
log13.display();
log14.display();
log15.display();


}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   
    chain.fly();
    
}











   



    


