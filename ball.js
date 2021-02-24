class Ball
{
constructor(x,y,r)
{
    var boxFeatures = {
        //isStatic: true,
        friction:2
      }
      this.body=Bodies.circle(x,y,r,boxFeatures);
      World.add(myWorld,this.body)
      this.r=r
      
      
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("pink")
imageMode(CENTER)
image(paperImage,0,0,50,50)
pop()
}
}