class Chain{
    constructor(bodyA, pt){
        var options = {
            bodyA: bodyA,
            pointB: pt,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB=pt;
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}