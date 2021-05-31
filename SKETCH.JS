var marioImg, mario;
var bgImg;
var bgImg2
var brick, brickImg1,brickImg3;
var castle, castleImg;
var invisibleGround;
var ground;


function preload(){

marioImg=loadAnimation("MARIO 1.png","SUPER MARIO 2.png","SUPER MARIO 3.png");

bgImg=loadImage("BG.png");

brickImg1=loadImage("BRICK 1.png");
brickImg3=loadImage("BRICK 3.png");

castleImg=loadImage("CASTLE.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

ground = createSprite(windowWidth/2,windowHeight/2)
ground.addImage("background",bgImg);
ground.scale = 5.5;


mario =  createSprite(90,700,20,20);   
mario.addAnimation("running",marioImg);
mario.scale=0.04;

invisibleGround=createSprite(1000,740,windowWidth*3,30);
invisibleGround.visible=false;

}

function draw() {
 background(0);
//console.log(mario.y)

/*if(ground.x<350){
    ground.x=ground.Width/2
    //ground.y = ground.windowHeight/2
}*/

if(keyDown("space") /*&& mario.y>=615*/){
    mario.velocityY=-15
}
mario.velocityY=mario.velocityY+0.8;

if(keyDown("right")){
mario +=10;

}
mario.collide(invisibleGround);
drawSprites();

}