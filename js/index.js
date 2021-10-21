// Iteration 1: Names and Input
// 
console.log("I am ready")
let hacker1 = 'Carlos'
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = 'Eunice'
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals
let driverLength = hacker1.length
let navigatorLength = hacker2.length

if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${navigatorLength} characters!`)
}

// Iteration 3: Loops
let compareH1H2 = hacker1.localeCompare(hacker2)

if (compareH1H2 === 1) {
    console.log("The driver's name goes first.")
} else if (compareH1H2 === 0) {
    console.log('What?! You both have the same name?')
} else if (compareH1H2 === -1) {
    console.log('Yo, the navigator goes first definitely.')
}
