// Iteration 1: Names and Input
const hacker1 = 'Moha'
console.log("The driver's name is", hacker1)

const hacker2 = 'Pablo'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals



if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has ", hacker1.length, " characteres")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, " characters")
} else {
    console.log("Wow, you both have equally long names,", hacker1.length, " characters!")
}

// Iteration 3: Loops

const hacker1UpperCase = hacker1.toUpperCase()

let hacker1Space = ""
let hacker2Reverser = ""


for (let i = 0; i < hacker1UpperCase.length; i++) {
    hacker1Space += hacker1UpperCase[i] + " "
}

console.log(hacker1Space)

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i])
}

for (let i = 0; i < hacker2.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first")
        break
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.")
        break
    } else if (hacker1[i] === hacker2[i]) {
        console.log("What?! You both have the same name?")
    }
}