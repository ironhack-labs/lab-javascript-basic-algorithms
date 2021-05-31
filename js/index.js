// Iteration 1: Names and Input
let hacker1 = 'Joanna';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Alan';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

console.log(`${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[4].toUpperCase()} ${hacker1[5].toUpperCase()}`);

let upperCaseName = '';
for (let i = 0; i < hacker1.length; i++) { 
        upperCaseName += `${hacker1[i].toUpperCase()} `; 
} console.log(upperCaseName);


let reverseName = '';
for (let i = hacker1.length - 1; i >= 0; i--) { 
        reverseName += hacker1[i]; 
} console.log(reverseName);


//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?