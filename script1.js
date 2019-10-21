/* Iteration 1*/

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Juan";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Snow";

// 1.4 Print "The navigator's name is YYYY".
console.log("The driver's name is " + hacker2);

/* Iteration 2*/
if(hacker1.length > hacker2.length)
console.log("Driver has the longest name, it has " + hacker1.length + " characters");
else if(hacker1.length < hacker2.length)
console.log("Navigator has the longest name, it has " + hacker2.length + " characters");
else
console.log("The names are the same length, they both have " + hacker2.length + " characters");