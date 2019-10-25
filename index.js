// Iteration 1: Names and Input
console.log("I'm ready");

let hacker1 = "Veronica";
let hacker2 = "Michel";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator name is ${hacker2}`)

//Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
let longestName = (hacker1.length > hacker2.length) ? `The Driver has the longest name, it has ${hacker1.length} characters` : (hacker2.length > hacker1.length) ? `Yo, navigator got the longest name, it has ${hacker2.length} characters` :
`Wow, you both got equally long names, ${hacker1.length} characters!`

console.log(longestName)

//Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

let spaceCapitalName1 = hacker1.toLocaleUpperCase().split('').join(' ')
console.log(spaceCapitalName1)

// OR

let upperCaseStr = hacker2.toUpperCase()
let spaceCapitalName2 = ''
for (var i = 0; i < upperCaseStr.length; i++) {
    spaceCapitalName2 += upperCaseStr.charAt(i) + ' ';
}
console.log(spaceCapitalName2)

// 3.2 Print all the characters of the navigator's name, in reverse order.

let reverseName = hacker2.split("").reverse().join("")
console.log(reverseName)

//3.3 Depending on the lexicographic order of the strings, print:

/* The string.localeCompare() is an inbuilt function in JavaScript which is used to compare any two elements 
and returns a positive number if the reference string is lexicographically greater than the compare string and 
negative number if the reference string is lexicographically smaller than the compare string and zero (0) if 
the compare and reference strings are equivalent. */

let lexicographicCompare = (hacker1.localeCompare(hacker2) < 0) ? "The driver's name goes first." : 
(hacker1.localeCompare(hacker2) > 0) ? "Yo, the navigator goes first definitely." : "What?! You both got the same name?"

console.log(lexicographicCompare)

//Bonus Time

let loremParagraphs = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus odio, semper vitae venenatis eu, tempus eget risus. Fusce aliquet tellus eget ante tempor feugiat a a diam. Sed id lectus a nisl imperdiet pellentesque quis eu ante. Phasellus eget sem laoreet, dictum dui fermentum, laoreet neque. Donec lobortis lectus in diam hendrerit mollis. Cras in tempor leo. Praesent placerat tellus massa, quis maximus justo pharetra vitae. Maecenas enim massa, porttitor at quam vel, dictum mollis lacus.

Morbi non ipsum mauris. Sed suscipit justo a justo commodo, vel maximus turpis placerat. Fusce placerat massa eros, eget sodales nisl scelerisque ut. Morbi egestas magna vitae porttitor bibendum. Maecenas aliquam metus lorem, id malesuada quam fermentum at. Nam vel est id sapien molestie iaculis. Morbi non lorem eleifend, eleifend augue consectetur, vehicula lectus. In fermentum nunc nisi, at interdum orci facilisis eget. Suspendisse eros metus, pellentesque et varius cursus, vulputate non odio. Maecenas laoreet vestibulum mi mattis tincidunt. Praesent luctus bibendum quam, efficitur pulvinar lacus pellentesque id. Morbi venenatis pharetra magna a posuere.

Praesent vel pellentesque magna. Vestibulum viverra nulla eu tortor vestibulum, a vehicula turpis vehicula. Maecenas elit quam, dignissim sit amet libero sit amet, mattis feugiat neque. Curabitur rhoncus leo semper, vehicula nulla a, rhoncus massa. Fusce placerat pharetra nisi in bibendum. Vestibulum sit amet orci eu odio pulvinar fermentum vitae ac tortor. Curabitur diam ex, laoreet eu molestie nec, aliquet consequat arcu. Phasellus vel efficitur magna. Sed hendrerit placerat libero, non consectetur ex rutrum eget. Maecenas sit amet magna quis est congue accumsan sed id dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean efficitur egestas ipsum.`

// /\s/ splits the array at every kind of whitespace character
let numberOfWords = loremParagraphs.trim().split(/\s+/).length
console.log(numberOfWords)

// Make your program count the number of times the Latin word et appears.
let wordCheck = " et "
let numberOfSpecificWord = loremParagraphs.toLocaleLowerCase().replace(/\W/g, ' ').split(wordCheck).length //The following is the /\W/g is a regex to strip non-alphanumeric chars from an input string
console.log(numberOfSpecificWord)

/* A regular expression, regex or regexp (sometimes called a rational expression) is a sequence of characters that define a search pattern. 
Usually such patterns are used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation. 
It is a technique developed in theoretical computer science and formal language theory. */

//Check if it is a Palindrome

let palindrome = 'A man, a plan, a canal, Panama!'
let compareString = palindrome.toLowerCase().replace(/\W/g, ''); //The following is the /\W/g is a regex to strip non-alphanumeric chars from an input string
let reversedString = compareString.split('').reverse().join('');
if (compareString === reversedString) console.log(`The string: ${palindrome} is a palindrome.`)
else console.log(`The string: ${palindrome} is not a palindrome.`)

