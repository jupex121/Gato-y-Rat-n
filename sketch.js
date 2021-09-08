var canvas,bg;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("Imágenes/garden.png");
    tomImg1 = loadAnimation("Imágenes/tomOne.png");
    tomImg2 = loadAnimation("Imágenes/tomTwo.png","Imágenes/tomThree.png");
    tomImg3 = loadAnimation("Imágenes/tomFour.png");
    jerryImg1 = loadAnimation("Imágenes/jerryOne.png");
    jerryImg2 = loadAnimation("Imágenes/jerryTwo.png","Imágenes/jerryThree.png");
    jerryImg3 = loadAnimation("Imágenes/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2) { 
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.changeAnimation("tomLastImage");
        tom.x = 300;
        tom.scale = 0.2;

        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.changeAnimation("jerryLastImage");
        jerry.scale = 0.15;
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}