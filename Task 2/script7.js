class Circle{
    constructor(radius, color){
      this.radius=radius;
      this.color=color;
    }
    getRadius()
    {
      return this.radius;
    };
    setRadius(newradius)
    {
      this.radius=newradius;
    };
    getColor()
    {
      return this.color;
    };
    setColor(newcolor)
    {
     this.color=newcolor;
    };
    
    getArea()
    {
      return Math.PI * this.radius * this.radius;
    };
    getCircumference()
    {
      return 2 * Math.PI * this.radius;
    };
  }
  let cir=new Circle(1.0, "red");
  console.log("Radius = ", cir.getRadius());
  console.log("Color = ", cir.getColor());
  console.log("The Area is = ", cir.getArea());
  console.log("The Circumference is = ", cir.getCircumference());