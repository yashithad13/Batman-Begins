const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var maxd = 100;
var drops = [];
var t1,t2,t3,t4;
var umbrella,boy;

function preload(){
    t1=loadImage("thunderbolt/1.png");
    t2=loadImage("thunderbolt/2.png");
    t3=loadImage("thunderbolt/3.png");
    t4=loadImage("thunderbolt/4.png");
    boy=loadImage("walking_1.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world; 
    
    for(var i = 0; i < maxd; i++){
    drops.push(new Drop());
    }
    var option={
        isStatic: true
    }
    umbrella=Bodies.circle(600,650,150,option);
    World.add(world,umbrella);
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        }
if (frameCount % 80==0){
    var r = Math.round(random(1,4));
    switch(r){
        case 1: image(t1,random(0,1200),random(0,400));
        break;
        case 2: image(t2,random(0,1200),random(0,400));
        break;
        case 3: image(t3,random(0,1200),random(0,400));
        break;
        case 4: image(t4,random(0,1200),random(0,400));
        break;
    }
    
}
imageMode(CENTER);
image(boy,umbrella.position.x,umbrella.position.y,300,450)
}   

