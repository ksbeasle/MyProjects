function factorialize(num) {
    /* start at 1 */
    var factNum = 1;
    
    /* if the number passed is 0 we return 1 */
    if(num === 0){
      return 1
    }else{
    /* loop up to the number passed and multiply it */
    for(let i = 1; i <= num; i++){
      factNum = factNum * i;
    }
    }
     return factNum;
   }
   
   console.log(factorialize(5));