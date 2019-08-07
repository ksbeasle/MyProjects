/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/


function descendingOrder(n){
    console.log(n)
    let str = n.toString()
    let sorted = str.split("")
    sorted.sort((a,b) => {return b-a})
    let x = sorted.join("")
    let num = parseInt(x)
    return num
   }

descendingOrder(21445) //54421
descendingOrder(145263) //654321
descendingOrder(1254859723) //9875543221