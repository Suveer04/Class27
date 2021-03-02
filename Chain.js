class Chain {
    constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB : bodyB,
 stiffness : 0.4,
 length : 30
}
this.chain = Constraint.create(options);
World.add(world,this.chain);
    }

display(){
    strokeWeight(3);
   line(bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y);
}
}