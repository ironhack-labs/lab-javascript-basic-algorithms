// Iteration 1: Names and Input
const hacker1 = 'Sun'
const hacker2 = 'Valentine'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
var hacker1length = hacker1.length
var hacker2length = hacker2.length

if (hacker1length === hacker2length) {
    console.log(`Wow, you both have equally long names, ${hacker1length} characters.`)
} else if (hacker1length < hacker2length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2length} characters.`)
} else {
    console.log(`The driver has the longest name, it has ${hacker1length} characters.`)
}

// Iteration 3: Loops
let hacker1UpperCase = ''

for (const index of hacker1) {
    hacker1UpperCase += index.toLocaleUpperCase();
    
    if (hacker1UpperCase.length !== hacker1length + 2) {
        hacker1UpperCase += ' ';
    }
        
}
console.log(hacker1UpperCase)

let hacker2Reversed = ''

for (i = hacker2length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2.charAt(i);
}

console.log(hacker2Reversed)

let hackersComparison = hacker1UpperCase.localeCompare(hacker2Reversed)

if (hackersComparison === -1) {
    console.log("The driver's name goes first.")
} else if (hackersComparison === 1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}




