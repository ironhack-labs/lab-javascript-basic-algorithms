// Iteration 1: Names and Input
//
let hacker1 = "Maria"
console.log(`The driver´s name is ${hacker1} `)

let hacker2 = "Fernando"
console.log(`The navigator´s name is ${hacker2} `)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops

let nameSpace = ""

for (let i = 0; i < hacker1.length; i++) {
    nameSpace += hacker1.charAt(i)
    nameSpace += " "
}
console.log(nameSpace.toUpperCase())

let nameReverse = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    nameReverse += hacker1.charAt(i)
}
console.log(nameReverse)

if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log(`Yo, the navigator goes first definitely.`)
}
else if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log(`The driver's name goes first.`)
}

else {
    console.log(`What?! You both have the same name?`)
}

//BONUS 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let cadenaLorem = lorem.split(" ")
console.log(cadenaLorem.length)

let etCount = 0

for (let i = 0; i < cadenaLorem.length; i++) {
    if (cadenaLorem[i] === "et") {
        etCount++
    }
}
console.log(etCount)