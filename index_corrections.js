// Iteration 1: Names and Input
let hacker1 = "Sebastian";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Abdul";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newName = "";
for (let i = 0; i <= hacker1.length - 1; i++) {
    newName += hacker1[i] + ' ';
}
console.log(newName.toUpperCase());

// let sampleName = hacker1.split('').join(" ");
// console.log(sampleName.toUpperCase());

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

//loops

let longestWord = "";
if (hacker1.length > hacker2.length) {
    longestWord = hacker1;
}
else if (hacker1.length < hacker2.length) {
    longestWord = hacker2;
}

for (let i = 0; i < longestWord.length; i++) {
    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?");
    }
    else if (hacker1[i] > hacker2[i] || hacker1[i] === undefined) {
        console.log("The driver's name goes first.");
        break;
    }
    else if (hacker2[i] > hacker1[i] || hacker2[i] === undefined) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
}

//Bonus 1

const longText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sodales tellus. Sed efficitur cursus malesuada. Aenean sit amet aliquet tellus, in cursus leo. Etiam est risus, ultrices ut arcu non, rutrum luctus nibh. Curabitur a massa vulputate, finibus nunc eu, ultrices augue. Etiam volutpat ornare erat sit amet tempor. Donec congue mauris vel velit hendrerit volutpat. Praesent vel diam eget felis porta tincidunt. Pellentesque in enim vel massa tempor interdum dictum eget nulla. Fusce dignissim ac turpis nec iaculis. Sed porttitor lectus erat, sit amet ullamcorper mauris lobortis sit amet. Ut ac dui sapien. In at lorem sit amet ex pulvinar dictum in at magna. Sed pulvinar, ipsum id porta consequat, mi tortor tincidunt nisi, at rutrum nibh tortor sit amet mi. Aliquam eget lectus ac ex luctus maximus ac vel justo. Nullam feugiat tristique ex id ornare. Aliquam ultrices arcu sit amet lorem sodales molestie. Vivamus posuere est sed eros facilisis mattis. Nullam urna elit, convallis a velit sit amet, blandit auctor urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam egestas bibendum nulla et tincidunt. Morbi a feugiat nisi, id mollis urna. Maecenas tincidunt mauris eu mauris posuere pulvinar. In placerat ex vel diam semper, in rutrum ligula cursus. Nulla aliquet elit vel dolor iaculis interdum. Duis sagittis lorem massa. Integer enim risus, hendrerit eget magna vel, molestie rutrum nisl. Aliquam dapibus elementum orci in imperdiet. Cras a feugiat risus, vitae porttitor felis. Etiam nec rutrum augue. Suspendisse quis auctor massa, at malesuada risus. Aenean cursus nibh a placerat aliquet. Sed non viverra nibh. Proin molestie mattis mauris, id pretium risus faucibus vel. Morbi eget velit at nibh suscipit malesuada."


let wordCount = 1;

for (let i = 0; i < longText.length; i++) {
    if (longText[i + 1] === " ") {
        wordCount ++
    }
}

console.log(wordCount);


let etCount = 0;

for (let i = 0; i < longText.length ; i++) {
    if (longText[i] === "e" && longText[i + 1] === "t") {
        etCount ++;
    }
}

console.log(etCount);

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseToCheckList = "";
for (i = 0; i <= phraseToCheck.length - 1; i++) {
    const char = phraseToCheck[i].toLowerCase(); //or .toUpperCase();
    if ((/[a-zA-Z]/).test(char)) {
        phraseToCheckList += char
    }
}
console.log(phraseToCheckList);

let palindromeCheck = "";
for (i = phraseToCheck.length - 1; i >= 0; i--) {
    const char = phraseToCheck[i].toLowerCase(); //or .toUpperCase();
    if ((/[a-zA-Z]/).test(char)) {
      palindromeCheck += char
    }
}
console.log(palindromeCheck);

if (phraseToCheckList === palindromeCheck) {
    console.log('Bruh, it be a palindrome.')
}
else {
    console.log('Nah, not a palindrome.')
}
