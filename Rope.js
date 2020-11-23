class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(2);
        var P1X = posA.x;
        var P1Y = posA.y;
        var P2X = posB.x + this.offsetX;
        var P2Y = posB.y + this.offsetY;

       
        stroke("black");
        line(P1X,P1Y,P2X,P2Y);
    }
};