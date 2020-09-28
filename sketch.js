var car, wall;

var speed, weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  //var height;

  //height = 100;

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  

  if(isTouching(wall,car)){
    var deformation = 0.5 * weight * speed * speed/22500;
      
    if(deformation < 101){
        car.shapeColor = "green";

    }
    if(deformation > 100 && deformation < 180){
        car.shapeColor = "yellow";

      }
    if(deformation > 179){
        car.shapeColor = "red";
      }
      car.velocityX = 0;

    
    }
    drawSprites();

}

function isTouching(obj1,obj2){
  if(obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
  obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 && 
  obj2.y - obj1.y <= obj1.height/2 + obj2.height/2 &&
  obj1.y - obj2.y <= obj1.height/2 + obj2.height/2){
    return true;
  }

  else{
    return false;
  }
    
   
} 