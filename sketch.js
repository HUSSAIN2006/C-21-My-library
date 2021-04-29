var fixedRect1,movingRect;
var bg
var fixedRect2

function preload() {
 bg = loadImage("bg.jpg")
}
function setup() {
  createCanvas(800,400);

  fixedRect1= createSprite(200,200,50,80);
  movingRect= createSprite(400, 400, 80, 30);
  fixedRect2= createSprite(400,200,50,80);

}

function draw() {
  background(bg);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="yellow";
    fixedRect1.shapeColor="yellow";
  
  }
   else if(isTouching(movingRect,fixedRect2)){
     movingRect.shapeColor = "yellow";
     fixedRect2.shapeColor = "yellow";
   }
    else{
         movingRect.shapeColor="green";
         fixedRect1.shapeColor="green";
         fixedRect2.shapeColor="green";
    }

  
  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x < object2.width/2+object1.width/2 &&
    object2.y-object1.y < object2.height/2+object1.height/2 &&
    object1.y-object2.y < object2.height/2+object1.height/2)
    {
      return true
  }
  else{
  
  }

}