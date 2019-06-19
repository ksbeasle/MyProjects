const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            if(!error){
                resolve({ text: "Complete code" })
            }else{
                reject()
            }
            
        }, 2000)
    })
}
/* Need to use '.catch' in order to handle the promise being made above. */
getTodo()
.then(todo => {
    console.log(todo.text)
})
.catch(error => {
    console.log("Error occurred!")
})