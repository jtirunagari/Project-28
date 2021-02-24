class Connection
{
    constructor(a,b)
{
    var features= {
        bodyA: a,
        pointB: b,
        stiffness: 0.04,
        length:20
    }
    this.connection=Constraint.create(features)
    World.add(myWorld,this.connection)
    console.log(this.connection.pointB)
}
display(){
    if(this.connection.bodyA!= null){
line(this.connection.bodyA.position.x,this.connection.bodyA.position.y,this.connection.pointB.x,this.connection.pointB.y)
    }
}
breaktheConnection(){
    this.connection.bodyA=null
}
}