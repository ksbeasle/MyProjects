/* 
Loop throgh the array and check if the number at that index matches the function 
that is passed in. if it matches return that number, if no match return undefined 
*/

function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i <= arr.length; i++){
      if(func(arr[i]) == true){
        return arr[i]
      }
    }
    return undefined
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);