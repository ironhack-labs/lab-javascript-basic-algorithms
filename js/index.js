// Iteration 1: Names and Input

let hacker1 = 'Stephan';

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Denise';

let hacker3 = 'Zena';

console.log(`The navigator's names are ${hacker2} and ${hacker3}.`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
    );
  }

// Iteration 3: Loops

let resultString = '';

for (let i = 0; i < hacker1.length; i++) {
  resultString = resultString.concat(hacker1[i], ' ');
}

console.log(resultString.toUpperCase());

let reverseString = '';

for (let j = hacker2.length - 1; j >= 0; j--) {
  reverseString = reverseString.concat(hacker2[j], ' ');
}

console.log(reverseString);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
