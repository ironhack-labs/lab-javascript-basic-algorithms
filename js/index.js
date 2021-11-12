// Iteration 1: Names and Input

// 1.1
const hacker1 = 'Clara';

// 1.2
console.log(`"The driver's name is ${hacker1}"`);

// 1.3
const hacker2 = 'Esteban';

// 1.4
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

// 2.1
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

// 3.1
let hacker1Uppercase = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i == hacker1.length - 1) {
    hacker1Uppercase += hacker1[i];
  } else {
    hacker1Uppercase += hacker1[i] + ' ';
  }
}

console.log(hacker1Uppercase.toUpperCase());

// 3.2
let hacker1Reversed = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reversed += hacker1[i];
}

console.log(hacker1Reversed);

// 3.3
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
}
if (hacker1.localeCompare(hacker2) == 0) {
  console.log(`What?! You both have the same name?`);
}
