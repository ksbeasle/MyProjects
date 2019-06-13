/*
 * Animals is the parent class
 */
public class Animals{
	
	private String name = "Animal";
	
	public String favFood = "Food";
	
	/*
	 * Protected will allow sub classes that are within the same package
	 * final will keep the subclass from changing the method
	 */
	protected final void changeName(String newName) {
		this.name = newName;
	}
	
	protected final String getName() {
		return this.name;
	}
	
	public void eat() {
		System.out.println("Yum " + favFood);
	}
	
	public void walkAround() {
		System.out.println(this.name + " walks around.");
	}
	
	public Animals() { }
	
	public Animals(String name, String favFood) {
		this.changeName(name);
		this.favFood = favFood;
	}
	
	
	
}
