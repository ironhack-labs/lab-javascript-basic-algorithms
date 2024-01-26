// Iteration 1: Names and Input
const hacker1 = "exampledriver" // Define variable
console.log(`The driver's name is ${hacker1}`) // Print variable

const hacker2 = "examplenavigator" // Define variable
console.log(`The driver's name is ${hacker2}`) // Print variable

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) { // Condition 1 (driver>navigator)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) { // Condition 2 (driver<navigator)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else ( // Others (equal)
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
)

// Iteration 3: Loops
let printname = ""
for (const value of hacker1) { // Loop to go through all the string
    printname += value + " " // Add space between letters
}
console.log(printname.toUpperCase()) // Turn to uppercase

let printreverse = ""
for (let i = hacker2.length -1; i>=0; i--) { // Loop backwards direction of the string
    printreverse += hacker2[i] // Save in variable the value
}
console.log(printreverse) // Print reverse variable

// Compare strings. The lower is the first in the alphabet. Three conditionals: higher, lower, others (equal)
if (printname > printreverse) { 
    console.log("The driver's name goes first")
}
else if (printname < printreverse) {
    console.log("Yo, the navigator goes first, definitely")
}
else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet imperdiet sem. Integer volutpat, turpis eget aliquet tincidunt, elit urna posuere tellus, quis condimentum mi justo et dui. Integer fringilla metus et velit laoreet scelerisque. Etiam vel ligula scelerisque, dapibus nibh in, fermentum purus. Aliquam dictum pulvinar leo a iaculis. Nulla euismod neque a mauris mollis mollis. Nam at porttitor orci. Phasellus dictum magna ut scelerisque ultricies. Aenean eu odio eget est bibendum ullamcorper. Aliquam tristique molestie suscipit. Aliquam in nunc vel libero eleifend aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Curabitur eget dapibus leo. Pellentesque in eros nec lacus eleifend tincidunt sed sed neque. Nullam ac semper urna. Duis sit amet sapien consectetur, lobortis nisl sed, rutrum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum mi vel tortor commodo, eu facilisis augue maximus. Morbi tortor est, sodales luctus sagittis in, maximus at diam. Aenean ut leo scelerisque, finibus lectus quis, auctor dui. Maecenas ultrices ipsum magna, quis fringilla nunc posuere quis. Quisque ac sapien odio. Nunc pulvinar sagittis lectus, non ultrices ipsum. Nullam nec tempus urna. Donec id urna eget ante pretium fringilla quis eget lacus. Morbi et massa fermentum, mollis justo sit amet, efficitur leo. Nulla ut elementum nisi. Maecenas malesuada ligula sit amet nibh aliquet, at tincidunt nisi vulputate. Cras gravida ultricies leo eu dignissim. Praesent interdum ante egestas, accumsan augue vitae, imperdiet enim."
console.log(longText)

let spaces = 0 // variable to count spaces
for (const value of longText) { // loop to count spaces
    if (value == " ") {
        spaces += 1
    }
}
let words = spaces + 1 // words is spaces + 1
console.log(words) // print number of words

let numEt = 0 // variable to count number of "et"
for (let i = 0; i <longText.length; i++) { // loop to count e + t or E + t
    if ((longText[i] == "e" || longText[i] == "E")  && longText[i+1] == "t") {
        numEt += 1
    }
}
console.log(numEt) // print number of "et"

// Bonus 2
let phraseToCheck = prompt("Please enter a Palindrome Phrase", "A man, a plan, a canal, Panama!").toLowerCase() 
// Prompt to take input of the user. Adding a default example of Palindrome string
// Lower case the initial string to consider "E" and "e" as the same

let adaptedPhraseToCheck = "" // Define variable to normalize initial string

// Loop to remove spaces, commas and dots in new variable with normalized initial string
for (const value of phraseToCheck) {
    if (value != " " && value != "," && value != "." && value != "!" && value != "¡" && value != "?" && value != "¿" && value != "'") {
        adaptedPhraseToCheck =  adaptedPhraseToCheck + value
    }
}


let reversePhrase = "" // Define variable to reverse normalized string

// Loop to reverse normalized string
for (let i = adaptedPhraseToCheck.length -1; i>=0; i--) {
        reversePhrase =  reversePhrase + adaptedPhraseToCheck[i]
    }

// Compare if normalized and reverse strings are the same. If they are the same, the initial string is Palindrome!
if (adaptedPhraseToCheck == reversePhrase) {
    console.log("Your string is Palibdrome!")
}