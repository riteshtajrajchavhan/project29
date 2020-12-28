class Log2 {
  constructor(x, y,height) {
    var options = {
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, 40, height, options);
    this.width = 40;
    this.height = height;
   
   
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
   
    rectMode(CENTER);
    fill("pink");
   
    
    rect(0, 0, this.width, this.height);
    pop();
  }
};
