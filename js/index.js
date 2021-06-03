// Iteration 1: Names and Input
let hacker1 = 'Jose'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Lali'
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
let driver = hacker1.length
let navigator = hacker2.length
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${driver} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${driver}  characters`)
}

// Iteration 3: Loops
let mayusDriver = hacker1.toUpperCase();
console.log(mayusDriver)
let separateDriver = ' '
for (let i = 0; i < mayusDriver.length; i++) {
    separateDriver += (mayusDriver[i] + ' ')
}
console.log(separateDriver)

let resultado = ''
for (let i = navigator - 1; i >= 0; i--) {
    resultado += hacker2.charAt(i)
}
console.log(resultado)

if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitely')
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first")
} else {
    console.log('What?! You both have the same name?')
}