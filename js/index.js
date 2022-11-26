console.log("I'm Ready!!")
// Iteration 1: Names and Input
const hacker1 = "Daniel"
console.log(`The driver's name is: ${hacker1}`)
const hacker2 = "Ironhack"
console.log(`The navigator's name is: ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let name1 = ""
for (let i = 0; i < hacker1.length; i++) {
    name1 += hacker1[i].toUpperCase() + " "
}
name1 = name1.trim() 
console.log(`${name1}`)

let name2 = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    name2 += hacker2[i]
} console.log(`${name2}`)

let arrayNames = [hacker1, hacker2]
arrayNames = arrayNames.sort()
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
} else if (arrayNames[0] === hacker1) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}
