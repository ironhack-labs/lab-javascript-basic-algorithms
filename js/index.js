// Iteration 1: Names and Input
var hacker1 = "SpongeBob";
var hacker2 = "Thormund";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);    
  }
  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
};

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
var driverUpCaseSeparated = hacker1.toUpperCase().split('').join(' ');
var navUpCaseSeparated = hacker2.toUpperCase().split('').join(' ');
console.log(driverUpCaseSeparated);
console.log(navUpCaseSeparated);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var driverReversed = hacker1.split('').reverse().join(' ');
var navReversed = hacker2.split('').reverse().join(' ');
console.log(driverReversed);
console.log(navReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
}
else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (hacker2 === hacker1) {
  console.log(`What?! You both have the same name?`)
}