// Iteration 1: Names and Input

const hacker1 = 'Armando';
  console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Sandra';
  console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log( `The driver has the longest name, it has ${hacker1.length} characters.` )
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let space = '';
for(let i=0; i<hacker1.length; i++){
   space += hacker1.toUpperCase().charAt(i) + ' ';     
}
console.log(space);

let reverseNav = '';
for(let i=hacker2.length - 1; i >= 0; i--){
   reverseNav += hacker2[i];     
}
console.log(reverseNav)

let abecedary = 'abcdefghijklmnopqrstuvwxyz'

for (let i=0; i < 26; i++){
  if (hacker1[i] > hacker2[i]){
  console.log(`The driver's name goes first.`)
} else if (hacker1[i] < hacker2[i]) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
}