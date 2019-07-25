const arr = ["print", "press", "printing press", "benchpress", "Hello", "World"]

/* Search through the array for the word "press" and output it into another array 
We will make a new array, then we will create a for loop that will iterate over the array.
Then we will set var word == to what index we are on, and we will use the search function to look for "press"
if a number other than -1 is returned than at that index there is the word "press"
then we push that word onto the new array and return in
*/
const isItThere = (arr) => {
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        //set word to that value at that index of the array
        var word = arr[i]
        //search for the word
        var search = word.search("press")
        //number returned other than -1 is the word we are looking for so we push it onto the new array
        if(search != -1){
            newArr.push(word)
        }
    }
    return newArr
}

console.log(isItThere(arr))
