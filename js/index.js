// Iteration 1: Names and Input

const hacker1 = 'Francisco'

console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Roberto'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } if (hacker1.length == hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

//3.1

console.log(hacker1.toUpperCase().split('').join(' '))

let iteration = ''

for (let i=0; i < hacker1.length; i++) {
  iteration += hacker1.charAt(i) + ' ';
}

console.log(iteration.toUpperCase())

//3.2

console.log(hacker2.split('').reverse().join(''))

let iteration2 = ''

for (let value of hacker2) {
  iteration2 = value + iteration2
}

console.log(iteration2)

//3.3

let result = hacker1.localeCompare(hacker2)

if (result == -1) {
  console.log(`The driver's name goes first.`)
} if (result == 1) {
  console.log('Yo, the navigator goes first definitely.')
} if (result == 0) {
  console.log('What?! You both have the same name?')
}