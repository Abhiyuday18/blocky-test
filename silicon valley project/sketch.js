//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;






var blocky, blocky_happy, blocky_hit ,
blocky_main, blocky_dead, blocky_sad, ground,groundimg,
 bg_img,tire,tireBase,barrel, barrelimg, akm, akmimg, uzi,
 uziimg, enemy,enemy2,enemy3,tireimg,flash,flashimg,healthBar,
enemyimg, blocky_angry, sidewalll, sidewallr,bg,sidewallimg,
l1,l2,l3,l4,l5,ladderimg,levitating,levitating2,levitating3
,levitatingBase2,levitatingBase3,levitatingimg,levitatingBase;
var counter=0;

function preload(){
 blocky_happy=loadImage(" images/PC happy.png");
  blocky_hit=loadImage("images/blocky hit.png");
 blocky_main=loadImage("images/new blocky main.png");
 blocky_dead=loadImage("images/blocky dead.png");
 blocky_sad=loadImage("images/PC sad.png");
 bg_img=loadImage("images/BG.jpg");
 barrelimg=loadImage("images/barrel.png");
 akmimg=loadImage("images/akm.png");
 uziimg=loadImage("images/uziarm11.png");
 enemyimg=loadImage("images/enemy.png");
blocky_angry=loadImage("images/PC angry.png");
sidewallimg=loadImage("images/brickwall.png")
ladderimg=loadImage("images/side wall.png")
levitatingimg=loadImage("images/levitating_platform.png")
tireimg=loadImage("images/tire.png")
groundimg=loadImage("images/ground.png")
flashimg=loadImage("images/flash.png")
}



function setup() {
  createCanvas(800,400);

  //engine = Engine.create();
	//world = engine.world;

  bg = createSprite(400,110)
  bg.addImage(bg_img)
  bg.scale=0.9

  healthBar = createSprite(400,20,250,20)
  

  l1 = createSprite(762,320,5,10)
  l1.addImage(ladderimg)
  l1.scale=0.2

  l2 = createSprite(762,250,5,10)
  l2.addImage(ladderimg)
  l2.scale=0.2

  l3 = createSprite(762,180,5,10)
  l3.addImage(ladderimg)
  l3.scale=0.2

  l4 = createSprite(762,110,5,10)
  l4.addImage(ladderimg)
  l4.scale=0.2

  l5 = createSprite(762,36,5,10)
  l5.addImage(ladderimg)
  l5.scale=0.2


  levitatingBase=createSprite(550,200,100,30)

  levitating=createSprite(550,239,100,20);
  levitating.addImage(levitatingimg);
  levitating.scale=0.5

  

  levitatingBase2=createSprite(400,100,80,27)

  levitating2=createSprite(400,125,100,20);
  levitating2.addImage(levitatingimg);
  levitating2.scale=0.34
  

  levitatingBase3=createSprite(205,180,85,25)

  levitating3=createSprite(205,203,100,20);
  levitating3.addImage(levitatingimg);
  levitating3.scale=0.35

  
  tireBase=createSprite(100,345,85,20)

  tire=createSprite(100,342,75,20)
  tire.addImage(tireimg)
  tire.scale=0.54
  
  
  barrel=createSprite(450,322,20,30);
  barrel.addImage(barrelimg)
  barrel.scale=0.16

  uzi=createSprite(0,0,5,5);
  uzi.addImage(uziimg);
  uzi.scale=0.27

  enemy=createSprite(205,150,20,20)
  enemy.addImage(enemyimg)
  enemy.scale=0.1

  enemy2=createSprite(400,65,20,20)
  enemy2.addImage(enemyimg)
  enemy2.scale=0.1

  enemy3=createSprite(550,163,20,20)
  enemy3.addImage(enemyimg)
  enemy3.scale=0.1

  blocky=createSprite(300, 100, 20, 20);
  blocky.addImage(blocky_main);
  blocky.scale=0.07


  flash = createSprite(0,0,10,10)
  flash.addImage(flashimg)
  flash.scale=0.03

  sidewalll=createSprite(-12,160,10,375);
  sidewalll.addImage(sidewallimg)

  sidewallr=createSprite(807,160,16,375);
  sidewallr.addImage(sidewallimg)

  ground=createSprite(400,383,800,25);
  ground.addImage(groundimg)
  ground.scale=1.3


  //ground = Bodies.rectangle(640,385,810,20,{isStatic:true});
	//World.add(world,ground);
	
	//Engine.run(engine);
  
}

function draw() {
  background(0);
 blocky.velocityX=0
 blocky.collide(levitatingBase); 
enemy.bounceOff(ground)
 flash.x=0
 flash.y=0
 
 uzi.rotation = World.mouseX

 uzi.x = blocky.x +35
 uzi.y = blocky.y - 7
 blocky.rotation=uzi.rotation
 //if(enemy.isTouching(ground)){
 // enemy.x=blocky.x-random(10,100)
  //enemy.y = blocky.y
// }
 //else{
 // enemy.x=blocky.x-100
//enemy.y = blocky.y+50
 //}


 
  if(keyDown(DOWN_ARROW ) && blocky.x>=730){
  blocky.velocityY = -6;
 // blocky.velocityY = blocky.velocityY + 0.9;
  }
  if(keyDown(LEFT_ARROW)){
    blocky.velocityX = -6;
  }
  console.log("x="+blocky.x)
  console.log("y="+blocky.y)
  if(keyDown(RIGHT_ARROW)){
    blocky.velocityX = +6;
  
  }


if(blocky.x>=470 && blocky.x<=670 &&blocky.y>=100 &&blocky.y<=250){
  counter=1
}
else if(blocky.x>=0  && blocky.x<=150 && blocky.y<=400 && blocky.y>=295){
  counter=2
}
else{
  counter=0

}

 console.log("counter="+counter)
  if( keyDown(UP_ARROW)&& counter==1){
    blocky.velocityY = -16;
 // console.log("high")
  
  }
   
 
  
  if(keyDown(UP_ARROW) && blocky.y>=330 && counter == 0) {
    blocky.velocityY = -16;
  }

if(counter==2){
blocky.velocityY = -24}

if(enemy.x>=0  && enemy.x<=150 && enemy.y<=400 && enemy.y>=295){
  enemy.velocityY = -24

}





 if(keyDown("space")){
  flash.x = uzi.x +55
  flash.y = uzi.y -10

 }
  
// console.log(blocky.x);
 blocky.velocityY = blocky.velocityY + 1.0;
 enemy.velocityY = enemy.velocityY + 1.0;
 
  blocky.collide(barrel);
  blocky.collide(sidewalll);
  blocky.collide(sidewallr);
  blocky.collide(ground);
  blocky.collide(enemy);
  blocky.collide(enemy2);
  blocky.collide(enemy3);
  blocky.collide(levitatingBase2);
  blocky.collide(levitatingBase3);
  blocky.collide(tireBase);
  //enemy.collide(ground)
  enemy.collide(barrel)
  enemy.collide(tireBase)
  enemy.collide(levitatingBase);
  enemy.collide(levitatingBase2);
  enemy.collide(levitatingBase3);
  uzi.collide(ground);
  uzi.collide(levitatingBase);
  uzi.collide(levitatingBase2);
  uzi.collide(levitatingBase3)
  drawSprites();
}