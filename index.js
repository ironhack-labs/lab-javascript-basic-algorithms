// Iteration 1: Names and Input
let hacker1 = "Francisco"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Carlos"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow,you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
// Iteration 3: Loops

let name = "";
for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase()
    name += " "
}
console.log(name)

let nameReverse = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
    nameReverse += hacker1[j]

}
console.log(nameReverse)




if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?")
} else {
    console.log("The driver's name goes first.")
}