function reverseWords(str) {
    str = str.split(" ")
    let revWord = []
    for(let i = 0; i < str.length; i++){
      for(let j = str[i].length - 1; j >= 0; j--){
        revWord.push(str[i][j])
      }
      revWord.push(" ")
    }
    revWord = revWord.join("")
    let revStr = revWord.slice(0,revWord.length-1)
    return revStr
  }
  
  
  reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god")
  reverseWords("a b c d")
  reverseWords("elbuod  decaps  sdrow'")