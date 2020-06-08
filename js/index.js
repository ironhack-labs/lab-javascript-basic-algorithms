// Iteration 1: Names and Input

let hacker1 = 'Joe'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Jane'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops

let x = ""
for (const char of hacker1) {
  x = x + char.toUpperCase() + ' '
}
console.log(x)

let y = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  y = y + hacker2[i]
}
console.log(y)

if (hacker1 < hacker2) {
  console.log('The drivers name goes first.')
}
else if ( hacker2 < hacker1) {
  console.log('Yo, the navigator goes first definetly')
}
else {
  console.log('What?! You both have the same name?')
}