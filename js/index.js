// Iteration 1: Names and Input
let hacker1 = "Andrea";
console.log(`"The driver's name is ${hacker1}`);

let hacker2 = "Andrea";
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
let i = 0;
if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
} else if (hacker1.length < hacker2.length) {
    while (hacker1[i] === hacker2[i] && i < hacker1.length) {
        i++;
    }
    if (hacker1[i-1] === hacker2[i-1] && i === hacker1.length) {
        console.log("The driver's name goes first.");
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely.");
    }
} else {
    while (hacker1[i] === hacker2[i] && i < hacker2.length) {
        i++;
    }
    if (hacker2[i-1] === hacker1[i-1] && i === hacker2.length) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (hacker2[i] < hacker1[i]) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("The driver's name goes first.");
    }
}

// bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor semper mi. Nulla facilisi. Mauris faucibus, erat id condimentum vulputate, orci mauris ultrices mauris, ut mattis diam erat quis lacus. Ut ipsum magna, condimentum sit amet ipsum nec, posuere finibus leo. Donec dignissim vel mi vitae tempor. Aenean dignissim in mauris sed venenatis. Etiam interdum tortor nec purus pharetra, id dignissim lorem iaculis. In et luctus lorem, quis faucibus est. Sed nisl ex, cursus ultrices volutpat eget, rutrum sit amet eros. Duis dignissim eros sapien. Donec blandit, diam ut commodo venenatis, lorem est finibus erat, et mollis dui justo lacinia nisl. Vivamus eget sem nisi.";

let wordCount = 0;
let etCount = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && text[i] !== "," && text[i] !== ".") {
    wordCount++;
    }
    if (text.slice(i, i+4) == ' et ') {
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
