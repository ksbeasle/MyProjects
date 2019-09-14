/* 
copy the first array into the second array into index 'n', make sure
to keep arr1 and arr2 the same
 */

function frankenSplice(arr1, arr2, n) {
  //make a copy of array 2 since we want to leave array 1 and 2 the same
    let newArr2 = arr2//.slice(0, arr2.length) 
    //console.log(""+newArr2)
    
    //Loop until all elements of arr1 have been added to the copy of array 2
   for(let i = arr1.length - 1; i >= 0; i--){
     //splice at the given index, nothing removed, add the element from arr1[i]
     newArr2.splice(n, 0, arr1[i])
   }
   return newArr2
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));