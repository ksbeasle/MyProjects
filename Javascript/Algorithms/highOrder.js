const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
 /* 
 We use 'filter' to remove negative numbers and the floats.
 We also take the number and 'mod' it against a paresed version of it so and check if it is equal to 0,
 for example, when we reach 5.6 it will look like (5.6 % 5) and this will NOT equal 0 so we will remove it from our new array and continue on
 We will then 'map' the num and raise all those values by a power of 2
 */
  let squaredIntegers = realNumberArray
  .filter((num) => num > 0 && num % parseInt(num) == 0)
  .map((num) => num ** 2)


  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

