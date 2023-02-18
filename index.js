// Iteration 1: Names and Input
const hacker1 = prompt("driver's name ?");
console.log(`The driver's name is ${hacker1}`)
const hacker2 = prompt("navigator's name ?")
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

let driver = hacker1.length
let navigator = hacker2.length
let egality = driver || navigator
if (driver > navigator) { console.log(`The driver has the longest name, it has ${driver} characters.`) }
else if (navigator > driver) { console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`) }
else console.log(`Wow, you both have equally long names, ${egality} characters!`)

// Iteration 3: Loops
console.log(hacker1.toUpperCase())// Iteration 1: Names and Input