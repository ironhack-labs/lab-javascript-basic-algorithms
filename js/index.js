// Iteration 1: Names and Input
let hacker1 = 'Roberto'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Alejandro'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) }

// Iteration 3: Loops
let driver = ''
hacker1.split('').forEach(letter => {
  driver += (letter+' ')
}) 
console.log(driver.toUpperCase())

console.log(hacker2.split('').reverse().join(''))

let lexographic = hacker1.localeCompare(hacker2)

if (lexographic < 0) {
  console.log(`The driver's name goes first.`)
}
if (lexographic > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
}
if (lexographic === 0) {
  console.log(`What?! You both have the same name?`)
}





