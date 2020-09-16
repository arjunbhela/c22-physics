const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
var ball2;
var ground;
var engine, world;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var options = {
  isStatic:true
}
  ground = Bodies.rectangle(200,440,400,100,options);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  var ballop =  {
restitution:1.21
  }
  ball = Bodies.circle(206,271,36,ballop);
  World.add(world,ball);
  var ball1op = {
    restitution:1.6
  }
  ball1 = Bodies.circle(300,100,40,ball1op);
  World.add(world,ball1);
}

function draw() {
  background(0); 
  Engine.update(engine);
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,100) 
  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,36,36);
  fill("blue");
  ellipse(ball1.position.x,ball1.position.y,40,40);
}