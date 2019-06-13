package Shapes;

abstract class Shape {
	
	String color;
	
	//These are abstract methods
	abstract double area();
	public abstract String shapeDetails();
	
	//constructor
	public Shape(String color){
		System.out.println("Shape constructor called.");
		this.color = color;
	}
	
	//concrete method
	public String getColor() {
		return color;
	}
	
	

}
