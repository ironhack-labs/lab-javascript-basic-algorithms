// Iteration 1: Names and Input

let hacker1 = "Rafael";
let hacker2 = "Fabricio";

console.log(`
==================================
NAMES (ex 1):

The driver's name is ${hacker1}
The navigator's name is ${hacker2}

==================================
`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) 
console.log(`
LONGEST NAME (ex 2):

The driver has the longest name, 
it has ${hacker1.length} characters.

==================================
`)

else if(hacker1.length < hacker2.length) 
console.log(`
LONGEST NAME (ex 2):

It seems that the navigator has 
the longest name, it has ${hacker2.length} 
characters.

==================================
`)

else console.log(`
SAME NUMBER OF CHARS (ex 2):

Wow, you both have equally long 
names, ${hacker1.length} characters!

==================================
`)

// Iteration 3: Loops

//EXERCISE 3 A
let nameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
    nameWithSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(`
DRIVER'S NAME WITH SPACES AND 
UPPERCASED (ex 3A):

${nameWithSpaces}

==================================
`);

//EXERCISE 3 B

let reversedName = "";

for (let i = hacker2.length; i >= 0; i--) {
    reversedName += hacker2.slice(i - 1, i);   
}


console.log(`
REVERSED NAVIGATOR'S NAME (ex 3B):

${reversedName}

==================================
`);



//exercise 3.c

let result;

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if(hacker1 === hacker2) {
        result = "What?! You both have the same name?";
        break;
    } else if(hacker1[i].localeCompare(hacker2[i]) === -1) { 
        result = "The driver's name goes first.";
        break;
    } else if(hacker1[i].localeCompare(hacker2[i]) === 1) {
        result = "Yo, the navigator goes first definitely.";
        break;
    } 
}

console.log(`
LEXICOGRAPHYC ORDER (ex 3C):

${result}

==================================
`);
//Bonus 1:

let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis sem vitae lectus pulvinar laoreet. Suspendisse in magna convallis, aliquet lectus a, aliquet mi. Praesent at tellus urna. Fusce mattis id est sed placerat. Nam porttitor sollicitudin nisl luctus eleifend. Proin sodales pulvinar nibh, nec vehicula nisl dignissim feugiat. Vestibulum fermentum, et ipsum a consectetur consequat, risus ipsum fermentum sem, posuere rutrum erat justo eget leo. Aliquam iaculis, tellus ac porttitor rutrum, metus ante aliquet magna, sed blandit erat diam quis odio. Cras vitae nisl at dui iaculis convallis ut non risus."

let spaces = 0;
let et = 0;
for (let i = 0; i < string.length; i++) {
    if(string[i] == " ") spaces++
    if((string[i]+string[i+1]+string[i+2]+string[i+3]) == " et ") et++
}

console.log(`
PARAGRAPH:

${string}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AMOUNT OF WORDS IN PARAGRAPH (Bonus 1)

${spaces + 1}

AMOUNT OF 'ET's IN PARAGRAPH

${et}

==================================
`);

//Bonus 2

let phraseToCheck = "No 'x' in Nixon";
let cleanString = "";
let inversedPhrase = "";

phraseToCheck = phraseToCheck.toLowerCase();

for (let i = 0; i < phraseToCheck.length; i++) {
    if(phraseToCheck.charCodeAt(i) >= 97 && phraseToCheck.charCodeAt(i) <= 122) {
        cleanString += phraseToCheck[i];
        inversedPhrase = phraseToCheck[i] + inversedPhrase;
    }
}

if(cleanString === inversedPhrase) 

console.log(`
IS PALINDROME (Bonus 2):

Yes, the phrase "${phraseToCheck}" is a palindrome.

==================================

The end
`);

else console.log(`
IS PALINDROME (Bonus 2):

No, the phrase ${phraseToCheck} is not a palindrome.

==================================

The End

`);

