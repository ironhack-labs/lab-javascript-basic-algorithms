// Iteration 1: Names and Input

const hacker1 = "Tomas Scattini"
const hacker2 = "Ruben Rodriguez"

console.log(`The driver's name is: ${hacker1}`)
console.log(`The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

for(let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase())
}

for(let i = hacker2.length; i >=0; i--) {
  console.log(hacker2[i])
}

if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
}
