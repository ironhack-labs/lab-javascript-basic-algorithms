'use strict';

// Names and input
var hacker1 = 'Robby';

console.log("The driver's name is " + hacker1 + ".");

var hacker2 = window.prompt("What's the navigator's name?");

console.log("The navigator's name is " + hacker2 + ".");

// Conditionals


if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker2.length > hacker.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.Length + ' characters');
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

// Loops
var capitalized = '';

for (i = 0; i < hacker1.length; i++) {
  capitalized = capitalized + hacker1[i] + ' ';
}
capitalized.toUpperCase();

console.log(capitalized);