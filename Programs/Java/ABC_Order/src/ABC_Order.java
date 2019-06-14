import java.util.Arrays;
import java.util.Scanner;

public class ABC_Order {
	
	public static void main(String args[]) {
		//Scanner scan = new Scanner(System.in);
		
		String abc = "fmalsxfjnalskjfn";
		abc.toLowerCase();
		char temp[] = abc.toCharArray();
		System.out.println(temp);
		Arrays.sort(temp);
		System.out.println(temp);
	}

}
