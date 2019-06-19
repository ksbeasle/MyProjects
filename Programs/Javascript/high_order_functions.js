const games = [
{title: "Assassins Creed Oddyssey", genre: "RPG", rating: 10, platform: "X1" },
{title: "NBA 2k19", genre: "Sports", rating: 1, platform: "X1" },
{title: "Borderlands 2", genre: "Shooter", rating: 10, platform: "X1" },
{title: "Borderlands", genre: "Shooter", rating: 10, platform: "X1" },
{title: "Enter the Gungeon", genre: "Arcade shooter", rating: 8, platform: "X1" },
{title: "Divinity Original Sin 2", genre: "RPG", rating: 10, platform: "X1" },
{title: "Forza 7", genre: "Racing", rating: 9, platform: "X1" }
]

const numbers = [32, 43, 5345, 34, 2, 65, 86, 9, 679, 90,1 , 4, 55, 7, 8]


/*===================================ForEach===================================================*/
/*  */


games.forEach(function(game, index, games) {
    console.log(game.title)
})

/*===================================Filter===================================================*/

/* filter with ES6 arrow function */
const bigNumbers = numbers.filter(num => num > 78)
console.log(bigNumbers)

/* filter games for shooter games only  */
const shootersOnly = games.filter(game => game.genre === "Shooter")
console.log(shootersOnly)

/* filter games for RPG games only  */
const rpgOnly = games.filter(game => game.genre === "RPG")
console.log(rpgOnly)

/* filter games for low rated games only  */
const lowRated = games.filter(game => game.rating < 5)
console.log(lowRated)

/*===================================Map===================================================*/

/* Return a new array of game names and their genre and using ES6 template string */
const gameNames = games.map(function(game){
    return `${game.title} | Genre: ${game.genre}`
})
console.log(gameNames)

/* Take the numbers array and multiply each number by 2 and using ES6 arrow function */
const numbersTimesTwo = numbers.map(number => number * 2)
console.log(numbersTimesTwo)

/*===================================Sort===================================================*/

/* '?' is if that conditional is true, ':' is else that condition is false */
const sortedGames = games.sort((a,b) => (a.rating > b.rating ? 1 : -1))
console.log(sortedGames)

/*===================================Reduce===================================================*/

/* Add the numbers in the numbers sum, using the ES6 arrow function */
const numSum = numbers.reduce((sum, num) => sum + num, 0)
console.log(numSum)






/*===================================AllFour===================================================*/
/* take the numbers array and map, (raise to the power of 2), 
filter, (remove any numbers below 1000), 
sort(ascending order), 
reduce (add them together) */

const combined = numbers
.map(number => number ** 2)
.filter(number => number < 1000)
.sort((a, b) => a - b)
.reduce((a,b) => a + b)

console.log(combined)