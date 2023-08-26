// Iteration 1: Names and Input
let hacker1 = "Sebastian";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Abdul";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else if (hacker2Length > hacker1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}
else if (hacker2Length === hacker1Length) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
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

let hacker1Letters = [];
for (i = 0; i <= hacker1.length - 1; i++) {
    hacker1Letters += hacker1[i];
} 
console.log(hacker1Letters);

let hacker2Letters = [];
for (i = 0; i <= hacker2.length - 1; i++) {
    hacker2Letters += hacker2[i]
}

console.log(hacker2Letters);


if (hacker1Letters === hacker2Letters) {
    console.log('What?! You both have the same name?')
}
//hacker1.localeCompare(hacker2)
else if (hacker1Letters !== hacker2Letters) {
    console.log(hacker1.localeCompare(hacker2));
    
    // let sortedNames = [hacker1, hacker2].sort();
    // if (sortedNames[0] ===
    // console.log(sortedNames);       
}

// else if (Math.min(char1, char2) === char1) {
//     console.log("The driver's name goes first.")
// }
// else if (Math.min(char1, char2) === char2) {
//     console.log('Yo, the navigator goes first, definitely.')      
// }

//     const char1 = hacker1.toUpperCase().charCodeAt(0);
//     const char2 = hacker2.toUpperCase().charCodeAt(0);
//     console.log(`${char1}, ${char2}`)

//     if (hacker1 === hacker2) {
//         console.log('What?! You both have the same name?')
//     }
//     else if (Math.min(char1, char2) === char1) {
//         console.log("The driver's name goes first.")
//     }
//     else if (Math.min(char1, char2) === char2) {
//         console.log('Yo, the navigator goes first, definitely.')      
//     }
//     break;

// }

//Bonus 1

const longText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sodales tellus. Sed efficitur cursus malesuada. Aenean sit amet aliquet tellus, in cursus leo. Etiam est risus, ultrices ut arcu non, rutrum luctus nibh. Curabitur a massa vulputate, finibus nunc eu, ultrices augue. Etiam volutpat ornare erat sit amet tempor. Donec congue mauris vel velit hendrerit volutpat. Praesent vel diam eget felis porta tincidunt. Pellentesque in enim vel massa tempor interdum dictum eget nulla. Fusce dignissim ac turpis nec iaculis. Sed porttitor lectus erat, sit amet ullamcorper mauris lobortis sit amet. Ut ac dui sapien. In at lorem sit amet ex pulvinar dictum in at magna. Sed pulvinar, ipsum id porta consequat, mi tortor tincidunt nisi, at rutrum nibh tortor sit amet mi. Aliquam eget lectus ac ex luctus maximus ac vel justo. Nullam feugiat tristique ex id ornare. Aliquam ultrices arcu sit amet lorem sodales molestie. Vivamus posuere est sed eros facilisis mattis. Nullam urna elit, convallis a velit sit amet, blandit auctor urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam egestas bibendum nulla et tincidunt. Morbi a feugiat nisi, id mollis urna. Maecenas tincidunt mauris eu mauris posuere pulvinar. In placerat ex vel diam semper, in rutrum ligula cursus. Nulla aliquet elit vel dolor iaculis interdum. Duis sagittis lorem massa. Integer enim risus, hendrerit eget magna vel, molestie rutrum nisl. Aliquam dapibus elementum orci in imperdiet. Cras a feugiat risus, vitae porttitor felis. Etiam nec rutrum augue. Suspendisse quis auctor massa, at malesuada risus. Aenean cursus nibh a placerat aliquet. Sed non viverra nibh. Proin molestie mattis mauris, id pretium risus faucibus vel. Morbi eget velit at nibh suscipit malesuada."

let wordCount = "";

for (i = 0; i <= longText.length; i++) {
    const char = longText[i];
    if (longText[i + 1] === " ") {
        wordCount += char
    }
}
console.log(wordCount.length + 1); 

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseToCheckList = "";
for (i = 0; i <= phraseToCheck.length - 1; i++) {
    const char = phraseToCheck[i].toLowerCase();
    if ((/[a-zA-Z]/).test(char)) {
        phraseToCheckList += char
    }
}
console.log(phraseToCheckList);

let palindromeCheck = "";
for (i = phraseToCheck.length - 1; i >= 0; i--) {
    const char = phraseToCheck[i].toLowerCase();
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
