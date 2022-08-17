// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Adam";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
const hackerJohn = hacker1.split('').join(' ');
console.log(hackerJohn.toUpperCase())

let reverseName = ""
for(let i = 0; i <= hacker2.length; i++) {
 let hackerAdam = hacker2.slice(3-i,4-i)
 reverseName = reverseName + hackerAdam;
}
console.log(reverseName)

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.") 
} else {
    console.log("What?! You both have the same name?")
}
