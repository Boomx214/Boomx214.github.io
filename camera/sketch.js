// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

let tropic = [];

let lost;
let jaded;
let tropicBerry;
let foober;
let evr;
let smthcmfrt;

let lost2 = "lost w/ Evr"
let jaded2  = "jaded w/ Kazukii"
let tropicBerry2 = "Tropic Berry"
let foober2 = "foober"
let evr2 = "evr x bond"
let smthcmfrt2 = "something comforting remix"


const songs = [ 
  lost2,
  evr2,
  tropicBerry2,
  smthcmfrt2,
  jaded2,
  foober2
  
  
    
  ]


  let rand = [];
  let randNum = 1;
  let rand2 = [];
  let rand2Num = 1;
  
  let rand3 = [];
  let rand4 = [];
  let rand5 = [];
  let rand6 = [];



//let d;
function preload(){
  lost = loadSound('xxxbond.wav')
  jaded = loadSound('Akari - Aporia.mp3');
  tropicBerry = loadSound('Tropic Berry.mp3');
  foober = loadSound('foober pitch.mp3');
  evr = loadSound('Evr x Bond_4.wav');
  smthcmfrt = loadSound('Porter Robinson - Something Comforting (Lizdek Remix).mp3');

}


function setup() {
  createCanvas(640, 320);
for(let i = 0; i < randNum; i++){
tropic.push(new RandomSong2)



}


for(let i = 0; i < rand2Num; i++){

  rand2.push(new RandomSong2());
  
  
  }
  
  
  for(let i = 0; i < rand2Num; i++){
  
    rand3.push(new RandomSong3());
    
    
    }
  
    for(let i = 0; i < rand2Num; i++){
  
      rand4.push(new RandomSong4());
      
      
      }
  
  
  for(let i = 0; i < rand2Num; i++){
  
    rand5.push(new RandomSong5());
    
    
    }
  
  
    for(let i = 0; i < rand2Num; i++){
  
      rand6.push(new RandomSong6());
      
      
      }


  video = createCapture(VIDEO);
  video.size(640, 480);
  let options = {
    architecture: "MobileNetV1",
    imageScaleFactor: 0.5,
    outputStride: 16,
    flipHorizontal: true,
    minConfidence: 0.5,
    maxPoseDetections: 5,
    scoreThreshold: 0.5,
    nmsRadius: 20,
    detectionType: "single",
    inputResolution: 513,
    multiplier: 0.75,
    quantBytes: 2,
  };
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, options, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  // select("#status").html("Model Loaded");
}

function draw() {
  
  //These lines scale the canvas to correct size
  push();
  translate(320, 240);
  scale(1.667);
  translate(-320, -312);



  
  //These four lines draw the flipped video
  push();
  scale(-1, 1);
  image(video, -640, 0, 640, 480);
  pop();
  
    background(0, 0, 0, 150);
  
  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();

  fill(0, 0, 255);
  // rect(200,50,80,200);



  if (poses.length > 0) {
    let x = poses[0].pose.keypoints[0].position.x;
    let y = poses[0].pose.keypoints[0].position.y;
    fill(0, 0, 255);
    noStroke();
    ellipse(x, y, 20, 20);
    for(let i = 0; i < randNum; i++){
      tropic[i].display();
     // tropic[i].displayTitle();
      tropic[i].displayDist(x,y);
    }
    
    for(let i = 0; i < rand2Num; i++){
      rand2[i].display();
      //rand2[i].displayTitle();
      rand2[i].displayDist(x,y);
    }
    
    for(let i = 0; i < rand2Num; i++){
      rand3[i].display();
     // rand3[i].displayTitle();
      rand3[i].displayDist(x,y);
    }
    
    for(let i = 0; i < rand2Num; i++){
      rand4[i].display();
     // rand4[i].displayTitle();
      rand4[i].displayDist(x,y);
    }
    
    for(let i = 0; i < rand2Num; i++){
      rand5[i].display();
    //  rand5[i].displayTitle();
      rand5[i].displayDist(x,y);
    }
    for(let i = 0; i < rand2Num; i++){
      rand6[i].display();
    //  rand6[i].displayTitle();
      rand6[i].displayDist(x,y);
    }
   
  }

    noFill();
  stroke(255, 0, 0);
    rect(128, 168, 384, 192);

  
  pop();







}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      strokeWeight(5);
      stroke(255, 0, 0);
      /*
      line(
        partA.position.x,
        partA.position.y,
        partB.position.x,
        partB.position.y
      );*/
    }
  }
}
