//PARAMETERS


let frameChangeRate=100
var pointsStart=[[100,200],[100,200],[200,330]]
var count=0
var movement='AAAB';
////console.log(pointsStart[0][1])

// Random number [min ,max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function rotatePoints(sketch, p1, p2) {
    //calculate midpoint coordinates and rotate the points 90 degrees
    let midpoint = [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];

    
    let mp = sketch.createVector(midpoint[0], midpoint[1]);
    let p1Rotate=sketch.createVector(mp.x + 1 / 2 * (p2.y - p1.y) , mp.y - 1 / 2 * (p2.x - p1.x) )
    let p2Rotate=sketch.createVector(mp.x - 1 / 2 * (p2.y - p1.y) , mp.y + 1 / 2 * (p2.x - p1.x) )
    let d = sketch.dist(p2.x, p2.y, p1.x, p1.y);
    //*
    //sketch.point(mp);
    sketch.stroke('red');
    sketch.point(p1Rotate)
    sketch.point(p2Rotate)
    sketch.strokeWeight(1);
    sketch.noFill();
    sketch.line(p2.x, p2.y, p1.x, p1.y)
    sketch.ellipse(mp.x, mp.y, d, d);
    //*/

    return [p1Rotate,p2Rotate]

}

function changeGray() {
    backgroundColor = getRandomInt(0, 255);
    //console.log('changing gray to:',backgroundColor)
  }

function addLine(p1, p2) {
    let newLine = [p1.x, p1.y, p2.x, p2.y];
    return newLine
}

function addPoint(mouseX,mouseY) {
    //console.log('adding point',mouseX,mouseY)
    
}

//part of the sketch
var s_A = function (sketch) { // p could be any variable name

    let canvasWidth=400
    let canvasHeight=400
    //we save the points in an array as vectors
    let points=[]
    
    let backgroundColor=200
    var backgroundColorOn=true
    let l = []
    points=[sketch.createVector(pointsStart[0][0],pointsStart[0][1]),sketch.createVector(pointsStart[1][0],pointsStart[1][1]),sketch.createVector(pointsStart[2][0],pointsStart[2][1])]
    let a = points[0];
    let b = points[1]
    let c = points[2]
    

    sketch.setup = function () {
       
        cnv=sketch.createCanvas(canvasWidth,canvasHeight);
        sketch.frameRate(frameChangeRate)
        
        
        
        /*cnv.mouseClicked(function(){ 
            addPoint(sketch.mouseX,sketch.mouseY);
            points.push(sketch.createVector(sketch.mouseX,sketch.mouseY))
            //console.log(points)
        });*/


    };

   sketch.mouseClicked = function () {
        
        let newLine = addLine(a, c)
        l.push(newLine)
        
        rot = rotatePoints( sketch ,a, c)
        //console.log('rotating',rot)
        a=b
        b=rot[0]
        c=rot[1]
        //console.log('a',a,'c',c)

    };

    sketch.draw = function () {
       
        if (backgroundColorOn) {
            sketch.background(backgroundColor);
        }
        sketch.strokeWeight(5);
        
        
        for (let i = 0; i < l.length; i++) {
            sketch.stroke('gray')
            sketch.line(l[i][0], l[i][1], l[i][2], l[i][3]);
        }
        
        
         // Change the color
         // Make the points 10 pixels 

         for (let i = 0; i < points.length; i++) {
            sketch.stroke('green');
            sketch.point(points[i]);
        }
        sketch.stroke('black');
        sketch.point(a);
        sketch.point(b);
        sketch.point(c);
        sketch.strokeWeight(5);

        let newLine = addLine(a, c)
        l.push(newLine)
        rot = rotatePoints( sketch ,a, c)
        //console.log('rotating',rot)
        a=b
        b=rot[0]
        c=rot[1]
        
       
        
        

    };
};

