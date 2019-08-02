/* Recursion sample */



let letsCountDown = (num) => {
    if(num != 0){
        console.log(num)
        num--
        letsCountDown(num)
    }
}


letsCountDown(10)

