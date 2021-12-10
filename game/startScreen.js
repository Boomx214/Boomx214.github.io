class StartScreen{
constructor(){
this.button;
this.fadeAmount;
this.fade = 255;
this.bpm
this.beat
this.timer = 25;
this.zoom = 30;
this.zoomAmount = 0;
this.b;
this.dist;
this.dist2;
this.skip = "click to skip tutorial";
this.sz = 25;
this.sz2 = 25;
}
display(){
//text(int(this.dist) + " " + int(this.dist2),width/2, 50)
    


this.dist = dist(mouseX,mouseY,width/2 + 210,height/2+150);
    this.dist2 = dist(mouseX,mouseY, width/2 - 210,height/2 + 150);

if(this.dist <= 25){
this.sz = 35;



} else {
    this.sz = 25;
}


if(this.dist2 <= 25){
this.sz2 = 35;


} else {
    this.sz2 = 25;
}






    //this.b = createButton('skip tutorial');
    //this.b.mouseClicked(function(){tut[0].tutorialFinished = true});
    //this.b.position(width/2 - 40,height - 100);
    if(mode == 0){
    //this.b.show();
    
    
    }
    else{
    //this.b.hide();
    
    }

if(frameCount % 60 == 0 && this.timer > 0 ){
this.timer--;

}
push();
fill(255);
//text(this.timer, 20, 20)
pop();


    this.bpm = millis()/ 300;
   // text(int(this.bpm),width/2, height/2);
    if(int(this.bpm) % 1 == 0 && int(this.bpm) !== 0){
      this.beat = frameCount % 9.6 / 2
   
      
    } else {
      this.beat = 0;
      
    }

push();
rectMode(CENTER);
textAlign(CENTER, CENTER);
fill(255);
textSize(70)
text("idk what to name this thing", width/2 + 10, 200)

pop();
push();
fill(255)
text("", 150, 300)
pop();
push();
rectMode(CENTER);
//fill(0);
angleMode(CENTER);
textSize(this.sz);
textAlign(CENTER,CENTER);
fill(255,255,255, this.fade)
for(let i = 0; i < tutNum; i++){
if(tut[i].tutorialFinished == true){

    text(this.skip,width/2,height/2 + 170)

    text("click to begin", width/2 + 210, height/2 + 150);

} else {

    text("click to view tutorial", width/2 + 210, height/2 + 150);

}


push();
rectMode(CENTER);
//fill(0);
angleMode(CENTER);
textSize(this.sz2);
textAlign(CENTER,CENTER);
fill(255,255,255, this.fade)
for(let i = 0; i < tutNum; i++){
if(tut[i].tutorialFinished == false){
text(this.skip,width/2 - 210,height/2 + 150)

}

}
pop();
}


/*
this.button = createButton("Down arrow to Start");
this.button.style("background-color", "black");
this.button.style("color", "white");
this.button.style("font-size", "2rem");
this.button.size(200,90);
this.button.position(width/2-80, height/2 + 200);
this.button.style("border", "0.5rem solid #FFFFFF");
*/
//this.button.style( "transition-duration:", "0.4s;")
//this.button.style("hover:", "background-color", "white");
//this.button.hover("background-color:", "#4CAF50", "color:", "white;")
   // rect(width/2, height/2 + 200, 200,90);
pop();
if(this.fade <= 0 ){
    this.fadeAmount = 2;
    
    
    } 
    if(this.fade >= 255){
    this.fadeAmount = -2
    
    }
    
    if(int(this.zoom) <= 20 ){
        this.zoomAmount = 0.30;
        
        
        } 
    if(int(this.zoom) >= 30){
        this.zoomAmount = -0.30
        
        }
    
    this.fade += this.fadeAmount;

    for(let i = 0; i < tutNum; i++){
        if(tut[i].tutorialFinished == true && keyCode == DOWN_ARROW){
            mode = 1;
        }
    else if(keyCode == DOWN_ARROW && tut[i].tutorialFinished == false) {
mode = 5;

    }
    
}




}

begin(){
fill(255,255,255,this.fade)
push();
textSize(30);
textAlign(CENTER,CENTER);
text("up arrow to begin", width/2, height/2);
//text("controls: " + "\nS is for ultimate (when left side bar hits 100% you can use it)" + "\nenter to attack and arrow keys to move." + "\n\nyou need to charge to be able to attack so hit c to charge" + "\nalso you need to hit c before the game allows you to move", width/2, height/2 - 200);
pop();


if(this.fade <= 0 ){
this.fadeAmount = 2;


} 
if(this.fade >= 255){
this.fadeAmount = -2

}

if(int(this.zoom) <= 20 ){
    this.zoomAmount = 0.30;
    
    
    } 
if(int(this.zoom) >= 30){
    this.zoomAmount = -0.30
    
    }

this.fade += this.fadeAmount;
this.zoom += this.zoomAmount;

if(keyCode == UP_ARROW){
mode = 0;


}

}

music(){
//if(keyCode == UP_ARROW){

//if(leroy.isPlaying()){
    /*
leroy.pause();

} else {
    //leroy.play();
}
*/
}




}

function mouseClicked(){

for(let i = 0; i < startNum; i++)
{
if(start[i].dist <= 17){
mode = 5;


}

if(start[i].dist2 <= 17){
    mode = 1;
    
    
    }
}

}



