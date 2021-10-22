/////////useless//////
let x1 = 1100;
let y1 = 250;
let obstacles = [];
let obstNum = 30;

let yw = 15;
let bulletNum=10;
//let bullets =[];
let	mainTurrent;
let turPosX = 1100;
let turPosY = 250;
let bulletExists = false;
let bulletsFired = [];
let line1 = -100;
let line2 = -100;
let line3 = - 100;
let line4= -100;




//Start Screen//


/////////in use///////////
let bgNum = 1;
let pY;
let pY2;
let pulse = [];
let pulseNum = 1;
let alph = 0;
let songCount = 0;
let back;
let lr;
let img;
let bong;
let enter;
let bg = [];
let timer = 5;
let start = [];
let extend;
let startNum = 1;
let mode = 1;
let eCool = 1;
let elixrNum = 4;
let eTime = 2;
let phaseTwo = false;
let stretch = 0;
let attackNum2 = 1;
let attackz = [];
let e = 0;
let timer2 = 5;
let hp;
let fram = 0;
let score = 0;
let damage = 0;
let p2 = 0;
let distance;
let collide = false;
let al =255;
let p;
let y2;
let energy
let p1;
let score3 = 0;
var waves = []
let wavesNum = 17;
let particles = []
let health = 3000;
let playerSpeed = 5,
  playerSize = 10,
  bulletSpeed = 5,
  bulletSize = 5;
let players = [];
let bullets = [];
let elixr = [];
let player = []
let attacks = []
let attackNum = 1;
let shots = [];
let shotNum = 1;
let shake = 50;
let real;
let aura;
let songIsPlaying = true;
let laser;
let laser2;
let font;
let boss;
let ship;
const dead = [
"GAME OVER LOOOOSERRR",
"dang you're trash at this",
"just quit",
"EVEN MY GRANDMA CAN BEAT THIS"



]

let wipeY = 2000;
let yPos;

function preload(){
//soundFormats('mp3', 'wav');
bong = loadSound('Taco Bell_Bong_SFX.mp3');
enter = loadSound('space.mp3');
img = loadGif('lightning.gif')
aura = loadGif('output-onlinegiftools-3.gif')
laser = loadGif('output-onlinegiftools-2.gif')
laser2 = loadGif('noemi-coute-laser.gif')
font = loadFont('Minecraft.ttf')
back = loadGif('Pixel-cave-city-OC-GIF-on-Imgur.gif')
boss = loadGif('20dcae4d034b577df3e5e39daaf9cc03.gif');
real = loadSound('Ecraze - Get Real (Crow REMIX).mp3')
ship = loadGif('vehicle-1-preview.gif');
leroy = loadSound("S2 E7 wants mom to know she looks cool and doesnt plan on changing.mp3");
}



function setup() {
  
  createCanvas(windowWidth, windowHeight);
  if(int(millis()/400) % 2 == 0 && songCount == 0){
  pY = random(20, height-20);
  pY2 = random(20,height-20);
  } else {


  }
  textFont(font);
mode = -1;
if(mode == -1){

  for(var i = 0; i < startNum; i++){
  start.push(new StartScreen());
  
  
  }



}
if(mode == 0){

for(var i = 0; i < startNum; i++){
start.push(new StartScreen());


}



}




  noStroke();
  //player = new Player(true, 300, 300, playerSize, 'r');
  for (var i = 0; i < 10; i++){

  
    player.push(new Player(1100,250));
  }
  for (var i = 0; i < elixrNum; i++){

  elixr.push(new Elixr())
  }
  //creates waves array

  for (var i = 0; i < wavesNum; i++) {
    waves.push(new Wave());
    
  }

  for (var i = 0; i < attackNum; i++) {

    attacks.push(new Attack);
  }
  for (var i = 0; i < attackNum2; i++) {

    attackz.push(new Attack2());
  }


  for (var i = 0; i < bgNum; i++) {

    bg.push(new Terrain());
  }
  if(mode == 1){

  for (var i = 0; i < wavesNum; i++) {

    waves[i].display();
   
  }

  for (var i = 0; i < wavesNum; i++) {

    waves[i].display();
  }



  for (var i = 0; i < attackNum; i++) {

    attacks[i].interval();
  }


}
function goCrazy(){

if(al > 255 && timer == 0){
 
}




}
}
/*
function keyPressed() {
  if (keyCode == 32)
    bullets.push(new Bullet(player.x, player.y, bulletSize,
      player.dir, bulletSpeed));
}




}
*/


