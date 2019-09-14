/*
Return true if the string in the first element of the array contains all of the letters
 of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because
 all of the letters in the second string are present in the first, ignoring case.

 Since I am only taking two words at a time I make both lowercase for easier comparison
*/
const mutate = (word1, word2) =>{
//first grab the first element in both arrays.
//second, make the entire string lowercase
//third, split it into individual letters (array)
//fourth, sort it
//fifth, join it back into a string then compare
let w1 = word1[0].toLowerCase().split("").sort().join("")
let w2 = word2[0].toLowerCase().split("").sort().join("")
return (w1 == w2) ? true : false
}

console.log(mutate(['hello'], ['Hello']))