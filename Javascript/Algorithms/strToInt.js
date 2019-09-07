/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    if(parseInt(str)){
      let c = parseInt(str)
      if(c < 0 && c <= -2147483648){
        return -2147483648
      }else if(c > 0 && c >= 2147483648){
        return 2147483647
      }else{
        return c
      }
    }else{
      return 0
    }
  };


  console.log(myAtoi("   -42"))
  console.log(myAtoi("4193 with words"))
  console.log(myAtoi("words and 987"))
  console.log(myAtoi("-91283472332"))