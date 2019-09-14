/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/


function descendingOrder(n){  
    let x = n.toString().split("").sort().reverse().join("")
    let num = parseInt(x)
    console.log(num)
    return num
   }

descendingOrder(21445) //54421
descendingOrder(145263) //654321
descendingOrder(1254859723) //9875543221