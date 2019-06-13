import java.util.Scanner;

public class TestVehicle {
	//Driver class
	public static void main(String args[]) {
		Scanner scan = new Scanner(System.in);
		
		Vehicle Challenger = new Vehicle(4,65.0);
		
		System.out.println("Car's speed: " + Challenger.getSpeed());
		System.out.println("How many wheels? " + Challenger.getWheel());
		
		
		
		Challenger.setHP(375);
		
		System.out.println("Car Horsepower: " + Challenger.getHP());
		
		
	}

}
