class Plinko {
    constructor(x,y,r,options){
        var options = {
            isStatic:true
        }
      //super(x,y,50,50);
      //this.image = loadImage("sprites/bird.png");
      //this.smokeImage = loadImage("sprites/smoke.png");
      //this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }

      for (var j = 40; j <=width; j=j+5-0)
      {
          plinkos.push(new Plinko(j,75));
      }

      for (var j = 15; j <=width-10; j=j+50)
      {
          plinkos.push(new Plinko(j,175));
      }
     
  
      //for(var i=0; i<this.trajectory.length; i++){
        //image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
     //}
    }
  }
  