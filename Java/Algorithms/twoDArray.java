
public class twoDArray {
public static void main(String args[]) {
	
	int[][] arr = new int[3][2];

	arr[0][0] = 1;
	arr[0][1] = 2;
	
	arr[1][0] = 3;
	arr[1][1] = 4;
	
	arr[2][0] = 5;
	arr[2][1] = 6;
	
	/*
	 * [[1,2],[3,4],[5,6,]]
	 * 
	*/
	
	int product = 1;
	
	for(int i = 0; i < arr.length; i++) {
		for(int j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	//int test = 1*2*3*4*5*6;
	//System.out.println(test);
	System.out.println(product);
	

}

}
