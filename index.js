// Iteration 1: Names and Input
let hacker1 = "Alexis"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Paul"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

else {
  console.log("There is a problem")
}

// Iteration 3: Loops

/* Uppercase with spaces */
let nameUpperSpace = ""

for (let i = 0; i < hacker1.length; i++) {
  nameUpperSpace += hacker1[i] + " "
}

nameUpperSpace = nameUpperSpace.toUpperCase()

console.log(nameUpperSpace)

/* Reversed String */
let nameReversed = ""

for (let j = hacker1.length - 1; j >= 0; j--) {
  nameReversed += hacker1[j]
}

console.log(nameReversed)


/* Lexicographic order */


let result = hacker1.localeCompare(hacker2)

if (result < 0) {
  console.log("The driver's name goes first.")
}

else if (result > 0) {
  console.log("Yo, the navigator goes first, definitely.")
}

else {
  console.log("What?! You both have the same name?")
}