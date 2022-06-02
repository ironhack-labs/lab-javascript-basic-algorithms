// Iteration 1: Names and Input
const hacker1 = "Paco"
console.log(`The drivers name is ${hacker1}`)

const hacker2 = "Maria"
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals
function getLongerString(driver, navigator) {

    if (driver.length > navigator.length) {
        console.log(`The driver has the longest name, it has ${driver.length} characters `)
    } else if (driver.length < navigator.length) {
        console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
    } else {
        console.log(`Wow, you both have equally long names, ${driver.length} ${navigator.length} characters!`)
    }
}


// Iteration 3: Loops

function getCapitalName(name) {

    const driver = "Joaquin"

    for (let i = 0; i < driver.length; i++) {
        console.log(driver[i].toUpperCase().slice(" "))
    }
}

function getReverseName(name) {

    const driver = "Pedro"

    for (let i = driver.length - 1; i >= 0; i--) {
        console.log(driver[i])
    }

}

function getOrderString(driver, navigator) {

    if (driver.localeCompare(navigator) === 1) {

        console.log(`The driver's name goes first.`)

    } else if (driver.localeCompare(navigator) === 0) {

        console.log(`Yo, the navigator goes first definitely.`)

    } else {

        console.log(`What?! You both have the same name?`)
    }
}

getOrderString("Juan", "Ana")
