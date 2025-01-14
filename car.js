class Car {
  constructor(x, y, width, height) {
    this.x = x;           // Assign x-coordinate
    this.y = y;           // Assign y-coordinate
    this.width = width;   // Assign width of the car
    this.height = height; // Assign height of the car
    this.speed=0;         //intial speed to 0
    this.acceleration = 0.2; //sets an acceleration of 0.2
    this.maxSpeed = 3;  //the maximum speed is 3
    this.friction = 0.05; //sets a friction of 0.05
    this.angle = 0;  //angle at which the car turn
    this.controls = new Controls(); // Create a new Control object
  }

  update(){
    this.#move();
  }

  #move(){
    if(this.controls.forward){
      this.speed+=this.acceleration; //increase speed by acceleration
    }
    if(this.controls.reverse){
      this.speed-=this.acceleration; //decrease speed by acceleration
    }
    if(this.speed>this.maxSpeed){
      this.speed = this.maxSpeed; //if speed is higher than maxspeed of 3 the speed is set to 3
    }
    if(this.speed<-this.maxSpeed/2){
      this.speed = -this.maxSpeed/2; //if speed is lower than -maxspeed/2 the speed is set to -maxspeed/
    }
    if(this.speed>0){
      this.speed-=this.friction; //if speed is higher than 0 the speed is decreased by friction
    }
    if(this.speed<0){
      this.speed+=this.friction; //if speed is lower than 0 the speed is increased by friction
    }
    if(Math.abs(this.speed)<this.friction){
      this.speed = 0; //if speed is lower than friction the speed is set to 0
    }
    if(this.speed!=0){
      const flip = this.speed>0?1:-1; 
      if(this.controls.right){
        this.angle-=0.03*flip;
      }
      if(this.controls.left){
        this.angle+=0.03*flip;
      }
    }
    this.x-=Math.sin(this.angle)*this.speed
    this.y-=Math.cos(this.angle)*this.speed
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x,this.y)
    ctx.rotate(-this.angle)
    ctx.beginPath(); // Start a new drawing path
    ctx.rect(        // Define a rectangle
      - this.width / 2,   // Center the rectangle horizontally
      - this.height / 2,  // Center the rectangle vertically
      this.width,                // Width of the rectangle
      this.height                // Height of the rectangle
    );
    ctx.fill(); // Fill the rectangle with the current fill style which is black in my case
    ctx.restore()
  }
}
