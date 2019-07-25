/* The array is fixed at [4][4] for simplicity */

function largestOfFour(arr) {
  //new empty array to hold all large values from each set
    let array = [];
    
    /* grab the first value of each set */
    let bigNum1 = arr[0][0]
    let bigNum2 = arr[1][0]
    let bigNum3 = arr[2][0]
    let bigNum4 = arr[3][0]
    
    /* we loop through the first set [0][0] */
    for(let i = 0; i <= arr[0].length - 1; i++){
        /* compare bigNum1 to the value at the current index
            if its larger we set bigNum1 to that new value
        */
      if(bigNum1 < arr[0][i]){
        bigNum1 = arr[0][i]
      }
    }
    /* push bigNum1 after looping through the first set */
    array.push(bigNum1)
    

    /* we loop through the second set [1][0] */
    for(let i = 0; i <= arr[1].length - 1; i++){
        /* compare bigNum2 to the value at the current index
            if its larger we set bigNum2 to that new value
        */
      if(bigNum2 < arr[1][i]){
        bigNum2 = arr[1][i]
      }
    }
    /* push bigNum2 after looping through the first set */
    array.push(bigNum2)
    

    /* we loop through the third set [2][0] */
    for(let i = 0; i <= arr[2].length - 1; i++){
        /* compare bigNum3 to the value at the current index
            if its larger we set bigNum3 to that new value
        */
      if(bigNum3 < arr[2][i]){
        bigNum3 = arr[2][i]
      } 
    }
    /* push bigNum3 after looping through the first set */
    array.push(bigNum3)
    

    /* we loop through the fourth set [3][0] */
    for(let i = 0; i <= arr[3].length - 1; i++){
        /* compare bigNum4 to the value at the current index
            if its larger we set bigNum4 to that new value
        */
      if(bigNum4 < arr[3][i]){
        bigNum4 = arr[3][i]
      }
    }
    /* push bigNum4 after looping through the first set */
    array.push(bigNum4)
      
    
    return array;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));