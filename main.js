const canvas = document.getElementById("mycanvas");
canvas.width = 200; // sets the canvas width to 200
// Get the 2D drawing context
const ctx = canvas.getContext("2d");

// Create and draw the car
const car = new Car(100, 100, 30, 50); 
ctx.fillStyle = "black"; // Sets fill color
car.draw(ctx);  // Draws the car

function animate(){
    car.update();
    canvas.height = window.innerHeight; 
    car.draw(ctx)
    requestAnimationFrame(animate) //calls the animate function again and again per second
}

animate()