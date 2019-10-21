/* Iteration 1 */

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Juan";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Snow";

// 1.4 Print "The navigator's name is YYYY".
console.log("The driver's name is " + hacker2);

/* Iteration 2 */

// 2.1 Conditional statements
if(hacker1.length > hacker2.length)
console.log("Driver has the longest name, it has " + hacker1.length + " characters");
else if(hacker1.length < hacker2.length)
console.log("Navigator has the longest name, it has " + hacker2.length + " characters");
else
console.log("The names are the same length, they both have " + hacker2.length + " characters");

/* Iteration 3 */

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// convert string to array 
let arr = hacker1.split("");

// print array separated by a space and in uppercase 
console.log(arr.join(" ").toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order.
// convert string to array 
let arr2 = hacker2.split("");

// print array in reverse
console.log(arr2.reverse().join(""));

// 3.3 Depending on the lexicographic order of the strings, print the correct statement

// create an array with both names and sort it
let arr3 = [];
arr3.push(arr2.reverse().join(""));
arr3.push(arr.join(""));
arr3.sort();

// print statement depending on lexicographic order
if(arr3[0] === arr3[1])
console.log("What?! You both got the same name?");
else if(arr3[0] === hacker1)
console.log("The driver's name goes first.");
else if(arr3[0] === hacker2)
console.log("Yo, the navigator goes first definitely.");

