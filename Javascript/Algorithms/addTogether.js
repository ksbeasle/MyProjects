function addTogether() {
    let arr = []
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
      let type = typeof arguments[i]
      if(type === 'number'){
        sum = sum + arguments[i]
      }else{ console.log(undefined) 
      return undefined }
    }
    
    console.log(sum)
    return sum
    
  }
  
  addTogether(2,3);
  addTogether("http://bit.ly/IqT6zt")
  addTogether(2, "3")
  