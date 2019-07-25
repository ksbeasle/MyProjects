/* 
With the slice method we can take the length of the string in this case it will be 7
and then we subtract that from the target length which in this case is 1.
So 7 - 1 = 6 so we start slicing at index 6 which will leave "n" and will return true
*/

function confirmEnding(str, target) {
    let test = str.slice(str.length - target.length)
    console.log(test)
    if(test == target){
      return true
    }else{
      return false
    }
  }
  
  console.log(confirmEnding("Bastian", "n"));