var player1
var player2
var scoring
var player1j,player2j
var background
var ball
var ball2
var score 

function preload(){
player1 = loadImage("red w ball.png")
player2 = loadImage("bluewball.png")
scoring = loadImage("shoot.png")
player1j = loadImage("redjumping.png")
player2j = loadImage("bluejumping.png")
backgroundimg = loadImage("bkgimg.jpg")
ballImg = loadImage("ball.png")
ball2Img = loadImage("ball.png")
}

function setup() {
canvas = createCanvas(displayWidth - 20, displayHeight-30);
ball = createSprite(800,height/2,50,50)
ball.addImage(ballImg)
ball2 = createSprite(800,height/2,50,50)
ball2.addImage(ballImg)
ball2.scale = 0.1
ball.scale = 0.1
ball.visible  = false
ball2.visible = false
player = createSprite(400,600,50,50)
player.addImage(player1)

player22 = createSprite(900,500,50,50)
player22.addImage(player2)
player22.scale = 3
player22.velocityX = -5
score = 0

}


function draw() {
  background(backgroundimg);
  textSize(40)
  text("score = " +score,670,290) 
player.velocityX = 0
if(player22.x<width/2){
  player22.velocityX = 0
  player22.destroy()
  player22 = createSprite(width/2-100,500,10,10)
  player22.addImage(player2j)

  player22.scale = 2.5
   ball2.x = ball2.x-2
   console.log(ball2.x)
   console.log(player22.x)
    if(ball2.x<width/2&&ball2.x>width/2-420){
      console.log("hi") 
      ball2.x = ball2.x-4
    }
    if(ball2.x<=width/2-420){
      ball2.y = ball2.y+4
    }
    ball2.visible = true

   
  
}
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 5
  }


  if(keyDown(LEFT_ARROW)){
    player.velocityX = -5
  }
  
  if(player22.x===width/2){
   
  }
  if(player.x>width/2){
    player.velocityX = 0
    player.destroy()
    player = createSprite(width/2+100,500,10,10)
    player.addImage(player1j)
    ball.x = ball.x+2
    if(ball.x>width/2&&ball.x<width/2+420){
      ball.x = ball.x+4
    }
    if(ball.x>=width/2+420){
      ball.y = ball.y+4
    }
    ball.visible = true
  }

 if(ball2.position===-420){
   player22.position(width/2-100,500,10,10)
 }
  
  drawSprites();

  
}