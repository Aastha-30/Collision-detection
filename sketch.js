var movingrect,fixedrect;

function setup() {
  createCanvas(800,800);
  movingrect=createSprite(400, 500, 50, 50);
  movingrect.shapeColor="red";
  movingrect.debug=true;
  fixedrect=createSprite(400, 500, 50, 50);
  fixedrect.shapeColor="yellow";
  fixedrect.debug=true;
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else{movingrect.shapeColor="red";
      fixedrect.shapeColor="yellow";}
  drawSprites();
}