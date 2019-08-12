var moveZeros = function (arr) {
  
    let i = 0
    do{
      if(arr.indexOf(0) > -1){
        arr.splice(arr.indexOf(0), 1)
        arr.push(0)
      }
      i++
    }while(i < arr.length)
    return arr
  }
  
  //moveZeros([1,2,0,1,0,1,0,3,0,1]) //1,2,1,1,3,1
  moveZeros([ 'a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ])