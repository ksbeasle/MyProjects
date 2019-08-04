

function repeatStringNumTimes(str, num) {
    let repeatStr = ""
    if(num == 0){
      return str
    }
    /* loop and concat the same str onto intself until we reach the num */
    for(let i = 0; i < num; i++){
      repeatStr += str
    }
    return repeatStr
    
  }
  
  repeatStringNumTimes("abc", 3);