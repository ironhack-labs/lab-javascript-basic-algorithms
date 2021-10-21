// Iteration 1: Names and Input
let hacker1 = 'Alejandro';

console.log (`The driver's name is ${hacker1}`);

let hacker2= 'Miguel';

console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length >hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }

// Iteration 3: Loops
let inCapitalsSpaced = '';

for (let i = 0; i<hacker1.length; i++) {
  
  inCapitalsSpaced += hacker1[i].toUpperCase();
  if (i<hacker1.length-1) {
  inCapitalsSpaced += ' ';
  }

}

console.log(inCapitalsSpaced);

let inCapitalsReverse = '';

for (let i = hacker2.length - 1; i>=0; i--) {
  
    inCapitalsReverse += hacker2[i];
    
}

console.log(inCapitalsReverse);
