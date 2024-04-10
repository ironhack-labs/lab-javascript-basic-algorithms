// Iteration 1: Names and Input

const hacker1 = 'NisolMikel';
const hacker2 = 'Alvaro';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest nameit has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names,${hacker1.length}  characters!`);
};

// Iteration 3: Loops

// 3.1

let newName = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        newName += hacker1[i].toUpperCase();
    } else {
        newName += hacker1[i].toUpperCase() + " ";
    };
};

console.log(newName);

// 3.2

let reversedName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
};

console.log(reversedName);

// 3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sodales interdum. Maecenas mollis lacinia pellentesque. Duis blandit dolor ut metus eleifend pharetra. Phasellus vel laoreet diam, at rhoncus sapien. Quisque sit amet hendrerit nibh. Donec blandit, velit id egestas suscipit, orci neque convallis enim, eget lacinia augue eros sit amet elit. Proin vitae varius justo. Fusce mi diam, feugiat sit amet dui eu, condimentum viverra dui. Sed dapibus augue nec nisi varius, sit amet mollis neque cursus. Pellentesque aliquet eget turpis quis dapibus. Pellentesque lacinia elementum justo sed vehicula. Vestibulum non pretium nulla. Sed tellus sem, lobortis eleifend est vel, aliquam rhoncus purus. Proin egestas nisi vitae lobortis porta.

In hac habitasse platea dictumst. In sit amet mi consectetur, commodo nisl id, rutrum nunc. Phasellus nisl libero, mollis at sapien vel, viverra mollis dolor. Duis ornare nisi eget placerat placerat. Nulla ac libero turpis. Phasellus vitae lectus cursus, lacinia enim a, ornare arcu. Suspendisse ornare accumsan leo, non semper odio dapibus quis. Vivamus id enim non nulla tincidunt accumsan vitae ac dui. Pellentesque sollicitudin et justo non scelerisque.

Phasellus vel lacinia tellus. Curabitur egestas ante pulvinar tellus luctus venenatis. Duis vitae elit dui. Vestibulum luctus ultrices mauris, luctus finibus purus tincidunt vitae. Pellentesque dui urna, fermentum et vehicula cursus, lacinia sed tortor. Vestibulum vel sollicitudin lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta quam semper purus vehicula, ac euismod mauris tincidunt. Integer rhoncus consequat ante eu pretium. Mauris posuere libero a faucibus cursus. Integer finibus, tortor a eleifend vestibulum, sapien ante eleifend tellus, eu tincidunt sem ex sed dui. Pellentesque euismod purus ac ultrices placerat. Integer aliquet cursus pharetra. Sed nisl nulla, sodales eu tellus ac, egestas tempus mauris. Vestibulum faucibus urna id purus dictum, nec auctor tortor facilisis. Nullam sit amet velit eleifend, placerat ex vel, maximus orci.`

longText = longText.trim(); // remove potential empty characters in at the beginning and at the end of the string

// we will consider that each whitespace is consdered a delimeter for a word, therefore each whitespace will account for a word
let counterWords = 0;
let counterEt = 0;

for (i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        counterWords += 1;
    };
    if (longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] === " et ") {
        counterEt += 1;
    };
};

counterWords += 1 // adding an additional word because we only count until the last whitespace but there is a word after that one

console.log(`The text contains ${counterWords} words`);
console.log(`The text contains ${counterEt} times the latin word "et"`);

// Bonus 2:

const phraseToCheck = "Was it a car or a cat I saw?";
const phraseToCheckClean = phraseToCheck.replace(/[^a-z]/gi, "").toLowerCase(); // leave only letters in the string

let reversedOrder = "";

for (i = phraseToCheckClean.length - 1; i >= 0; i--) {
    reversedOrder += phraseToCheckClean[i];
};

if (phraseToCheckClean === reversedOrder) {
    console.log(`The string "${phraseToCheck}" is a Palindrome`);
} else {
    console.log(`The string "${phraseToCheck}" is NOT a Palindrome`);
};
