console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = 'Valerian';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Haroun';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const h1Length = hacker1.length;
const h2Length = hacker2.length;

if (h1Length > h2Length) {
  console.log(`The driver has the longest name, it has ${h1Length} characters.`);
} else if (h1Length < h2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${h1Length} characters`);
}

// Iteration 3: Loops

let upperCaseH1 = '';
for (let i = 0; i < hacker1.length; i++) {
  upperCaseH1 += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    upperCaseH1 += ' ';
  }
}

console.log(upperCaseH1);

let reverseH2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseH2 += hacker2[i];
}

console.log(reverseH2);