// Iteration 1: Names and Input
const hacker1 = 'rgor'
console.log("The driver's name is " + hacker1)

const hacker2 = 'Felino'
console.log(`The navigator's name is ${hacker2}`)

const hacker3 = 'rnton' 
console.log (`The navigator's name is ${hacker3}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length || hacker1.length > hacker3.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length || hacker2.length > hacker3.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker3.length > hacker1.length || hacker3.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
let driverNameCapitalized = ""

for (let i = 0; i < hacker1.length; i++) {
    driverNameCapitalized += hacker1[i].toUpperCase() + " "
}
console.log(driverNameCapitalized)

let nameReversed = ""
let nameReversed2 = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i]
}

for (let i = hacker3.length - 1; i >= 0; i--) {
    nameReversed2 += hacker3[i]
}

console.log(nameReversed)
console.log(nameReversed2)

if(hacker1[0] < hacker2[0] || hacker1[0] < hacker3[0] ) {
    console.log("The driver's name goes first.")
} else if (hacker3[0] < hacker2[0] || hacker3[0] < hacker1[0]) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (hacker2[0] < hacker3[0] || hacker2[0] < hacker1[0]) {
    console.log("Yo, the second navigator goes first, definitely.")
}
