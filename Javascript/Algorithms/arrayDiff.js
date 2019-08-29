
/*
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
       //grab the element at the current index in the array
       let val = a[i]
       if(b.indexOf(val) == -1){
         newArr.push(a[i])
       }
     }
     return newArr
   }

   console.log(array_diff([1,2,3],[3,2,4])) //should return [1] since 3 and 2 are present in the b array