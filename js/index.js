// Iteration 1: Names and Input
const hacker1 = 'Raquel'
const hacker2 = 'Iñigo'

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters `)
  } else if (hacker1.length < hacker2.length){
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters `)
  } else if (hacker1.length === hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
let space = " "
let hacker1Name = ""

for (let i= 0; i < hacker1.length; i++){
  let letter= hacker1.charAt(i).toUpperCase()
  hacker1Name += letter + space
  } 

  console.log (hacker1Name);

let reverseName= "";

for (let i= hacker1Name.length-1; i>=0; i--){
  reverseName += hacker1Name[i];
}
  console.log(reverseName)