// Iteration 1: Names and Input
const hacker1 = "Anastasiia"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Cecile"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  )
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}
// Iteration 3: Loops
// 3.1
let hacker1NewName = ""
for (let i = 0; i < hacker1.length; i++) {
  hacker1NewName += hacker1[i] + " "
}
console.log(hacker1NewName.toUpperCase())
// 3.2
let hacker2NewName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2NewName += hacker2[i]
}
console.log(hacker2NewName)
// 3.3
if (hacker1.toLocaleUpperCase() > hacker2.toLocaleUpperCase()) {
  console.log(`The driver's name goes first.`)
} else if (hacker2.toLocaleUpperCase() > hacker1.toLocaleUpperCase()) {
  console.log(`Yo, the navigator goes first, definitely.`)
} else {
  console.log("What?! You both have the same name?")
}
