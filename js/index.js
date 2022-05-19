// Iteration 1: Names and Input
/*
// console.log("I'm ready!");

let hacker1 = "Homer"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Moe"
console.log(`The navigators's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}

// Iteration 3: Loops

// Driver upperCase
let driverName = ""

for (let i = 0; i < hacker1.length; i++) {

    driverName += hacker1[i] + " "

}

console.log(driverName.toUpperCase())

// Navigator reverse 
let navigatorName = ""

for (let i = hacker2.length -1; i >= 0; i--) {

    navigatorName += hacker2[i]

}

console.log(navigatorName)

// Lexicographic order
if (hacker1.localeCompare(hacker2) === 1) {

    console.log("The driver's name goes first.")    

} else if (hacker1.localeCompare(hacker2) === -1) {

    console.log("Yo, the navigator goes first definitely. ")   

} else {

    console.log("What?! You both have the same name?")

}
*/

// BONUS 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let loremWord = lorem.split(' ')
console.log(`Number of words is: ${loremWord.length}`)

let etCounter = 0;

for (let i = 0; i < loremWord.length; i++) {
    if (loremWord[i] === "et") {
        etCounter++
    }
}

console.log(`Number of "et" words: ${etCounter}`)

// BONUS 2