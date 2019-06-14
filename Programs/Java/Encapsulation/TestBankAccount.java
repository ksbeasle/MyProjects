
public class TestBankAccount {
	
	
	public static void main(String args[]) {
		
		BankAccount ba = new BankAccount();
		
		ba.setName("Kahlil");
		ba.setId(123);
		ba.setBalance(123.99);
		
		
		System.out.println("Account Owner: " + ba.getName());
		System.out.println("Account ID: " + ba.getId());
		System.out.println("Balance: $" + ba.getBalance());
		
		
	}
	

}
