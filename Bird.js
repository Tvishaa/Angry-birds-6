class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trijectory = []
    this.smoke = loadImage("sprites/smoke.png");                                                
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y]
    this.trijectory.push(position)
    
    if(this.body.position.x>220 && this.body.speed>10){
      for(var I = 0;I<this.trijectory.length;I ++){
      image(this.smoke,this.trijectory[I][0],this.trijectory[I][1])
      }
    }

  }
}
