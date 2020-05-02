// Iteration 1: Names and Input
const hacker1 = 'Nidian'
console.log(`"The driver's name is ${hacker1}"`)

const hacker2 = 'Maria'
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1Long > hacker2Long) {
  console.log(`The driver has the longest name, it has ${hacker1Long } characters`)
} else if (hacker2Long > hacker1Long) {
  console.log(`It seems that the navigator has the longest name, it has 
  ${hacker2Long} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2Long} characters!`)
}