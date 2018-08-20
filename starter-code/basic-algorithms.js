"use strict";

// Names and Input

var hacker1 = "Caroline";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!");
} else if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
};

// Loops

var capitals = "";

for (var i = 0; i < hacker1.length; i++){
  capitals += " " + hacker1[i];
};  
console.log(capitals.trimStart().toUpperCase());

var reverse = "";

for (var j = hacker2.length -1; j >= 0; j--) {
  reverse += hacker2[j];
};
console.log(reverse);


if (hacker1.charCodeAt(0) === hacker2.charCodeAt(0)){
  console.log("What?! You both got the same name?");
} else if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)){
  console.log("The driver's name goes first");
} else {
  console.log("Yo, the navigator goes first definitely");
};

// Check palindrome

var string = prompt("Please, insert a string: ");
console.log(string);

var regExp = /[\W_]/g; 

var lowerCaseString = string.toLowerCase().replace(regExp, "");
console.log(lowerCaseString);
var reversedString = lowerCaseString.split("").reverse().join("");
console.log(reversedString);
if (reversedString === lowerCaseString) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome!");
}



// Lorem ipsum generator
