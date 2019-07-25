/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(str, before, after) {
    var regex = /^[A-Z]/g
    
    if(regex.test(before) == true){
      var capitalizeMe = after[0].toUpperCase()
      after = after.split("")
      after.shift()
      after.unshift(capitalizeMe)
      var after = after.join("")
    }
    
      str = str.split(" ")
      for(let i = 0; i < str.length; i++){
        if(str[i] === before){
          str.splice(i, 1, after)
        }
      }
      var str = str.join(" ")
      return str;
    }
    
    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
    console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
    // should return "He is Sitting on the couch".