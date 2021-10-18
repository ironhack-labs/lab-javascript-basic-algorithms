// Iteration 1: Names and Input
const hacker1 = "Johanna"
console.log(`The driver's name is ${hacker1}.`)
const hacker2 = "Adam"
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
const lengthHacker1 = hacker1.length
const lengthHacker2 = hacker2.length

if (lengthHacker1 > lengthHacker2) {
  console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`);
} else if (lengthHacker2 > lengthHacker1) {
  console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`);
}


// Iteration 3: Loops
let spelledHacker1 = hacker1.toUpperCase().split("").join(" ")
console.log(spelledHacker1)

let revHacker1 = hacker1.split("").reverse().join(" ")
console.log(revHacker1)

let compareLexi = hacker1.localeCompare(hacker2)
if (compareLexi === -1){
  console.log("The driver's name goes first.")
} else if (compareLexi === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}