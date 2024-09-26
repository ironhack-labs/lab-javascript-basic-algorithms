// Iteration 1: Names and Input
const hacker1 = 'Carina';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Someone';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function biggerName(hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {
        return `${hacker1} is bigger than ${hacker2} because it has ${hacker1.length} characters`;
    } else if (hacker2.length > hacker1.length) {
        return `${hacker2} is bigger than ${hacker1} because it has ${hacker2.length} characters`;
    } else hacker1.length === hacker2.length;
    {
        return `both have equally long names, with ${
            hacker1.length || hacker2.length
        } characters!`;
    }
}
console.log(biggerName(hacker1, hacker2));

// Iteration 3: Loops
//3.1:
let spaceBetween = ' ';
for (let i = 0; i < hacker1.length; i++) {
    spaceBetween += hacker1[i].toUpperCase() + ' ';
}
console.log(spaceBetween);
//3.2:
let reverseNavigator = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);
//3.3:
let firstName;

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
        firstName = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        firstName = 'Yo, the navigator goes first, definitely';
        break;
    } else firstName === undefined;
    firstName = 'What?! You both have the same name?';
}
console.log(firstName);

//Bonus 1:

const longText = `Lorem Ipsum
Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper arcu lacus, a aliquet ex egestas quis. Vivamus molestie suscipit ipsum, vel eleifend lorem porttitor vitae. Nunc sollicitudin ipsum ac metus imperdiet, in sollicitudin leo viverra. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Curabitur sem est, varius nec nulla non, commodo vehicula nisi. Nulla consectetur felis turpis, eget dapibus est ultrices at. Suspendisse sodales quam id molestie suscipit. Nulla nec euismod dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut massa iaculis, feugiat nisl auctor, porttitor libero. Praesent commodo, tortor vitae dignissim sollicitudin, eros velit lacinia ipsum, et tristique nisl magna sit amet diam. Pellentesque ligula neque, facilisis non ante eget, tincidunt facilisis risus. Vivamus maximus leo id lectus molestie laoreet. Vivamus ac bibendum elit. Nunc mi ante, tincidunt non erat quis, accumsan suscipit velit.
Sed ligula mauris, aliquet vel ex viverra, finibus maximus mauris. Nunc vulputate dui libero, at maximus metus semper sed. Ut dapibus sed est sed placerat. Ut eros nunc, posuere in sodales at, tempor et metus. Integer aliquet, neque non sodales feugiat, orci metus tempor lacus, sit amet auctor lacus eros id odio. Ut ultricies orci urna, sit amet auctor neque viverra sed. Morbi vel odio sit amet nisl commodo consectetur id vel velit. Mauris ac posuere velit, non finibus elit. Ut eu leo libero. Pellentesque gravida, sapien vitae congue sagittis, est urna accumsan metus, quis dictum nibh felis eget magna. Nunc mi orci, faucibus id varius sed, tempor id lacus. Sed at elit facilisis, mattis metus cursus, ultricies justo.`;

function countWords(longText) {
    return longText.trim().split(/\s+/).length;
}
function countOccurrences(longText, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const occurrences = longText.match(regex) || [];
    return occurrences.length;
}
const wordCount = countWords(longText);
console.log(`${wordCount}`);
const etOccurrences = countOccurrences(longText, 'et');
console.log(`${etOccurrences}`);

// Bonus 2:

const phraseToCheck = 'Was it a car or a cat I saw?';

function isPalindrome(phraseToCheck) {
    const cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');
    const length = cleanPhrase.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanPhrase[i] !== cleanPhrase[length - 1 - i]) {
            console.log(`"${phraseToCheck}" is not a palindrome.`);
            return false;
        }
    }

    console.log(`"${phraseToCheck}" is a palindrome.`);
    return true;
}

isPalindrome(phraseToCheck);
