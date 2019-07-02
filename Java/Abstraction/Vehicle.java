//subclass using the interface drivable and abstract class crashable
public class Vehicle extends Crashable implements Drivable {
	
	double theSpeed = 65.0;
	int numOfWheels = 4;
	int HP = 0;
	
	String carType = "Muscle";
	
	public int getWheel() {
		return numOfWheels;
	}
	
	public void setWheels(int numWheels) {
		this.numOfWheels = numWheels;
	}
	
	public double getSpeed() {
		return theSpeed;
	}
	
	public void setSpeed(double speed) {
		this.theSpeed = speed;
	}
	
	//constructor
	public Vehicle(int wheels, double speed) {
		this.numOfWheels = wheels;
		this.theSpeed = speed;
	}
	
	
	/*
	 * These methods are from the crashable abstract java class
	 * We remove the abstract keyword from them and then implement them here
	 */
	public void setHP(int HP) {
		this.HP = HP;
	}
	
	public  int getHP(){
		return HP;
	}
	
	
	
	
}
