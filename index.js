// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Eva";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals


switch(true) {
    case hacker1.length > hacker2.length: 
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
        break;
    
    case hacker1.length < hacker2.length:
        console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
        break;
    
    default: 
        console.log(`Wow, you both have equally long names, ${hacker.length} characters`)
}


// Iteration 3: Loops

// Prints the name John separated by space
let nameUppercase = hacker1.toUpperCase();
let nameUppercaseSeparated = "";


for (let i = 0; i < nameUppercase.length; i++) {
    nameUppercaseSeparated += nameUppercase[i] + " ";
}

console.log(nameUppercaseSeparated)


// Prints the name John separated by space - version 2
let nameUppercase2 = "";

for (let i = 0; i < hacker1.length; i++) {
    nameUppercase2 += hacker1[i].toUpperCase() + " ";
}

console.log(nameUppercase2)


// Prints the name John separately
const hacker1Capital = hacker1.toUpperCase();
console.log(hacker1Capital)

for (const value of hacker1Capital) {
    console.log(value)
}


// Prints the name of the Driver in reverse order

let nameReversed = "";

for (i = hacker1.length - 1; i >= 0 ; i--) {
    nameReversed += hacker1[i];
}

console.log(nameReversed)


// Gives feedback dependant of the lexigraphical order


switch(hacker1.localeCompare(hacker2)) {
    case 1: 
        console.log("The driver's name goes first.")
        break;
    case -1:
        console.log("Yo, the navigator goes first, definitely")
        break;
    default:
        console.log("What?! You both have the same name?")
}




//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`


// Count words
// With a normal for loop you can just count the white spaces between the words

let countWords = 0;

for (i = 0; i < longText.length; i++) {
    if (longText[i] === " " || longText[i] === "." && longText[i+1] !=== " ") {
        countWords++;
    }
}


// With a method .split you can count the arrays created

const arrayOfWords = longText.split(" ");
let countWords2 = 0; 

for(i = 0; i < arrayOfWords.length; i++) {
    countWords2++;
}

console.log(countWords2)



// Count the number of "et"

function countEt (text) {
    let countEtTotal = 0;

    for (i = 0; i < text.length; i++){ 
        if (text.includes(' et ')) {
            countEtTotal++;
        }
    }
    
    return countEtTotal
}

console.log(countEt(longText))


// Bonus 2

const phraseToCheck = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr`
let preparedPhraseToCheck = ``;
let preparedPhraseToCheckReverse = ``;

// Prepare phrase

for(i = 0; i < phraseToCheck.length; i++) {
    if(phraseToCheck[i] === "," || phraseToCheck[i] === " " || phraseToCheck[i] === ";" || phraseToCheck[i] === "?" || phraseToCheck[i] === "!") {
        continue;
    } else {
        preparedPhraseToCheck += phraseToCheck[i].toLocaleLowerCase();
    }
}

for (let i = preparedPhraseToCheck.length-1; i >= 0; i--) {
    preparedPhraseToCheckReverse += preparedPhraseToCheck[i].toLowerCase();
}

if (preparedPhraseToCheckReverse.includes(preparedPhraseToCheck)) {
    console.log("It's a palandrome PHRASE")
} else {
    console.log("Sorry, it's not a palandrome PHRASE")
}


// Word Palandrome Check
const wordToCheck = `Madam`

let wordToCheckReverse = ``;

for (let i = wordToCheck.length-1; i >= 0; i--) {
    wordToCheckReverse += wordToCheck[i].toLowerCase();
}

if (wordToCheckReverse.includes(wordToCheck.toLowerCase())) {
    console.log("It's a palandrome WORD")
}
