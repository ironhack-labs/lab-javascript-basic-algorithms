let qsa = (el) => document.querySelectorAll(el);
let qs = (el) => document.querySelector(el);
let gbid = (el) => document.getElementById(el);
let w = (el) => document.write(el);
let c = (...el) => console.log(...el);
// console.log('\n--- STRINGS ---');

// Iteration 1: Names and Input
let hacker1 = prompt("Qual o nome do Driver?");
console.log(`"The driver's name is ${hacker1}`);
let hacker2 = prompt("Qual o nome do navigator?");
c(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  c(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//nome em letras maiusculas
// toUpperCase()
let nomeUpperCase = "";
for (i = 0; i <= hacker1.length - 1; i++) {
  nomeUpperCase += hacker1[i].toUpperCase() + " ";
}
c(nomeUpperCase);

let nameReverse = "";

for (i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
c(nameReverse);

const compareLetter = hacker1.localeCompare(hacker2);

switch (compareLetter) {
  case 0:
    console.log("What?! You both have the same name?");
    break;

  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;

  case -1:
    console.log("What?! You both have the same name?");
    break;
}
