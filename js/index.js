// Iteration 1: Names and Input
let hacker1 = "Matulan";
console.log("The driver’s name is", hacker1);
let hacker2 = "Miguel";
console.log("The navigator’s name is", hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} `)
} else {
    console.log(`They both have equal long names, with ${hacker1.length}`)
}
// Iteration 3: Loops
let capitalName = "";
let lowercaseName = "";
for (let i = 0; i < hacker1.length; i++) {
    capitalName += (hacker1[i].toUpperCase() + " ")
}
console.log(capitalName)
for (let i = hacker2.length - 1; i >= 0; i--) {
    lowercaseName += (hacker2[i])
}
console.log(lowercaseName)
if (hacker1 > hacker2) {
    console.log("The driver’s name goes first.")
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}