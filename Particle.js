class Particle {
    constructor(x,y,r) {

        var options = {
            restitution:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        for (var j = 0; j < particles.length; j++) {
            particles[j].display();
        }
        for (var k = 0; k < particles.length; k++) {
            particles[k].display();
        }
        
        push();
        translate(pos.x,pos.y);
        rotate(ahele);
        noStroke();
        fill(this.color);
        ellipsemode(RADIUS);
        elipse(0,0,this.r,this.r);
        pop();
    }
};