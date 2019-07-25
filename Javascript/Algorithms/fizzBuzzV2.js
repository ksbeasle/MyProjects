
/* 
From numbers 1-100, numbers that are multiples of 3 and 5 print fizzbuzz
multiples of 3 print fizz
multiples of 5 print buzz
multiple of neither print the value
*/


/* Alternative to fizzbuzz to reduce the amount of '%' used */

for(let i = 1; i <= 100; i++){
    let fizz = i % 3;
    let buzz = i % 5;
    
    if(fizz == 0 && buzz == 0){
        console.log("FizzBuzz")
    }else if(fizz == 0){
        console.log("Fizz")
    }else if(buzz == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}