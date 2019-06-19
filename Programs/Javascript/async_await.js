
const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            if(!error){
                resolve({ text: "Promise resolved" })
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