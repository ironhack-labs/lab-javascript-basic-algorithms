// Iteration 1: Names and Input
let hacker1 = "René";
let hacker2 = "Elisa";
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}  else if (hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}


// Iteration 3: Loops
console.log('Iteration 3.1')
let tempvar1 = '';
for (let i=0; i<hacker1.length; i++) {
  tempvar1 += hacker1[i].toUpperCase() + " ";
}
 console.log(tempvar1);

console.log('Iteration 3.2')
let tempvar2 = '';
for (let i=hacker2.length-1; i>=0; i--) {
  tempvar2 += hacker2[i];
}
 console.log(tempvar2);

console.log('Iteration 3.3')

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let firstLetterHacker1 = hacker1[0].toLowerCase();
let firstLetterHacker2 = hacker2[0].toLowerCase();

let indexFirstLetterHacker1;
let indexFirstLetterHacker2;
for (let i=0; i<alphabet.length; i++) {
  if (alphabet[i] === firstLetterHacker1) {
    indexFirstLetterHacker1 = i;
  }
  if (alphabet[i] === firstLetterHacker2) {
    indexFirstLetterHacker2 = i;
  }
}

if (indexFirstLetterHacker1 < indexFirstLetterHacker2) {
  console.log(`The driver's name goes first.`)
} else if (indexFirstLetterHacker1 > indexFirstLetterHacker2) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)  
}