class Plinko
{
    constructor(x,y){
        var options = {
            isStatic:true
        }
    this.body = Bodies.circle(x,y,10,options)
    this.radius = 10
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        ellipseMode(RADIUS)
        rotate(angle)
        fill("white")
        ellipse(pos.x,pos.y,this.radius)
        pop()
    }
  
}