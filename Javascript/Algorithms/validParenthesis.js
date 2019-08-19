function validParentheses(parens){
    parens = parens.split("")
    let lp = 0
    let rp = 0
  
    if(parens[0] == ")"){
      return false
    }else if(parens[parens.length-1] == "("){
      return false
    }
    for(let i = 0; i < parens.length; i++){
      if(parens[i] === "("){
        lp++
      }else{
        rp++
      }
    }
    if(lp === rp){
      return true
    }else { return false }
  }
  
  console.log(validParentheses("())(")) //false
  console.log(validParentheses("()()()()()()()(())()()()()")) //true
  console.log(validParentheses("(()()))(")) //false
  console.log(validParentheses(")(()))")) //false
  