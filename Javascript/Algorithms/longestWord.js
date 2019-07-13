function findLongestWordLength(str) {
    var newStr = str.split(" ")
    var longest = newStr[0]
    for(let i = 0; i < newStr.length; i++){
      if(newStr[i].length > longest.length){
        longest = newStr[i]
      }
    }
    return longest + " with length: " + longest.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));