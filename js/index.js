

// Iteration 1: Names and Input

let hacker1 = "Juanca"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Isaac"

console.log(`The driver's name is ${hacker2}`)


console.log("-----------------------------------")

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

console.log("-----------------------------------")

let nameDriver = " "

for (let i = 0; i < hacker1.length; i++) {
    nameDriver += (hacker1.charAt(i) + " ")
}
console.log(nameDriver)

console.log("-----------------------------------")

let nameNavigator = " "
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameNavigator += (hacker2.charAt(i))
}
console.log(nameNavigator)

// Iteration 3: Loops
console.log("-----------------------------------")

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let firstHacker = hacker1.charAt(0)
let secondHacker = hacker2.charAt(0)
let firsMayor = 0
let secondMayor = 0
let firstTrue = false
let secondTrue = false
let thirdTrue = false

for (let i = 0; i < alphabet.length; i++) {
    firstMayor = (alphabet.indexOf(firstHacker))
    secondMayor = (alphabet.indexOf(secondHacker))
    if (firstMayor < secondMayor) {
        firstTrue = true
    } else if (secondMayor < firstMayor) {
        secondTrue = true
    }
    else {
        thirdTrue = true
    }

}
if (firstTrue) {
    console.log("The driver's name goes first.")
}
if (secondTrue) {
    console.log("Yo, the navigator goes first definitely.")
}
if (thirdTrue) {
    console.log("What?! You both have the same name?")
}