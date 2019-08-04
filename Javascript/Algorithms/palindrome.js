function palindrome(str) {
    /* this regular expression is checking that letters from a-z regardless of case and numbers 0-9  */
    let regex = /[^A-Za-z0-9]/g
    /* empty string we will use to reverse and compare */
    let revStr = ""
    /* .replace() is used to replace anything in the str that doesnt match the regex and replace it with an empty '' */
    str = str.replace(regex, '')
    /* lowercase */
    str = str.toLowerCase()
    /* reverse the str */
    for(let i = str.length-1; i >= 0; i--){
      revStr += str[i]
    }
    /* compare */
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
  console.log(palindrome("A man, a plan, a canal. Panama"))