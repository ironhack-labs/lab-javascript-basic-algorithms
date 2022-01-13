// Iteration 1: Names and Input
let hacker1 = "Jean"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Iñigo"
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
let asdf = hacker1.split('')
console.log(asdf)
for (let i = 0; i < hacker1.length; i++) {
    console.log(asdf[i])
}