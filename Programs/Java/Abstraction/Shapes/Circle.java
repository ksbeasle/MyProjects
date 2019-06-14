package Shapes;

public class Circle extends Shape {
	
	//for circles we need a radius
	double radius;

	/*
	 * We make a Circle constructor, and then we pass in
	 * color and radius. The color is from the abstract shape class so
	 * we invoke use the super keyword
	 */
	public Circle(String color, double radius) {
		super(color);
		// TODO Auto-generated constructor stub
		System.out.println("Circle constuctor called");
		this.radius = radius;
	}
	/*
	 * we implement the abstract area() method from the Shape class
	 */
	@Override
	double area() {
		// TODO Auto-generated method stub
		return Math.PI * Math.pow(radius, 2);
		
	}
	/*
	 * We override the toString() method from the Shape class
	 */
	@Override
	public String shapeDetails() {
		return "Circle color is " + super.color + " and area is : "+ area();
	}
	

}
