// Iteration 1: Names and Input
let hacker1 = "Beatriz";
console.log(`The driver's names is ${hacker1}`);

let hacker2 ="Julia";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Lenght = hacker2.length;

if (hacker1Length > hacker2Lenght) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
}

else if (hacker1Length < hacker2Lenght) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`); 
}

else {
console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}


// Iteration 3: Loops

//3.1

let uppercaseName = '';

for (let i = 0; i < hacker1.length; i++) {
    let char = hacker1[i];
    const upperChar = char.toUpperCase();
    uppercaseName = uppercaseName + (upperChar + ` `);
  }
  
  console.log(uppercaseName);

//3.2
/*let hacker1 = 'Beatriz';
console.log(`The driver's names is ${hacker1}`);

let hacker2 = 'Julia';
console.log(`The navigator's name is ${hacker2}`);

let hacker1Length = hacker1.length;
let hacker2Lenght = hacker2.length;*/

let nameReverse = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  let char = hacker2[i];
  nameReverse += char;
}

console.log(nameReverse);

//3.3
/*let hacker1 = 'Beatriz';
let hacker2 = 'Julia';*/

const hackers = [hacker2, hacker1];
const sortedHackers = hackers.sort();
const positionOne = hackers [0];

if (positionOne === hacker2) {
  console.log("The driver's name goes first.");
} else if (positionOne === hacker1) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}
