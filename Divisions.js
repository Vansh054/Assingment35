class Division
{
    constructor(x,y,w,h){
        var options = {
            isStatic:true,
            restitution:0.1
        }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.width = w
    this.height = h
    World.add(world,this.body)
    }
    display(){
        var posi = this.body.position
        push();
        rectMode(CENTER)
        fill("white")
        stroke("white")
        rect(posi.x,posi.y,this.width,this.height)
        pop();
    }
  
}

