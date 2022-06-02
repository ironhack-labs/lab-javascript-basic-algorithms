console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "Nico"
const hacker2 = "Monica"
console.log(`The driver's name is ${hacker2}`)
console.log(`The navigator's name is ${hacker1}`)
// Iteration 2: Conditionals
if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else {
    if (hacker1.length > hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
    } else {
        if (hacker2.length == hacker1.length) {
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
        }
    }
}

// Iteration 3: Loops

let hackerSpace = hacker2.split("")
console.log(hackerSpace)
let newHac = ""

for (let i = 0; i < hackerSpace.length; i++) {
    newHac += hackerSpace[i] + " "
}
console.log(newHac.toUpperCase())

//inverso

for (let i = hacker1.length - 1; i >= 0; i--)
    console.log(newHac1.charAt())



