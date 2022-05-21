function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

var rotation = 0;

function draw() {
  background(125);
  translate(300, 300);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(50);
  stroke(255, 0, 0, 125);
  noFill();

       let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(0, 0, 255, 125);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minuteAngle);

  stroke(0, 255, 0, 125);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngle);
   
  
//   rectMode(CENTER);
//   translate(width/2, height/2);
  angleMode(RADIANS);
  strokeWeight(0);
  rotate(rotation, [0]);
  stroke (0,175);
  fill (0);
  //rect(0, 0, 100, 100);
  triangle(-20, 0,0, 250,20 , 0);
  
//  fill (0,200);
//  ellipse(0,0,45);
  
//  fill (50,200);
//  ellipse(0,50,45);
  
  
//  fill (50,200);
//  ellipse(90,90,15);
   
//  angleMode(RADIANS);
//  strokeWeight(0);
//  rotate(rotation, [0]);
   

  rotation = rotation - sc;
  
//   fill(0);
//   noStroke();
//   text(hr + ':' + mn + ':' + sc, 300, 300);
  horloge(5, 5, 5);
}
 function horloge(x,y,taille){
  let sc = second(); 
   
    fill (0,200);
  ellipse(0,0,45);
  
  fill (50,200);
  ellipse(0,50,45);
  
  
  fill (50,200);
  ellipse(90,90,15);
   
  angleMode(DEGREES);
  strokeWeight(0);
  rotate(rotation - sc , [0]);
   
   
 }
