console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Jesús"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Isabel"
console.log(`The navigator's name is ${hacker2}`)
  
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let result = ""

for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i].toUpperCase()

  result += char + " "
}

console.log(result)

//3.2

let input = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
  const char1 = hacker2[i]

  input += char1
}

console.log(input)