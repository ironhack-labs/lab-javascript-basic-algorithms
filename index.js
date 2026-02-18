// Iteration 1: Names and Input
let hacker1 = 'Enrique';
console.log("The drivers name is", hacker1)
let hacker2 = 'Armando';
console.log("The navigators name is", hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has ", hacker1.length, " characters.")
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has ", hacker2.length, " characters.")
} else {
    console.log("Wow, you both have equally long names,", hacker1.length, "characters!")
}

// Iteration 3: Loops
let driver = '';

for (let i = 0; i < hacker1.length; i++) {
    driver += `${hacker1[i].toUpperCase()} `
}

console.log(driver)

let navigator = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i]
}

console.log(navigator)

if (driver.localeCompare(navigator) === -1) {
    console.log("The driver's name goes first.")
} else if (driver.localeCompare(navigator) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1

const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"

let words = longText.split(' ');

console.log(words.length)

let contador = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'et') {
        contador++
    }
}

console.log(contador);

//Bonus 2

const abc = 'abcdefghijklmnopqrstuvwxyz';
const phraseToCheck = "No 'x' in Nixon";
let cleanPhrase = "";

for(let i = 0; i<phraseToCheck.length; i++){
    if(abc.indexOf(phraseToCheck[i].toLowerCase()) >= 0){
        cleanPhrase += phraseToCheck[i].toLowerCase()
    }
}

let backwardsPhrase = "";

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
    backwardsPhrase += cleanPhrase[i];
}

console.log(cleanPhrase)
console.log(backwardsPhrase)

if(cleanPhrase === backwardsPhrase){
    console.log("Its a palindrome!")
} else {
    console.log("Not a palindrome :(")
}