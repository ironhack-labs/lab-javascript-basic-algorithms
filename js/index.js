//Instructions
//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Luca'
//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Tuveri'
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's is ${hacker2}"`)
//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. //or
//- It seems that the navigator has the longest name, it //has XX characters. or
//- Wow, you both have equally long names, XX characters!.
if (hacker1.length > hacker2.length) { console.log(`'The driver has the longest name, it has ${hacker1.length} characters'`) }
else if (hacker2.length > hacker1.length) { console.log(`'It seems that the navigator has the longest name, it has ${hacker2.length} characters'`) }
else { console.log(`'Wow, you both have equally long names, ${hacker2.length} characters'`) }
//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, //separated by a space and in capitals i.e. "J O H N"
let upperCased = hacker1.toUpperCase()
let space = " "
let upperCaseName = "";
for (let i = 0; i < upperCased.length; i++) {
    upperCaseName += upperCased[i] + space
}
console.log(upperCaseName)


//3.2 Print all the characters of the navigator's name, in //reverse order. i.e. "nhoJ"
let result = ''
for (let i = hacker1.length - 1; i >= 0; i--) {
    result += hacker1[i]
}
console.log(result)
//3.3 Depending on the lexicographic order of the strings, //print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

if (hacker1.localeCompare(hacker2) < 0) { console.log("The driver's name goes first") }
else if (hacker1.localeCompare(hacker2) > 0) { console.log("Yo, the navigator goes first definitely.") }
else { "What?! You both have the same name?" }
/*if (hacker1[0]>hacker2[0]){console.log("The driver's name goes first.")}

/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/



/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/