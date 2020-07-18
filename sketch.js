var player, runner
var image1, image2
var distance = 0

function preload () {

//image1 = loadImage (images/punis)
image2 = loadAnimation ("Aladdinsheet1.png","Aladdinsheet2.png","Aladdinsheet3.png")
image1 = loadAnimation ("punishersprites.jpg","punishersprites1.jpg","punishersprites2.jpg","punishersprites3.jpg","punishersprites4.jpg","punishersprites5.jpg","punishersprites6.jpg")
  
}






function setup () {

createCanvas (1200,600)


player = createSprite (400,400)
runner = createSprite (800,400)

runner.addAnimation ("robot",image2)
player.addAnimation ("YouOrMe",image1)





}



function draw () {

background ("white")


if (keyIsDown(RIGHT_ARROW)) {

player.velocityX = 10 }

if (keyIsDown(LEFT_ARROW)) {

    player.velocityX = -10
}


//runner.x = player.x + 250

camera.x  = player.x




drawSprites()
}