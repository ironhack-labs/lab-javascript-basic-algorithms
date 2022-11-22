// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
let hacker1 = "drive's name"
hacker1 = "Pedro"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "navigator's name"
hacker2 = "Gabriel"
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length)
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length === hacker2.length)
console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
else
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

let driversname = " ";
for (let i=0; i < hacker1.length; i++) {
    driversname += hacker1[i].toUpperCase() + " ";
}
console.log(driversname)

let navigatorsname = " ";
for( let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsname += hacker2[i];
}
console.log(navigatorsname)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}