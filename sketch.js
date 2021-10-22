let lost;
let cloud;
let intro;
function preload(){

lost = loadSound("xxxbond.wav");
cloud = loadSound("cloud..wav");
intro = loadSound("intro.wav");


}

function setup() {
noCanvas();


}

function draw() {
  background(220);
document.getElementById("lost").onclick(myFunction());
}


function playMusic(){
  var music = new Audio('cloud..wav');
  music.play();
  }



