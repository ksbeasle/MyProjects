/*
Return true if the string in the first element of the array contains all of the letters
 of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because
 all of the letters in the second string are present in the first, ignoring case.

 Since I am only taking two words at a time I make both lowercase for easier comparison
*/

let count = 0;
var word1 = arr[0].toLowerCase()
var word2 = arr[1].toLowerCase()
for(let i = 0; i < word2.length; i++){
    /*with the use of indexOf() it will return the index so in this case 
    if we get -1 that means that we werent able to find the same letter so we return false
    otherwise return true
    */
  if(word1.indexOf(word2[i]) < 0){
    return false
  }
}
return true