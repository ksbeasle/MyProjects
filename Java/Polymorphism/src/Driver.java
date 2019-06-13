
public class Driver  {
	
	public static void main(String args[]) {
		
		
		/*
		 * Basic animal object from the superclass Animal.java
		 */
		Animal animal = new Animal();
		
		
		/*
		 * Dog object from subclass Dog.java
		 */
		Animal dog = new Dog();
		
		
		/*
		 * Pig object from subclass Pig.java
		 */
		Animal pig = new Pig(); 
		
		
		/*
		 * Using the three objects above we will call the animalSound() method
		 * The reason the methods output something different is because
		 * We know they are all animals but when the method is called we know
		 * what type of animal it is so it will call its own method of animalSound()
		 */
		
		animal.animalSound();
		pig.animalSound();
		dog.animalSound();
		
	}

}
