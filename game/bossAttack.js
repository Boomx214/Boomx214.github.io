class BossFight {
constructor(){
this.laserX = 1100;
this.laserY = height/2;
this.al = 255;
this.hp;
this.y = 0;
this.laserX2 = 1100;
this.y2 = 0;
this.collide;
this.playerx;
this.playery;
this.collideOrNot;
this.distance;
this.game = "GAME OVER";
this.count = 0;
this.partial;
this.alpha = 255;
}

display(){
    for(let i = 0; i < player.length; i++){
        this.playerx = player[i].posX;
        this.playery = player[i].posY;
        this.hp = player[i].health;
    this.distance = dist(this.laserX, this.y,this.playerx,this.playery);
    this.distance2 = dist(this.laserX2, this.y2,this.playerx,this.playery);

//rect(this.laserX,laser,50,50);

if(this.distance <= 40 && player[i].health > 0 ||this.distance2 <= 40 && player[i].health > 0  ){

    print("DEEZ NUTS")
    player[i].health -= 150;

    }

    }
text(this.distance,1100, 130);








if(timer <=3 && timer >1){


for(let i = 0; i < player.length; i++){
//this.y = player[i].posY;
//this.y = player[i].posY;
this.laserX = player[i].posX;
this.health = player[i].health;
push();

fill(255,0,0,80);
textSize(60);

text("!!",this.laserX,60)
//rect(0,this.laserY,width,90);
pop();
}


}

if(timer <= 4 && timer >2){

    for(let i = 0; i < player.length; i++){
    this.laserX2 = player[i].getVal2();
    push();
    fill(255,0,0,255);
    textSize(60);

   // text("!!",this.laserX2,60)
    pop();
    }
} 

if(timer == 2){

    this.laserX2 = this.laserX2;
    push();
    fill(255,0,0,255);
    textSize(60);
    
    text("!!",this.laserX2,60)

    pop();
    this.y2 = 0;
}

if(timer == 1){
    push();
    fill(255,0,0,255);
    textSize(60);

    text("!!",this.laserX2,60)

    pop();
    this.laserX = this.laserX;
push();
    fill(255,0,0,255);
    textSize(60);
    
    text("!!",this.laserX,60)
   // rect(0,this.laserY,width,90);
    pop();
    this.al = 255;
this.y = 0;
}

if(timer == 0){
push();
fill(0);

    rect(this.laserX,this.y,50,50)
    rect(this.laserX2,this.y2,50,50)
pop();
    push();
    fill(255,0,0,this.al)

    //rect(this.laserX,0,10,height)
    pop();
if(this.y < height){
this.y += 60;

}
if(this.y2 < height){
    this.y2 += 60;

}


if(this.al > 0){
this.al -= 30;


}

this.laserY = this.laserY;

}


for(let i = 0; i < player.length; i++){
    if(player[i].health <= 0){
        //noLoop();
        fill(255);
        push();
    
    
        rect(0,0,width,height)
    
        pop();
        push();
        textAlign(CENTER,CENTER);
    textSize(70);
    fill(0);
        this.partial = this.game.substring(0,this.count);
        text(this.partial,width/2,height/2)
        this.count += 0.3;
        pop();
   
   push();
   fill(0,0,0,this.alpha);
   if(this.alpha >= 255){
this.alpha -= 50;


   }
   if(this.alpha <= 0){
this.alpha += 50;


   }
text("left arrow to try again", width/2,height/2 + 50);
   pop();
   
      //  break;
    
    
    }
    if(player[i].health <= 0 && keyCode == LEFT_ARROW){
mode = 0;


    }
        }
}


collide(){
    for(let i = 0; i < player.length; i++){
        this.playerx = player[i].getVal2();
        this.playery = player[i].getVal();
//this.collideOrNot = collideRectRect(this.playerx , this.playery,20,20,this.laserX,this.laserX2,50,50)




    }

if(this.collideOrNot){
    for(let i = 0; i < player.length; i++){
this.health = player[i].getHealth();


    }
//this.health -= 1;

print("apple");
}




}




}