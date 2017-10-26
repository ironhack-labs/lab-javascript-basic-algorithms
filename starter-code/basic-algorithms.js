// variables
var hacker1 = "Bart";
var hacker2 = window.prompt("What's your name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

// loops
var newString ="";

for (var i = 0; i < hacker1.length; i++) {
  newString += hacker1[i] + " ";
}

var upperCaseString = newString.toUpperCase();
console.log(upperCaseString);


var reverseString="";

for (var i = hacker2.length - 1; i >= 0; i--) {
  reverseString += hacker2[i];
}

console.log(reverseString);

// lexographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if ( hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// bonus

var userInput = window.prompt("Please enter a word to check if it is a Palindrome");
var inputUppercase = userInput.toUpperCase();
var halfString = Math.floor(inputUppercase.length / 2);

for(var i = 0; i < halfString; i++) {
  if (inputUppercase[i] !== inputUppercase[inputUppercase.length - i - 1]) {
    console.log("The word is not a palindrome");
    break;
  } else {
    console.log("The word is a palindrome");
    break;
  }
}
