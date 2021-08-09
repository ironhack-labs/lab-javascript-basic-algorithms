// Iteration 1: Names and Input
let hacker1 = "James"

console.log(`The Driver's name is ${hacker1}`)

let hacker2 = "Steve"

console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it was ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} chrachters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driverUppercase = hacker1.toUpperCase();



let reverseName = ""
for (let i = hacker1.length - 1; i > -1; i--) {
    reverseName += hacker1[i]
}
console.log(reverseName)