package Shapes;

public class Rectangle extends Shape {
	
	double length;
	double width;

	public Rectangle(String color, double length, double width) {
		super(color);
		// TODO Auto-generated constructor stub
		System.out.println("Rectangle constructor called");
		this.length = length;
		this.width = width;
	}

	
	double area() {
		// TODO Auto-generated method stub
		return length * width;
	}

	@Override
	public String shapeDetails() {
		// TODO Auto-generated method stub
		return "Rectangle color " + super.getColor() + " and area is " + area();  
	}

}
