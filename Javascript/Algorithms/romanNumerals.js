const roman = (number) => {
let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  let converted = []
  for(let i = 0; i <= numbers.length; i++){
    while (number % numbers[i] < number) {  
      //console.log(number % numbers[i])     
      converted.push(roman[i])
      number = number - numbers[i];
    }
  }
  converted = converted.join("")
  return converted
}

let number = 1994
console.log(roman(number))