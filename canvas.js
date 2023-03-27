let landing_gear_down = true;
let background_x =-200;
let background_speed = 20;

let x = -50;
let y = 90;
let size = 50;
let speed = 5;
let angle = 0;
let angleSpeed = 0.01;


function keyReleased() {
    if (key === 'g') {
      landing_gear_down = !landing_gear_down; // toggle the state of the landing gear
    }
  }

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(60); // Set the frame rate to 60 frames per second
}

function draw() {


  background(220);


  fill(0);
  noStroke(); // remove the stroke
  rect(-200, 170,400,30); // the runway

  fill(255);
  rect(background_x,180,70,10);

  stroke(0);
  push();
  translate(x + size / 2, y + size / 2);
  rotate(angle);

  // set the stroke to black
  fill(0);
  noStroke();
// the landing gear
if (landing_gear_down) {
    ellipse(-20, 50, 10, 10);
    ellipse(35, 50, 15, 15);
    rect(-23, 25, 5, 20);
}
// change the fill color back to white
fill(255);
stroke(0);
  rect(-size / 2, -size / 2, 3*size, size);
  triangle(-size/2, -size/2, -size/2, size/2, -2*size,size/2);
triangle(-size/2, size/2, 2.5*size, size/2, 2.5*size, 1.5*size);
triangle(4*size, -size/2, 5*size/2, size/2, 5*size/2, -size/2);

beginShape();
vertex(50-200 + 300, 20 - 100);
vertex(85-200 + 300, 20 - 100);
vertex(85-300 + 415, 75 - 100);
vertex(30-200 + 300, 75 - 100);
endShape(CLOSE);


fill(0);
rect(-50, -10, 30, 10);

fill(0);
textSize(32);
textAlign(CENTER, CENTER); // center the text horizontally and vertically
text('A', -70, -20);
pop();

  background_x += background_speed;
  if (background_x > 400) {
    background_x = -200;
  }

  if (keyIsDown(UP_ARROW)) {
    y += speed; // Move the square down
    angle -= angleSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    y -= speed; // Move the square up
    angle += angleSpeed;
  }

  if (keyIsDown(LEFT_ARROW)) {
    angle -= angleSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    angle += angleSpeed;
  }

}
