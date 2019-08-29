function factorialize(num) {
  //set x to 1 so we dont have to worry about multiplying by 0 on the first iteration
  let x = 1
  
  do{
      //as long as num doesnt equal zero we can calculate
      if(num != 0){
        x *= num
        num--
      }
   }while(num != 0)
   console.log(x)
   return x
  }
  factorialize(5)
  console.log(5*4*3*2*1)