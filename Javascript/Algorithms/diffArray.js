
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.


First I created a new array that would hold the items found in one array but not the other array

I then would loop through the first array, and use the indexOf() function which will return -1 if that value is not present at index
if that is the case then I push that value onto the new array, I do the same thing for the second array

*/

function diffArray(arr1, arr2) {
    var newArr = [];
    //loop through first array
    for(let i = 0; i < arr1.length; i++){
        //check if the current arr1 value is inside arr2
      if(arr2.indexOf(arr1[i]) == -1){
        newArr.push(arr1[i])
      }
    }
  
    for(let i = 0; i < arr2.length; i++){
      if(arr1.indexOf(arr2[i]) == -1){
        newArr.push(arr2[i])
      }
    }
    
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
  