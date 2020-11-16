
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(400, 200, 50, 50)
  movingRect = createSprite(440, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();
movingRect.x = mouseX
movingRect.y = mouseY
console.log("Distance " + (movingRect.x-fixedRect.x) )
console.log("Width " + (movingRect.width+fixedRect.width)/2)


if((movingRect.x-fixedRect.x)<=(movingRect.width+fixedRect.width)/2
   && (fixedRect.x-movingRect.x)<=(movingRect.width+fixedRect.width)/2 
   && (movingRect.y-fixedRect.y)<=(movingRect.height+fixedRect.height)/2
   && (fixedRect.y-movingRect.y)<=(movingRect.height+fixedRect.height)/2 )
{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

}
else{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "blue";
}

}