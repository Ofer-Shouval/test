var xCoord = [], yCoord = [];

var numSegments = 80;

let xV, yV, xLoc, yLoc;
let col; 

let title2; 

let myCanvas;

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  
  xLoc = width/2;
  yLoc = height/2;
  for(var i = 0; i < numSegments; i++){
    xCoord[i] = xLoc;
    yCoord[i] = yLoc;
  }

 col = color("lightskyblue");
  title2 = select("#id3");

myCanvas.position(0,0)
myCanvas.style("z-index: -1");
   
}

counter = 0;
function draw() {
  //background(50);
  
  clear();
  fill(255,0);
  stroke(col);

  xV = map(noise(counter), 0,1,-300,300);
  yV = map(noise(counter+30), 0,1,-300,300);
  
  //title.position(400, 400);

  xCoord[numSegments-1] = width/2+xV;
  yCoord[numSegments-1] = height/2+yV;
  


  counter+= 0.01;
  xLoc +=xV;
  yLoc +=yV;
  
  for(var i = 0; i < numSegments; i++){
    xCoord[i] = xCoord[i+1];
    yCoord[i] = yCoord[i+1];
    
    var diameter = cos(map(i,0,numSegments-1,0,PI/2)) * height/1.2

      var xDiameter = cos(map(i,0,numSegments-1,0,PI/2)) * height/1.2
    // stroke(255-diameter*2, 0 , diameter*2)
    
    ellipse(xCoord[i], yCoord [i], xDiameter,diameter)
    
  }
}