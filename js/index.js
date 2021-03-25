// Iteration 1: Names and Input
let hacker1 = "Achraf"
console.log("The driver's name is " + hacker1)
let hacker2 = "Jose"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length == hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!")
}

// Iteration 3: Loops

let special_Name = "";

for (let i = 0; i < hacker1.length; i++) {
    special_Name += hacker1.charAt(i).toUpperCase() + " ";
}

let reverse_Name = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse_Name += hacker2.charAt(i)
}

if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
}
console.log(special_Name)
console.log(reverse_Name)