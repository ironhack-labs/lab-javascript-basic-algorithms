// Iteration 1: Names and Input
const hacker1 = 'Esteban';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Joodumo';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker1Length < hacker2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else if (hacker1Length === hacker2Length) {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
};

// Iteration 3: Loops
// Iteration 3.1

let hacker1Capitals = hacker1.toUpperCase();
let hacker1CapitalsSpaced = '';
for (let i = 0; i < hacker1Capitals.length; i++) {
  hacker1CapitalsSpaced = hacker1CapitalsSpaced+ ' ' + hacker1Capitals[i];
};

console.log(hacker1CapitalsSpaced.slice(1));

// Iteration 3.2

let hacker2Back = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  hacker2Back += hacker2[i]
};

// Iteration 3.3

if ((hacker1[0].localeCompare(hacker2[0])) < 0) {
    console.log('The drivers name goes first.');
  } else if ((hacker1[0].localeCompare(hacker2[0])) > 0) {
      console.log('Yo, the navigator goes first definitely.');
    } else {
      console.log('What?! You both have the same name?');
}