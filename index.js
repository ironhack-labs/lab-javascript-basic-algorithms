// Iteration 1: Names and Input
const hacker1 = "Jhon"
console.log("The driver's name is jhon")
const hacker2 = "Marcus"
console.log("The navigator's name is Marcus")


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
// Iteration 3: Loops

//3.1

let spacedUpperCase = ""

for (let i = 0; i < hacker1.length; i++) {
    spacedUpperCase += hacker1[i].toUpperCase() + " "
}

console.log(spacedUpperCase.trim()); v

// 3.2

let reversedName = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i]
}

console.log(reversedName)

// 3.3

let orderalph = hacker1.localeCompare(hacker2);

if (orderalph < 0) {
    console.log("The driver's name goes first.")
} else if (orderalph > 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}