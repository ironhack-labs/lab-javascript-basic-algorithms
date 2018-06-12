'use strict';

var hacker1 = "Andres";
var hacker2 = prompt("Introduce the navigator name");
var shortestName = "";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has "+hacker1.length+" characters");
  shortestName = hacker2
} else if (hacker1.length < hacker2.length) { 
  console.log("The Driver has the longest name, it has "+hacker2.length+" characters");
  shortestName = hacker1
} else if (hacker1.length == hacker2.length) {
  console.log("wow, you both got equally long names, "+hacker1.length+" characters!!");
}

// Loop Driver Name Spaced
var driverNameSpaced = "";

for (var i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i];
  driverNameSpaced += " ";
}

console.log("Driver Name: " + driverNameSpaced);

// Loop Inverse navigator name
var inverseNavigatorName = "";

for (var i = 1; i <= hacker2.length; i++) {
  let n = hacker2.length - i;
  inverseNavigatorName += hacker2[n];
}

console.log("Inversed navigator name: " + inverseNavigatorName);

// Orden Lexicographic
for (var i = 0; i <= shortestName.length; i++) {
  if(hacker1[i] == hacker2[i]) {
    if (i == shortestName.length) {
      console.log("What?! You both got the same name?")
    } else { continue; }
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely")
    break;
  } else if (hacker2[i] > hacker1[i]) {
    console.log("The driver's name goes first")
    break;
  }
}