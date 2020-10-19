// Iteration 1: Names and Input

let hacker1 = "ineke"
console.log(`The driver\'s name is ${hacker1}.`)

let hacker2 = "filipe"
console.log(`The navigator\'s name is ${hacker2}.`)

// Iteration 2: Conditionals

if(hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }  



// Iteration 3: Loops 
// Iteration 3.1: Loops 

let driverUpperCased = '';
for (i = 0; i < hacker1.length; i++) {
  driverUpperCased += hacker1[i].toUpperCase() + ' ';
}
console.log(driverUpperCased);

// Iteration 3.2: Loops 

let navigatorReversed = '';
let hacker2Upper = hacker2[0].toUpperCase() + hacker2.slice(1);
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2Upper[i] + ' ';
}
console.log(navigatorReversed);

// Iteration 3.3: Loops 

let alphabet = "abcdefghijklmnopqrstuvwxyz"

let hack1, hack2;

for (let i = 0; i < alphabet.length; i++) {
  if(hacker1[0] === alphabet[i]) hack1 = i;
  if(hacker2[0] === alphabet[i]) hack2 = i;
}
  
console.log(hack1);
console.log(hack2);

if(hack1 < hack2) {
  console.log('The driver\'s name goes first.');
} else if(hack1 > hack2) { 
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

