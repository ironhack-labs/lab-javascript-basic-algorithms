console.log("I'm ready!");

// Iteration 1: Names and Input
//

const hacker1 = "Frances";
const hacker2 = "Pablo";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let upperCaseName= "";
for (let i=0; i<hacker1.length; i++){
    let upperCaseLetter = hacker1[i].toUpperCase();
    upperCaseName += `${upperCaseLetter} `;
}
console.log(upperCaseName);

// 3.2
let reverseName = "";
for (let i=hacker2.length-1; i>=0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName)

// 3.3
let names = [hacker1, hacker2]
let sortedNames = names.sort();

 if (sortedNames[0]===hacker1) {
    console.log(`The driver's name goes first.`);
 } else if (sortedNames[0]===hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
 } else if (sortedNames[0]===sortedNames[1]) {
    console.log (`What?! You both have the same name?`);
 } else {
    console.log (`Please enter a valid name`);
 }

// Bonus 1
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim eros non libero congue volutpat. Vestibulum pulvinar mi eu tortor sagittis auctor. Praesent quis lorem tempor lacus aliquam viverra. Aenean id magna quis nisi viverra mattis. Nullam varius, elit in pellentesque pulvinar, ante sem convallis nibh, at pretium purus nisl a lacus. Proin et arcu molestie, egestas turpis et, finibus urna. In hac habitasse platea dictumst. Integer laoreet leo lacus, in pretium nunc pharetra tristique. Mauris nec augue quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean facilisis elementum justo. Vestibulum cursus gravida velit. Aenean egestas dolor quam, et malesuada arcu suscipit et. In scelerisque dolor at ante vestibulum viverra. Suspendisse euismod molestie lobortis. Nunc bibendum molestie luctus. Mauris lectus neque, tempor ut urna quis, bibendum imperdiet urna. Aenean aliquam erat in nulla malesuada semper. Nulla facilisis mi eget nulla facilisis feugiat. Quisque ultricies porta pharetra. Nunc odio enim, tempus et molestie ac, sollicitudin in lorem. Donec a ligula tincidunt, congue purus posuere, ornare risus. Donec vitae ullamcorper orci, vitae venenatis libero. Phasellus non eros odio. Phasellus eu nisl in ante imperdiet pellentesque. Vivamus tincidunt, ante ac fermentum finibus, nisl lacus blandit nibh, non sollicitudin dui mi in arcu. Pellentesque blandit placerat vulputate."
let counter = 0;
let amountOfWords;
for (i=0; i<text.length; i++) {
    if (text[i] === " "){
        counter ++
        amountOfWords = counter + 1;
    }
}
    console.log(amountOfWords);

    

let numberOfEt = 0;
for (i=0; i<text.length; i++) {
    const fourChar = text[i] + text[i+1] + text[i+2] + text[i+3];
    if (fourChar === ` et ` || fourChar === ` Et `){
        numberOfEt ++;
    }
}
console.log(numberOfEt)


// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseNoSymbols = "";
let reversePhrase = "";
for (i=0; i<phraseToCheck.length; i++) {
    switch (phraseToCheck[i]) {
        case " ":
            continue;
        case ",":
            continue;
        case "'":
            continue;
        case "?":
            continue;
        case "!":
            continue;
        case ".":
            continue;
        case ":":
            continue;
        case ";":
            continue;
        default:
            phraseNoSymbols += phraseToCheck[i].toLowerCase();
    }
}
// console.log(phraseNoSymbols);

for (let i=phraseNoSymbols.length-1; i>=0; i--) {
    reversePhrase += phraseNoSymbols[i];
}
// console.log("this is reversePhrase: " + reversePhrase);

if (phraseNoSymbols === reversePhrase){
    console.log(`This phrase is a palindrome!`);
} else {
    console.log(`Sorry, not a palindrome.`)
}