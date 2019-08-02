var Person = function(firstAndLast) {
    let fullName = firstAndLast
   
    this.setFirstName = function (name){
      let split = fullName.split(" ")
      let firstName = name
      let lastName = split[1]
     fullName = firstName + " " + lastName
    }
    this.setLastName = function(name){
     let split = fullName.split(" ") 
     let firstName = split[0]
     let lastName = name
     fullName = firstName + " " + lastName
    } 
    this.setFullName = function(name){
      let split = name.split(" ")
      fullName = split[0] + " " + split[1] 
    }
    this.getFullName = function() {
      return fullName
    };
    this.getFirstName = function(){
      let split = fullName.split(" ")
      return split[0]
    }
    this.getLastName = function(){
      let split = fullName.split(" ")
      return split[1]
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(Object.keys(bob).length)
  console.log(bob.getFirstName())
  console.log(bob.getLastName())
  console.log(bob.getFullName())
  bob.setFirstName("Haskell")
  bob.setLastName("Curry")
  console.log(bob.getFullName())
  bob.setFullName("kahlil B")
  console.log(bob.getFullName())
  
  