var ship, ship_moving;
var seaImage, sea;

function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1500, 900);

  // creating sea background
  sea = createSprite(0, 300, 1050, 100);
  sea.addImage("sea", seaImage);
  sea.x = sea.width /2; 

  // creating ship
  ship = createSprite(600, 400, 100, 100);
  ship.addAnimation("ship", ship_moving);
  ship.scale = 0.5;

}

function draw() {
  background("blue");


  // moving sea background
  sea.velocityX = -1;
  console.log(sea.x);

  // reset background
  if (sea.x < 0) {
    sea.x = sea.width /2;
  }

  drawSprites();
}