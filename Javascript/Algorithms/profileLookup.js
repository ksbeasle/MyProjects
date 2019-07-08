
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/*
We will take in the name and property,
we will first loop through the objects and if the contact firstName is equal to the name passed in
we can check if the property that was passed in exists within that object, if it does we return it. 
If not we say "no such property", if after looping through the entire array of objects and not finding a matching name 
we return "no such contact"
*/
function lookUpProfile(name, prop){
for(var i = 0; i < contacts.length; i++){  
    if(contacts[i].firstName == name){
        if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop] 
        }else{
            return "No such property"
        }
    }   
}
return "No such contact"
}

console.log(lookUpProfile("Kristian", "likes"));
