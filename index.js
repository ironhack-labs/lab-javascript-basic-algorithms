// Iteration 1: Names and Input */
const hacker1 = 'Kseniia';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Leandra';
console.log(`The driver's name is ${hacker2}`);




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let upperCase = '';

for (let i = 0; i <= hacker1.length; i++) {
  upperCase += hacker1[i].toUpperCase() + ' ';
  console.log(upperCase);
}

let nameVerse = '';
const lastIndex = hacker2.length - 1;
for (let i = lastIndex; i >= 0; i--) {
  nameVerse += hacker2[i];
console.log(nameVerse);
}

if (hacker1.slice(1) > hacker2.slice(1)) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.slice(1) < hacker2.slice(1)) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}