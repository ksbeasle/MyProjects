function addTogether() {

    let sum = 0
    /* loop through the arguments */
    for(let i = 0; i < arguments.length; i++){
    /* save the type */
      let type = typeof arguments[i]
      /* check if the type is a number if it is we add it if not we return undefined */
      if(type === 'number'){
        sum = sum + arguments[i]
      }else{ 
    console.log(undefined) 
      return undefined 
    }
    }
    
    console.log(sum)
    return sum
    
  }
  
  addTogether(2,3);
  addTogether("http://bit.ly/IqT6zt")
  addTogether(2, "3")
  