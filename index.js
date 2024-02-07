// Iteration 1: Names and Input
const hacker1 = "Luis Angel"
console.log(`"The driver's name is ${hacker1}"`)
const hacker2 = "Jose y Kenneth"
console.log(`"The navigators's names are ${hacker2}"`)

// Iteration 2: Conditionals
console.log(hacker2.length)
console.log(hacker1.length)
console.log(`It seems that the navigators has the longest name, it has 14 characters`)

// Iteration 3: Loops
const driverName = hacker1.length
let driverHorizontal = ""
capitalDriver = hacker1.toUpperCase()
for (let i = 0; i < driverName; i++){
    driverHorizontal += capitalDriver[i] + " ";
}
console.log(driverHorizontal)

let navigatorName = hacker2.length
let driverReverse = ""
for (let i = navigatorName -1; i >= 0; i-- ) {
    driverReverse += hacker2[i]
}
console.log(driverReverse)

console.log(hacker1.localeCompare(hacker2))
console.log(`Yo, the navigators goes first, definitely`)