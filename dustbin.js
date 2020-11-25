class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':2.0,
          'density':1.9,
          'isStatic':true
      }
      //this.image = loadImage("dustbin.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("white");
      //fill("white");
      rect(0, 0, this.width, this.height);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  