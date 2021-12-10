class Pulse {
    constructor(y1,y2){
this.y =  y1;
this.y2 = y2;


    }
display(){

    push(); 
    //fill(255);
    fill(218,1,128, alph);
    //fill(255,0,0,alph)
    rectMode(CENTER);
    //rect(width/2,this.y, width,20);
    //rect(width/2,this.y2, width,20);
    pop()


}


update(y1, y2){
this.y = y1;
this.y2 = y2;
//this.y = random(20, height-20);
//this.y2 = random(20, height-20);
}


}