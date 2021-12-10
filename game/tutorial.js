class Tutorial{
constructor(){
this.text = "Hello Traveler!"
this.count = 0;
this.sentence = 0;
this.skip = "";
this.tex = 1100;
this.tey = 90;
this.dist;
this.completedObjected = false;
this.tutorialFinished = false;
}



display(){
if(mode == 5 && !tutorialSong.isPlaying() && keyCode == ENTER){
tutorialSong.play()  
tutorialSong.setVolume(0.2);
}    



    push();
fill(0);
rectMode(CENTER);
rect(width/2, height - 100, width, height/2);
pop();
    push();
    textSize(30);
    fill(255);
this.partial = this.text.substring(0,this.count);

text(this.partial, 20, height/2 + 120);
text(this.skip, 1100, height - 30);
text("enter to display text",600,height-30);
text("z to skip",250,height-30);
pop();

if(keyCode == ENTER){
this.count += 0.45;


}
if(key == "z"){
this.count = this.text.length;

}




if(key== "x" && this.partial == "Hello Traveler!"){
this.text = "Welcome to my Hellish Game World!, \n today I'm gonna show you how to play my god awful bossfight game!";
this.count = 0;
this.skip = ". ";
if(key=="f" && this.count < this.text.length){
this.count = this.text.length();

}
}

if(this.partial =="Hello Traveler!"){
    this.skip = "hit x to move on";

}


if(key== "x" && this.partial == "Welcome to my Hellish Game World!, \n today I'm gonna show you how to play my god awful bossfight game!"){
    this.text = "First, you'll need to move. \n Use the Arrow keys to move around within your given boundaries. \n but first since I'm dumb you have to hit c before arrow keys to move when the game starts up!";
this.skip = "";

    this.count = 0;
  
    }
if(this.partial == "First, you'll need to move. \n Use the Arrow keys to move around within your given boundaries. \n but first since I'm dumb you have to hit c before arrow keys to move when the game starts up!" ){
    push();
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(255,255,255,this.al);
    text("move here",this.tex,this.tey);
    pop();

    for(let i = 0; i < player.length; i++){
        this.dist = dist(this.tex,this.tey,player[i].posX,player[i].posY);
        text(this.dist,this.tex,this.tey - 20)
        
        }
        if(this.dist < 15){
this.al = 0;
this.objectiveCompleted = true;
        }
}

if(this.al == 0){
    this.skip = "hit x to move on";

}


if(key=="x" && this.partial =="First, you'll need to move. \n Use the Arrow keys to move around within your given boundaries. \n but first since I'm dumb you have to hit c before arrow keys to move when the game starts up!" && this.objectiveCompleted == true){
this.count = 0;
this.skip ="";
this.text = "Nice! Alright so now you can move..."
}
if(this.partial =="First, you'll need to move. \n Use the Arrow keys to move around within your given boundaries. \n but first since I'm dumb you have to hit c before arrow keys to move when the game starts up!"){
   // this.skip = "hit c to move on";

}


if(key == "x" && this.partial=="Nice! Alright so now you can move..."){
    this.skip="";
this.text = "Nice! Alright so now you can move... that's not gonna do anything tho....."
this.count = 34;

}



if(key =="x" && this.partial == "Nice! Alright so now you can move... that's not gonna do anything tho....." ){
this.count = 0;
this.text = "now you gotta...you gotta learn how to uh ynow fight!";

}

if(key =="x" && this.partial == "now you gotta...you gotta learn how to uh ynow fight!" ){
    this.completedObjected = false;
    this.count = 0;
    this.text = "shoot this poor innocent square by hitting Shift! \n watch out though! you have an energy limit, \n and when it runs out you can't shoot and you'll be vulnerable! \n don't fret though because you can recharge with \"c\"";
    this.al = 255;
    }

  


 

    if(this.partial == "shoot this poor innocent square by hitting Shift! \n watch out though! you have an energy limit, \n and when it runs out you can't shoot and you'll be vulnerable! \n don't fret though because you can recharge with \"c\"" ){

        push();
       fill(255,255,255,this.al)
        rect(200,150,60,60)
        pop();
        for (var i = 0; i < attackNum2; i++) {
    
    
            attackz[i].attack();
            attackz[i].charge();
            attackz[i].displayEnergy();
          if(keyIsDown(13)){
            attackz[i].fade();
          
          }
          
          }

    
          for(let i = 0; i < player.length; i++){
          if(keyIsDown(16) && player[i].posY < 210 && player[i].posY > 150){
this.al = 0;
this.objectiveCompleted = true;
//print("yamomma");
          }
          }
      }



      if(key=="x" && this.partial == "shoot this poor innocent square by hitting Shift! \n watch out though! you have an energy limit, \n and when it runs out you can't shoot and you'll be vulnerable! \n don't fret though because you can recharge with \"c\"" && this.objectiveCompleted == true){
    this.skip =" ";
        this.count = 0;
    this.text = "great! now you can fight and move...which is like... \n all of my game lmao. But beware, \n the actual enemies do have a health system so they won't be easy to kill. \n enemies will also fight back and deal damage to you so watch out!"
        
    
    }

if(this.partial == "great! now you can fight and move...which is like... \n all of my game lmao. But beware, \n the actual enemies do have a health system so they won't be easy to kill. \n enemies will also fight back and deal damage to you so watch out!"){
this.skip = "hit x to move on";

}

if(key == "x" && this.partial == "great! now you can fight and move...which is like... \n all of my game lmao. But beware, \n the actual enemies do have a health system so they won't be easy to kill. \n enemies will also fight back and deal damage to you so watch out!"){
this.count = 0;
this.text = "Well farewell dear traveler! \n Go fight the lazily put together bosses that i totally didn't make and are a force of nature";
    
    }
    if(this.partial == "Well farewell dear traveler! \n Go fight the lazily put together bosses that i totally didn't make and are a force of nature")
    {
this.skip = "hit x to play game";
    }
if(key == "x" && this.partial == "Well farewell dear traveler! \n Go fight the lazily put together bosses that i totally didn't make and are a force of nature"){
mode = 0;
tutorialSong.stop();
this.tutorialFinished = true;
}
    


}




}