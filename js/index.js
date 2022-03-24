// Iteration 1: Names and Input
let hacker1 = "XXXX";
let hacker2 = "YYYY";
console.log(`The navigator´s name is ${hacker2}`)
//
// Iteration 2: Conditionals
let driverName = "Cristian";
let navigatorName = "Jesús";

if (driverName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${driverName.length} characters`)
} else if (driverName.length < navigatorName.length) {
    console.log(`It seems that teh navigator has the longest name, it has ${navigatorName.lenght} characteres`)
} else if (driverName.length === navigatorName.length) {
    console.log(`Wow, you both have equally long names,  ${driverName.length} characters!.`)
}

// Iteration 3: Loops

let driverName = "Cristian";
let driverUpper = driverName.toUpperCase()

let counter = 0
for (let i = 0; i < driverUpper.length; i++) {
    console.log(driverUpper[i])
}
