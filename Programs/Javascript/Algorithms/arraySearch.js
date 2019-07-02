const arr = ["print", "press", "printing press", "benchpress", "Hello", "World"]

/* Search through the array for the word "press" and output it into another array */
const isItThere = (arr) => {
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        var word = arr[i]
        var search = word.search("press")
        if(search != -1){
            newArr.push(word)
        }
    }
    return newArr
}

console.log(isItThere(arr))
