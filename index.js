// Iteration 1: Names and Input
let hacker1 = "Bob"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Marley"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
  }

// Iteration 3: Loops
let driverCapital = ""
for (let i = 0; i < hacker1.length; i++) {
  driverCapital += hacker1[i].toUpperCase() + " "
}
console.log(driverCapital)

let navigatorReverse = ""
for (let i = hacker2.length -1; i >= 0 ; i--) {
  navigatorReverse += hacker2[i]
}
console.log(navigatorReverse)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1:
let longtext = ""

let words = 0
let wordEt = 0
let allWords = longtext.split(" ")
for (let i = 0; i <= allWords.length; i++) {
  words++
  if (allWords[i] == "et")
    wordEt++
}
console.log (`The number of words is ${words}`)
console.log (`The number of times the word et appears is ${wordEt}`)