// Iteration 1: Names and Input
const hacker1 = "Janis".trim();
const hacker2 = "Rapahel".trim();

console.log(`The driver's name is ${hacker1}`);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

result = "";
let i = hacker2.length;
while (i > 0) {
    i--;
    result += hacker2[i];
}
console.log(result);

i = 0;
do {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely.");
        break;
    } else {
        i++;
    }
} while (i < hacker1.length && i < hacker2.length);

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name!");
}

// Bonus Time!
// Bonus 1: Lorem ipsum generator
const longText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in convallis erat. Suspendisse non risus suscipit, sodales urna eu, vulputate urna. Vestibulum ut lacus tempus, placerat ligula et, lobortis mauris. Duis odio libero, ultrices in lacus et, facilisis interdum quam. Duis pulvinar ullamcorper ex ac convallis. Vivamus rhoncus est ut leo sagittis dictum. Vestibulum suscipit ligula nec quam semper ultrices.

Pellentesque ultricies urna mauris, interdum tristique nulla mollis non. Ut blandit tristique eros, at tristique metus tincidunt ac. Suspendisse sit amet dolor mollis, interdum tortor eget, venenatis sapien. Aliquam cursus volutpat porttitor. Aenean at ipsum tellus. Nulla facilisi. Suspendisse potenti. Etiam rhoncus arcu eget dictum euismod. Integer consequat fermentum lectus, et consequat purus rhoncus sit amet. Suspendisse gravida euismod tellus, vel dictum ipsum sollicitudin non. Etiam mauris lectus, iaculis sed tortor sit amet, euismod fringilla nisl. Duis tristique, mi semper tempor commodo, eros velit maximus risus, eget pretium mi libero vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum gravida.

Pellentesque nec felis augue. Aenean efficitur dictum consequat. Sed tincidunt arcu ac ligula maximus, quis scelerisque purus elementum. Aliquam ultrices laoreet odio eu consectetur. Ut aliquam ligula sed eros fermentum imperdiet. Vestibulum eu rhoncus ligula, id mollis libero. Praesent bibendum malesuada condimentum. Aenean blandit, orci ultrices aliquam condimentum, ligula arcu consectetur nunc, eget vulputate augue sapien a diam. `;


let wordArray = longText.split(" "), // split the text into an array of words
wordCount = wordArray.length, // number of words / length of the array
etCount = 0; 

// loop through the array of words
for (let i = 0; i < wordCount; i++) {
    const lastChar = wordArray[i].length - 1; // index of the last character in the word
    // check the last character of the word for punctuation and remove it if necessary
    switch (wordArray[i][lastChar]) { 
        case ".":
        case ",":
        case ";":
        case ":":
        case "!":
        case "?":
            wordArray[i] = wordArray[i].slice(0, lastChar);
            //console.log(`Punctuation removed: ${wordArray[i]}`);
            break;
    }
    // check if the word is "et" (case-insensitive) and increment the count if it is
    if (wordArray[i].toLowerCase() === "et") {
        etCount++;
    }
}
//console.log(`Word Array: ${wordArray}`);
console.log(`The text contains ${wordCount} words.`);
console.log(`The word "et" appears ${etCount} times in the text.`);

// Bonus 2: Palindrome
let phraseToCheck;

// array of phrases to check for palindromes
let prasesArray = ["A man, a plan, a canal, Panama!", 
    "Amor, Roma", 
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "Rentner",
    "Ein Apfel, ein Ei",
    "Dingens und So weiter und so fort"];
// phraseToCheck = prasesArray[8];

// loop through the array of phrases and check if each one is a palindrome
prasesArray.forEach(element => {
    phraseToCheck = element;

    // filter out non-alphabetic characters and convert to lowercase
    let filteredPhrase = "";
    for (let i=0; i < phraseToCheck.length; i++) {
        if (phraseToCheck[i].toLowerCase() >= "a" && phraseToCheck[i].toLowerCase() <= "z") {
            filteredPhrase += phraseToCheck[i].toLowerCase();
        }
    }

    // check if the filtered phrase is a palindrome
    let isPalindrome = true;
    for (let i=0; i < filteredPhrase.length /2; i++) {
        if (filteredPhrase[i] !== filteredPhrase[filteredPhrase.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    // output the result
    if (isPalindrome) {
        console.log(`The phrase "${phraseToCheck}" is a palindrome.`);
    } else {
        console.log(`The phrase "${phraseToCheck}" is not a palindrome.`);
    }
});