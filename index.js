// Iteration 1: Names and Input

const hacker1 = "Pablo";
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = "Lara";
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(`"The driver has the longest name, ${hacker1.length} it has characters."`);
} else if (hacker1.length < hacker2.length) {
  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`);
} else {
  console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)

// Iteration 3: Loops

let newName = '';

for (let i = 0; i < hacker1.length; i++) {
  const charUpperCase = hacker1[i].toUpperCase()

newName += charUpperCase


if (i !== hacker1.length -1) {
  newName += " ";
}

  
}
console.log (newName);

let reversedName = '';
let capitalizedReversedName = '';



for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
  capitalizedReversedName += hacker2[i];
}

console.log('Este es el nombre invertido, ->', reversedName);



for (let i = 0; i <hacker1.length; i++) {
  
}

if (hacker1.localeCompare(hacker2) === 0) {
    console.log('The driver's name goes first');
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log('Yo, the navigator goes first, definitely');
    } else {
    console.log('What?! You both have the same name?');
    }