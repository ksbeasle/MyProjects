
/* 
From numbers 1-100, numbers that are multiples of 3 and 5 print fizzbuzz
multiples of 3 print fizz
multiples of 5 print buzz
multiple of neither print the value
*/
for(let i = 1; i <= 100; i++){
    //I check for multiples of 3 and 5 first
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}