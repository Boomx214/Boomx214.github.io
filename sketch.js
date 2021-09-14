var galaxy;
var img;
var bubbles = [];
var targetx;
var targety;
var rotx = 0.0;
var roty = 0.0;
var butterfly = 'Seattle Rain' 
var pass = 'Passionfruit __ Remix'
var c418 = 'C418 - intro (thatprod remix)'

var vision = 'vision eyes'
var proto = 'C418 - Aria Math (Protostar Remix) [OFFICIAL MINECRAFT REMIX]-2'
var end = 'aria math' 
var aria = 'the end'
var bound = 'ARAEL-between-boundaries'
var vid
var playing = 0;

var purple = 0
var purple2 = 0
var green2 = 100
var yellow2 = 0
var red2 = 0
var whichSong;
const songs = [
/* 
c418,
vision,
pass,
butterfly,
aria,
end,
proto
  */
    bound,
    bound,
    bound,
    bound,
    bound,
    bound,
    bound,
    bound
]


  


function preload() {
whichSong = int(random(songs.length)) 
  //whichSong = 1
  var song = songs[whichSong]
  soundFormats('mp3', 'ogg');
  mySound = loadSound(random(songs));
  vid = loadImage('81ra83p3DCL._AC_SY879_.jpg')
}

function setup() {
colorMode(HSB);
  reverb = new p5.Reverb();
//mySound.disconnect();
strokeWeight(30);
  reverb.process(mySound, 1, 2);
  pixelDensity(displayDensity());
let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed(canvasPressed);

 
	colorMode (RGB, 256);

	specularMaterial(255);

}

