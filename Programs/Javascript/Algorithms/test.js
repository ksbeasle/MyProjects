const test = ["test", "press", "test1", "another press", "third", "press"]


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

console.log(isItThere(test))
