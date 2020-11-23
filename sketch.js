
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain1, chain2, chain3, chain4, chain5, roof;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(350,100,300,30);

    bobObject1 = new Bob(250,300);
    bobObject2 = new  Bob(300,300);
    bobObject3 = new Bob(350,300);
    bobObject4 = new Bob(400,300);
    bobObject5 = new Bob(450,300);

    chain1 = new Rope(bobObject1.body,roof.body,-100,0);
    chain2 = new Rope(bobObject2.body,roof.body,-50,0);
    chain3 = new Rope(bobObject3.body,roof.body,0,0);
    chain4 = new Rope(bobObject4.body,roof.body,50,0);
    chain5 = new Rope(bobObject5.body,roof.body,100,0);

    var render = Render.create
  ({ element: document.body,
     engine: engine,
      options: { width: 1200, height: 700, wireframes: false 
      } 
    });
    Engine.run(engine);

}


function draw() {
  background(255);
  Engine.update(engine);
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
  }
}




