// Iteration 1: Names and Input


let hacker1 = 'Gonzalo'
const driver = `The driver's name is ${hacker1}`
console.log(driver)

let hacker2 = 'Marta'
const navigator = `The navigator's name is ${hacker2}`
console.log(navigator)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names 3 characters`)
}


// Iteration 3: Loops

for (i = 0; i <= hacker1.length - 1; i++) {
    console.log(hacker1[i].toUpperCase())
}

for (i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i].toUpperCase())
}

let driverInitial = hacker1.charAt(0)
let navigatorInitial = hacker2.charAt(0)

if (driverInitial > navigatorInitial) {
    console.log("The driver's name goes first")
} else if (driverInitial < navigatorInitial) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What ? !You both have the same name ?")
}


