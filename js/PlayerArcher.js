class PlayerArcher {
  constructor(x, y, width, height) {

    const options = {
      isStatic: true
    };

    //this.body = Matter.Bodies(x, y, width, height, options);
   // this.body = Matter.Bodies.rect(x, y, width, height);
    //this.body = Matter.rectangle(x, y, width, height, options);
  this.body = Matter.Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, -90);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}




