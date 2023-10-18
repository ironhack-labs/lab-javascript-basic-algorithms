// Iteration 1: Names and Input
const hacker1 = 'Alfonso';
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Zohra';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }

// Iteration 3: Loops
// 3.1 print all uppercase with a space between each letter
var newHacker1 = '';

for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + ' ';
}
console.log(newHacker1.toUpperCase());

// 3.2 print all characters of navigator's name as is but reversed
var newHacker2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

// 3.3 depending on alphabetical order, print one of the following
const whoFirst = hacker1.localeCompare(hacker2);

if (whoFirst === -1) {
  console.log("The driver's name goes first.");
} else if (whoFirst === 1) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}