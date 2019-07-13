
var number = "888-888-8888"

const phoneValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

isValid = (phoneNumber) => {
    if(phoneNumber.match(phoneValidation)){
        return true;
    }else{
        return false;
    }
}

console.log(isValid(number))
