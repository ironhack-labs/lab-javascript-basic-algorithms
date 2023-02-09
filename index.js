// // Iteration 1: Names and Input
const hacker1 = "Szczepan";
console.log(`The driver's name is  ${hacker1}`);

const hacker2 = "Grzegorz";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops

//3.1 
let hacker1UpperCassed = "";

for (let i = 0; i < hacker1.length; i++) {
    
    const char = hacker1[i].toUpperCase();
    hacker1UpperCassed += char;
}

console.log(...hacker1UpperCassed);

//3.2
let reversedString = "";
let reversedString1 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i == 0) {
    reversedString1 = reversedString + hacker1[i].toUpperCase();
  }
  reversedString += hacker1[i];
}
console.log(reversedString1);

// 3.3 The instruction said that this part is about loops but for now I can't find a solution that would make it work with loop.

// const hacker1 = "Szczepan"; > driver
// const hacker2 = "Grzegorz"; > navigator


    if (hacker1 > hacker2) {
        console.log(`The driver's name goes first.`);

    } else if (hacker1 < hacker2) {
        console.log(`Yo, the navigator goes first definitely.`);

    } else if (hacker1 === hacker2) {
        console.log(`What?! You both have the same name?`);


    
}

// I also tried to create a solution with a loop but it doesn't work properly and I don't think loop is needed here but this tasks is in the section which says it's loops.

// for (let i = 0; i < hacker1.length; i++) {

//     let compareStrings = hacker1.localeCompare(hacker2);

//     if (compareStrings = -1) {
//         console.log(`Yo, the navigator goes first definitely.`);

//     } else if (compareStrings = 1) {
//         console.log(`The driver's name goes first.`);

//     } else if (compareStrings = 0) {
//         console.log(`What?! You both have the same name?`);

//     }

// }

// #### Bonus 1:

// Go to the [lorem ipsum generator](http://www.lipsum.com/) website and:

//   - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum ante. Phasellus scelerisque, eros et aliquet sollicitudin, magna metus suscipit libero, in bibendum ligula ante fringilla orci. Nullam pellentesque lobortis mauris, in aliquam risus venenatis ut. Quisque ac quam ut sem interdum pretium. Donec quis lobortis sapien, non volutpat ante. Donec nibh felis, lobortis ac condimentum vitae, congue ac felis. Integer fringilla massa sit amet euismod pretium. Nulla et augue mauris. Donec eget luctus velit, quis ultrices mauris. Sed magna felis, eleifend vitae ornare accumsan, suscipit sed eros. Vivamus condimentum mauris nec tortor fermentum rutrum. Vestibulum eget ipsum mi. Sed rhoncus porta ligula, in euismod odio fringilla eu."

let countWords = 0

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") { 
        countWords++; 
  }

}

console.log(countWords);

let countEt = 0

for (let i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i + 1] +  longText[i + 2] + longText[i + 3]=== " et ") { 
        countEt++; 
  }

}

console.log(countEt);

// ### Bonus 2:

// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 

//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

//   __IMPORTANT__: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as _join()_, _reverse()_, etc.). However, we want you to apply the knowledge you currently have and try to come up with a solution by just using the `for` loop and `if-else` statements with some `break` and `continue`.

const phraseToCheck = "racecar"

let reversedPhrase = ""

for (let i = phraseToCheck.length -1; i >=0; i--) {
    reversedPhrase += phraseToCheck[i];
    
}

if (phraseToCheck === reversedPhrase) {
    console.log(`${phraseToCheck } is a palindrome!`);

} else {
    console.log(`${phraseToCheck } is not a palindrome!`);

}
