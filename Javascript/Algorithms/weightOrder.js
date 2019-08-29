

  
  


function orderWeight(str) {
  
    let arr = []
    let newOrder = []
    str = str.split(" ")
  
      do{
  
      let tmp = str[0]   
      let num = 0
  
      for(let i = 0; i < tmp.length; i++){
        let p = parseInt(tmp[i])
        num += p
      }
      arr.push([tmp, num])
      str.shift()
    }while(str.length != 0)
    
  
    arr.sort( (a,b) => {
      let arg1 = a[1]
      let arg2 = b[1]
      if (arg1 < arg2) {
          return -1;
      }
      else if (arg1 > arg2) {
          return 1;
      }
      return 0;
    })
  
  
  for(i in arr){
    newOrder.push(arr[i][0])
  }
  newOrder = newOrder.join(" ")
  
  return newOrder
  
  }
  
  
  
  
  orderWeight("103 123 4444 99 2000") // "2000 103 123 4444 99"
                                      //    2   4   6   16   18