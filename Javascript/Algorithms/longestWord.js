/* 
To find the longest word in a sentence (string) I first split the string up
I then set the first index value as the highest just for comparison purposes
then I loop through the rest of the array comparing that length to the length of the others
if there is a word longer than the current word then I set the longest var to that new value at that current index
*/

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