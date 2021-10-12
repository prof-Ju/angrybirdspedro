class Bird extends classeMae{
    constructor(x, y) {
      super(x,y,50,50)
      this.image = loadImage("sprites/bird.png");
      World.add(world, this.body);
    }
  }
  