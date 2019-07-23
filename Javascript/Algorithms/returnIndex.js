/* 
Return the lowest index at which a value (second argument) should be inserted into an array 
(first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 
(index 0), but less than 2 (index 1).
*/

function getIndexToIns(arr, num) {

    arr.sort((a,b) => {return a-b})
    if(arr === undefined || arr.length == 0){
      return 0
    }
     for(let i = 0; i <= arr.length; i++){
       if(arr[i] >= num){
         return i
       }
     }
     return arr.length
     
    }
    
    getIndexToIns([40, 60], 50);