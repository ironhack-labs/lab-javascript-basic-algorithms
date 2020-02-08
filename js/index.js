// Iteration 1: Names and Input
let hacker1 = 'Goku'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Vegeta'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if(hacker1Length > hacker2Length) {
  console.log(`The driver has the longer name, it has ${hacker1Length} characters`)
} else if(hacker1Length === hacker2Length) {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}

// Iteration 3: Loops
let hacker1Spaced = ""
let hacker2Backward = ""

for (const char of hacker1) {
  hacker1Spaced = hacker1Spaced + char.toUpperCase() + " "
}

console.log(hacker1Spaced)

for (const char of hacker2.split("").reverse()) {
  hacker2Backward += char
}

console.log(hacker2Backward)

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}