
class RandomSong2 {
    constructor(){
    this.posX = random(20, width - 10);
    this.posY = random(20, height-10);
    
    
    
    this.size = random(40,65);
    this.color = random(255);
    this.bolor = random(255);
    this.wolor = random(255);
    this.d;
    this.title = random(songs);
    }
    
    display(){
    
    
    push();
    fill(this.bolor,this.color,this.wolor);
    
    ellipse(this.posX, this.posY, this.size, this.size);
    
    pop();
    }
    
    
    displayTitle(){
    textAlign(CENTER,CENTER);
    textSize(10);
    fill(0)
    text("tropic berry",this.posX, this.posY + 10)
    
    }
    
    
    
    displayDist(){
    
    this.d = dist(this.posX,this.posY,mouseX,mouseY)
    
    text(int(this.d),this.posX, this.posY);
    
    
    
    
    
    if(this.d < 10 && !tropicBerry.isPlaying()){
    jaded.stop();
  lost.stop();
  foober.stop();
  evr.stop();
  smthcmfrt.stop();
  tropicBerry.play();
  
  
    }
  
  
    }
    }