// Iteration 1: Names and Input
let hacker1 = "Eleanor"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Marta"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals

let driver = "Eleanor"
console.log(`The driver's name is ${driver}`)

let navigator = "Marta"
console.log(`The driver's name is ${navigator}`)

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
  } else if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
  }

// Iteration 3.1: Loops

let driverName = "Eleanor";
let driverSpaces = '';

for (let i = 0; i < driverName.length; i++) {
  driverSpaces += driverName[i].toUpperCase() + ' ';
}
console.log(driverSpaces)

// Iteration 3.2: Loops

let navigatorName = "Marta";
let navigatorNameReverseOrder = '';

for (let i = navigatorName.length-1; i>=0; i--) {
navigatorNameReverseOrder += navigatorName[i]
}

console.log(navigatorNameReverseOrder)


// Iteration 3.3: Loops