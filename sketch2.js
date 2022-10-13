//This says that I'm making a new sketch called a, it can be named whatever you would like
const s = (a) => {

let xPos = 0;
let yPos = 0;

//I had to write a.___ b/c everything here is part of the a sketch.
    
a.setup = () => {
  let canvas = a.createCanvas(400, 400);
    canvas.parent("sketch2");
};

a.draw = () => {
  a.background(247, 230, 211);
  
  a.fill(107, 112, 92);
  a.ellipse(128, yPos + 150, 60, 75);
  
  
  a.fill(203, 153, 126);
  a.ellipse(200, yPos + 150, 60, 75);
  
 
  a.fill(107, 112, 92);
  a.ellipse(273, yPos + 150, 60, 75);
  
  
  a.fill(221, 190, 169);
  a.ellipse(166, yPos + 195, 60, 75);
  
  a.fill(183, 183, 164);
  a.ellipse(236, yPos + 195, 60, 75);
  
  a.line(130, yPos + 188, 150, yPos + 330);
  a.line(200, yPos + 188, 200, yPos + 330);
  a.line(272, yPos + 188, 250, yPos + 330);
  a.line(166, yPos + 233, 166, yPos + 300);
  a.line(236, yPos + 233, 236, yPos + 300);
  
  xPos = xPos + 1;
  yPos = yPos - 1;
  
};
};

let sketch2 = new p5(s);