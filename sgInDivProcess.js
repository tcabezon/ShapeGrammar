import SG from "./sgProcess.js" 



export default class SgInDiv{
    
    constructor(points, lines, angle, pattern, iterations,count,frameChangeRate,canvasWidth,canvasHeight,backgroundColor,div){

        let sg; //we will initialize it later
        var fontRegular;
        var fontBold;
        new p5(function(p5){

            p5.preload=function() {
                console.log('fonts loaded')
                fontRegular = p5.loadFont('fonts/Inconsolata.otf');
                fontBold = p5.loadFont('fonts/Montserrat-Bold.ttf');
            }

            p5.setup=function(){
                
                p5.frameRate(0.5);
                p5.createCanvas(canvasWidth,canvasHeight);
                sg = new SG(points, lines, angle, pattern, iterations,count,canvasWidth);
    
            }

            p5.draw=function(){
                
                p5.background('white');
                p5.noStroke()
                p5.fill(0);
                p5.textSize(4);
                p5.textFont(fontRegular);
                //console.log(pattern)
                p5.text('Pattern '+pattern+' \nnumIterations '+iterations+'\nangle '+angle, 20, 20);
                //p5.textFont(fontBold);
                p5.frameRate(frameChangeRateSlider)
                sg.showPointsAndLines(p5);
                //console.log('iterations',sg.iterations)
                if(sg.count<sg.iterations){
                    if(sg.count<=5){
                        sg.rotatePointsAndAddLine(p5);
                    }
                    else{
                        sg.rotatePointsAndAddLine(p5); 
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                        sg.rotatePointsAndAddLine(p5);
                    }
                  
                }
            }

        },div)

    }
}