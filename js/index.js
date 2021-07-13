// Iteration 1: Names and Input
const hacker1 = "Cheryl"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Amy"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names,${hacker2.length} charaters.`)
  }

// Iteration 3: Loops
let newValue1 = ""
for (let i = 0 ; i < hacker1.length; i++) {
  newValue1 += hacker1[i].toUpperCase() + " "
}
console.log(newValue1)

let newValue2 = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  newValue2 += hacker2[i]
}
console.log(newValue2)

console.log(hacker2.split("").reverse().join(""))
console.log(hacker1.toUpperCase().split("").join(" "))

const oneUpper = hacker1.toUpperCase()
const twoUpper = hacker2.toUpperCase()
let compared = oneUpper.localeCompare(twoUpper)
 if (compared < 0) {
   console.log("The driver's name goes first")
 } else if (comopared > 0) {
   console.log("Yo, the navigator goes first definitely")
 } else {
   console.log("Say Whaat?")
 }