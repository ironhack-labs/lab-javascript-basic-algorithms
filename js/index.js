// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Pepe"
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The drive's name is ${hacker1}`)
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Antonio"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLenght = hacker1.length
const navigatorLenght = hacker2.length

if (driverLenght > navigatorLenght) {
    console.log(`The driver has the longest name, it has ${driverLenght} characters`)
} else if (navigatorLenght > driverLenght) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLenght} characters`)
} else if (navigatorLenght === driverLenght) {
    console.log(`Wow, you both have equally long names, ${driverLenght} characters!`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.split("").join(" ").toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker1.split("").reverse().join(""))

// 3.3 Depending on the lexicographic order of the strings, print:


const hackerLengthComparison = hacker1.localeCompare(hacker2)

if (hackerLengthComparison < 0) {
    console.log(`The driver's name goes first`)
} else if (hackerLengthComparison > 0) {
    console.log(`Yo, the navigator goes first definitely`)
} else if (hackerLengthComparison === 0) {
    console.log(`What?! You both have the same name?`)
}
