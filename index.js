// Iteration 1: Names and Input

const hacker1 = "Yujiro";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Akihiro";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength === navigatorNameLength) {
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
} else if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
}


// Iteration 3: Loops
// 3.1

let capitalDriversName = '';

for (let i = 0; i < hacker1.length; i++) {
    capitalDriversName += hacker1[i].toUpperCase() + ' ';
}
console.log(capitalDriversName.trim());


// 3.2

let reverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}

console.log(reverseName);


// 3.3

if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
} else {
    console.log(`Yo, the navigator goes first, definitely.`);
}


// Bonus Time!

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et metus erat. Curabitur malesuada, quam at vestibulum consequat, tortor risus fermentum quam, id auctor nulla sapien sit amet ligula. Suspendisse potenti. Maecenas et tortor nec dui euismod vehicula. Donec posuere est vel tincidunt tincidunt. Donec at elit nec odio malesuada semper. Suspendisse vel mauris nec sapien feugiat feugiat. Quisque at nibh eros. Duis et convallis nulla. Integer auctor ante sit amet lacus vehicula, sit amet fermentum metus scelerisque. Suspendisse potenti. Phasellus at massa justo. Etiam imperdiet leo a odio vestibulum, ac bibendum eros scelerisque. Proin condimentum, arcu vel imperdiet laoreet, ligula turpis porta tortor, et euismod justo est non enim. Nullam et magna sit amet odio ultricies tincidunt.

Nulla facilisi. Nam at nunc a erat euismod tempus. In eu augue sit amet erat lacinia hendrerit id eu dui. Morbi sagittis eros nec justo commodo, nec facilisis erat vehicula. Donec malesuada arcu ut arcu scelerisque, ac vulputate metus fringilla. Integer sit amet libero et nunc ultricies elementum. Vivamus pharetra sapien vitae mi sagittis, et pharetra justo efficitur. Aliquam nec lacus at purus cursus cursus. Ut eu leo euismod, scelerisque libero id, pharetra urna. Sed at augue non ligula dapibus tempor vel non enim. Aliquam et felis a justo hendrerit malesuada. Nullam vehicula, eros ac gravida tincidunt, risus risus fermentum justo, eget dignissim orci arcu ut purus. Etiam porttitor ligula vel ex pharetra, in volutpat turpis elementum. Etiam fringilla auctor quam, nec tristique felis efficitur non. Pellentesque eu felis sit amet dolor pretium feugiat. Praesent eleifend tellus a metus efficitur, vel vehicula tortor blandit.

Donec aliquam, mi id sodales scelerisque, risus sapien fermentum sem, sit amet interdum justo eros et nulla. Proin ultrices metus eget orci volutpat, nec scelerisque leo iaculis. Mauris id turpis quam. Sed sit amet turpis fringilla, finibus dolor in, interdum orci. Mauris at magna scelerisque, cursus enim sit amet, suscipit sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales mauris in felis tincidunt convallis. Proin vitae semper orci, et condimentum eros.`;

const wordCount = longText.split(' ').length;
console.log(`Number of words: ${wordCount}`);

const etCount = longText.split(' et ').length - 1;
console.log(`Number of times 'et' appears: ${etCount}`);


// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleanedPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
let isPalindrome = true;

for (let i = 0; i < cleanedPhrase.length / 2; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}
