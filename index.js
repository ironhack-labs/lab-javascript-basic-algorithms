// Iteration 1: Names and Input
const hacker1= 'Jean'
const hacker2= 'Marie'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const names = hacker1 + ' ' + hacker2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const driverUpperCase = hacker1.toUpperCase().split('').join(' ')
console.log(driverUpperCase)
const navigatorReverse = hacker2.split('').reverse().join('')
console.log(navigatorReverse)