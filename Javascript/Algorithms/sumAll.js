function sumAll(arr) {
    arr.sort((a,b) => {return (a-b)})
    let start = arr[0]
    let end = arr[1]
    let sum = 0
  
  do{
    sum = sum+=start
    start++
  }while(start <= end);
    return sum
      
    
  }
  
  console.log(sumAll([4, 1]));