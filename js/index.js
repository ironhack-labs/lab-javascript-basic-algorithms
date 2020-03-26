// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = "driversName"
driversName = "Gabriela"
//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${driversName}`)

//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = "navitagorsName"
navigatorsName = "Patricia"

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${navigatorsName}`)

// Iteration 2: Conditionals


// a - The driver has the longest name, it has XX characters. or

// b - It seems that the navigator has the longest name, it has XX characters. or

// c - Wow, you both have equally long names, XX characters!.


if (driversName.length < navigatorsName.length) {
    console.log(`The driver has longest name, it has ${driversName.length} characters`)
} else if (driversName.length > navigatorsName.length) {
    console.log(`The navigator has the longest name, it has ${navigatorsName.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${navigatorsName.length} characters!`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

const spaceName = driversName.split('')

let finalName = ""

let finalText = ''
spaceName.forEach(function (elm) {

    let uppercaseName = elm.toUpperCase()

    finalName += uppercaseName

})

console.log(finalName)


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?