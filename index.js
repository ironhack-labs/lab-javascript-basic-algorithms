// Iteration 1: names and input
const hacker1 = 'Maria';
const hacker2 = 'Djamel';

const driver = hacker1;
const navigator = hacker2;

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters.`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${navigator.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigator.length} characters!`
  );
}
// Iteration 3: Loops - 3.1

const splittedString = driver.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

// 3.2

for (let i = navigator.length; i >= 0; i--) {
  const reverseName = navigator[i];
  console.log(reverseName);
}
// 3.3

const abcOrder = [driver, navigator];
abcOrder.sort();


if (abcOrder[0] === driver && abcOrder[0] === navigator) {
  console.log('What?! You both have the same name?');
} 
  else if (abcOrder[0] === navigator) {
  console.log('Yo, the navigator goes first, definitely.');
} 
  else if (abcOrder[0] === driver) {
  console.log("The driver's name goes first.");
}


