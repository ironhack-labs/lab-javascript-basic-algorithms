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

// // Iteration 3: Loops

let majDriver = ""
for (let i = 0; i < hacker1.length; i++) {
    majDriver += hacker1[i].toUpperCase()
    majDriver += " "
}
console.log(majDriver)

let invNavigator = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    invNavigator += hacker2[i]
}
console.log(invNavigator)