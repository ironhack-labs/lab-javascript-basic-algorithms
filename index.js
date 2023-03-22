// Iteration 1: Names and Input

let hacker1 = "Egide" 
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Nikolas"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1 
let hacker1New = ""
for (let i=0; i<hacker1.length; i++) {
    hacker1New +=  hacker1[i].toUpperCase() + " " 
}
console.log(hacker1New)

//3.2
let hacker2New = ""
for (let i=hacker2.length-1; i>=0; i--) {
    hacker2New += hacker2[i]
}
console.log(hacker2New)

//3.3
//for the sake of fun we change the names into: 
let driver = "Marc"
let navigator = "Marina"

let compare = driver.localeCompare(navigator)
if (compare === -1) {
    console.log("The driver's name goes first.")
}
else if (compare === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (compare === 0) {
    console.log("What?! You both have the same name?")
}