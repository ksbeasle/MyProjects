const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true
            if(!error){
                resolve({ text: "Complete code" })
            }else{
                reject()
            }
            
        }, 2000)
    })
}

async function fetchTodo(){
    try{
    const todo = await getTodo()
    return todo
    } catch{
        console.log("Error!")
    }
}

fetchTodo()
.then(todo => console.log(todo.text))
.catch(() => console.log("Error Occurred!"))




