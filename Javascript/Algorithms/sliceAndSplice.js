/* 
copy the first array into the second array into index 'n', make sure
to keep arr1 and arr2 the same
 */

function frankenSplice(arr1, arr2, n) {
    let newArr2 = arr2.slice(0, arr2.length) 
    //console.log(newArr2)
   for(let i = arr1.length - 1; i >= 0; i--){
     newArr2.splice(n, 0, arr1[i])
   }
   return newArr2
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));