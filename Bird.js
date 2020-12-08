class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);//It will transfer all the values from child constructor to parent constructor
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}