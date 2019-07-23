/* truncate the string and add "..." after slice method, if the num is greater than
or equal to the string length then we will just return the entire string without the "..." */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    let length = str.length
    let truncStr = str.slice(0, num)
    if(num >= length){
    return str
    }else{
      truncStr = truncStr += "..."
    }
    return truncStr;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));