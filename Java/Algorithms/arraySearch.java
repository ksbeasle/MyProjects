import java.util.Arrays;


public class arraySearch {

	public static void main(String args[]) {
		String word = "press";
	
		String[] arr = new String[6];
		arr[0] = "press";
		arr[1] = "benchpress";
		arr[2] = "printingpress";
		arr[3] = "dog";
		arr[4] = "pressss";
		arr[5] = "cat";
		
		wordSearch(arr, word);
		
		
	}
	
	
	public static void wordSearch (String arr[], String word) {
		System.out.println("The word we are searching for is: " + word);
		
		for(int i = 0; i < arr.length; i++) {
			if(arr[i].contains(word)) {
				System.out.println(arr[i]);
			}
		}
		
	}
	
	
}
