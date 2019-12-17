
//If modulo didnt exist we could acheive the same functionality this way
const mod = (a,b) => {
    do{
        if(b >= a){
          b = b - a
        }

    }while(b >= a)

    return b
}

console.log(mod(4,15))