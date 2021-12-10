class Player {
    constructor(x,y) {
        this.posX = x; //1100;
        this.posY = y; //250;
       this.speed = 8;
       this.health = 250;
       this.boost = 10;
       this.boostCool = 30;
       this.size = 20;
       this.charge = 0;
       this.round = 0;
       this.alpha = 255;
       this.energy = 400;
       this.big = 110
       this.cIsDown == false;
       this.history = [];
       let v;
       
this.eHealth = 3000;
this.isDamaged = false;
       distance = dist(this.posX,this.posY, p2,p1)
      }

display(){
    push();
    text(this.posX + ", " + this.posY, this.posX, this.posY- 10)
    pop();
  push();

  strokeWeight(1.5);   
  stroke(9,18,28);
  fill(20, 42,68,20);

    rect(this.posX-5,this.posY , this.size, this.size);
    
//image(ship,this.posX-40,this.posY-20,this.big,this.big/1.83333333333);
pop();
}




updateTrail(){
   let v = createVector(this.posX, this.posY);
   
    this.history.push(v);
print(this.history.length)
}



showTrail(){
    push();
    fill(0);
    //ellipse(this.posX, this.posY, 20,20)
    for(let i = 0; i < this.history.length; i++){
        var pos = this.history[i];

    //ellipse(pos.posX,pos.posY, 10,10)
    
    }
    pop();



}






move(){

    
this.cIsDown = false;

    if(keyIsDown(38)  && this.posY >= 0 && keyIsDown(67) == false){
        this.posY -=this.speed;
      
      }
      if(keyIsDown(40) && this.posY < height-20 && keyIsDown(67) == false){
        this.posY +=this.speed;
      
        }
      
      if(keyIsDown(37) && this.posX > 900 && keyIsDown(67) == false){
      this.posX -=this.speed;
          
          }
      
      if(keyIsDown(39) && this.posX < width - 20 && keyIsDown(67) == false){
        this.posX +=this.speed
            
            }

            if(keyIsDown(67)){
                this.cIsDown = true;
                
                
                } else if(keyIsDown(67) == false) 
                {
                    this.cIsDown = false;
                
                
                }
      /*  
      if(keyIsPressed && key == 'd' ){
        this.speed = 10;
            if(this.boost > 0){

            this.boost -=2;


            }
            if(this.boost == 0){
            this.speed = 5; 
          
            if(this.boostCool > 0){
            this.boost -= 3;


            }
            if(this.boostCool == 0){
            this.boost = 10;

            }
            }
            
text(this.boost, this.posX + 10, this.posY)
text(this.boostCool, this.posX + 10, this.posY + 10)
            }*/
                 
}

getVal(){

return(this.posY);



}
getVal2(){

    return(this.posX);
    
    
    
    }
goCrazy(){

    translate(random(-0.5, 0.5), random(-0.5, 0.5))

}

getHealth(){
return this.health;


}


checkCollide(){
for(let i = 0; i < bossNum; i++){
   var collideOrNot = collideRectRect(this.posX , this.posY,20,20,hit[i].laserX,hit[i].laserX2,50,50)


if(collideOrNot){

print("L")


}
}

    /*
    var collideOrNot = collideRectRect(this.posX, this.posY, 20,20, p, p1, width, y2);
   var collideOrDeez = collideRectRect(this.posX, this.posY, 20,20, e, wipeY,width*2, 300);
 
   if(collideOrDeez){
this.health -= 2;
print("nuts");


   }

if(this.health <= 0){
this.health = 0;
*/

/*
if(collideOrNot){
    this.health -= 2;
    if(this.health <= 0){
        this.health = 0;
        
        
        }
    
}
*/
}

dodge(){



}






displayHealth(){
    push();

fill(255);

rect(1045, height -85,360,50)
    textSize(20);
   // text(this.health,this.posX - 10, this.posY -10 );
pop();
push();
fill(200,30,30);

rect(1050, height -80,this.health/0.71428571428,40)

pop();



}

die(){


}

gameOver(){
push();
textSize(90);
    text("Game over LOOOOOSSSSEEER", width*2, height*2);
pop();


}

attack(){
if(keyIsPressed && key == 'f'){
    let vibrate = sin(frameCount /2) * 20;
    //print("attack");
    push();
    fill(255,255,0,this.alpha)
    rect(width*2,this.posY,width*2,vibrate);
    pop();
    
    /*
    if(this.alpha > 0){
        this.alpha -=9;
          
    
    }
        
        if(this.alpha <= 0 ){
    this.alpha = this.alpha;

    
        }
    
*/


}




}


}



