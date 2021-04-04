function setup() {
    createCanvas(400,400);
    strokeWeight(3);
    strokeCap(SQUARE);

    noFill();
}
  
  function draw() {
    background(32);
    
    // lower-left
    stroke('red');
    line(0, 0, width * .1, height);
    stroke('pink');
    line(0, height * .1, width * .2, height);
    stroke('orange');
    line(0, height * .2, width * .3, height);
    stroke('goldenrod');
    line(0, height * .3, width * .4, height);
    stroke('yellow');
    line(0, height * .4, width * .5, height);
    stroke('lightgreen');
    line(0, height * .5, width * .6, height);
    stroke('green');
    line(0, height * .6, width * .7, height);
    stroke('lightblue');
    line(0, height * .7, width * .8, height);
    stroke('blue');
    line(0, height * .8, width * .9, height);
    stroke('indigo');
    line(0, height * .9, width, height);
    
    // upper-right
    stroke('indigo');
    line(width * .9, 0, width, height);
    stroke('blue');
    line(width * .8, 0, width, height * .9);
    stroke('lightblue');
    line(width * .7, 0, width, height * .8);
    stroke('green');
    line(width * .6, 0, width, height * .7);
    stroke('lightgreen');
    line(width * .5, 0, width, height * .6);
    stroke('yellow');
    line(width * .4, 0, width, height * .5);
    stroke('goldenrod');
    line(width * .3, 0, width, height * .4);
    stroke('orange');
    line(width * .2, 0, width, height * .3);
    stroke('pink');
    line(width * .1, 0, width, height * .2);
    stroke('red');
    line(0, 0, width, height * .1);  

    // concentric circles
    stroke(random(255), random(255), random(255));
    arc(200, 200, 64, 64, 0, PI);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 64, 64, PI, 0);
    
    stroke(random(255), random(255), random(255));
    arc(200, 200, 160, 160, PI / 6, PI * 5 / 6);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 160, 160, PI * 5 / 6, PI * 3 / 2);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 160, 160, PI * 3 / 2, PI / 6);
    
    stroke(random(255), random(255), random(255));
    arc(200, 200, 256, 256, 0, PI / 2);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 256, 256, PI / 2, PI);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 256, 256, PI, PI * 3 / 2);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 256, 256, PI * 3 / 2, 0);
    
    stroke(random(255), random(255), random(255));
    arc(200, 200, 352, 352, PI * 3 / 10, PI * 7 / 10);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 352, 352, PI * 7 / 10, PI * 11 / 10);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 352, 352, PI * 11 / 10, PI * 3 / 2);
    stroke(random(255), random(255), random(255));
    arc(200, 200, 352, 352, PI * 3 / 2, PI * 19 / 10)
    stroke(random(255), random(255), random(255));
    arc(200, 200, 352, 352, PI * 19 / 10, PI * 3 / 10)
  }