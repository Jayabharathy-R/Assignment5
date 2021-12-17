class circle{
    constructor()
    
    {
        this.radius=1;
        this.color="red";
        this.area;
        this.crf;
      
    }
    getradius(){
        console.log(circle.radius);
    }
    setRadius(r){
        this.radius=r;
        console.log("the new radius is " +this.radius);
    }
    getColor(){
        console.log(circle.color);
    }
    setColor(clr){
        this.color=clr;
        console.log("the new color is "+this.color);
    }
    getArea(){
        this.area=3.14*this.radius*this.radius;
        console.log("Area of the circle is " +this.area);
    }
    getCircumference(){
        this.crf=2*3.14*this.radius;
        console.log("Circumference of the circle is " +this.crf);
    }
    
}
var circle1=new circle();
console.log(circle1);
circle1.setColor("blue");
circle1.getArea();
circle1.getCircumference();