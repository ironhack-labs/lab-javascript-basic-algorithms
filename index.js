// Iteration 1: Names and Input
let hacker1 = 'Brenda';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Mary';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
console.log(driverLength, navigatorLength);
if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters`
  );
} else if (navigatorLength > driverLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters`
  );
} else if (navigatorLength === driverLength) {
  console.log(
    `Wow, you both have equally long names, ${navigatorLength} characters`
  );
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name in capital letters separated by a space

let hacker1Caps = hacker1.toUpperCase();
let hacker1Array = [];

for (let i = 0; i < hacker1Caps.length; i++) {
  let charWithSpace = hacker1Caps[i] + ' ';
  hacker1Array.push(charWithSpace);
}

console.log(hacker1Array.join(''));

// 3.2 Print all the characters of the navigator's name in reverse

let lastIndex = navigatorLength - 1;
let navigatorReversed = '';

for (let i = lastIndex; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}

console.log(navigatorReversed);

// 3.3 Print a sentence depending on the lexicographic order of the strings

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}
