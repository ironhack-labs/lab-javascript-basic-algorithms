// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Ignacio";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Carlos";

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print: 
- The driver has the longest name, it has XX characters. or 
- It seems that the navigator has the longest name, it has XX characters. or 
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let splitDriver = hacker1.toUpperCase().split("").join(" ");
console.log(splitDriver)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navigatorReverse = hacker2.split("").reverse().join("")
console.log(navigatorReverse);

/*
3.3 Depending on the lexicographic order of the strings, print: 
- The driver's name goes first. 
- Yo, the navigator goes first definitely. 
- What?! You both have the same name?
*/

let lexResult = hacker1.localeCompare(hacker2)

if (lexResult === 1) {
    console.log("The driver's name goes first.")
} else if (lexResult === -1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

/*
Bonus 1:

Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let splitText = text.split(" ")

console.log(`There are ${splitText.length} words in this string.`)

let etNum = 0

for (let i = 0; i < splitText.length; i++) {
    
    if (splitText[i] === "et") {
        etNum++
    } 

}

console.log(`The word "et" appears ${etNum} times in this string`)

/*
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃
*/

let phraseToCheck = "Dabale arroz a la zorra el abad"

let splitSentence = phraseToCheck.toLowerCase().replace(/[^0-9a-z]/gi, '').split('')

let cleanSentence = splitSentence.join("")

let reverseSentence = splitSentence.reverse().join("")

if (cleanSentence === reverseSentence) {
    console.log("This is a palindrome")
} else {
    console.log("This is not a palindrome")
}