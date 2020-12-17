class Drop{
    constructor(){
        var options = {
            restitution:1
        }
        this.drop = Bodies.circle(random(0,1200),random(0,400),10,options);
        World.add(world, this.drop);
    }
    display(){
        var pos = this.drop.position;
        ellipseMode(CENTER);
        fill("blue")
        ellipse(pos.x,pos.y,10,10);
        if (pos.y > height) {
            Matter.Body.setPosition(this.drop,{x:random(0,1200),y:random(0,400)});
        }
    }
}
