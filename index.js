// Iteration 1: Names and Input

const hacker1 = "John"
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Jon"
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1

let uppercaseName = " "

for (let i = 0; i < hacker1.length; i++) {
    uppercaseName += hacker1[i].toUpperCase() + " "
}

console.log(uppercaseName)

// 3.2

let reverseString = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseString += hacker1[i]
}

console.log(reverseString)

// 3.3

let driver = "Aohn"
let navigator = "Zohn"
if (driver.localeCompare(navigator) < 0) {
    console.log("The driver's name goes first")
} else if (driver.localeCompare(navigator) > 0) {
    console.log("Yo, the navigator goes first, definitely")
} else {
    console.log("What!? You both have the same name?")
}