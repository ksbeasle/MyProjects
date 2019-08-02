function fearNotLetter(str) {
    let abc = "abcdefghijklmnopqrstuvwxyz"
    abc = abc.split("")
    str = str.split("")
    let firstLetter = str[0]
    let start = abc.indexOf(firstLetter)
  
    for(let i = start; i < abc.length; i++){
      if(str.indexOf(abc[i]) == -1){
        return abc[i]
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"))
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
  
  console.log(fearNotLetter("stvwx"))
  
  