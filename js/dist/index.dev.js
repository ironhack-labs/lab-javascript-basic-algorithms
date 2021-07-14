"use strict";

// Iteração I `${}`
var hacker1 = 'John';
var hacker2 = 'Navigator';
console.log("The driver's name is ".concat(hacker1, "."));
console.log("The navigator's name is ".concat(hacker2, ".")); // Iteração II ===> if & else if

var hacker1len = hacker1.length;
var hacker2len = hacker2.length;

if (hacker1 > hacker2) {
  console.log("The driver has the longest name, it has ".concat(hacker1len, " characters."));
} else if (hacker1 < hacker2) {
  console.log("It seems that the navigator has the longest name, it has ".concat(hacker2len, " characters."));
} else {
  console.log("Wow, you both have equally long names, ".concat(hacker1len, " characters!"));
}

; // Iteração III ===> for

var esp = " "; // variavel para adicionar

var result = "";

for (var contador = 0; contador < hacker1len; contador++) {
  result += hacker1[contador].toUpperCase();
  result += esp;
}

console.log(result);