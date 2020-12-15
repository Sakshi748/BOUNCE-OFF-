var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,300,70,40);
fixedRect.velocityX = 5;
fixedRect.velocityY = 3;
movingRect.velocityX =-3 ;
movingRect.velocityY =-3; 
}

function draw() {
  //movingRect.x = mouseX;
 // movingRect.y=mouseY;
  background("skyblue");  
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 &&fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2&&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="blue";
    fixedRect.velocityX = -1* fixedRect.velocityX;
    movingRect.velocityX = -1* movingRect.velocityX;
    fixedRect.velocityY = -1* fixedRect.velocityY;
    movingRect.velocityY = -1* movingRect.velocityY;
    
    //console.log("touching");
  }else {
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="purple";
  }
  drawSprites();
}