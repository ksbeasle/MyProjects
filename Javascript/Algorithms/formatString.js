/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/

console.log(names)
if(names.length == 0){
return ""
}
if(names.length == 1){
    return names[0].name
  }
  let str = ""
  let cutHere = names.slice(names.length - 2, names.length)
  let concatMe = cutHere[0].name + " & " + cutHere[1].name
  
  for(let i = 0; i < names.length; i++){
    if(names[i].name != cutHere[0].name && names[i].name != cutHere[1].name){
      str += names[i].name + ", " 
    }
  }
  str = str.concat(concatMe)
  return str