

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
let c = []

function preload(){
  lost = loadSound('xxxbond.wav')
  jaded = loadSound('jaded (w_ Kazukii).mp3');
  tropicBerry = loadSound('Tropic Berry.mp3');
  foober = loadSound('foober pitch.mp3');
  evr = loadSound('Evr x Bond_4.wav');
  smthcmfrt = loadSound('Porter Robinson - Something Comforting (Lizdek Remix).mp3');

}


function setup() {
  createCanvas(windowWidth, windowHeight);
for( let i = 0; i < randNum; i ++){
rand.push(new RandomSong())


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


}

function draw() {
  background(220);



noStroke();

push();
//fill(c);
//rect(0,0,width,height);
pop();


ellipse(mouseX,mouseY, 30,30);

for(let i = 0; i < randNum; i++){
  rand[i].display();
  rand[i].displayTitle();
  rand[i].displayDist();
}

for(let i = 0; i < rand2Num; i++){
  rand2[i].display();
  rand2[i].displayTitle();
  rand2[i].displayDist();
}

for(let i = 0; i < rand2Num; i++){
  rand3[i].display();
  rand3[i].displayTitle();
  rand3[i].displayDist();
}

for(let i = 0; i < rand2Num; i++){
  rand4[i].display();
  rand4[i].displayTitle();
  rand4[i].displayDist();
}

for(let i = 0; i < rand2Num; i++){
  rand5[i].display();
  rand5[i].displayTitle();
  rand5[i].displayDist();
}
for(let i = 0; i < rand2Num; i++){
  rand6[i].display();
  rand6[i].displayTitle();
  rand6[i].displayDist();
}
}



