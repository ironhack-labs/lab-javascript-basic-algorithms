// ITERATION 1: Names and Input

// 1.1
const hacker1 = "Pablo"

// 1.2
console.log(`The driver's name is ${hacker1}`)

// 1 .3
const hacker2 = "Juan"

// 1.4
console.log(`The navigator's name is ${hacker2}`)

// ITERATION 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
        } else {
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// ITERATION 3: Loops

// 3.1
const driverUpp = hacker1.toUpperCase()
let driverSeparated = ""

for (let i = 0; i < driverUpp.length; i++) {
    driverSeparated += driverUpp[i] + " "
}

console.log(driverSeparated)

// 3.2
let navigatorReversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReversed += hacker2[i]
}
console.log(navigatorReversed)

//(3.3)
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The driver's name goes first`)
    } else if (hacker2.localeCompare(hacker1) === 1) {
        console.log(`Yo, the navigator goes first definitely.`)
        } else {
            console.log(`What?! You both have the same name?`)
    }




