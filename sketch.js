var box1,box2,box3
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100, 90, 60, 40, 1)
  box2=new Box(70, 60, 30, 60, 2)
  box3=new Box(40, 300, 40, 200, 3)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box2.show()
  box2.move()
  box3.show()
  box3.move()
}

