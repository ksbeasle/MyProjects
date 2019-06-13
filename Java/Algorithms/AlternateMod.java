public class AlternateMod {



    public static int mod(int a, int b){
        int mod = a / b;
        int x = mod * b;
        int y = x - b;
        System.out.println(y);
        return y;
    }



    public static void main(String args[]){
        int a = 4;
        int b = 10;
        mod(a,b);
    }
}

/* 
         2r2   
    4 |---
      | 10
         8  
*/      