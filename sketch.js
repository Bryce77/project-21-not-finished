var wall,thickness,speed,weight,bullet;


function setup() {
  createCanvas(1600,400);
  speed = random(233,321);
  weight = random(30,52);

  thickness = random(22,83);


  wall = createSprite(1200,200,thickness,height/2);

  bullet = createSprite(500,200,50,20);
  bullet.velocityX = speed;  
  bullet.velocityX = weight; 

}

function draw() {
  background(255,255,255);  

  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness); 

    if(damage > 10){

      wall.shapeColor = color(255,0,0);
      bullet.velocityX = 0;
    }
    
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
      bullet.velocityX = 0;
    }




  }



  drawSprites();
}

function hasCollided(lbullet,lwall){
  var wallLeft;
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(wallLeftEdge >= wallLeft){

  
    

    return true

  }

  return false
}

