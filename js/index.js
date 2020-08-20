// Iteration 1: Names and Input
let hacker1 = 'Benjamin'
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = 'Juan Pablo'
console.log(`The navigator is ${hacker2}.`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}
// Iteration 3: Loops
//Primero
let hacker1 = 'Benjamin'

let nameToUpperCase = hacker1.toUpperCase()
let capNameSplit = ''
for (let i = 0; i < nameToUpperCase.length; i++) {
    capNameSplit += nameToUpperCase[i] + " "
}
console.log(capNameSplit)

//Segundo
let result = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    result += hacker2[i]
}
console.log(result)

//Tercero
let hacker1 = 'Benjamin'
let hacker2 = 'Juan'

if (hacker1.localeCompare(hacker2) < 0) {
    console.log('the drivers name goes first')
} else if (hacker1.localeCompare(hacker2) == 0) {
    console.log('What!? you both have the same name')
} else {
    console.log('Yo, the navigator goes first, deffinetly')
}