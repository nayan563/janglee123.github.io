var cnv;

var c1,c2,c3,c4,c5,c6,c7,c8;
var f1;
var d1,d2,d3,d4,d5,d6,d7,d8;
var z1;

function windowResized(){
  resizeCanvas(min(700,window.innerWidth),min(700, window.innerHeight));
  console.log("changed");
}

function setup() {
  cnv = createCanvas(700, 700);
  cnv.position(-7*width/10 ,window.innerHeight - 7*height/10);
  cnv.parent('sketch');
  cnv.style('z-index','-2');

  c1 = new Circle(width/2, height/2, 20);
  c2 = new Circle(width/2, height/2, 50);
  c3 = new Circle(width/2, height/2, 110);
  c4 = new Circle(width/2, height/2, 95);
  c5 = new Circle(width/2, height/2, 120);
  c6 = new Circle(width/2, height/2, 130);
  c7 = new Circle(width/2, height/2, 165);
  f1 = new Circle(width/2, height/2, 50);
  d1 = new Circle(width/2, height/2, 60);
  d2 = new Circle(width/2, height/2, 75);
  d3 = new Circle(width/2, height/2, 145);
  z1 = new Circle(width/2, height/2, 35);
  d4 = new Circle(width/2, height/2, 210);
  d5 = new Circle(width/2, height/2, 238);
  d6 = new Circle(width/2, height/2, 262);
  d7 = new Circle(width/2, height/2, 282);
  d8 = new Circle(width/2, height/2, 298);
  c8 = new Circle(width/2, height/2, 310);

  noFill();
  stroke(75);
}

function draw() {

  var thita2 = (dist(mouseY,mouseX,0,0)+mouseX+mouseY)/4000;
  var thita3 =  document.documentElement.scrollTop/750;
  var thita1 = -thita3;

  background(255);

  ellipse(350, 350,4,4);


  strokeWeight(1.5);
  c4.drawZigzag(2,-23, thita2);
  d2.drawCircles(10, 5, thita1);
  z1.drawZigzag(10, -10, thita1);
  d7.drawCircles(11, 4, thita3);
  d8.drawCircles(11, 2, thita3);

  strokeWeight(2);
  c3.drawDotted(30, PI/30 + thita2);
  f1.drawFlower(10, 29, 22, thita1);
  d3.drawCircles(11,8,PI/11 + thita3);
  c2.drawCircle();
  d6.drawCircles(11, 6, thita3)
  //c8.drawZigzag(10, -11, 0)

  strokeWeight(2.5);
  c6.drawCircle();
  c6.drawFlower(11, 70, 50, thita3);
  d5.drawCircles(11, 8, thita3)

  strokeWeight(4);
  c1.drawDotted(15, thita1);
  c3.drawDotted(30, thita2);
  d4.drawCircles(11, 10, thita3)
  c7.drawFlower(11, 85, 55, thita3);


  strokeWeight(5);
  c5.drawDotted(50, thita2);

  strokeWeight(6);
  d1.drawDotted(10,PI/10+thita1);
  d3.drawCircles(11, 2, PI/11 + thita3);

}


class Circle{

  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  drawCircle(){
    ellipse(this.x,this.y,2*this.r,2*this.r);
  }

  drawDotted(n, a_){
    var x = this.x;
    var y = this.y;
    var r = this.r;

    var a = 2*PI/n;
    for(var i = 0 ; i < n ; i++){
      point( x + r*cos(i*a + a_), y + r*sin(i*a + a_));
    }
  }

  drawCircles(n, re, a){
    var x = this.x;
    var y = this.y;
    var r = this.r;

    for(var i = 0 ; i < n ; i++){
      ellipse( x + r*cos(i*2*PI/n + a), y + r*sin(i*2*PI/n + a), 2*re , 2*re );
    }
  }

  drawZigzag(rin, w, thita){
    var x = this.x;
    var y = this.y;
    var r = this.r;

    var px,py,cx,cy;
    var a = 0;

    cx = x + ( r )*cos(a + thita) + rin*cos(w*a + thita) ;
    cy = y + ( r )*sin(a + thita) + rin*sin(w*a + thita) ;

    while(a < 2*PI){
      px = cx;
      py = cy;
      a += 0.01;
      cx =  x + r*cos(a + thita) + rin*cos(w*a + thita) ;
      cy =  y + r*sin(a + thita) + rin*sin(w*a + thita) ;
      line(px, py, cx, cy);
    }
  }

  drawFlower(n, rout, rm, t){
    var x = this.x;
    var y = this.y;
    var r = this.r;


    var a = 2*PI/n;

    var x1,y1,x2,y2,x3,y3,cx1,cy1,cx2,cy2,cx3,cy3;

    for(var i = 0 ; i < n ; i ++){
      x1 = x + r*cos(a*i + t);
      y1 = y + r*sin(a*i + t);
      cx1 = x + (r+rm)*cos(a*i + t);
      cy1 = y +(r+rm)*sin(a*i + t);

      x2 = x + (r+rout)*cos((2*i+1)*a/2 + t);
      y2 = y + (r+rout)*sin((2*i+1)*a/2 + t);
      cx2 = x +  (r+rm)*cos((2*i+1)*a/2 + t);
      cy2 = y +(r+rm)*sin((2*i+1)*a/2 + t);

      x3 = x + r*cos(a*(i+1) + t);
      y3 = y + r*sin(a*(i+1) + t);
      cx3 = x + (r+rm)*cos(a*(i+1) + t);
      cy3 = y + (r+rm)*sin(a*(i+1) + t);

      beginShape();
      vertex(x1,y1);
      bezierVertex(cx1,cy1,cx2,cy2,x2,y2);
      bezierVertex(cx2,cy2,cx3,cy3,x3,y3);
      endShape();
    }
  }
}
