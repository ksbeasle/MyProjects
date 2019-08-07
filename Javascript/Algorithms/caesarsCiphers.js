function rot13(str) { // LBH QVQ VG!
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let abcSplit = abc.split("")
    let regex = /[A-Z]/g
    let arr = []
  
    let strSplit = str.split("")
    //var x = str.charCodeAt(1)
    //console.log(x)
  
    for(let i = 0; i < strSplit.length; i++){
  
      
       let x = str.charCodeAt(i)
     
       if(x < 65 || x > 90){
         let z = String.fromCharCode(x)
         arr.push(z)
       }else if(x > 77){
         let y = x - 13
         let z = String.fromCharCode(y)
         arr.push(z)
       }else{
         let y = x + 13
         let z = String.fromCharCode(y)
         arr.push(z)
       }
        
    }
    let newStr = arr.join("")
    console.log(arr)
    console.log(newStr)
  
  
    return newStr;
  }
  
  
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")