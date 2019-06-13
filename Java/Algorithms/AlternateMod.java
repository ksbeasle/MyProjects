import java.util.Scanner;
public class AlternateMod {


    /*
    Interview question: What if '%' did not exist, write a function on how you
    would achieve a mod.
    */


    static  int mod(int divisor, int dividend){
        int quotient = 0;
        int nDividend=0;
        int remainder = 0;
        do{
            quotient = dividend / divisor;
            nDividend = quotient * divisor;
            remainder = dividend - nDividend;
            System.out.println("Remainder: " + remainder);
        }
        while(divisor < remainder);  
        
        return remainder;
    }


    



    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a number to be the Divisor: ");
        int divisor = scan.nextInt();
        System.out.println("Enter a number to be the Dividend: ");
        int dividend = scan.nextInt();
        mod(divisor,dividend);

        /*
        if(mod(divisor, dividend) == (dividend%divisor)){
            System.out.println("Correct");
        }else{
            System.out.println("Incorrect");
        }
        */
    }
}

