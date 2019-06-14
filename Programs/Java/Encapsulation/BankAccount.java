
/*
 * Variables are all private in order to achieve true encapsulation and
 * force the user to use getters/setters to access the variables.
 */
public class BankAccount {
	//private variables
	private int id;
	private String name;
	private double balance;
	
	
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
	}
	
	public void setName(String name) {
		this.name = name;
		
	}
	
	public String getName() {
		return name;
	}
	
	public void setBalance(double balance) {
		this.balance = balance;
	}
	
	public double getBalance() {
		return balance;
	}
	
}



