function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(205, 105, 94);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(20, 50);
}
