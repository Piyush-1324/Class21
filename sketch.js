var fixedRect, movingRect;
var bike,cycle;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  bike= createSprite(200,300,80,100);
  bike.velocityX = 4;
  cycle= createSprite(900,300,60,95);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(bike,cycle)){
    bike.shapeColor= "orange";
    

  }
  bounceOff(bike,cycle);
  drawSprites();
}

