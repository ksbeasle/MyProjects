function fearNotLetter(str) {
    /* string of the whole alphabet */
    let abc = "abcdefghijklmnopqrstuvwxyz"
    abc = abc.split("")
    str = str.split("")
    /* set the first letter to whatever the letter in the str that was passed in, we do this becuase we dont know 
    what letter we will start with, by default it would start at 'a' but what if we start at 's'? thats why I did this.
     */
    let firstLetter = str[0]
    let start = abc.indexOf(firstLetter)
  /* instead of starting at index 0 we will start at whatever index the first letter of the str that was passed in starts at */
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
  
  