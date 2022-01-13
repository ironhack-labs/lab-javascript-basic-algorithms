// Iteration 1: Names and Input

const hacker1 = "Mikel Laiseca"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Anna María Porras"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const hacker1 = "Mikel Laiseca"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Anna María Porras"
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1

let space = ''

for (let i = 0; i < hacker1.length; i++) {
    space += hacker1[i] + ' '
}
console.log(space.toUpperCase())

// 3.2

let reversedName = ''

for (let i = hacker2.length - 1; i > -1; i--) {
    reversedName += hacker2[i]
}

console.log(reversedName)

//3.3
