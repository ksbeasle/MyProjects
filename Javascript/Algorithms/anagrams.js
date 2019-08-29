/* given a word and an array of words see if it is an anagram. Anagram is a word that has the same letters as another word */

function anagrams(word, words) {
    let arr = []
    //split word into individual letters
    word = word.split("")
   //sort those individual letters then join them together to make a complete word again
    let x = word.sort().join("")
   
    for(let i = 0; i < words.length; i++){
        //take the current word we looped over and split/sort/join it so we can compare it to our word
      let tmp = words[i].split("").sort().join("")
      //if the next condition is true we will push the original word
      let wordToPush = words[i]
  
      if(x == tmp){
          //push the original word onto the array
        arr.push(wordToPush)
      }
    }
    return arr
  }
  
  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])