// Iteration 1: Names and Input

let hacker1 = "Jordi"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Marisa"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


let driver = hacker1.length
let navigator = hacker2.length

if (driver > navigator) {
    console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (driver < navigator) {
    console.log(`The driver has the longest name, it has ${navigator} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driver} characters!.`)
}


// Iteration 3: Loops


let name1 = ""
for (let i = 0; i < driver; i++) {
    name1 += hacker1[i].toUpperCase() + " "
}
console.log(name1)

let newname = ""
for (let i = navigator - 1; i >= 0; i--) {
    newname += hacker2[i]
}
console.log(newname)

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

