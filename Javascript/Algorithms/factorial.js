function factorialize(num) {
    var factNum = 1;
    
    if(num === 0){
      return 1
    }else{
    
    for(let i = 1; i < num + 1; i++){
      factNum = factNum * i;
    }
    }
     return factNum;
   }
   
   console.log(factorialize(5));