/* In this kata you are required to, given a string, replace every letter with its position in the alphabet. */

function alphabetPosition(text) {
    let arr = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let alphPos = []
    text = text.split("")
    for(let i = 0; i < text.length; i++){
      let tmp = text[i].toLowerCase()
      for(let j = 0; j < arr.length; j++){
        if(tmp == arr[j]){
          alphPos.push(j)
        }
      }
    }
    alphPos = alphPos.join(" ")
    //console.log(alphPos)
    return alphPos
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11