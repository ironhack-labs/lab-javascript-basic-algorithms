console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'Adrian'

console.log(`"The driver's name is ${hacker1}"`)

const hacker2 = 'Luis'

console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals
hacker1.length
hacker2.length

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverName = ''

for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i] + ' '
}
console.log(driverName.toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order.
let hackerLength = hacker2.length - 1
let navigatorName = ''

for (let i = hackerLength; i >= 0; i--) {
    const word = hacker2[i]
    navigatorName += word
}
console.log(navigatorName)

// 3.3 Depending on the lexicographic order of the strings
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }