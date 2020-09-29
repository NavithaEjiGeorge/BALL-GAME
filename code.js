var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["902fa92c-c5e1-444d-862f-303ff57ac0db","845dcc46-ee91-46f8-ba6c-ab0b1fbb5f48","06ac8bcd-4e7a-44d4-810a-a22b1ed11b98","edaa6123-4d01-4d4e-9887-f96e5b37ee03","1d6dddd0-5c9a-47a0-b2f4-17845249c6ad","c0e49e90-5aef-4714-93a8-2abee86b4ed3"],"propsByKey":{"902fa92c-c5e1-444d-862f-303ff57ac0db":{"name":"court","sourceUrl":"assets/v3/animations/u4rnNbFCFr6jnRuMy70LlBfABOCUAl5r_inGgWL9WSY/902fa92c-c5e1-444d-862f-303ff57ac0db.png","frameSize":{"x":500,"y":223},"frameCount":1,"looping":true,"frameDelay":4,"version":"AcciXQFezUxfsCP6CeYiNe3rQw57DxcD","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":223},"rootRelativePath":"assets/v3/animations/u4rnNbFCFr6jnRuMy70LlBfABOCUAl5r_inGgWL9WSY/902fa92c-c5e1-444d-862f-303ff57ac0db.png"},"845dcc46-ee91-46f8-ba6c-ab0b1fbb5f48":{"name":"court2","sourceUrl":"assets/v3/animations/u4rnNbFCFr6jnRuMy70LlBfABOCUAl5r_inGgWL9WSY/902fa92c-c5e1-444d-862f-303ff57ac0db.png","frameSize":{"x":500,"y":223},"frameCount":1,"looping":true,"frameDelay":4,"version":"AcciXQFezUxfsCP6CeYiNe3rQw57DxcD","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":223},"rootRelativePath":"assets/v3/animations/u4rnNbFCFr6jnRuMy70LlBfABOCUAl5r_inGgWL9WSY/902fa92c-c5e1-444d-862f-303ff57ac0db.png"},"06ac8bcd-4e7a-44d4-810a-a22b1ed11b98":{"name":"crown","sourceUrl":null,"frameSize":{"x":309,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"IeehO70DM2rNgoGD_3rT3pwoJmhbDhdN","loadedFromSource":true,"saved":true,"sourceSize":{"x":309,"y":163},"rootRelativePath":"assets/06ac8bcd-4e7a-44d4-810a-a22b1ed11b98.png"},"edaa6123-4d01-4d4e-9887-f96e5b37ee03":{"name":"crown2","sourceUrl":null,"frameSize":{"x":309,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"CT8wPMiWLGPS.G3UVPo.56ehg5MwnW06","loadedFromSource":true,"saved":true,"sourceSize":{"x":309,"y":163},"rootRelativePath":"assets/edaa6123-4d01-4d4e-9887-f96e5b37ee03.png"},"1d6dddd0-5c9a-47a0-b2f4-17845249c6ad":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/VfxflM0lmO3w67k17kO2AaiBkG3y52Vk/category_gameplay/pieceBlack_border11.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"VfxflM0lmO3w67k17kO2AaiBkG3y52Vk","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VfxflM0lmO3w67k17kO2AaiBkG3y52Vk/category_gameplay/pieceBlack_border11.png"},"c0e49e90-5aef-4714-93a8-2abee86b4ed3":{"name":"people","sourceUrl":"assets/api/v1/animation-library/gamelab/Scx3nI2UmLBWoLFyYVLkPUHNM0rnjQCd/category_characters/kid_2_right.png","frameSize":{"x":248,"y":403},"frameCount":1,"looping":true,"frameDelay":2,"version":"Scx3nI2UmLBWoLFyYVLkPUHNM0rnjQCd","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":403},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Scx3nI2UmLBWoLFyYVLkPUHNM0rnjQCd/category_characters/kid_2_right.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//create a ball
var ball= createSprite(200, 200,20,20);
ball.setAnimation("ball");
ball.scale=0.5;
//create compmallet
var compmallet = createSprite(200,78,50,20);
//set the colour to green
compmallet.shapeColor="green";
//create playermallet
var playermallet = createSprite(200,322,50,20);
//set the colour to red
playermallet.shapeColor="red";
//create goal
var goal = createSprite(200, 390,150,20);
//give yellow colour to goal
//give yellow colour to goal2
goal.setAnimation("court");
goal.scale=0.3;
//create goal2
var goal2 = createSprite(200, 20,150,80);
//give yellow colour to goal2
goal2.setAnimation("court2");
goal2.scale=0.3;

var boundary = createSprite(200, 280,400,10);
var boundary2 = createSprite(200,120,400,10);

var boundary3 = createSprite(395, 200,10,400);
boundary3.shapeColor="yellow";
var boundary4 = createSprite(5,200,10,400);
boundary4.shapeColor="yellow";
var compmalletscore = 0;
var playermalletscore = 0 ;
var gameState="serve";

function draw() {
  //sets the background to white
  background("pink");
  textSize(30);
  text(compmalletscore,35,30);
  text(playermalletscore,25,365);
  
 //create edges 
createEdgeSprites();
//ball will bounceOff the edges
ball.bounceOff(edges);
//playermallet will collide with boundary
playermallet.collide(boundary);  
//compmallet will collide with boundary2
compmallet.collide(boundary2);
//playermallet will collide with boundary3
playermallet.collide(boundary3);  
//playermallet will collide with boundary4
playermallet.collide(boundary4);
//when press space key the ball starts moving
if (gameState=="serve") {
if (keyDown("space")) {
play();
gameState="play";  
}
  textSize(15);
text("PRESS 'space'to make the ball move",50,233);  
textSize(15);
text("WIN A GOAL",150,160);
text("You can use the'ARROW KEYS'to move your player",30,266);
}

//ball will bounceOff the compmallet
ball.bounceOff(compmallet);
//ball will bounceOff the playermallet
ball.bounceOff(playermallet);
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }





//if ball touches the goal
if (ball.isTouching(goal)) {
compmalletscore=compmalletscore+1;
serve();
gameState="serve";
playSound("assets/computer.mp3");
}
//if ball touches the goal2
if (ball.isTouching(goal2)) {
playermalletscore=playermalletscore+1;
playSound("assets/player.mp3");
serve();
gameState="serve";
}
//if we press the left arrow
  if (keyDown(LEFT_ARROW)) {
//playermallet moves left
 playermallet.x=playermallet.x-5; 
}
//if we press the right arrow
 if (keyDown(RIGHT_ARROW)) {
//playermallet moves right
 playermallet.x=playermallet.x+5; 
}
//if we press the up arrow
if (keyDown(UP_ARROW)) {
//the ball moves up
 playermallet.y=playermallet.y-5;  
}
//if we press the down arrow
if (keyDown(DOWN_ARROW)) {
//the ball moves down
 playermallet.y=playermallet.y+5;  
}

//compmallet moves with the ball
compmallet.x=ball.x;


if (compmalletscore==5||playermalletscore==5) {
 end();

 gameState="end";
 text("GAMEOVER",162,150);
 text("PRESS'K'to play again",92,234);
}



if (keyDown("k")&&gameState=="end"){
gameState="serve";
compmalletscore=0;
playermalletscore=0;
}

//draws the sprites
drawSprites();
}
function serve(){
ball.x=200;
ball.y=200;
ball.velocityX=0;
ball.velocityY=0;
}

function play(){
ball.velocityX=3;
ball.velocityY=-3;
}

function end(){
ball.velocity;  
ball.x=200;
ball.y=200;
ball.velocityX=0;
ball.velocityY=0;
text("GAME OVER");
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
