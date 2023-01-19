

// Iteration 1: Names and Input
const hacker1 = prompt()
console.log(`The driver’s name is ${hacker1}`)
const hacker2 = prompt()
console.log(`The navigator’s name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have qually long names, ${hacker1.length} charactheres!.`)
}


// Iteration 3: Loops
let result =“ ”
for (let i = 0; i > hacker1.length; i++) {
    result = hacker1.charAt(i) + ” ”
}
console.log(result)