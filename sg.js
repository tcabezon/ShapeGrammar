export default class SG{

    constructor(points, lines, angle, pattern, iterations,count,canvasWidth){
        //copy the points list

        let scale=parseFloat(400/canvasWidth)
        //console.log('canvasWidth',canvasWidth,'scale',scale)
        let pointsCopy=[]
        for (let i = 0; i < points.length; i++) {
            
            pointsCopy[i] = [points[i][0]/scale,points[i][1]/scale];
            //console.log('pointscopy i 0',pointsCopy[i][0])
          }
        //console.log('pointscopy',pointsCopy)
        //console.log('points',points)
        //copy the lines list
        let linesCopy=[]
        for (let i = 0; i < lines.length; i++) {
            linesCopy[i] = lines[i];
          }
        this.initialPoints=points
        this.points=pointsCopy
        this.lines=linesCopy
        this.angle=angle * (Math.PI/180)
        this.pattern=pattern
        this.iterations=iterations
        this.count=count
    }

    rotatePointsAngle(p5,p1,p2){
        //calculate midpoint coordinates and rotate the points 90 degrees
        
        
        let v12=[p2[0]-p1[0],p2[1]-p1[1]]
        let mp = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
        let d = p5.dist(p2[0], p2[1], p1[0], p1[1]);
        
        let p1Rotated=[mp[0]+v12[0]/2*Math.cos(this.angle)-v12[1]/2*Math.sin(this.angle),mp[1]+v12[0]/2*Math.sin(this.angle)+v12[1]/2*Math.cos(this.angle)]
        let p2Rotated=[mp[0]-v12[0]/2*Math.cos(this.angle)+v12[1]/2*Math.sin(this.angle),mp[1]-v12[0]/2*Math.sin(this.angle)-v12[1]/2*Math.cos(this.angle)]
        
        

        return [p1Rotated,p2Rotated]
    }
    
    rotatePoints(p5,p1,p2){
        //calculate midpoint coordinates and rotate the points 90 degrees
        let mp = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];

        
        
        let p1Rotated=[mp[0] + 1 / 2 * (p2[1] - p1[1]) , mp[1] - 1 / 2 * (p2[0] - p1[0])]
        let p2Rotated=[mp[0] - 1 / 2 * (p2[1] - p1[1]) , mp[1] + 1 / 2 * (p2[0] - p1[0])]
        //let d = p5.dist(p2[0], p2[1], p1[0], p1[1]);
        

        return [p1Rotated,p2Rotated]
    }
    rotatePointsAndAddLine(p5){
        if (this.pattern[this.count%this.pattern.length]== "A"){
            let p1= this.points[0]
            let p2=this.points[1]
            //console.log('rotation A')
            //create the line
            this.lines.push([p1[0],p1[1],p2[0],p2[1]])
            //rotate the points
            let rotated=this.rotatePointsAngle(p5,p1,p2)
            this.points[0]=rotated[0]
            this.points[1]=rotated[1]
            //console.log('rotation A point 1',p1, '\npoint 2',p2, '\nrotated',rotated[0],rotated[1])
           
        }
        if (this.pattern[this.count%this.pattern.length]== "B"){
            let p1= this.points[1]
            let p2=this.points[2]
            //console.log('rotation B')
            //create the line
            this.lines.push([p1[0],p1[1],p2[0],p2[1]])
            //rotate the points
            let rotated=this.rotatePointsAngle(p5,p1,p2)
            this.points[1]=rotated[0]
            this.points[2]=rotated[1]
        }
        if (this.pattern[this.count%this.pattern.length]== "C"){
            let p1= this.points[0]
            let p2=this.points[2]
            //console.log('rotation C')
            //create the line
            this.lines.push([p1[0],p1[1],p2[0],p2[1]])
            //rotate the points
            let rotated=this.rotatePointsAngle(p5,p1,p2)
            this.points[0]=rotated[0]
            this.points[2]=rotated[1]
        }
        else{
             //for random
        }
        this.count+=1
    }

    showPointsAndLines(p5,backgroundColorOn=true){
        
        p5.strokeWeight(2);
        for (let i = 0; i < this.lines.length; i++) {
            p5.stroke(80)
            p5.line(this.lines[i][0], this.lines[i][1], this.lines[i][2], this.lines[i][3]);
        }
        
        for (let i = 0; i < this.points.length; i++) {
            p5.stroke('black')
            p5.point(this.points[i][0],this.points[i][1]);
            p5.noStroke()
            p5.text(i, this.points[i][0]+5,this.points[i][1]+1);
            
        }
        for (let i = 0; i < this.initialPoints.length; i++) {
            p5.stroke('blue')
            p5.point(this.initialPoints[i][0],this.initialPoints[i][1]);
        }
    }
}