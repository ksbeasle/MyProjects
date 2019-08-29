/* 
Return the lowest index at which a value (second argument) should be inserted into an array 
(first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 
(index 0), but less than 2 (index 1).
*/

function getIndexToIns(arr, num) {
    //first we sort the array ascending
    arr.sort((a,b) => {return a-b})
    //check if array is undefined/empty
    if(arr === undefined || arr.length == 0){
      return 0
    }
    //loop through the array until we come across an element that is greater than the num passed in
     for(let i = 0; i <= arr.length; i++){
       //return the index
       if(arr[i] >= num){
         return i
       }
     }
     return arr.length
     
    }
    
    console.log(getIndexToIns([40, 60], 50));