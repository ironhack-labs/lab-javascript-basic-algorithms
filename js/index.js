// Iteration 1: Names and Input
const hacker1 = "Ricardo"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Roberto"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

// Iteration 3: Loops
let sum = ""
for (let i = 0; i < hacker1.length; i++) {
  sum += hacker1[i] + " "
}
console.log(sum.toUpperCase())

let subs = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  subs += hacker2[i]
}
console.log(subs)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}
