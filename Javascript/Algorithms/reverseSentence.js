function reverseWords(str) {
  //split the str to get an array
    str = str.split(" ")
    //create an array for the reversed words
    let revWord = []
    //loop through the array and loop through the letters as well
    for(let i = 0; i < str.length; i++){
      for(let j = str[i].length - 1; j >= 0; j--){
        revWord.push(str[i][j])
      }
      //push the words onto the reverse array
      revWord.push(" ")
    }
    //join the array so we can get a string again
    revWord = revWord.join("")
    
    let revStr = revWord.slice(0,revWord.length-1)
   
    return revStr
  }
  
  
  reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god")
  reverseWords("a b c d")
  reverseWords("elbuod  decaps  sdrow'")