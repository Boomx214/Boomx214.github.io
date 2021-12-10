class Pause {
constructor(x,y){
this.x = x;
this.y = y;
this.dist;
this.sz = 30;
this.sz2 = 7;
}

display(){
this.dist = dist(this.x, this.y,mouseX,mouseY);

text(this.dist,width/2, height/2)
push();
rectMode(CENTER);
rect(this.x,this.y,this.sz2,this.sz);
rect(this.x + 12,this.y,this.sz2,this.sz);
pop();

if(this.dist <= 10){

//this.sz = 60;
//this.sz2 = 14;


}



}


pauseScreen(){


  


    push();
    fill(0,0,0);
    
    //rect(100,0,width,height);
    
    pop();






}


}

function mousePressed(){
for(let i = 0; i< pauseNum; i++){
if(pause[i].dist <= 10){
print("clicked");

pause[i].pauseScreen()

}


}



}



