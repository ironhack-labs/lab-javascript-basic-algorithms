// Names and Input


//Conditionals


// Lorem ipsum generator
var hacker1 = 'alex' ;
console.log ('Driver name is '+ hacker1 )
var hacker2 = prompt("Enter Navigators name");
console.log('Navigator name is ' + hacker2);

if (hacker1.length > hacker2.length){"Hacker1 has a longer name"+hacker1.length} 
else if (hacker1.length < hacker2.length) {"Hacker 2 has a longer name" + hacker2.length}
else {"names are the same length"};
 
var capSize;
for (i = 0; i < hacker1.length; i++) {capSize += hacker1[i].toUpperCase();
  capSize += " "
}
console.log (capSize)

function reverseString(str) {

    var newString = "";
 
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    
    return newString; 
}
 
reverseString(hacker1);