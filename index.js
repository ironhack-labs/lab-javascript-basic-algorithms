// Iteration 1: Names and Input
/* 1.1 */
const hacker1 = "Driver's Name";

/* 1.2 */
console.log("The driver's name is " + hacker1 + ".");

/* 1.3 */
const hacker2 = "Navigator's Name";


/* 1.4 */
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals
/* 2.1 */
const driverName = "John";
const navigatorName = "Jane";

// Print the characters of the driver's name, separated by space, and in capital letters
console.log("Driver's Name:", driverName.toUpperCase().split('').join(' '));

// Print all the characters of the navigator's name in reverse order
console.log("Navigator's Name in Reverse:", navigatorName.split('').reverse().join(''));

// Depending on the lexicographic order of the strings, print appropriate messages
if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Iteration 3: Loops
/* 3.1 */
console.log(driverName.toUpperCase().split('').join(' ')); // Output: J O H N

// 3.2 Print all the characters of the navigator's name in reverse order
console.log("Navigator's Name in Reverse:", navigatorName.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print
const order = driverName.localeCompare(navigatorName);
if (order < 0) {
    console.log("The driver's name goes first.");
} else if (order > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
