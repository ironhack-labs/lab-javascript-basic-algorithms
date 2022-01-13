// Iteration 1: Names and Input

const hacker1 = "Guille"
const hacker2 = "Edu"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

function isLonger(driver, navigator) {
    let longer

    if (driver.length > navigator.length) {
        longer = `The driver has the longest name, it has ${driver.length} characters.`
    }
    else if (driver.length < navigator.length) {
        longer = `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
    } else {
        longer = `Wow, you both have equally long names, ${driver.length} characters!`
    }
    console.log(longer)
    return longer
}

isLonger(hacker1, hacker2)


// Iteration 3: Loops
function separateLetters(name) {
    let newName = ""
    for (let i = 0; i < name.length; i++) {
        newName += name[i] + ' '
    }
    newName = newName.toUpperCase()
    console.log(newName)
    return newName
}

separateLetters(hacker1)


function reverseOrder(name) {
    let string = ""
    for (let i = name.length - 1; i >= 0; i--) {
        string += name[i]
    }
    console.log(string)
    return string
}

reverseOrder(hacker2)

function compare(name1, name2) {
    let upperName1 = name1.toUpperCase()
    let upperName2 = name2.toUpperCase()

    let result = ""

    if (upperName1 > upperName2) {
        result = "The driver's name goes first."
    } else if (upperName1 < upperName2) {
        result = "Yo, the navigator goes first definitely."
    } else {
        result = "What?! You both have the same name?"
    }

    return console.log(result)

}
compare(hacker1, hacker2)