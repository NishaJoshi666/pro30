class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("image/sling1.png");
        this.sling2 = loadImage("image/sling2.png");
        this.sling3 = loadImage("image/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    display(){
        image(this.sling1,100,180);
        image(this.sling2,70,180);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#54270F");
            if(pointB.x <220){
                strokeWeight(4);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x-20,pointA.y-5,5,25)   
            }
            else{
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointB.x-20,pointB.y-5,5,25)   
            }
           
        }
    }
    
}