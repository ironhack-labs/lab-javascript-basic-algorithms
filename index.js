// Iteration 1: Names and Input
const hacker1 = "Alex";
const hacker2 = "Alex";
console.log(`The hacker1's name is ${hacker1}`);
console.log(`The hacker2's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The hacker1 has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the hacker2 has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
//let driverNameWithSpaces = hacker1.toUpperCase().split("").join(" ");
//console.log(driverNameWithSpaces);

let drivername = hacker1.toUpperCase();
let result = "";
for (i = 0; i < drivername.length; i++) {
  if (i < drivername.length - 1) {
    result += drivername[i] + " ";
  } else {
    result += drivername[i];
  }
}
console.log(result);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reversedNavigator = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedNavigator += hacker1[i];
}

console.log(reversedNavigator);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 > hacker2) {
  console.log(`Yo, the hacker2 goes first, definitely.`);
} else if (hacker1 < hacker2) {
  console.log(`The hacker1 name goes first`);
} else {
  console.log(`What?! You both have the same name?`);
}

//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?
