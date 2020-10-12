// Iteration 1: Names and Input
let hacker1 = "Sabela"
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Nina"
//	1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2} `)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `)
}

// Iteration 3: Loops
//3.1
hacker1 = hacker1.toUpperCase().split("").join(" ");

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1.charAt(i))
}
//3.2
for (let i = (hacker2.length - 1); i >= 0; i--) {
    console.log(hacker2.charAt(i))
}
//3.2