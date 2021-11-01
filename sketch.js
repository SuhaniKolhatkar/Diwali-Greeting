var theta;
var rX = 200;
var rY = 75;
var a = 100;
var b = 200;
var c = 300;

let pantee ;
let lights;

function preload(){
  pantee = loadImage('pantee.png');
  lights = loadImage('lights.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
}

function draw() {
  //background(0,0,0);
   
  image(lights,0,0,width,height);
  
  
  textSize(100);
  fill(255);
   s = "Happy Diwali";
  text(s, displayWidth / 2 - 100, 190);
 
 textSize(40);
  fill(81, 240, 7);
  s1 = "The Demon is always within."
  //text(s1,displayWidth/2-150,325);
  s2 = "The Godess is always within."
  //text(s2,width/2-500,375);
  s3 = "The battle too,is always within."
  //text(s3,width/2-150,425);
  s4 = "And so is the TRIUMPH of one, over the other."
  //text(s4,width/2-150,475); 
  s5 = "Which one, over which one ? "
  //text(s5,width/2-150,525);
  s6 = "That choice is also, always within."
  //text(s6,width/2-150,575);
  tara ();
  star ();
  
  //image(pantee,width/2-50,500,200,200);

//kandeel 1 left
  
  //first line
  stroke(255);
  line(a, a - a, a, a - 60);

  //yellow triangles
  noStroke();
  fill(242, 210, 29);
  triangle(a - 30, a - 45, a - 60, a + 7, a - 30, a + 59);
  triangle(a + 30, a - 45, a + 60, a + 7, a + 30, a + 59);

  //mid rectangle
  fill(73, 199, 252);
  rect(a - 30, a - 45, 60, 104);

  //organge rectangle
  fill(242, 29, 75);
  noStroke();
  rect(a - 30, a - 60, 60, 15);
  rect(a - 30, a + 59, 60, 15);

  //middle orange triangles
  fill(242, 114, 29);
  triangle(a, a - 45, a - 30, a + 7, a + 30, a + 7);
  triangle(a - 30, a + 7, a + 30, a + 7, a, a + 59);

  //striups
  for (var x = a - 27; x <= a + 27; x += 12) {
    fill(242, 210, 29);
    rect(x, a + 74, 6, 234);
  }
  for (var x = a - 15; x <= a + 27; x += 24) {
    fill(73, 199, 252);
    rect(x, a + 74, 6, 234);
  }

  //small orange rectangle
  fill(242, 114, 29);
  rect(a - 30, a - 56, 60, 7.5);
  rect(a - 30, a + 62, 60, 7.5);

  //small red triangles
  fill(242, 29, 75);
  triangle(a - 50, a + 7, a - 30, a - 45, a - 30, a + 59);
  triangle(a + 50, a + 7, a + 30, a - 45, a + 30, a + 59);


//kandeel 2
  //first line
  stroke(255);
  line(b, b - b, b, b - 60);

  //yellow triangles
  noStroke();
  fill(242, 210, 29);
  triangle(b - 30, b - 45, b - 60, b + 7, b - 30, b + 59);
  triangle(b + 30, b - 45, b + 60, b + 7, b + 30, b + 59);

  //mid rectangle
  fill(73, 199, 252);
  rect(b - 30, b - 45, 60, 104);

  //orgbnge rectangle
  fill(242, 29, 75);
  noStroke();
  rect(b - 30, b - 60, 60, 15);
  rect(b - 30, b + 59, 60, 15);

  //middle orbnge tribngles
  fill(242, 114, 29);
  triangle(b, b - 45, b - 30, b + 7, b + 30, b + 7);
  triangle(b - 30, b + 7, b + 30, b + 7, b, b + 59);

  //striups
  for (var x = b - 27; x <= b + 27; x += 12) {
    fill(242, 210, 29);
    rect(x, b + 74, 6, 234);
  }
  for (var x = b - 15; x <= b + 27; x += 24) {
    fill(73, 199, 252);
    rect(x, b + 74, 6, 234);
  }

  //small orange rectangle
  fill(242, 114, 29);
  rect(b - 30, b - 56, 60, 7.5);
  rect(b - 30, b + 62, 60, 7.5);

  //small red triangles
  fill(242, 29, 75);
  triangle(b - 50, b + 7, b - 30, b - 45, b - 30, b + 59);
  triangle(b + 50, b + 7, b + 30, b - 45, b + 30, b + 59);
  
  //kandeel 3
  noStroke()
   //first line
  stroke(255);
  line(c, c - c, c, c - 60);

  // mid triangle 
  noStroke()
  fill(242, 206, 22)
  triangle(c-30,c-45,c-30,c+7,c-60,c+7);
  fill(255)
  triangle(c-30,c-45,c-30,c+7,c,c+7);
  fill(4, 95, 186)
  triangle(c-60,c+7,c-30,c+7,c-30,c+59);
  fill(240, 17, 73)
  triangle(c-30,c+7,c,c+7,c-30,c+59);
  
  fill(242, 206, 22);
  triangle(c+30,c-45,c+30,c+7,c+60,c+7);
  fill(255)
  triangle(c+30,c-45,c+30,c+7,c,c+7);
  fill(240, 17, 73)
  triangle(c,c+7,c+30,c+7,c+30,c+59);
  fill(4, 95, 186)
  triangle(c+30,c+7,c+60,c+7,c+30,c+59);
  
  //mid triangle
  fill(4, 95, 186);
  triangle(c-30,c-45,c+30,c-45,c,c+7);
  triangle(c,c+7,c-30,c+59,c+30,c+59);

  //red rectangle
  fill(247, 228, 49);
  noStroke();
  rect(c - 30, c - 60, 60, 15);
  rect(c - 30, c + 59, 60, 15);

  
  //striups
  for (var x = c - 27; x <= c + 27; x += 12) {
    fill(242, 210, 29);
    rect(x, c + 74, 6, 234);
  }
  for (var x = c - 15; x <= c + 27; x += 24) {
    fill(242, 39, 56);
    rect(x, c + 74, 6, 234);
  }

  //small red rectangle
  fill(242, 39, 56);
  rect(c - 30, c - 56, 60, 7.5);
  rect(c - 30, c + 62, 60, 7.5);

}

  


function tara(){
  rX = random(width);
    rY = random(height);
    
    fill(255);
    stroke(255);
    strokeWeight(2);
    ellipse(rX,rY,5,5);
    line(rX,rY, rX+15,rY);
    line(rX,rY, rX-15,rY);
    line(rX,rY, rX,rY+15);
    line(rX,rY, rX,rY-15);
    line(rX,rY,rX+15*cos(PI/4),rY-15*sin(PI/4));
    line(rX,rY,rX-15*cos(PI/4),rY-15*sin(PI/4));
    line(rX,rY,rX-15*cos(PI/4),rY+15*sin(PI/4));
    line(rX,rY,rX+15*cos(PI/4),rY+15*sin(PI/4));
}
function star (){
  rX = random(width);
    rY = random(height);
    
    fill(255);
    stroke(255);
    strokeWeight(2);
    ellipse(rX,rY,5,5);
    line(rX,rY, rX+15,rY);
    line(rX,rY, rX-15,rY);
    line(rX,rY, rX,rY+15);
    line(rX,rY, rX,rY-15);
    line(rX,rY,rX+15*cos(PI/4),rY-15*sin(PI/4));
    line(rX,rY,rX-15*cos(PI/4),rY-15*sin(PI/4));
    line(rX,rY,rX-15*cos(PI/4),rY+15*sin(PI/4));
    line(rX,rY,rX+15*cos(PI/4),rY+15*sin(PI/4));
}
