function multiplyAll(arr) {
    //we set product to 1 because if its 0 we will skip the first value and the answer will be wrong
    var product = 1;
    /*
    First we loop through the outter array
    then we create another for loop for the inner array (with the two elements)
    for example we will start with index 0 which is the inner array [1,2] so that is our arr[i],
    then we will use var j to loop through that array starting at 0 and looping until we reach less than
    the length of arr[i] while also multiplying the values we iterate over.
    */
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    
    return product;
  }
  
  // Modify values below to test your code
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
  //console.log(1*2*3*4*5*6*7)