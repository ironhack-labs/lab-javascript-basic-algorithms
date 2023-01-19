// Iteration 1: Names and Input
const hacker1 = "Pepe"
const hacker2 = "Yumi"

console.log("The driver´s name is", hacker1)
console.log("The navigator´s name is", hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characteres`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let driverName = hacker1.toUpperCase()
let navigatorName = hacker2.toUpperCase()


// Iteration 3.1
let printName = ""
let char1

for (let i = 0; i < driverName.length; i++) {
    char1 = driverName.charAt(i)
    printName += char1 + " "
}
console.log(printName)


// Iteration 3.2
let char2
let reversePrint = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    char2 = hacker2.charAt(i)
    reversePrint += char2
}
console.log(reversePrint)


// Iteration 3.3
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const namePosHacker1 = driverName.charAt(0)
const namePosHacker2 = navigatorName.charAt(0)

const posHacker1 = ABC.indexOf(namePosHacker1)
const posHacker2 = ABC.indexOf(namePosHacker2)

if (posHacker1 > posHacker2) {
    console.log("The driver´s name goes first")
} else if (posHacker1 < posHacker2) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("what?! You both have the same name?")
}
