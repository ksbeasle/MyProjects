/* https://www.youtube.com/watch?v=_3-l_L8ikyU */ 

import axios from "axios";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Kept!"),3000)
})



const button = document.getElementById("myButton")
button.onclick = () => {
    promise.then((res) => {
        console.log("Lets wait and see...", res)
    }).catch((err) => {
    
    })
}


function getUsers(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log("Error retrieving data.", err.message)
    })
}

const button2 = document.getElementById("myOtherButton")
button2.onclick = () => {
    getUsers()
}