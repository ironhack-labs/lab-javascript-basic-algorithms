// Iteration 1: Names and Input
/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "antoine";
let navigator = "santiago";
console.log("The driver's name is " + driver)
console.log("The navigator's name is " + navigator)

// Iteration 2: Conditionals
/*
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (driver.length > navigator.length) {
    console.log(`Driver has the longest name, it has ${driver.length} characters`)
} else if (navigator.length > driver.length) {
    console.log(`Navigator has the longest name, it has ${navigator.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!.`)
}

// Iteration 3: Loops

/*  3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let drivercopy = "";
let navigatorcopy = "";
for (let i = 0; i < driver.length; i++) {
    drivercopy += driver[i].toUpperCase();
    if (i < (driver.length - 1)) {
        drivercopy += " ";
    }
}
console.log(drivercopy);
for (let i = navigator.length - 1; i >= 0; i--) {
    if (i == 0) {
        navigatorcopy += navigator[i].toUpperCase();
    } else {
        navigatorcopy += navigator[i];
    }
}
console.log(navigatorcopy);


/*  Bonus Time!
    Bonus 1: -------------------------------------------------------------
    Go to lorem ipsum generator and:
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word "et" appears.
    Podeis utilizar indexOf. Para que sepas, para el metodo indexOf podeis
    passar un segundo parámetro que indica a partir de donde va a encontrar la 
    palabra buscada
    Sintaxix: str.indexOf(searchValue [, fromIndex])
    ejemplo: 
        let lastPosition = 0;
        lasPosition = str.indexOf("et", lastPosition);
*/
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let count = 0;
if (str) {
    count = 1
} else {
    count = 0;
}
let i = 0;
while (i < str.length) {
    if (str[i] == " ") {
        count++;
    }
    i++;
}
console.log("There are " + count + " words in these paragraph.");


/*  Bonus 2:
    Create a new variable phraseToCheck and have it contain some string value.
    Write a code that will check if the value we assigned to this variable is
    a Palindrome. Here are some examples of palindromes:
    "Amor Roma"
    "race car"
    "stack cats"
    "taco cat"
    "put it up"
    "A man a plan a canal Panama"
    "step on no pets"
*/

let phraseToCheck = "A man a plan a canal Panama";

function palindromeCheck(str) {
    let invertedStr = "";
    str = str.replace(/\s|\,/g, "").toLowerCase()
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    if (str === invertedStr) {
        return true;
    }
    return false;
}