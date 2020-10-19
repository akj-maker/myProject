//var player, runner
//var image1, image2
//var distance = 0
//var bbground
//var score = 0
//var invisibleGround

//function preload () {


//image2 = loadAnimation ("Aladdinsheet1.png","Aladdinsheet2.png","Aladdinsheet3.png", "Aladdinsheet4.png", "Aladdinsheet5.png", "Aladdinsheet6.png", "Aladdinsheet7.png", "Aladdinsheet8.png", "Aladdinsheet9.png", "Aladdinsheet10.png", "Aladdinsheet11.png", "Aladdinsheet12.png")
//image1 = loadAnimation ("punishersprites.png","punishersprites1.png","punishersprites2.png","punishersprites3.png","punishersprites4.png","punishersprites5.png","punishersprites6.png")
//bbground = loadImage ("background.jpg")

//wallpaper = loadImage ("background.jpg")

//}





//function setup () {

//createCanvas (1366,768)



//player = createSprite (400,400)
//runner = createSprite (800,400)

//runner.addAnimation ("robot",image2)
//player.addAnimation ("YouOrMe",image1)

//bbground = createSprite (200,200)
//bbground.addAnimation ("Back",backbone)
 


  
//ground = createSprite(200,180,400,20);
  //ground.x = ground.width /2;
  //ground.velocityX = -6;
  //invisibleGround = createSprite(0,410,2500);
  //invisibleGround.visible = true;

//}



//function draw () {

//background (bbground)

//player.setCollider("rectangle",0,0,10,50)
//player.debug = true

//if (keyIsDown(RIGHT_ARROW)) {

//player.velocityX = 10 }

//if (keyIsDown(LEFT_ARROW)) {

  //  player.velocityX = -10
//}
//if(World.frameCount % 200 === 0){
   
  //player.x=runner.x;

  
  
   
  //} 

 // fill ("light blue")
  //textSize (24)
  //text ("score" + score , 1000, 400)
  


//runner.x = player.x + random (250,250)

//camera.x  = background.x

//console.log (displayWidth, displayHeight)

//runner.collide (invisibleGround)
//player.collide (invisibleGround)

//drawSprites()
//}

//function spawnCoins(){
  //if(World.frameCount % 60 === 0) {
  //var coin;
  //coin = createSprite(runner.x+400,60,20,20)  ;
  //coin.addImage();
  //cloudsGroup.add(cloud);
  //cloud.velocityX=0;
  //cloud.scale= 0.7;
    