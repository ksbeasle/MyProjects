
public class Driver {
	
	public static void main (String args[]) {
		
		Animals genericAnimal = new Animals();
		
		System.out.println(genericAnimal.getName());
		System.out.println(genericAnimal.favFood);
		genericAnimal.eat();
		genericAnimal.walkAround();
		System.out.println();
		System.out.println();
		
		
		
		Dog brownie = new Dog("Brownie", "chicken", "doll");
		
		System.out.println(brownie.favFood);
		System.out.println(brownie.favToy);
		System.out.println(brownie.getName());
		brownie.walkAround();
		//System.out.println("HERE");
		brownie.eat();
		System.out.println();
		System.out.println();
		brownie.playWith();
		brownie.changeName("The Brown");
		System.out.println(brownie.getName());
		
		Animals laya = new Dog("Laya", "cheese", "ball");
		
		randomAnimal(laya);
		
	}
	
	public static void randomAnimal(Animals random) {
		System.out.println(random.favFood);
		System.out.println(random.getName());
		random.eat();
	}

}
