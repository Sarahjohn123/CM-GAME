
function preload() {
    //load the images here
    bgimg=loadImage("garden.png");
    tomimg=loadAnimation("cat1.png");
    jerryimg=loadAnimation("mouse1.png");
    tomimg1=loadAnimation("cat2.png");
    jerryimg1=loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry=createSprite(400,200,20,30);
tom=createSprite(600,300,50,50);
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("tomimg1");
    cat.changeAnimation("tomimg1");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("jerryimg1");
    mouse.changeAnimation("jerryimg1");
    mouse.frameDelay =25;
}
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("jerryimg1");
    mouse.changeAnimation("jerryimg1");
    mouse.frameDelay =25;
}

}
