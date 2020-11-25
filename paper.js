class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':2
      }
      //this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      //strokeWeight(4);
      //stroke("purple");
     // fill("purple");
      ellipse(0, 0, this.radius);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.radius);
      pop();
    }
  };
  