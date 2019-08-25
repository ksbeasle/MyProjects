package uniteUnique;

import java.util.ArrayList;

public class uniteUnique {

	
	public static ArrayList<Integer> uniteUniqueNum(int arr[][]){
		/* Array list to hold our unique values */
		ArrayList<Integer> al = new ArrayList<Integer>();
		
		//loop through the nested array and if the array list does not contain the value we are currently at we will add it
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[i].length; j++){
				if(!al.contains(arr[i][j])){
					al.add(arr[i][j]);
				}
			}
		}
		
		return al;
	}
	
	
	
	public static void main(String[] args){
		
		int arr[][] = {{1,3,2}, {5,2,1,4}, {2,1}};
		
		//1,3,2,5,4
		System.out.println(uniteUniqueNum(arr));
		
		
		
		
		}
		
		
		
	
	
}
