let arr = [3,1,6,1,2,9]




const bubbleSort = (arr) =>{
    let swapMe = true
    do{ 
        swapMe = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tmp
                swapMe = true
            }
        }

    }while(swapMe == true)

    return arr
}



console.log(bubbleSort(arr))