function draw() {
/*

  button1 = createButton('onlyStar');
  
    button1.position(0, 10);
    button1.mousePressed(changeSong);
  button2 = createButton('c418');
    button2.position(0, 30);
    button2.mousePressed(changeSong2);
  button3 = createButton('vision');
    button3.position(0, 50);
    button3.mousePressed(changeSong3);
  button4 = createButton('pass');
    button4.position(0, 70);
    button4.mousePressed(changeSong4);
  button5 = createButton('aria');
    button5.position(0, 90);
    button5.mousePressed(changeSong5);
  button6 = createButton('end');
    button6.position(0, 110);
    button6.mousePressed(changeSong6);
  button7 = createButton('bound');
    button7.position(0, 130);
    button7.mousePressed(changeSong7);
*/


  background(purple);
 ambientLight(0, 0, 0);
  {pointLight (0, 0, 0, 200.0, 90.0, 200.0);
    pointLight (0, red2, 0, -200.0, 0.0, -200.0);
  	pointLight (purple2, 90, yellow2, 0.0, 200.0, 200.0);
  	pointLight (purple2, 0, 50, 0.0, -200.0, -200.0);
  	pointLight (green2, red2, yellow2, 200.0, 0.0, 200.0);
  	pointLight (green2, 0, 0, -200.0, 0.0, -200.0);
  pointLight (red2, 100, yellow2, 0.0, 200.0, 200.0);
  	pointLight (0, 100, green2, 0.0, -200.0, -200.0);}
  targetx = mouseY;
  	targety = mouseX;
  	rotx += (targetx - rotx) * 0.04;
  	roty += (targety - roty) * 0.04;
  	rotateX (rotx * 0.01);
  	rotateY (roty * 0.01);
	bubbles.push (new BubblesBase (random (width), height + 40.0, random (-1000.0, 1000.0), random (5,0), random (0.1, 5.0)));
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].update ();
		bubbles[i].render ();
		if (bubbles[i].by < 0) {
			bubbles.splice (i, 1);
		}
	}

  
  if (mySound.isPlaying()) {
    
    purple2 = 255;
    purple = 255;
   
    
  }
  if (whichSong == 1) {
  
  print ('onlyStar')

  
} //else {
    
    //purple = 0;
    //purple2 = 0;
    
 // }
  if (whichSong == 2){
  print ('c418')
    purple2 = 255;
    purple = color(8, 5, 1);
yellow2 = 25
    green2 = 70
        texture(vid);
   } 
 

 if (whichSong == 3){
  print ('vision')
purple2 = 255;
    purple = color(2, 6, 1);
yellow2 = 255
    green2 = 70
    texture(vid);
  }
 
  if (whichSong == 4){
  print ('pass')
purple2 = 255;
    purple = color(2, 1, 9);
yellow2 = 255
    green2 = 70
        texture(vid);
  }
    
  if (whichSong == 5){
  print ('butterfly')
    purple2 = 250;
    purple = color(3, 10, 5);
yellow2 = random(10,50);
    green2 = 90
    texture(vid);
  }
  
  if (whichSong == 6){

  print ('aria')
    purple2 = random(0,10);
    purple = color(6, 6, 6);
yellow2 = random(100,255);
    green2 = 25
  }

  if (whichSong == 7){
  print ('end')
purple2 = 200;
    purple = color(1,1,1);
yellow2 = random(100,255);
    green2 = 25
    red2 = 255
        texture(vid);
  }
  
  if (whichSong == 8){
  print ('proto')
    purple2 = 200;
    purple = color(4, 1, 4);
yellow2 = 250;
    green2 = 70
    red2 = 40;
    
  }
    //purple = 0;
    //purple2 = 0;
    
  //}
  //if (mySound.isPlaying()) {
    //purple = 255;
    //purple2 = 255;
    
  //}
  
  

    
    
  
 if (mySound.isPlaying() ){
   if (keyCode === UP_ARROW) {
      mySound.pause();
   }
    if (keyCode === RIGHT_ARROW) {
    
        purple2 = 0
        green2 = 0
         purple = 0
   }
   
   if (mySound.isPlaying) {
    if (keyCode === DOWN_ARROW) {
   
   fill(purple)
      box(2000)
      purple2 = (10)
      green2 = 250
   }   
     
   }
   
   
   
}
}
function BubblesBase (x, y, z, r, up) {
  var bonk = up;
  this.bx = x;
  this.by = y;
  this.br = r;
  this.bz = z;
  
  this.update = function () {
    this.by -= bonk;
    
    
  }
  
  this.render = function ()
  {

    noStroke();
    push();
    translate (this.bx - width / 2.0, this.by - height / 2.0, this.bz);

  box(this.br * 6.0); 
        translate(this.bx - width / 3.0, this.by - height / 3.0, this.bz);
    sphere(this.br * 6.0 );
       //translate(this.bx - width / 3.0, this.by - height / 2.0, this.bz);
    //plane(this.br * 6.0);
		pop();
    
    if (mySound.isPlaying()) {

           bonk = up;
      if (keyCode === SHIFT == true) {
     
     bonk = up - 2;
     
   } else {
     bonk = up;
   }
      if (keyCode === ALT == true) {
     
     //bonk = up / 2;
     
   } 
      
      
    
    
    }
    
    else {
      
   bonk = 0  
      
    }
    
  }
  
  //fill(90, 0, 90);
      //box(5000);
    
  
 
   
}
/*
function changeSong() {
  whichSong = 1;
}
function changeSong2() {
  whichSong = 2;
}
function changeSong3() {
  whichSong = 3;
}
function changeSong4() {
  whichSong = 4;
}
function changeSong5() {
  whichSong = 5;
}
function changeSong6() {
  whichSong = 6;
}
function changeSong7() {
  whichSong = 7 ;
}
    */
function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
      mySound.play();
  
  if (whichSong == 1,2,3,4,5,6,7) {

    
    
  }
  
  /*
  playing += 1
  if (playing == 1) {

  if (playing >= 1) {
    mySound.pause()
    
  }
  } else {
    if (playing >=1) {
      playing = 1;
      
    }
    
  }
  */
  
}
