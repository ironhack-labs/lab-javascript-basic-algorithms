console.log("I'm ready!")

// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Esteban"

// 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Javier"

// 1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigators's name is ${hacker2}`)

// Iteration 2: Conditionals

// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