function time(){
  if(mode == 1){
if(timer <=5 && timer > 0 && score3 % 3 == 0 && al < 255)
{

  wipeY = -2000;
//p1 = -100;
//p2 = -100;

} else if(al >=255 && score3 % 3 == 0 && timer ==0 ){

//wipeY = 250;


} 


  if(timer <= 3 && timer > 1){
    push();
    noStroke();
    fill(218,1,128,130);
    //fill(255,0,0,130);  
    yPos= random(40,500);
    
    for (var i = 0; i < player.length; i++) {
      
      p1 = player[i].getVal();

    }




   if(score3 % 3 !== 0 && score3 % 2 !== 0){
     
    p = width;
    rectMode(CENTER);
    rect(p/2,p1,width,3);
   

   }

   if(score3 % 2 == 0){
     push();
     rectMode(CENTER);
    lr = 1100
    //rect(lr,height/2,90,height)

pop();
   }
    
    //rect(e,yPos,width*2,3);
    //rect(0,yPos,width,3);
    
    pop();
if(score3 % 3 == 0){
 p1 = -100;
 p2 = -100;
  
  push();
  fill(218,1,128,70);
  //fill(255,0,0,70);
  rectMode(CENTER);
  rect(e,height/2,width*2, 300);
  pop();

} else {
 
  
  p2 = 0;

}

    }
  if(frameCount % 40 == 0 && timer > 0){
    timer --;
    
    
    }
  
  if(timer == 0){
   
    if(fram < 101){
      fram += 1;
      
      }
      
      if(fram > 60){
      score = score + 1;
      fram = 0;
      
      
      }

      if(score == 1){
timer = 5;
timer2 = 5;
score = 0;
al = 255;
p2 = 0;
      }
  }
  
  if(timer == 0){
    if(bong.isP)
    


    goCrazy();
      y2 = sin(frameCount /2) * 20;
      let addition = 1;

if(frameCount % 60 == 0 && score3 < addition){
score3--;



}
if(timer == 0 && addition ==0 && score3 == 0){
addition = 0;


}

if(timer == 0 && addition == 1 && score3 == -1){

addition = 2;

}


if(timer == 0 && addition == 2 && score3 == -2){

addition = 3;


}

if(timer == 0 && addition == 3 && score3 == -3 && score == 2){

addition == 0;
score3 = 0;

}

      p=p1;
    
      if(score3 % 2 == 0){
        push();
        rectMode(CENTER);
        fill(218,1,128, al)
        //fill(255,0,0,al)
        if(al > 0){
      al -=9;
        }
      
      if(al <= 0 ){
   
  
    
      }
       lr = 1100
      // rect(lr,height/2,90,height)
   
   pop();
      }
      push();
      noStroke();
      rectMode(CENTER);
      fill(218,1,128, al);
     // fill(255,0,0,al)
      if(al > 0){
    al -=9;
      }
    
    if(al <= 0 ){
 

  
    }


    if(score3 % 3 !== 0 && score3 % 2 !== 0){
      p = width;
      rect(p/2,p1,width*2,y2);
    


  }
    pop();
    push();
   // line1 = 900;
   // line2 = 0;
   // line3 = 500;
   // line4 = 1300;
    fill(20,200,100);
strokeWeight(2);
stroke(20,200,100);

  //line(line1,line2, line4,line3);
  //line(line1 + 23,line3, line4,line2);
pop();
if(timer > 0){

line1 = -100;

line2 = -100;

line3 = -100;

line4 = -100;
}
    
    }

    if(timer == 1){
      if(score3 % 2 == 0){
        push();
        fill(255,0,0,90)
        rectMode(CENTER);
       lr = 1100
       //rect(lr,height/2,90,height)
   
   pop();
      }
      p1 = p1;
      shake = 50;
      push();
      p = width/2;
      rectMode(CENTER);
    noStroke();
    fill(218,1,128,al);
    //fill(255,0,0,130,al)  
    if(score3 % 3 !== 0 && score3 % 2 !== 0){

      rect(p,p1,width,3);}
      //rect(e,yPos,width,3);
      pop();
      if(score3 % 3 == 0 ){
        
       p = -100;
       p1 = -100;
        push();
        fill(218,1,128, 90);
        //fill(255,0,0,90);
        rectMode(CENTER);
        imageMode(CENTER, CENTER);
        rect(e,height/2,width*2, 300);
        //mage(laser,e,height/2,width*2,300);
        pop();

      } else {
p;
wipeY = 2000;
      }
  
      
    }


if(frameCount % 40 == 0 && timer2 > 0){
timer2--;


}

 if(timer2 < 2 && timer > 0){

  push();
  noStroke();
  fill(255,0,0,130);
  //rect(0,yPos,width*2,5);
  //rect(0,yPos+ 40,width*2,5);
  //rect(0,yPos+ 100,width*2,5);
  pop();



}
if(timer2 == 0){

  y2 = sin(frameCount /2) * 20;
 
  push();
  rectMode(CENTER);
  noStroke();
  fill(218,1,128,al);
 // fill(255,0,0,al)
  //rect(0,yPos,width*2,y2);
  //rect(0,yPos+ 40,width*2,5);
  //rect(0,yPos+ 100,width*2,5);
  pop();


if(score3 % 3 == 0 && timer == 0){
  push();
  wipeY = height/2;
  fill(218,1,128,al)
  //fill(255,0,0,al)
  rectMode(CENTER)
  rect(e,wipeY,width*2, 300)
  pop();

} else{

  wipeY = 2000;
}

  
  
  if(al > 0){
    al -=11;
      }
   
    if(al <= 2 ){

   // p = -300;
   // p2 = -300;
   // p1 = -300;
    }
}


/*
if(timer2 == 0){
  push();
  noStroke();
  rectMode(CENTER);
  fill(255,0,0,al)
  if(al > 0){
al -=9;
  }

if(al <= 0 ){

p = -10;
p2 = -300;
p1 = -300;
}

//rect(p2,p,width*2,yPos);
//rect(p2,p,width*2,yPos2);
//rect(p2,p,width*2,yPos3);
//rect(p2,p,width*2,yPos4);
pop();

}
*/
  }
} 

