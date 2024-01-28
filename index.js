// Iteration 1: Names and Input
const hacker1 = 'Marcos';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Emilia';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
console.log(
  `Wow, you both have equally long names, ${hacker2.length} characters!`
);
// Iteration 3: Loops
for (letter in hacker1) {
  console.log(hacker1[letter].toUpperCase() + '');
}

const reverseLetter = hacker2.split('').reverse().join('');
console.log(reverseLetter);

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
}
