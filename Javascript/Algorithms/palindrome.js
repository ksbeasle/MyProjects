function palindrome(str) {
    let regex = /[^A-Za-z0-9]/g
    let revStr = ""
    str = str.replace(regex, '')
    str = str.toLowerCase()
  
    for(let i = str.length-1; i >= 0; i--){
      revStr += str[i]
    }
     if(revStr === str){
       return true
     }
     return false
  }
  
  
  
  palindrome("eYe**");
  palindrome(" race car")
  palindrome("0_0 (: /-\ :) 0-0")
  palindrome("My age is 0, 0 si ega ym.")
  palindrome("five|\_/|four")
  palindrome("A man, a plan, a canal. Panama")