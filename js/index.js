// Iteration 1: Names and Input
let hacker1 = "Daniel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 ="Mario";
console.log(`The navigator's name is ${hacker2}`)
//
// Iteration 2: Conditionals
const hacker1length = hacker1.length
const hacker2length = hacker2.length

let result = `Wow, you both have equally long names, ${hacker1.length} characters!`

if (hacker1length > hacker2length) {
    result = `The driver has the longest name, it has ${hacker1.length} characters.`
} else if (hacker1.length < hacker2.length) {
    result = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
} 
    
console.log(result)


// Iteration 3: Loops

const hackerInUpperCase = []
for (value of hacker1) {
    hackerInUpperCase.push(value.toUpperCase())
}

console.log(hackerInUpperCase.join(' '))

let hackerReversed = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    const nameTwo = hacker2.charAt(i)
    hackerReversed += nameTwo
}
console.log(hackerReversed)


let return2 = 'What?! You both have the same name?'

if (hacker1 > hacker2) {
    return2 = 'Yo, the navigator goes first definitely.'
} else if (hacker1 < hacker2) {
    return2 = 'The driver\'s name goes first.'
}

console.log(return2);