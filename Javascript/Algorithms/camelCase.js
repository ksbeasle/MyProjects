function toCamelCase(str){
    //regex to search for dash and underscore
    let regex = /[-_]/g
    //replace the found - and _ with a space
    let res = str.replace(regex, ' ')
    //split the result into an array
    res = res.split(" ")
    for(let i = 1; i < res.length; i++){
        //take the word, grab the first letter charAt(0) and capitalize it, then concat it onto the word sliced at the first letter
       res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1)
    }
    //join the words into a single camelCased word
    res = res.join("")
    console.log(res)
    return res
  }
  
  toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
  
  toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"