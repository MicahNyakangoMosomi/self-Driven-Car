export class Car {
  constructor(x, y, width, height) {
    this.x = x;           // Assign x-coordinate
    this.y = y;           // Assign y-coordinate
    this.width = width;   // Assign width of the car
    this.height = height; // Assign height of the car
  }

  draw(ctx) {
    ctx.beginPath(); // Start a new drawing path
    ctx.rect(        // Define a rectangle
      this.x - this.width / 2,   // Center the rectangle horizontally
      this.y - this.height / 2,  // Center the rectangle vertically
      this.width,                // Width of the rectangle
      this.height                // Height of the rectangle
    );
    ctx.fill(); // Fill the rectangle with the current fill style which is black in my case
  }
}
