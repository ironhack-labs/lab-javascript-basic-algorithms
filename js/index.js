// Iteration 1: Names and Input
let hacker1 = "andrea";
console.log(`"The driver's name is ${hacker1}`);

let hacker2 = "Andreas";
console.log(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let result = '';
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

// additional you can use .trim() to remove empty spaces from the start and end of a string
result.trim();

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversedName = "";
for (let i = 1; i <= hacker2.length; i++) {
    reversedName += hacker2[hacker2.length - i];
}
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings, print:
// best solution without loops
if (hacker1 > hacker2) console.log("Yo, the navigator goes first definitely.");
else if (hacker1 < hacker2) console.log("The driver's name goes first.");
else console.log("What?! You both have the same name?");

// complex, not clean solution with while loops
let i = 0;      // index for accesing each character of both strings
let hacker1Lowercase = hacker1.toLowerCase();   // names to lowercase so only the alphabetical order matters
let hacker2Lowercase = hacker2.toLowerCase();

if (hacker1Lowercase === hacker2Lowercase){
    console.log("What?! You both have the same name?"); // the easiest case is checked, see if both strings are exaclty the same
} else if (hacker1Lowercase.length < hacker2Lowercase.length)   // check if driver name is the shortest
    {
    while (hacker1Lowercase[i] === hacker2Lowercase[i] && i < hacker1Lowercase.length) // loop through both names and increse "i" until one letter is different in both names or until the drivers length
    {
        i++;
    }
    if (hacker1Lowercase[i-1] === hacker2Lowercase[i-1] && i === hacker1Lowercase.length) // checks if the names are equal until the drivers name length, if yes, drivers names goes first
    {
        console.log("The driver's name goes first.");
    } else if (hacker1Lowercase[i] < hacker2Lowercase[i])   // if "i" did not reach the end of drivers name, it means they have different letters in the "i" position, if the drivers letter goes first:
    {
        console.log("The driver's name goes first."); 
    } else {
        console.log("Yo, the navigator goes first definitely."); // the navigators name goes first
    }
} else { // same process but in case the the if navigators name is the shortest
    while (hacker1Lowercase[i] === hacker2Lowercase[i] && i < hacker2Lowercase.length) 
    {
        i++;
    }
    if (hacker2Lowercase[i-1] === hacker1Lowercase[i-1] && i === hacker2Lowercase.length) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (hacker2Lowercase[i] < hacker1Lowercase[i]) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("The driver's name goes first.");
    }
}

// bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor semper mi. Nulla facilisi. Mauris faucibus, erat id condimentum vulputate, orci mauris ultrices mauris, ut mattis diam erat quis lacus. Ut ipsum magna, condimentum sit amet ipsum nec, posuere finibus leo. Donec dignissim vel mi vitae tempor. Aenean dignissim in mauris sed venenatis. Etiam interdum tortor nec purus pharetra, id dignissim lorem iaculis. In et luctus lorem, quis faucibus est. Sed nisl ex, cursus ultrices volutpat eget, rutrum sit amet eros. Duis dignissim eros sapien. Donec blandit, diam ut commodo venenatis, lorem est finibus erat, et mollis dui justo lacinia nisl. Vivamus eget sem nisi.";

let wordCount = 1;
let etCount = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
    wordCount++;
    }
    if (text.slice(i, i + 4) == ' et ')     //check if the word is between words
    {
        etCount++;
    } else if (text.slice(i, i + 3) == 'Et ')   //check if the word is at the beginning of a sentence
    {
        etCount++;
    } else if (text.slice(i, i + 4) == ' et.')  //check if the word is at the end of a sentence
    {
        etCount++;
    }
}
console.log(`Words in paragraph: ${wordCount}`)
console.log(`Times "et" word appears: ${etCount}`)


//bonus 2
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
let phraseToCheck = "Was it a car or a cat I saw?";
let phraseLowerCase = phraseToCheck.toLowerCase();
let phraseNoSigns = "";
let phraseReversed = "";
for (let i = 0; i < phraseLowerCase.length; i++) {
    if (phraseLowerCase[i] >= "a" && phraseLowerCase[i] <= "z")
    phraseNoSigns += phraseLowerCase[i];
}
for (let i = phraseNoSigns.length -1 ; i >= 0; i--) {
    phraseReversed += phraseNoSigns[i];
}
if (phraseNoSigns === phraseReversed) {
    console.log("palindrome!!")
} else {
    console.log("no palindrome")
}
