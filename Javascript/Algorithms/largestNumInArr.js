/* The array is fixed at [4][4] for simplicity */

function largestOfFour(arr) {
  
    let array = [];
    let bigNum1 = arr[0][0]
    let bigNum2 = arr[1][0]
    let bigNum3 = arr[2][0]
    let bigNum4 = arr[3][0]
    
    for(let i = 0; i <= arr[0].length - 1; i++){
      if(bigNum1 < arr[0][i]){
        bigNum1 = arr[0][i]
      }
      
    }array.push(bigNum1)
    
    for(let i = 0; i <= arr[1].length - 1; i++){
      if(bigNum2 < arr[1][i]){
        bigNum2 = arr[1][i]
      }
      
    }array.push(bigNum2)
    
    for(let i = 0; i <= arr[2].length - 1; i++){
      if(bigNum3 < arr[2][i]){
        bigNum3 = arr[2][i]
      }
      
    }array.push(bigNum3)
    
    for(let i = 0; i <= arr[3].length - 1; i++){
      if(bigNum4 < arr[3][i]){
        bigNum4 = arr[3][i]
      }
      
    }array.push(bigNum4)
      
    
    return array;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));