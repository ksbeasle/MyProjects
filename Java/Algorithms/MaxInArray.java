public class MaxInArray{

    /*
        Find the max number in an array of numbers.
    */


      public static void arrayMax(int arr[]){
        int max = arr[0];
        for(int i = 0; i < arr.length; i++){
           if(max < arr[i]){
               max = arr[i];
           }    
        }
        System.out.println(max);
    }
    

    public static void main(String args[]){
        int arr1[] = {1,2,3,99,5,6,7};
        int arr2[] = {4,67,4312,543,6,7,8};
        int arr3[] = {0,0,0,0,0,0,0};
        int arr4[] = {-2,-2,-2,-2,-1};

        arrayMax(arr1);
        arrayMax(arr2);
        arrayMax(arr3);
        arrayMax(arr4);


    }



}