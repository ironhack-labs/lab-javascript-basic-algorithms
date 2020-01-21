// Iteration 1: Names and Input
console.log('I am ready!');

let hacker1 = 'Antonio';
console.log(`The driver's name is ${hacker1}.`);

/* could be 1) console.log("The driver's name is " + hacker1);
            2) console.log("The driver's name is %s", hacker1);
*/

let hacker2 = 'Diana';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let auxiliaryName = '';

for (let i = 0; i < hacker1.length; i++) {
  auxiliaryName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    auxiliaryName += ' ';
  }
}

console.log(auxiliaryName);

/* could be:
let alternativeAuxiliaryName = hacker1.toUpperCase().split('').join(' ');
console.log(alternativeAuxiliaryName);
*/

let auxiliaryReverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  auxiliaryReverseName += hacker2[i];
}

console.log(auxiliaryReverseName);

/* could be:
let alternativeAuxiliaryReverseName = hacker2.split('').reverse().join();
console.log(alternativeAuxiliaryReverseName)
*/

const comparisonOrder = hacker1.localeCompare(hacker2); // MDN localecompare

if (comparisonOrder < 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if (comparisonOrder > 0) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}
