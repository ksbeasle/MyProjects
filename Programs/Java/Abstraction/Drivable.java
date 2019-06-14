
/*
 * We can achieve 100% abstraction by using an interface
 * Provides methods that MUST be implemented by subclasses using this class
 */
public interface Drivable {
	
	int getWheel();
	
	void setWheels(int numWheels);
	
	double getSpeed();
	
	void setSpeed(double speed);

}
