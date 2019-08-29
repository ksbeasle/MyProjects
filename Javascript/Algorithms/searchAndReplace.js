/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(str, before, after) {
    var regex = /^[A-Z]/g
    //we have to check using the regex above if the first letter of the word we are replacing is capital if it is we will run the block of code
    if(regex.test(before) == true){
      //capitalize the first letter
      var capitalizeMe = after[0].toUpperCase()
      //split the word and shift the first letter off
      after = after.split("")
      after.shift()
      //unshift the capitalized letter onto the word and join it back together into a complete word
      after.unshift(capitalizeMe)
      var after = after.join("")
    }
    
      str = str.split(" ")
      for(let i = 0; i < str.length; i++){
        if(str[i] === before){
          //if we find the word we are looking for then we will remove it and replace it with the other word
          str.splice(i, 1, after)
        }
      }
      var str = str.join(" ")
      return str;
    }
    
    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
    console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
    // should return "He is Sitting on the couch".