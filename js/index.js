// Iteration 1: Names and Input

let hacker1 = 'Alex';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jack';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
//3.1

let driverInCapital = '';

for (let index = 0; index < hacker1.length; index++) {
  driverInCapital += hacker1[index];

  if (index !== hacker1.length - 1) {
    driverInCapital += ' ';
  }
}

console.log(driverInCapital.toUpperCase())

//3.2

let reverseName = '';

for(let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i]
}

console.log(reverseName)

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

