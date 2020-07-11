// Iteration 1: Names and Input

//1.1
let hacker1 = "Leonardo";

//1.3
let hacker2 = "Grazielli";

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
//3.1
let capitalHacker1 = hacker1.toUpperCase();

let spaceBetweenHacker1 = "";

for (let i = 0; i < capitalHacker1.length; i++) {
    if (capitalHacker1.length - 1 > i) {
        spaceBetweenHacker1 += capitalHacker1[i] + " ";
    } else {
        spaceBetweenHacker1 += capitalHacker1[i];
    }
}

console.log(spaceBetweenHacker1);
console.log(spaceBetweenHacker1.length);

//3.2
let reversedHacker2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedHacker2 += hacker2[i]
}

console.log(reversedHacker2);

//3.3

switch (hacker1.localeCompare(hacker2)) {
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
    case -1:
        console.log(`The driver's name goes first.`);
        break;
}

//Bonus 1

const threeParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat orci urna, non accumsan justo laoreet quis. Mauris eros lorem, tempus eu nulla varius, laoreet eleifend tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pellentesque maximus tortor at molestie. Sed ornare tempor consectetur. In luctus magna pellentesque massa placerat facilisis nec nec tortor. Cras convallis metus et lacus consectetur efficitur at quis sapien. Fusce ullamcorper ornare nisi at lacinia. Nam tortor metus, luctus sit amet massa ut, finibus facilisis nisi. Aenean nec mi in ligula aliquet pretium. Etiam in rhoncus risus. Etiam sed commodo libero, sit amet ornare nibh. Curabitur aliquet commodo nunc ut mollis. Etiam fringilla ac mauris in consectetur. Vivamus sed gravida sapien, at efficitur nisi. Curabitur vitae urna at mi imperdiet consectetur quis quis leo. Morbi at sem ligula. Vestibulum dictum neque ultrices quam convallis, sed aliquet mi tempus. Nam ac purus a metus mollis accumsan. Ut tincidunt rutrum lorem at sollicitudin. Aliquam eleifend nibh vel euismod aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla volutpat est et dolor porta, eget aliquet felis posuere. Nam ultricies aliquam odio a finibus. Vestibulum dignissim condimentum eros a congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis libero magna, ut sodales risus scelerisque vitae. Phasellus eget tempor purus, id sagittis tellus. Nam at magna nec lorem pretium iaculis.`;

//let threeParagraphs = `   `;

console.log(threeParagraphs);

// number of words
let numberWords = 0;

let lastLetter = " ";
if (threeParagraphs.includes(" ")) {
    for (let i = 0; i < threeParagraphs.length; i++) {
        if (threeParagraphs[i] === " " && lastLetter !== " ") {
            numberWords += 1;
        }
        lastLetter = threeParagraphs[i];
    }
} else if (threeParagraphs.length !== 0) {
    numberWords = 1;
}

if (numberWords === 0) {
    console.log(`Your string does not have any word in it`);
} else if (lastLetter === " ") {
    console.log(`Your string has ${numberWords} word(s)`)
} else {
    console.log(`Your string has ${numberWords + 1} word(s)`)
}

// number of "et" appearing in the string

let numberEt = 0;

let copyOfString = threeParagraphs;
const wordToCount = "et"

console.log(copyOfString.search(/\bet\b/i));

while (copyOfString.search(/\bet\b/i) >= 0) {
    numberEt += 1;
    copyOfString = copyOfString.substring(copyOfString.search(/\bet\b/i) + 2);
}

console.log(`The Latin word "et" has appeared ${numberEt} time(s)`);


//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let lowerCasePhrase = phraseToCheck.toLowerCase();

console.log("All lower case:", lowerCasePhrase);

let onlyLetters = "";

for (let i = 0; i < lowerCasePhrase.length; i++) {
    switch (lowerCasePhrase[i]) {
        case " ":
        case ",":
        case "!":
        case "?":
        case ".":
        case "'":
            break;
        default:
            onlyLetters += lowerCasePhrase[i];
    }
}

console.log("Only letters:", onlyLetters);

let reversedPhrase = "";

for (let i = onlyLetters.length - 1; i >= 0; i--) {
    reversedPhrase += onlyLetters[i]
}

console.log("Reversed only letters phrase:", reversedPhrase);

if (onlyLetters.localeCompare(reversedPhrase) === 0) {
    console.log(`The string "${phraseToCheck}" is a Palindrome`);
} else {
    console.log(`The string "${phraseToCheck}" is not a Palindrome`);
}
