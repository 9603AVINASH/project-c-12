var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  leafImage=loadImage("leaf.png");
  leavesImage=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand =  Math.round(random(1,100))
console.log(rand)
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var rad= Math.round(random(1,3))

  if(rad==1){
    spawnApple()
  }
  else if(rad==2){
    spawnLeaves()
  }
  else 
    spawnoLeaves()
  
  
  
  drawSprites();
}


function spawnApple(){
  if(frameCount%80===0){
   apple=createSprite(random(50,350),100,40,10);
   apple.addImage(appleImage);
   apple.velocityY=3.5;
   apple.scale=0.07;
   apple.y=Math.round(random(10,160))
   appledepth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  }
  }

  function spawnLeaves(){
    if(frameCount%80===0){
     leaf=createSprite(random(70,300),100,40,10);
     leaf.addImage(leafImage);
     leaf.velocityY=3.5;
     leaf.scale=0.07;
     leaf.y=Math.round(random(10,160))
     leafdepth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
    }
    }
  
    function spawnoLeaves(){
      if(frameCount%80===0){
       leaves=createSprite(random(90,340),100,40,10);
       leaves.addImage(leavesImage);
       leaves.velocityY=3.5;
       leaves.scale=0.07;
       leaves.y=Math.round(random(10,160))
       leavesdepth=rabbit.depth;
      rabbit.depth=rabbit.depth+1;
      }
      }