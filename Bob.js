class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.01,
          'density':7.8,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, 30, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(255,0,254);
      strokeWeight(0.5);
      ellipse(pos.x,pos.y,30,30);
      pop();
    }
  };
  