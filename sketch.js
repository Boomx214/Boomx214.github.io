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
document.getElementById("lost").onclick(mouseClicked());
}


function mouseClicked() {
if(lost.isPlaying()){
lost.stop();


} else if(lost.isPaused()){
  lost.play();
}
if(cloud.isPlaying()){
  cloud.stop();
  
  
  } else if(cloud.isPaused()){
    cloud.play();
  }
  if(intro.isPlaying()){
    intro.stop();
    
    
    } else if(intro.isPaused()){
      intro.play();
    }
}



