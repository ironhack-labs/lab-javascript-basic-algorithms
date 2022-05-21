// Iteration 1: Names and Input

let hacker1 = "Eduard"
console.log("The driver's name is " + hacker1)

let hacker2 = "Patricia"
console.log("The navigator's name is " + hacker2)

//
// Iteration 2: Conditionals

// 2.1

if (hacker1.length > hacker2.length) {

    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")

}else if (hacker1.length < hacker2.length) {

    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")

}else if (hacker1.length === hacker2.length) {

    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops

// 3.1

console.log(hacker1.toUpperCase().split("").join(' '))

// 3.2

console.log(hacker2.split("").reverse().join(""))

// 3.3

let hacker1Letter = hacker1.split("")
let hacker2Letter = hacker2.split("")

if (hacker1Letter[0] > hacker2Letter[0]) {
    console.log("The driver's name goes first.")
}else if (hacker1Letter[0] < hacker2Letter[0]) {
    console.log("Yo, the navigator goes first definetly.")
}else if (hacker1Letter === hacker2Letter) {
    console.log("What?! You both have the same name?")
}

// bonus 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

let text1 = text.split("")
let etCount = 0

console.log("Words " + text.split('').length);


console.log("Et matchs: " + (text.match(/et/g) || []).length); // ["et", "et", "et."].length


// bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"
phraseToCheck = phraseToCheck.replace(/[\s,.!¡¿?:;']/g, '').toLowerCase();
let phraseToCheckPunctuationless = ""


if (phraseToCheck.toLowerCase().split("").reverse().join("") === phraseToCheck) {
    console.log("true")
}

phraseToCheckPunctuationless = phraseToCheck.replace(/[\s,.!¡¿?:;']/g, '').toLowerCase();

if (phraseToCheck === phraseToCheckPunctuationless) {
    console.log(true)
}