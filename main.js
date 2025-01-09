import { Car } from '/Car.js';
const canvas = document.getElementById("mycanvas");
    canvas.height = window.innerHeight;
    canvas.width = 200; // Fixed the typo in "width"

    // Get the 2D drawing context
    const ctx = canvas.getContext("2d");

    // Create and draw the car
    const car = new Car(100, 100, 30, 50); 
    ctx.fillStyle = "black"; // Sets fill color
    car.draw(ctx);          // Draws the car