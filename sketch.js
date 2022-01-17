 var runner
 var rAnimation
 var street
 var sImage

function preload(){
  //imagens pré-carregadas
  rAnimation = loadAnimation("Runner-1.png","Runner-2.png");
  sImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  runner = createSprite(200,300,10,10);
  runner.addAnimation("corredor",rAnimation);
  runner.scale=0.08;

  street = createSprite(200,200,10,10);
  street.addImage("rua",sImage);

  street.velocityY = 5;
  
}
function draw() {

  background(0);

  //console.log(street.depth);
  //console.log(runner.depth);

  street.depth = runner.depth;
  runner.depth = runner.depth+1;

  runner.x = World.mouseX;

  if(street.y > 400){
    street.y = height/2;
  }

 drawSprites();
}
