/*
// Select the canvas element and get the 2D rendering context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Movement flags to track user input
let forward = false;
let reverse = false;
let left = false;
let right = false;

// Set canvas dimensions to fill the entire screen
canvas.height = window.innerHeight;
canvas.width = 200;

// Translate the coordinate system to center the canvas horizontally and vertically
ctx.translate(canvas.width / 2, canvas.height / 2);

// Function to draw a rectangle at the specified position
function draw(x, y, width, height) {
  ctx.beginPath();
  ctx.fillStyle = "black"; // Set the rectangle's color
  ctx.rect(x, y, width, height); // Define the rectangle's position and size
  ctx.fill(); // Render the rectangle
}

// Listen for key presses and set movement flags accordingly
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp': // Move forward
      forward = true;
      break;
    case 'ArrowDown': // Move backward
      reverse = true;
      break;
    case 'ArrowLeft': // Move left
      left = true;
      break;
    case 'ArrowRight': // Move right
      right = true;
      break;
  }
});

// Listen for key releases and reset movement flags
document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      forward = false;
      break;
    case 'ArrowDown':
      reverse = false;
      break;
    case 'ArrowLeft':
      left = false;
      break;
    case 'ArrowRight':
      right = false;
      break;
  }
});

// Movement-related variables
const acceleration = 0.2; // Acceleration rate
const friction = 0.05; // Friction to reduce speed when not moving
const maxSpeed = 4; // Maximum forward speed
let speed = 0; // Initial speed
let x = 0; // Initial horizontal position
let y = 0; // Initial vertical position

// Function to handle movement logic
function move() {
  // Increase speed when moving forward, up to maxSpeed
  if (forward) {
    speed = Math.min(speed + acceleration, maxSpeed);
  }
  // Decrease speed when reversing, with a maximum reverse speed
  if (reverse) {
    speed = Math.max(speed - acceleration, -maxSpeed / 2);
  }

  // Apply friction to gradually stop movement when no key is pressed
  if (!forward && !reverse) {
    if (speed > 0) {
      speed = Math.max(speed - friction, 0); // Gradually reduce positive speed
    } else if (speed < 0) {
      speed = Math.min(speed + friction, 0); // Gradually reduce negative speed
    }
  }

  // Move horizontally when left or right keys are pressed
  if (left) {
    x -= 2; // Move left
  }
  if (right) {
    x += 2; // Move right
  }

  // Update vertical position based on speed
  y -= speed;
}

// Main animation loop
function animate() {
  // Clear the canvas before each frame
  ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  move(); // Update position based on input
  draw(x, y, 30, 50); // Draw the rectangle at the updated position
  requestAnimationFrame(animate); // Recursively call animate for the next frame
}

// Start the animation loop
animate();

*/

// Select the canvas element and get the 2D rendering context
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// // Set canvas dimensions to fill the screen
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// Translate the coordinate system to center the canvas
// ctx.translate(canvas.width / 2, canvas.height / 2);

// Rectangle class to handle movement and rendering
// class Rectangle {
//   constructor(x, y, width, height) {
//     this.x = x; // Initial x-position
//     this.y = y; // Initial y-position
//     this.width = width; // Rectangle width
//     this.height = height; // Rectangle height

//     this.forward = false; // Move forward (up)
//     this.reverse = false; // Move backward (down)
//     this.left = false; // Turn left
//     this.right = false; // Turn right

//     this.acceleration = 0.2; // Speed increase rate
//     this.friction = 0.05; // Gradual slowdown
//     this.maxSpeed = 4; // Maximum speed
//     this.speed = 0; // Current speed
//     this.angle = 0; // Rotation angle for direction

//     this.addEventListeners(); // Enable keyboard controls
//   }

//   // Draw the rectangle on the canvas
//   draw(ctx) {
//     ctx.save(); // Save the current canvas state
//     ctx.translate(this.x, this.y); // Move to rectangle's position
//     ctx.rotate(this.angle); // Rotate for direction
//     ctx.fillStyle = "black"; // Rectangle color
//     ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height); // Draw rectangle centered
//     ctx.restore(); // Restore canvas state
//   }

//   // Update position and handle boundaries
//   move() {
//     // Adjust speed based on forward/reverse input
//     if (this.forward) {
//       this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
//     }
//     if (this.reverse) {
//       this.speed = Math.max(this.speed - this.acceleration, -this.maxSpeed / 2);
//     }

//     // Apply friction when no input
//     if (!this.forward && !this.reverse) {
//       if (this.speed > 0) this.speed = Math.max(this.speed - this.friction, 0);
//       if (this.speed < 0) this.speed = Math.min(this.speed + this.friction, 0);
//     }

//     // Adjust angle based on left/right input
//     if (this.left) this.angle -= 0.05; // Rotate left
//     if (this.right) this.angle += 0.05; // Rotate right

//     // Update position based on speed and angle
//     this.x += Math.cos(this.angle) * this.speed;
//     this.y += Math.sin(this.angle) * this.speed;