var s_B = function (sketch) { // p could be any variable name

    let canvasWidth=400
    let canvasHeight=400
    //we save the points in an array as vectors
    let points=[]
    
    let backgroundColor=200
    var backgroundColorOn=true
    let l = []
    points=[sketch.createVector(pointsStart[0][0],pointsStart[0][1]),sketch.createVector(pointsStart[1][0],pointsStart[1][1]),sketch.createVector(pointsStart[2][0],pointsStart[2][1])]
    let a = points[0];
    let b = points[1]
    let c = points[2]
    

    sketch.setup = function () {
       
        cnv=sketch.createCanvas(canvasWidth,canvasHeight);
        sketch.frameRate(frameChangeRate)
        
        
        
        /*cnv.mouseClicked(function(){ 
            addPoint(sketch.mouseX,sketch.mouseY);
            points.push(sketch.createVector(sketch.mouseX,sketch.mouseY))
            //console.log(points)
        });*/


    };

   sketch.mouseClicked = function () {
        
        let newLine = addLine(a, c)
        l.push(newLine)
        
        rot = rotatePoints( sketch ,a, c)
        //console.log('rotating',rot)
        a=b
        b=rot[0]
        c=rot[1]
        //console.log('a',a,'c',c)

    };

    sketch.draw = function () {
       
        if (backgroundColorOn) {
            sketch.background(backgroundColor);
        }
        sketch.strokeWeight(5);
        
        
        for (let i = 0; i < l.length; i++) {
            sketch.stroke('gray')
            sketch.line(l[i][0], l[i][1], l[i][2], l[i][3]);
        }
        
        
         // Change the color
         // Make the points 10 pixels 

         for (let i = 0; i < points.length; i++) {
            sketch.stroke('green');
            sketch.point(points[i]);
        }
        sketch.stroke('black');
        sketch.point(a);
        sketch.point(b);
        sketch.point(c);
        sketch.strokeWeight(5);

        let newLine = addLine(a, b)
        l.push(newLine)
        rot = rotatePoints( sketch ,a, b)
        //console.log('rotating',rot)
        b=c
        a=rot[0]
        c=rot[1]
        
       
        
        

    };
};

var s_AB = function (sketch) { // p could be any variable name

    let canvasWidth=400
    let canvasHeight=400
    //we save the points in an array as vectors
    let points=[]
    
    let backgroundColor=200
    var backgroundColorOn=true
    let l = []
    points=[sketch.createVector(pointsStart[0][0],pointsStart[0][1]),sketch.createVector(pointsStart[1][0],pointsStart[1][1]),sketch.createVector(pointsStart[2][0],pointsStart[2][1])]
    let a = points[0];
    let b = points[1]
    let c = points[2]
    

    sketch.setup = function () {
       
        cnv=sketch.createCanvas(canvasWidth,canvasHeight);
        sketch.frameRate(frameChangeRate)
        
        
        
        /*cnv.mouseClicked(function(){ 
            addPoint(sketch.mouseX,sketch.mouseY);
            points.push(sketch.createVector(sketch.mouseX,sketch.mouseY))
            //console.log(points)
        });*/


    };

   sketch.mouseClicked = function () {
        
        let newLine = addLine(a, c)
        l.push(newLine)
        
        rot = rotatePoints( sketch ,a, c)
        //console.log('rotating',rot)
        a=b
        b=rot[0]
        c=rot[1]
        //console.log('a',a,'c',c)

    };

    sketch.draw = function () {


        
       
        if (backgroundColorOn) {
            sketch.background(backgroundColor);
        }
        sketch.strokeWeight(5);
        
        
        for (let i = 0; i < l.length; i++) {
            sketch.stroke('gray')
            sketch.line(l[i][0], l[i][1], l[i][2], l[i][3]);
        }
        
        
         // Change the color
         // Make the points 10 pixels 

         for (let i = 0; i < points.length; i++) {
            sketch.stroke('green');
            sketch.point(points[i]);
        }
        sketch.stroke('black');
        sketch.point(a);
        sketch.point(b);
        sketch.point(c);
        sketch.strokeWeight(5);
        console.log(movement[count%movement.length])
        if (movement[count%movement.length] == 'A'){
            let newLine = addLine(a, c)
            l.push(newLine)
            rot = rotatePoints( sketch ,a, c)
            
            a=b
            b=rot[0]
            c=rot[1] 
        }
        else{
            let newLine = addLine(a, b)
            l.push(newLine)
            rot = rotatePoints( sketch ,a, b)
            
            b=c
            a=rot[0]
            c=rot[1]
        }
        count+=1

        
        
       
        
        

    };
};

var myp5_1 = new p5(s_A, 'c1');
var myp5_1 = new p5(s_B, 'c1');
var myp5_1 = new p5(s_AB, 'c1');



