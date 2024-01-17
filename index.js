// Iteration 1: Names and Input
const hacker1 = "Patri"
console.log("The driver's name ir " + hacker1)
const hacker2 = "Pedro"
console.log("The driver's name ir " + hacker2)

// Iteration 2: Conditionals
const driverName = "Juanito"
const navigatorName = "Maríaaa"

let lengdriverName = driverName.length
let lengnavigatorName = navigatorName.length
console.log(lengdriverName)
console.log(lengnavigatorName)

if (lengdriverName > lengnavigatorName) {
    console.log("The driver has the longest " + driverName + " , it has " + lengdriverName + " characters.")
} else if (lengnavigatorName > lengdriverName) {
    console.log("It seems that the navigator has the longest " + navigatorName + ", it has " + lengnavigatorName + " characters.")
} else console.log("Wow, you both have equally long name, " + lengdriverName + " characters!")

// Iteration 3: Loops

let name = ""
for (let i = 0; i < driverName.length; i++) {
    name += driverName[i].toUpperCase() + " "
}
console.log(name)