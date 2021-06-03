// Iteration 1: Names and Input
const hacker1 = 'Samuel'
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = 'Pablo'
console.log(`The driver´s name is ${hacker2}`)


// Iteration 2: Conditionals
const length1 = hacker1.length
const length2 = hacker2.length
if (length1 > length2) {
    console.log(`The driver has the longest name, it has ${length1} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${length2} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${length1}
 characters!.`)
}

// Iteration 3: Loops
let longName = "Carlos"
let splitter = longName.split("")

console.log(splitter)

let result = splitter.join(" ")
console.log(result)

console.log(splitter.reverse().join(""))

let n = hacker1.localeCompare(hacker2)
console.log(n)

switch (n) {
    case -1: console.log("Yo, the navigator goes first definitely.")
        break
    case 0: console.log("What?! You both have the same name?")
        break
    default: console.log("The driver's name goes first.")
}