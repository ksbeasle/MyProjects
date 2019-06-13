package Shapes;

public class Driver {
	
	public static void main(String args[]) {
		
		Shape s1 = new Circle("Red", 23.0);
		Shape s2 = new Rectangle("Blue", 10.0, 10.0);
		
		System.out.println(s1.shapeDetails());
		System.out.println(s2.shapeDetails());
		
	}

}
