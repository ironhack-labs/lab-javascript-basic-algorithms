// Iteration 1: Names and Input
let hacker1 = "Manolo"
let hacker2 = "Pepe"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if(hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, It has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
let hacker1Mod = ""
let hacker2Mod = ""

for(let i = 0; i < hacker1.length; i++) {
  hacker1Mod += hacker1[i].toUpperCase() + " "
}

console.log(hacker1Mod)

for(let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Mod += hacker2[i]
}

console.log(hacker2Mod)

if(hacker1.localeCompare(hacker2) ==-1) {
  console.log(`The driver's name goes first.`)
} else if(hacker1.localeCompare(hacker2) ==1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}