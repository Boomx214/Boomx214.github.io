class RandomSong3 {
    constructor(){
        this.posX = random(180, 552 - 25 );
        this.posY = random(170, 320);
    
    
    
        this.size = random(20,35);
    this.color = random(255);
    this.bolor = random(255);
    this.wolor = random(255);
    this.d;
    this.title = random(songs);
    }
    
    display(){
    
    
    push();
    fill(this.color,this.wolor,this.wolor);
    
    ellipse(this.posX, this.posY, this.size, this.size);
    
    pop();
    }
    
    
    displayTitle(){
    textAlign(CENTER,CENTER);
    textSize(10);
    fill(0)
    text("jaded",this.posX, this.posY + 10)
    
    }
    
    
    
    displayDist(x,y){
    
    this.d = dist(this.posX,this.posY,x,y)
    push();

    fill(0);
    textSize(10);
    text(int(this.d),this.posX, this.posY);
    
    pop();
    
    
    if(this.d  < 10){
    text("BALLS",mouseX,mouseY);
    lost.stop();
    foober.stop();
    evr.stop();
    smthcmfrt.stop();
    tropicBerry.stop();
    if(!jaded.isPlaying()){
    jaded.play();
    
    
    }
    
    }
    
    
    }
    }