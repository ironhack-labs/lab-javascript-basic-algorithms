// Iteration 1: Names and Input
const hacker1 = "Camila";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Daniel";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
const h1Length = hacker1.length;
const h2Length = hacker2.length;

if (h1Length > h2Length) {
  console.log(
    `The driver has the longest name, it has ${h1Length} characters.`
  );
} else if (h2Length > h1Length) {
  console.log(
    "It seems that the navigatpr has the longest name, it has ${h2Length} characters."
  );
} else {
  console.log(`Wow, you both have equally long names, ${h1Length} characters!`);
}

// Iteration 3: Loops
let h1Loop = hacker1.toUpperCase().split("").join(" ");
console.log(h1Loop);

let h2Loop = "";
// alteração

for (let i = 1; i <= hacker2.length; i++) {
  h2Loop += hacker2[h2Length - i];
}

console.log(h2Loop);

h1Loop = hacker1.toUpperCase();
h2Loop = hacker2.toUpperCase();

for (i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  }
}

if (h1Loop == h2Loop) {
  console.log(`What?! You both have the same name?`);
}
