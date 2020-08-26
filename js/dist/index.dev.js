"use strict";

// Iteration 1: Names and Input
var hacker1 = 'Luca';
console.log("The driver's name is " + hacker1);
var hacker2 = 'Rico';
console.log("The navigator's name is ".concat(hacker2));
console.log("_________________________________"); // Iteration 2: Conditionals

var checkNameLength = function checkNameLength(name1, name2) {
  if (name1.length === name2.length) {
    console.log("Wow you both have equally long names, ".concat(name1.length, " characters."));
    return;
  }

  if (name1.length > name2.length) {
    console.log("The driver has the longest name, it has ".concat(name1.length, " characters."));
    return;
  }

  if (name1.length < name2.length) {
    console.log("It seems that he navigator has the longest name, it has ".concat(name2.length, " characters."));
    return;
  }

  console.log('there is a mistake somewhere');
};

checkNameLength(hacker1, hacker2);
console.log("_________________________________"); // Iteration 3: Loops

var hackerNameToUppercase = function hackerNameToUppercase(name) {
  var letterName = name.split("");
  var capitalizedName = ""; //console.log(/*letterName*/);

  for (var i = 0; i < letterName.length; i++) {
    capitalizedName += letterName[i].toUpperCase() + " ";
  }

  ;
  return capitalizedName.trim();
};

console.log(hackerNameToUppercase(hacker1));
console.log(hackerNameToUppercase(hacker2));