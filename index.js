// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Priya";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Teresa";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1 Depending on which name is longer, print the appropriate message.
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  
// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters.
//let driverNameWithSpaces = hacker1.toUpperCase().split('').join(' ');
//console.log(driverNameWithSpaces);

// 3.2 Print all the characters of the navigator's name in reverse order.
//let navigatorReversed = hacker2.split('').reverse().join('');
//console.log(navigatorReversed);

// 3.3 Depending on the lexicographic order of the strings, print the appropriate message.
//if (hacker1 < hacker2) {
  //console.log("The driver's name goes first.");
//} else if (hacker1 > hacker2) {
  //console.log("Yo, the navigator goes first, definitely.");
//} else {
  //console.log("What?! You both have the same name?");
//}

// Iteration 3: Loops
// Define the driver and navigator names
//let hacker3 = "Alice"; // Driver's name
//let hacker4 = "Bob";   // Navigator's name

// 3.1 Using a for loop to print the driver's name with spaces except for the last two characters, in capital letters
let driverName = hacker1.toUpperCase();
let result = '';

for (let i = 0; i < driverName.length; i++) {
  if (i < driverName.length - 1) {
    result += driverName[i] + ' ';
  } else {
    result += driverName[i];
  }
}
console.log(result);

// 3.2 Using a for loop to print the navigator's name in reverse order
let reversedNavigator = '';

for (let i = hacker1.length; i >= 0; i--) {
  reversedNavigator += hacker2[i];
  
}
console.log(reversedNavigator);
//

// 3.3 Compare the lexicographic order of the driver's and navigator's names
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


