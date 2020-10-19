var player, runner
var image1, image2
var score
var coinsGroup, obstaclesGroup
var obstacle1, obstacle2, obstacle3
var gameOverImg, restartImg
var gameState="PLAY"
var wallpaper, wallpaper2, wallpaper3

function preload(){
  image2 =   loadAnimation("Aladdinsheet1.png","Aladdinsheet2.png","Aladdinsheet3.png", "Aladdinsheet4.png", "Aladdinsheet5.png", "Aladdinsheet6.png", "Aladdinsheet7.png", "Aladdinsheet8.png", "Aladdinsheet9.png", "Aladdinsheet10.png", "Aladdinsheet11.png", "Aladdinsheet12.png");
  image1 = loadAnimation("punishersprites.png","punishersprites1.png","punishersprites2.png","punishersprites3.png","punishersprites4.png","punishersprites5.png","punishersprites6.png");
  
  coinImage = loadAnimation("coins1.png","coins2.png","coins3.png","coins4.png","coins5.png","coins6.png");

  wallpaper = loadAnimation ("background.jpg")
wallpaper2 = loadAnimation ("background2.jpg")
wallpaper3 = loadAnimation ("background3.jpg")
//wallpaper4 = loadImage ("background4.jpg")

  //obstacle1 = loadAnimation ("Lonelytrex.gif")
  obstacle2 = loadAnimation ("blackCrow.jpg")
  obstacle3 = loadAnimation ("redCrow.jpg")

  //coinsImage = loadImage("coins1.png","coins2.png","coins3.png","coins4.png","coins5.png","coins6.png");
 
  
 
 
 
  gameOverImg = loadAnimation("gameOver.png");
  restartImg = loadAnimation("restart.png");
}

function setup() {
  createCanvas(1366,768);
 
  player = createSprite(400,400);
  runner = createSprite (800,400)
  runner.addAnimation ("robot",image2)
player.addAnimation ("YouOrMe",image1)
  
 
  ground = createSprite(200,180,600,20);
  //ground.addImage("ground",groundImage);
  ground.velocityX = 0;
  ground.visible = false
 
  invisibleGround = createSprite(200,190,600,10);
  invisibleGround.visible = false;

  gameOver = createSprite(player.x,100);
  gameOver.addAnimation("ooo", gameOverImg);
 
  restart = createSprite(player.x,140);
  restart.addAnimation("eee", restartImg);
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  obstaclesGroup = new Group();
  coinsGroup = new Group();
  score = 0;
}

function draw() {
 // console.log(World.frameCount)
  //console.log(player.x)

  background (255);
  text("Score: "+ score, player.x+200,50);
 
//if (score % 400 === 0) {

//background(wallpaper2)

//} else background (wallpaper3)



restart.x=player.x;
gameOver.x=player.x;

  if (gameState==="PLAY"){
    score = score + Math.round(getFrameRate()/60);
   
 
    if(keyDown("space") && player.y >= 159) {
      player.velocityY = -14;
    }
 
    player.velocityY = player.velocityY + 0.8
    player.velocityX = 5;
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
    if(player.x>500&&World.frameCount % 200 === 0){
   
      ground.x=player.x;
       
      }
   
   
    if(player.x>500){
  invisibleGround.x=player.x;
 
  }
      camera.position.x = player.x;
    player.collide(invisibleGround);
    spawnCoins();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(player)){
        gameState = "END";
    }
  }
  else if (gameState === "END") {
    gameOver.visible = true;
    restart.visible = true;
   
    

    player.velocityY = 0;
    player.velocityX = 0;
   
    
    //player.changeAnimation("collided",trex_collided);
   
    
    obstaclesGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
   
    if(mousePressedOver(restart)) {
      reset();
    }
  }
 
 
  drawSprites();
}
function spawnCoins(){
if(World.frameCount % 60 === 0) {
var coin, coinsImage;
coin = createSprite(player.x+400,60,20,20)  ;

coin = addAnimation("CoinsBeLike", coinImage)
coinsGroup.add(coin);
coin.velocityX=0;
coin.scale= 0.7;
  }

}

function spawnObstacles(){
  if(World.frameCount % 100 === 0) {
    var obstacle;
    obstacle = createSprite(trex.x+400,160,20,20);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle2);
              break;
      case 2: obstacle.addImage(obstacle3);
              break;
      default: break;
    }
    obstaclesGroup.add(obstacle);
    obstacle.velocityX =0;
    obstacle.scale = 0.7;
  }
}


function reset(){
player.x=0;
ground.x=200;
invisibleGround.x=200

  obstaclesGroup.destroyEach();
  coinsGroup.destroyEach();

  gameOver.visible = false;
  restart.visible = false;
 
  gameState = "PLAY";
 

 
  score = 0;
 
}