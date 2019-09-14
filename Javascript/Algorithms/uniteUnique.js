function uniteUnique(arr) {
    let newArr = []
    for(let i = 1; i < arguments.length; i++){
     newArr.push(arguments[i]) 
    }
    for(let i = 0; i < newArr.length; i++){
      for(let j = 0; j < newArr[i].length; j++){
        if(arr.indexOf(newArr[i][j]) == -1){
          //console.log(arr.indexOf(newArr[i][j]))
          arr.push(newArr[i][j])
        }
      }
    }
    console.log(arr)
    return arr
  
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);