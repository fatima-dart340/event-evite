let xPos = 0;
let yPos = 0;

function setup() {
  let canvas = createCanvas(400, 400);
    canvas.parent("sketch1");
}

function draw() {
  background(247, 230, 211);
  
  fill(107, 112, 92);
  ellipse(128, yPos + 150, 60, 75);
  
  
  fill(203, 153, 126);
  ellipse(200, yPos + 150, 60, 75);
  
 
  fill(107, 112, 92);
  ellipse(273, yPos + 150, 60, 75);
  
  
  fill(221, 190, 169);
  ellipse(166, yPos + 195, 60, 75);
  
  fill(183, 183, 164);
  ellipse(236, yPos + 195, 60, 75);
  
  line(130, yPos + 188, 150, yPos + 330);
  line(200, yPos + 188, 200, yPos + 330);
  line(272, yPos + 188, 250, yPos + 330);
  line(166, yPos + 233, 166, yPos + 300);
  line(236, yPos + 233, 236, yPos + 300);
  
  xPos = xPos + 1;
  yPos = yPos - 1;
  
}