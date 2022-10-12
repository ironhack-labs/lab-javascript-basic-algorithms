// Iteration 1: Names and Input

let hacker1 = 'Amandine'
console.log(`The driver's name is`, hacker1)

let hacker2 = 'john'
console.log(`The navigator's name is`, hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)  {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length)  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names,  ${hacker2.length} characters!`);
} else {
    console.log(`Something's wrong`)
}

// Iteration 3: Loops

// 3.1

let hackerName = "";
for (let i = 0; i < hacker1.length; i++) {
    hackerName += hacker1[i] + " "
}
console.log(hackerName.toUpperCase());

// 3.2

let hackerNameReverse = "";
for (let i = hacker1.length - 1; i >=0; i--) {
    hackerNameReverse += hacker1[i]
}
console.log(hackerNameReverse);

// 3.3

// const alphabetObject = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// if (alphabetObject.indexOf(hacker1[0]) < alphabetObject.indexOf(hacker2[0])) {
//     console.log(`The driver's name goes first.`)
// }   else if (alphabetObject.indexOf(hacker2[0]) < alphabetObject.indexOf(hacker1[0])) {
//     console.log("Yo, the navigator goes first definitely.")
// } else if (alphabetObject.indexOf(hacker2[0]) === alphabetObject.indexOf(hacker1[0])) {
//     console.log("What?! You both have the same name?")
// }

    if (hacker1.localeCompare(hacker2, 'fr', { sensitivity: 'base' }) === -1) {
        console.log(`The driver's name goes first.`)
    } else if (hacker1.localeCompare(hacker2, 'fr', { sensitivity: 'base' }) === -1)  {
        console.log(`Yo, the navigator goes first definitely.`)
    } else if (hacker1.localeCompare(hacker2, 'fr', { sensitivity: 'base' }) === 0) {
        console.log("What?! You both have the same name?")
    }

// Bonus 1 numer of words 

let loremParagraph = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum eget urna in ullamcorper. Pellentesque facilisis quis nisi vitae posuere. Suspendisse ullamcorper euismod sem, in sodales ipsum sollicitudin convallis. Vivamus eleifend enim a lectus vestibulum laoreet. Phasellus ut ornare nibh, sed fringilla dolor. Integer venenatis nisl et leo fermentum aliquam. Integer venenatis euismod turpis, sed semper nisl sagittis a. Pellentesque eu massa eget ipsum maximus ullamcorper a non velit. Phasellus in urna augue. Suspendisse ut blandit nulla.

Aliquam erat volutpat. Mauris ac mattis eros. Aliquam facilisis erat non mauris fringilla malesuada a in eros. Praesent mattis in ipsum non sagittis. Aliquam egestas, est in ultrices faucibus, nunc tellus pretium purus, fringilla lobortis ex risus sit amet arcu. Aenean velit nisi, euismod in erat et, cursus fermentum eros. Aliquam vitae aliquet turpis, quis interdum erat. Sed non vestibulum tellus. Fusce suscipit suscipit convallis. In sit amet venenatis est. Sed ut arcu vitae arcu tempor consequat. Suspendisse in neque nisl.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vulputate neque nec risus condimentum cursus. In hac habitasse platea dictumst. Nam mollis iaculis euismod. Nunc rutrum vitae ante eget sollicitudin. Morbi tempus felis vel leo dictum facilisis at quis nibh. Nunc tincidunt metus in consectetur tempor.
`

console.log(loremParagraph.split(" ").length)

// Bonus 1 numer of "et"

let counter = 0
for (let i = 0; i < loremParagraph.length; i++) {
    if (loremParagraph[i-1] + loremParagraph[i] + loremParagraph[i+1] + loremParagraph[i+2] === " et " ) {
        counter =+ 1
    }
}

console.log(counter)







let counterBis = 0
let newArr = loremParagraph.split(" ") 

for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "et" ) {
        counterBis += 1;
    }
}

console.log(counterBis)

let counterTer = 0
for (let word of newArr) {
    if (word = "et") {
        counterTer =+ 1;
    }
}

console.log(counterTer)

// Bonus 2

phraseToCheck = "A man, a plan, bonjour a canal, Panama!"
phraseToCheckPunctuationLess = phraseToCheck.replace(/[.,\/\s#!$%\^&\*;:{}=\-_`~()]/g,``);
phraseToCheckPunctuationLess = phraseToCheckPunctuationLess.toLowerCase()
console.log(phraseToCheckPunctuationLess)

let phraseReverse = "";
for (let i = phraseToCheckPunctuationLess.length - 1; i >=0; i--) {
    phraseReverse += phraseToCheckPunctuationLess[i]
}
phraseReverse = phraseReverse.toLowerCase()
console.log(phraseReverse)

if (phraseToCheckPunctuationLess === phraseReverse) {
    console.log('It is a palindrome')
} else {
    console.log('It is not a palindrome')
}



// var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// var finalString = punctuationless.replace(/\s{2,}/g," ");

console.log(phraseToCheckPunctuationLess)