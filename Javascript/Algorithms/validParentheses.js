function validParentheses(parens){
    /* Split into separate elements */
    parens = parens.split("")
    /* Set count for left parenthesis and right parenthesis */
    let lp = 0
    let rp = 0

    /* We check first to see if we start with an open parenthesis or not
       and if the last element is open
       if either of these cases are true we will return false
    */
    if(parens[0] == ")"){
      return false
    }else if(parens[parens.length-1] == "("){
      return false
    }

    /* loop through the split elements and count the amount of
       left/right parenthesis
     */
    for(let i = 0; i < parens.length; i++){
      if(parens[i] === "("){
        lp++
      }else{
        rp++
      }
    }

    /* if the same amount of lp and rp then we have valid parenthesis */
    if(lp === rp){
      return true
    }else { return false }
  }
  
  console.log(validParentheses("())(")) //false
  console.log(validParentheses("()()()()()()()(())()()()()")) //true
  console.log(validParentheses("(()()))(")) //false
  console.log(validParentheses(")(()))")) //false
  //console.log(validParentheses("(())()()))((()")) 
  