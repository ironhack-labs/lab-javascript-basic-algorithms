// WEEK 1 - DAY 1: LAB | JS Basic Algorithms [MFAP-1]


// Iteration 1: Names and Input
let hacker1 = "Manoel"; // driver
let hacker2 = "Miguel"; // nav
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 - Loop 1: separated by a space and in capitals
let hacker1Altered = '';
for(let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length - 1) {  // if statement to avoid adding a 'space' after the last char
        hacker1Altered += hacker1[i].toUpperCase() + ' ';
        continue;
    }  
    hacker1Altered += hacker1[i].toUpperCase(); // only applies if the condition above is false
}
console.log(hacker1Altered); // expected output

// 3.2 - Loop 2: reverse order
let hacker2Reverse = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse); // expected output

// 3.3 - Test 3:  lexicographic order of the strings
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus Time!
// Bonus 1: words and 'et'
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a fringilla ex. Suspendisse quis vulputate est. Sed metus purus, suscipit vel ultrices id, congue nec velit. Cras condimentum tellus a turpis malesuada, eu sollicitudin felis semper. Nullam eget lectus eleifend, hendrerit massa accumsan, vulputate nisi. Phasellus pulvinar nisi ac ex fermentum maximus. Fusce mi libero, rutrum at interdum iaculis, lacinia ut lorem. Cras ac tempus nulla. Suspendisse lorem urna, sollicitudin vel nulla quis, molestie luctus dolor. Cras at lobortis nibh. Praesent at porttitor quam. Integer ut lacus eu turpis fermentum scelerisque. Praesent in posuere erat.
Nunc eros leo, auctor ut orci et, dignissim maximus quam. Morbi vulputate pharetra nulla, sed faucibus eros varius ut. Ut maximus sapien nunc. Donec varius metus nec ligula cursus gravida. Donec a eros id leo fermentum finibus. In pharetra nulla et mi feugiat lobortis. Nulla facilisi.
Phasellus euismod at lacus id vestibulum. Morbi convallis sed enim quis consectetur. Pellentesque nec dolor ac odio finibus congue ut sit amet nisi. Maecenas malesuada ex a velit efficitur, ut pharetra turpis feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vel nisi neque. Mauris accumsan aliquam laoreet. Quisque euismod enim a enim imperdiet finibus. Praesent mattis velit magna, quis tincidunt justo malesuada sed. Sed placerat eu tortor ut cursus. Morbi congue aliquam tellus et efficitur. Vivamus consectetur sagittis dui, sit amet sodales mauris. Sed semper orci at nibh hendrerit, eu suscipit velit euismod. Nullam ipsum eros, vestibulum at mauris in, facilisis aliquam tortor. Nulla sit amet leo orci. Ut tincidunt sem nulla, eget faucibus turpis dignissim quis.
`;
let numberOfWords = 0;
let numberOfEt = 0;
const etSeparators = `., \n`;

for (let i = 0; i < text.length; i++) { // looping thru the text string 
    if (text[i] === ' ' || text[i] === '\n') { // counting words based on the 'space' char OR the end of a paragraph
        numberOfWords++; 
    }
    if ((text[i] === 'e') && (text[i + 1] === 't') && (etSeparators.includes(text[i - 1])) && (etSeparators.includes(text[i + 2]))) {
        numberOfEt++; // counting 'et'
    }
}
console.log(`The total number of words is = ${numberOfWords}.`); // output 1 - Bonus 1
console.log(`The total amount of 'et' is = ${numberOfEt}.`); // output 2 - Bonus 1

// Bonus 2: Palindrome 
// Based on the provided examples, we can assume that: punctuation, capitalization, and spaces are ignored.
let phraseToCheck = `A man, a plan, a canal, Panama!`;

// 1st loop. To ignore unwanted chars. Creating a 'clean' auxiliary String.
let cleanPhrase = '';
const unwatedChars = `.,!?'" \n`;
for (let i = 0; i < phraseToCheck.length; i++) {
    if (!unwatedChars.includes(phraseToCheck[i])) {
        cleanPhrase += phraseToCheck[i].toLowerCase();
    }
}

// 2nd loop. To test if the string is a Palindrome.
let j = cleanPhrase.length - 1; // auxiliary variable. Keeps track of the index in a reverse order inside the for loop.
let count = 0; // Another aux variable. Helps count if the total 
for (let i = 0; i < cleanPhrase.length; i++) {
    if (cleanPhrase[i] !== cleanPhrase[j]) {
        break; // if one 'opposite' char is diferent, then we are sure that the word isn't Palindrome. Thus, break out of the loop.
    }
    count++; // since we didn't break, let's count one more equality between 'opposites' chars.
    j--; // decresing the aux variable. It assures that the reverse order keeps decresing as the 'i' increases.
}
// Presenting the final result
if (count !== cleanPhrase.length) { // the amount of equality between 'opposites' chars isn't equal to the total length, then it's not a Palindrome
    console.log(`I'm sorry. But the string ${phraseToCheck} isn't a Palindrome :(.`);
} else {
    console.log(`Yey! The string: "${phraseToCheck}" is indeed a Palindrome!`);
}