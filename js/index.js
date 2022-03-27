// Iteration 1: Names and Input
let hacker1 = 'Andre'

console.log(`The drivers name is ${hacker1}`)

let hacker2 = 'Heber'

console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let result = ''
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i] + ' '
}
console.log(result.toUpperCase())

// Iteration 3: loops

