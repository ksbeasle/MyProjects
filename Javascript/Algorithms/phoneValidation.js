
var number = "888-888-8888"
/*
for the first part of the regex: ([0-9]{3})) , we want only numbers 0-9 in a set of 3
for the next part of the regex: ?[-.]? , we match any character in the set so either - or .
then once again we take another set of integers {3} followed by another - or . and we finish off with
another set of integer this time in a set of {4} to have the proper format for a phone number
*/
const phoneValidation = /\^?([0-9]{3})?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;

isValid = (phoneNumber) => {
    if(phoneNumber.match(phoneValidation)){
        return true;
    }else{
        return false;
    }
}

console.log(isValid(number))
