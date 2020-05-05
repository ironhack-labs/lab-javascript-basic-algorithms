// Names and Input
// 1. Create a variable hacker1 with the driver's name
let hacker1 = "Nardo";

// 2. Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 3. Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = prompt("Anne", "Anne");

// 4. Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);

// Conditions
// 5. Depending on which name is longer, print:
//      The Driver has the longest name, it has XX characters or
//      Yo, navigator got the longest name, it has XX characters or
//      wow, you both got equally long names, XX characters!!

if (hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters`);
}

// Loops
// 6. Print all the characters of the driver 's name, separated by a space and in capitals ie. "J O H N"
let driverUpperCases = "";
for (let i = 0; i < hacker1.length; i++){
    driverUpperCases += hacker1[i] + " ";
}
console.log(driverUpperCases);

// 7. Print all the characters of the navigator 's name, in reverse order. ie. "nhoJ"
let navigatorReverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);
// 8. Depending on the lexicographic order of the strings, print:
//      The driver 's name goes first
//      Yo, the navigator goes first definitely
//      What ? !You both got the same name ?

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver ${hacker1} goes first`);
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely`);
} else if (hacker1 === hacker2) {
    console.log(`What ? !You both got the same name ?`);
}

// Bonus Time!
// 9. Ask the user for a new string and check if it 's a Palindrome. Examples of palindromes:
//      "A man, a plan, a canal, Panama!"
//      "Amor, Roma"
//      "race car"
//      "stack cats"
//      "step on no pets"
//      "taco cat"
//      "put it up"
//      "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Function to Sanitize the string
function sanitizeString(parameter){
    let toLowerCaseValues = parameter.toLowerCase();
    let sanitizedString = "";
    for (let i = 0; i < parameter.length; i++) {
        if (toLowerCaseValues[i] <= "z" && toLowerCaseValues[i] >= "a") {
            sanitizedString += toLowerCaseValues[i];
        }
    }
    return sanitizedString;
}

// Function to Reverse the string
function reverseTheString(parameter){
    let reversedSanitizedString = "";
    for (let i = parameter.length - 1; i >= 0; i--) {
        reversedSanitizedString += parameter[i];
    }
    return reversedSanitizedString;
}

// Function to check if the string is a Palindrome
function checkIfPalindrome(parameter1) {
    if (reverseTheString(parameter1) === sanitizeString(parameter1)) {
        console.log(`The word "${parameter1}" is a Palindrome.`);
    } else {
        console.log(`The word "${parameter1}" is not a Palindrome.`);
    }
}
checkIfPalindrome("Anna");
checkIfPalindrome("Nardo");


// 10. Go to lorem ipsum generator and:
//      Generate 3 parragraphs.Store the text in a String
let parragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//      Make your program count the number of words in the string
function countNumberOfWords(parameter) {
    let numberOfWords = 1;
    for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] === " ") {
            numberOfWords += 1;
        }
    }
    console.log(`Number of words is ${numberOfWords}.`);
}
countNumberOfWords(parragraph1);

//      Make your program count the number of times the latin word et appears
function countTheWordEt(parameter) {
    let numberOftimesEt = 0;
    // let splittedParragraphIntoWords = parameter.split(/[\s,.]+/);
    // for (let i = 0; i < splittedParragraphIntoWords.length; i++) {
    //     if (splittedParragraphIntoWords[i] === "et") {
    //         numberOftimesEt += 1;
    //     }
    // }
    for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] === "e" && parameter[i+1] === "t" && parameter[i+2] === " " && parameter[i-1] === " ") {
            numberOftimesEt += 1;
        }
    }
    console.log(`Number of time the latin word "et" is counted is ${numberOftimesEt}.`);
}
countTheWordEt(parragraph1);