//     // Prevent rectangle from going out of canvas
//     const boundaryX = canvas.width / 2 - this.width / 2;
//     const boundaryY = canvas.height / 2 - this.height / 2;
//     this.x = Math.max(-boundaryX, Math.min(boundaryX, this.x));
//     this.y = Math.max(-boundaryY, Math.min(boundaryY, this.y));
//   }

//   // Add event listeners for keyboard controls
//   addEventListeners() {
//     document.addEventListener("keydown", (event) => {
//       switch (event.key) {
//         case "ArrowUp": this.forward = true; break;
//         case "ArrowDown": this.reverse = true; break;
//         case "ArrowLeft": this.left = true; break;
//         case "ArrowRight": this.right = true; break;
//       }
//     });

//     document.addEventListener("keyup", (event) => {
//       switch (event.key) {
//         case "ArrowUp": this.forward = false; break;
//         case "ArrowDown": this.reverse = false; break;
//         case "ArrowLeft": this.left = false; break;
//         case "ArrowRight": this.right = false; break;
//       }
//     });
//   }
// }

// // Create the rectangle object
// const rectangle = new Rectangle(0, 0, 30, 50);

// // Animation loop
// function animate() {
//   // Clear the entire canvas
//   ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

//   // Update the rectangle's movement
//   rectangle.move();

//   // Draw the rectangle
//   rectangle.draw(ctx);

//   // Request the next animation frame
//   requestAnimationFrame(animate);
// }

// // Start the animation
// animate();



// const canvas = document.querySelector('canvas')
// console.log(canvas)

// // Set canvas dimensions to fill the screen
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// const ctx = canvas.getContext('2d')
// // ctx.translate(canvas.width / 2, canvas.height / 2);


// // ctx.fillRect(0,0,50,50)

// // ctx.beginPath()
// // ctx.moveTo(0,0)
// // ctx.lineTo(100,50)
// // ctx.strokeStyle= 'blue'
// // ctx.stroke()


// let x = 100
// let y = 100
// let r = 30
// let dx=10
// let dy = 10

// let mouse={
//   x:undefined,
//   y:undefined
// }

// function draw(){
//   ctx.fillStyle="red"
//   ctx.clearRect(0,0,innerWidth,innerHeight)
//   ctx.beginPath()
//   ctx.arc(x,y,r,0,Math.PI*2,false)
//   ctx.strokeStyle = 'blue'
//   ctx.stroke()
//   ctx.fill()

// }

// function update(){
//   if (x+r>innerWidth || x-r<0){
//     dx=-dx 
//   }
//   if (y+r>innerHeight || y-r<0){
//     dy=-dy
//   }
//   x+=dx
//   y+=dy

//   window.addEventListener('mousemove',function(e){
//     mouse.x=e.x;
//     mouse.y=e.y;
//     console.log(x)
//     if (mouse.x - x <50 && mouse.x - x > -50
//       && mouse.y - y <50 && mouse.y - y > -50){
//       r=r+10
//     }
//     else if(r>2){
//       r-=1
//     }
  
//   })

//   draw()

// }


// function animate(){
//   update()
//   requestAnimationFrame(animate)

// }


// function interactive(){
  

// }





// animate()

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Circle{
  constructor(x,y,dy,dx,color){
    this.x=x
    this.y=y
    this.dx=dx
    this.dy=dy
    this.color = color
    this.r = 30 //r => radius
  }
  draw(){
    ctx.fillStyle=this.color
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fill();
    // console.log('draw')
  }
  update(){
    
    if(this.x+this.r>innerWidth || this.x-this.r<0){
      this.dx=-this.dx
    }
    if(this.y+this.r>innerHeight || this.y-this.r<0){
      this.dy=-this.dy
    }
    this.x+=this.dx;
    this.y+=this.dy;
    // console.log('update')
    let mouse={
      x:undefined,
      y:undefined
      }

    window.addEventListener('mousemove',(e)=>{
      mouse.x=e.x;
      mouse.y=e.y;
      console.log(mouse)
      if (mouse.x - this.x <50 && mouse.x - this.x > -50
          && mouse.y - this.y <50 && mouse.y - this.y > -50){

            this.r+=1
      }

      else if(this.r>2){
              this.r-=1
            }
      else if(this.r>30){
        this.r=30
      }

    })

    this.draw()

  }
}
let radius=30
const circles=[]
const colors=['orange','black','yellow','indigo'];


for(let i = 0;i<500;i++){
  let x=Math.floor(Math.random()*(innerWidth-radius*2)+radius)
  let y =Math.floor(Math.random()*(innerHeight-radius*2)+radius)
  let dx = ((Math.random()*4)-0.5)
  let dy = ((Math.random()*4)-0.5)
  let color_no= Math.floor(Math.random()*4)
  let color=colors[color_no]
  console.log(color)
  

  circles.push(new Circle(x,y,dx,dy,color))
}
console.log(circles)

function animate(){
  ctx.clearRect(0,0,innerWidth,innerHeight)
  requestAnimationFrame(animate)
  circles.forEach((circle)=>{
    circle.update()
  })
  
}
animate()