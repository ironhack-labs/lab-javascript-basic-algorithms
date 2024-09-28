// Iteration 1: Names and Input
// hacker1 driver
// hacker2 navigator
const hacker1 = 'Candela'
const hacker2 = 'Amy'

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`The drivers have the same name lenth, they have ${hacker1.length} characters.`)
} else{
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}

// Iteration 3: Loops
console.log(hacker1.split(""))

let upperName = '';
for (let i = 0; i < hacker1.length; i++) {
    const letter =hacker1[i].toUpperCase();
    upperName += letter + ' '  
}

console.log(upperName)

function reverseStringOrder (string) {
    reverseString = ''
    for (let i = string.length-1; i >= 0; i--) {
        let letterString = string[i];
        reverseString +=letterString
    }
    return reverseString;
}

console.log(reverseStringOrder(hacker1))

let Alphabet = 'abcdefghijklmnñopqrstuvwxyz';

function lexicogrtaphicOrder (array){
    if (hacker1 < hacker2) {
        console.log ("The driver's name goes first.")
    }else if (hacker1 > hacker2) {
        console.log ("Yo, the navigator goes first, definitely")
    } else {
        console.log('What?! You both have the same name?')
    }  
}

lexicogrtaphicOrder()