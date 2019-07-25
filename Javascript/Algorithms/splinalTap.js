function spinalCase(str) {
    var regex = /\s+|_+/g
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    str = str.toLowerCase()
    var str = str.replace(regex, "-")
   console.log(str)
   
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("AllThe-small Things")