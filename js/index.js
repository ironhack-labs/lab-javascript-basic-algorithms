// Iteration 1: Names and Input
const hacker1 = "Bruno";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Someone";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let outputString = ""; //creats a mutable string type variable
for (let i = 0; i < hacker1.length; i++) {
    outputString += hacker1[i].toUpperCase() + " "; // inserts each iteration into the variable capitalized; console.log(outputString) returns "B R U N O " (an extra space at the end)
}
console.log(outputString.slice(0,(outputString.length-1))); // returns "B R U N O"
/*
.substring() selects the wanted part of the string
0 difines the string index that is the start of the sustring
(outputString-length - 1) selects the last but one string index that is the last of the substring, there for eliminating the extra space
*/

// 3.2 Print all the characters of the navigator's name, in reverse order
console.log(hacker2.split("").reverse().join(""));
/*
.split("") turns the string in an array like ["S", "o", "m", "e", "o", "n", "e"]
.reverse() reverses the order of the array's indexes
.join("") merges all of the string typed indexes, by the current order, into one
console.log() returns the content of the array that is now a single string
*/

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.");
}
//- Yo, the navigator goes first definitely.
if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first definitely.")
}
//- What?! You both have the same name?
if (hacker1.localeCompare(hacker2) == 0) {
    console.log("What?! You both have the same name?")
}
// a.localeCompare(b) compares the content of a whith b
// if a ocours befor b, returns -1
// if a ocours after b, returns 1
// if a === b, returns 0

//============ " ===========
// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string
let threeParagraphsLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus vitae enim sit amet mattis. Duis convallis viverra sagittis. Curabitur bibendum metus magna, sit amet efficitur nibh venenatis nec. Quisque maximus risus sed turpis rutrum vulputate. Phasellus ornare facilisis maximus. Donec tempor mi diam, non pulvinar quam semper ut. Aliquam nec risus vitae purus gravida malesuada. Morbi fringilla tincidunt ultrices. Nunc tincidunt, neque a tincidunt luctus, quam libero pulvinar augue, vel pharetra dolor justo vitae erat. Vestibulum quis feugiat quam. Ut molestie arcu ut nisl fringilla, eget maximus tortor dapibus. Quisque non mollis leo, ornare molestie nisi. Suspendisse potenti. Nunc et neque pulvinar, ornare ligula id, scelerisque justo.\n" + "Nullam aliquam, sem vel vehicula luctus, ex mauris porta nisl, in commodo quam dolor non nulla. Praesent facilisis ipsum eu nulla aliquet pharetra. Mauris pretium fringilla nulla id sodales. Sed at massa nec leo ornare suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sed metus nunc. Quisque ut justo at augue pharetra lacinia. Ut ornare interdum interdum.\n" + "Donec nulla risus, semper ac ex nec, faucibus imperdiet ante. Ut eget ligula tristique, iaculis nunc nec, malesuada mi. Praesent tincidunt odio ac sagittis malesuada. Donec vel elit vestibulum urna bibendum accumsan maximus ac mauris. Vivamus ornare ligula id nisl iaculis ultrices. Integer vehicula consequat ipsum, vitae laoreet dolor feugiat non. Praesent ac congue est, et malesuada elit. Phasellus interdum mi et est ultricies, nec dictum augue sollicitudin. Donec euismod, orci quis scelerisque luctus, neque ex mattis orci, sit amet euismod sem felis eu odio. Fusce vel semper erat." // concantenating the paragraphs and adding \n at the end of each paragraph makes the string behave like a multiparagrph string

// Make your program count the number of words in the string
console.log(threeParagraphsLorem.split(" ").length); // returns 259
// .split(" ") turns the string into an array using the space as a reference, turning each word into an index
// .length returns the length of the array, ther for the total of words

// Make your program count the number of times the Latin word et appears
console.log(threeParagraphsLorem.split(" et ").length - 1);
// following the same logic has the previous exercise point, .split(" et ") every time " et " ocours it acts like a coma(,) in the array, then .length counts the number of indexes (divisions), because we want the number of times that " et " ocours the length has to be subtracted by one (-1)
// et must be referenced by " et " and not by "et" because it isolates the word and not any alyke combination


//============== " ============
// Bonus 2

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

let phraseToCheck = 'Ana Eve Ana';
// as seen on https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/ after google search

let identifyChar = /[^A-Za-z0-9]/g; //creates an identificatio of unwanted character
let str = phraseToCheck.toLowerCase().replace(identifyChar, ''); // makes every character to the same case and excludes unwanted characters
for (let j = 0; j < (str.length / 2); j++) {
    if (str[j] !== str[str.length - 1 - j]) {
        console.log(`'${phraseToCheck}' is not a palindrome.`); // iterates thrugh eache character of bouth halfs of the string and compares eache oposit one
    } else {
        console.log(`'${phraseToCheck}' is a palindrome.`);
    }
}
// (the result of the google search presents this as a function, because we didn't cover functions in class I chose not to do so)