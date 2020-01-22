// Iteration 1: Names and Input
var hacker1 = 'Filipe';
var hacker2 = 'David';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}

// Iteration 3: Loops

// 3.1

let auxiliaryName = ' ';

for (let i = 0; i < hacker1.length; i++) {
  const character = hacker1[i];
  auxiliaryName = auxiliaryName + character.toUpperCase() + ' ';
}
auxiliaryName = auxiliaryName.trim();
console.log(auxiliaryName);

// 3.2

function reverseStr(hacker2) {
  var newHacker2 = '';

  for (let i = hacker2.length - 1; i >= 0; i--) {
    newHacker2 += hacker2[i];
  }

  return newHacker2;
}

reverseStr(hacker2);

// 3.3

const comparisonOrder = hacker1.localeCompare(hacker2);

if (comparisonOrder < 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if (comparisonOrder > 0) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}

let auxiliaryLargestName;

if (hacker1.length > hacker2.length) {
  auxiliaryLargestName = hacker1;
} else {
  auxiliaryLargestName = hacker2;
}

for (let i = 0; i < auxiliaryLargestName.length; i++) {
  const iterationComparisonOrder = hacker1[i].localeCompare(hacker2[i]);
  if (iterationComparisonOrder > 0) {
    console.log("The driver's name goes first.");
    break;
  } else if (iterationComparisonOrder < 0) {
    console.log('Yo, the navigator goes first definitely.');
    break;
  } else {
    if (auxiliaryLargestName.length - 1 === i) {
      console.log('What?! You both have the same name?');
      break;
    }
  }
}