function draw() {

  background("#45382B");


if(mode == -1){
  for(let i = 0; i<startNum; i++){

    start[i].begin();
    start[i].music();
  }



}



if(mode == 0){
if(keyCode == DOWN_ARROW && real.isPaused){

//real.play();

} else {

  real.pause();
}


for(let i = 0; i<startNum; i++){

  start[i].display();
}

}



if(mode == 1){
  for(let i = 0; i<bgNum; i++){

    bg[i].display();
  }



  if(int(millis()/400) % 2 == 0 && songCount == 0){
    for(var i = 0; i < pulseNum; i++){
      pulse.push(new Pulse(pY,pY2))
    
    }
  }

  if(int(millis()/400) % 2 == 0 && songCount == 0){
    translate(random(0,5), random(0,5));
  alph = 255;
  
  
for(let i = 0; i <pulseNum; i++){

  pulse[i].display();
  pulse[i].update(pY,pY2);
  }
  
  } else {
    translate(0,0);
    alph -= 50;
    if (alph <=0 ){
      alph = 0;
      
    }
  }









noStroke();
  push();
  textSize(20);
  fill(255);
  //text(score, 1100,80)
  //text(shake, 300,300)
  text(Math.abs(score3), 1200,80)
 // text(fram, 1100,100)
  pop();
push();
  fill(255);
  textSize(40);
  //text(timer, 1100,50)
//

  pop();
  push();
  textSize(40);
  fill(255,255,150)
 // text(timer2,1150, 50)
  pop();


//rect(900,40,400,400);



let froom = frameCount % 30;



push();
fill(100,220,200)
textSize(35);
//text(eTime, 1000, 100);

pop();
if(frameCount % 60 == 0 && eTime > 0){

  eTime--;
}
if(frameCount % 60 == 0 && eCool > 0){
eCool--;


}
for (var i = 0; i < elixrNum; i++){
  if(eTime == 0){
    elixr[i].display();

  }

elixr[i].checkGrab();
elixr[i].reloadEnergy();
  
}



  for (var i = 0; i < player.length; i++) {

    player[i].displayHealth();



  }

  
  for (var i = 0; i < attackNum; i++) {

    attacks[i].display();
  }

  for (var i = 0; i < attackNum2; i++) {


    attackz[i].attack();
    attackz[i].charge();
    attackz[i].displayEnergy();
  if(keyIsDown(13)){
    attackz[i].fade();
  
  }
  
  }

  push();
  strokeWeight(20);
stroke(0);
noFill();
  rect(0,0, width, height)
  pop();

time();
















/*
  if (bullets.length > 0) {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].display();
      bullets[i].update();
      if (bullets[i].x < 0 || bullets[i].x > width ||
        bullets[i].y < 0 || bullets[i].y > height)
        bullets.splice(i, 1)
    }
  }

*/












  let w = 0;
 //using push and pop to isolate the rectangle border so stroke doesnt go to the circles


  for (var i = 0; i < player.length; i++) {

  
    player[i].display();
    player[i].move();

    //player[i].updateTrail();
    //player[i].showTrail();
    if(hp <=0){

      player[i].gameOver();

    }
  }




if(x1 == waves[0].x){
health -= 50;


}

if(health == 0){

waves[0].display = false;

}

if(keyIsDown(65)){

  w = width;
  
  }


  noStroke();
  
  //displays the waves in a loop which loops the amount of times as the wavesnum variable
  
  for (var i = 0; i < wavesNum; i++) {

    waves[i].display();

  }
  for (var i = 0; i < player.length; i++) {

  

    player[i].checkCollide();

  }
  for (var i = 0; i < player.length; i++) {

  

    player[i].attack();
//print("attack");
  }

  for (var i = 0; i < wavesNum; i++) {


    waves[i].displayEnemyHealth();
    waves[i].checkCollision();
    waves[i].endPhase();
  }
  for (var i = 0; i < attackNum2; i++) {

    attackz[i].ult();
  
  }



if(frameCount % 60 == 0 && songCount > 0){
songCount--;


}


  let mil = millis()/10; 
push();
fill(255);
textSize(50);
//text(songCount, 1100, height/2)

pop();


push();
fill(255);
text(int(millis()/800), 100,100);
  text(int(mil), 100,100);
  pop();
  if(int(mil) <50 && real.isPlaying() == false){
    real.play();
    
    
  } else {


  }



}
}
/*
function mouseClicked(){

bong.play();

}
*/


