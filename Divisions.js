class Divisions {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      for (var k = 0; k <=width; k=k=80) {
        divisions.push(new Divisons(k, height-divisionHeight/2, 10 divisonHeight));
      }

      for (var j = 0; j < divisions.length; j++) {
          divisons[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
          divisions[k].display();
      }
    }
  };
