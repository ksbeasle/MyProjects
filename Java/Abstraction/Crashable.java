/*
 * Here we have an abstract class with some concrete methods and some without implementation
 */

public abstract class Crashable {
	boolean carDrivable = true;
	
	public void youCrashed() {
		this.carDrivable = false;
	}
	
	public abstract void setHP(int HP);
	
	public abstract int getHP();

}
