import SgInDiv from "./sgInDivProcess.js";





let points=[[100,150],[250,300],[300,150]]
let lines=[]
let angle=90
let pattern=userPattern
let count=0
let frameChangeRate =1;
let frameChangeRateSlider=1;
let w=document.documentElement.clientWidth 
console.log('canvas width',w)

let backgroundColor=200
let iterations=[5,25,50,200];
let canvasWidth=w*0.75/iterations.length
let canvasHeight=w*0.75/iterations.length
let div="c1"

for (let i = 0; i<iterations.length;i++){
    for(let j=10;j<=90;j+=10){
        
        let div='c'+j
        console.log('div',div)
        new SgInDiv(points, lines,j, userPattern, iterations[i],count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,div);
    }
}

/*
new SgInDiv(points, lines, 90, 'AAC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c2');
new SgInDiv(points, lines, 90, 'AC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c3');
new SgInDiv(points, lines, 90, 'ACC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c4');
new SgInDiv(points, lines, 90, 'ACCC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c5');
new SgInDiv(points, lines, 90, 'ACCCC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c6');
new SgInDiv(points, lines, 90, 'ABC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c7');
new SgInDiv(points, lines, 90, 'ABBC',  iterations, count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,'c8');*/