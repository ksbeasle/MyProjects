/*
 * This is the subclass of the parent class Animals.java
 * In this subclass we will inherit the getName() method, walkAround() method
 * eat() method, and string favFood
 * 
 * We will not inherit the Animals constructor or the private variable string
 * We must invoke the instructor using 'super' and use methods to change/get the name
 */


public class Dog extends Animals {
	
	public String favToy = "Ball";
	
	//exclusive method for Dog
	public void playWith() {
		System.out.println("Yay " + favToy);
	}
	
	//Animals method that Dog inherits, we override it here
	public void walkAround() {
		System.out.print(this.getName() + "runs");
	}
	
	public Dog() { }
	
	//need to invoke Animal instructor and then override with favToy
	//use super
	public Dog(String name, String favFood, String favToy) {
		super(name, favFood);
		this.favToy = favToy;
	}

}
