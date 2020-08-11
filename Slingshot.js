class Slingshot {

    constructor(bodyA, pointB) {
        
        var options = {
            bodyA: bodyA, pointB: pointB, stiffness: 0.2, length: 20
        }

        this.sling = Constraint.create(options);

        this.pointB = pointB;

        World.add(world, this.sling);
    }
    
    fly() {

        this.sling.bodyA = null;

    }

    display() {

        push();

        if(this.sling.bodyA) {

        var p = this.sling.bodyA.position;

        strokeWeight(4);
        stroke("black");
        line(p.x,p.y, this.pointB.x, this.pointB.y);
    }

        pop();
    }
}