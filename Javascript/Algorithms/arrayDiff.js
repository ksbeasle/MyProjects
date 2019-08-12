
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.
*/

function array_diff(a, b) {
    if(a.length == 0){
       return []
     }
     if(b.length == 0){
       return a
     }
     let newArr = []
     for(let i = 0; i < a.length; i++){
       let val = a[i]
       if(b.indexOf(val) == -1){
         newArr.push(a[i])
       }
     }
     return newArr
   }