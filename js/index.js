// Iteration 1: Names and Input

let hacker1 = "Ivan"

console.log(`The driver's nanme is ${hacker1}`)
let hacker2 = "Sara"
console.log(`The navigator's nanme is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log("The driver's has the longest name, it has " + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
} else
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")


// Iteration 3: Loops

let array = ""
let caracter = hacker1.split("")
array = caracter.join(" ")
console.log(array.toUpperCase())
// space lettes
let spaceName = ""
for (i = 0; i < hacker1.length; i++) {
    spaceName += hacker1[i] + " "
}
spaceName
console.log(spaceName.toUpperCase())

let reverseName = ""

for (i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i]
}


console.log(reverseName)

let abcdc = "abcdefgfghijklmnopqrstuvwxyz"
let LowerName1 = hacker1.toLowerCase()
let LowerName2 = hacker2.toLowerCase()
for (i = 0; hacker1.length; i++) {
    for (j = 0; hacker2.length; j++) {
        if (LowerName1[i] > LowerName2[j]) {
            // console.log("Yo, the navigator goes first definely")
        }
    }
}
