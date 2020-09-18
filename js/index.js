// Iteration 1: Names and Input

const hacker1 = "Lewis Hamilton";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Christopher Columbus";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}


// Iteration 3: Loops
// Solution 1 using only loops :

const HACKER1 = hacker1.toUpperCase();
let HACKER1byLetter = HACKER1[0];
for (let i = 1; i < HACKER1.length; i++) {
    HACKER1byLetter += " " + HACKER1[i];
}
console.log(HACKER1byLetter);


let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log("The driver's name goes first");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely");
        break;
    case 0:
        console.log("What?! You both have the same name?");
}

//solution 2 using methods split and toUpperCase

let splitHacker1 = hacker1.split('').join(' ').toUpperCase();
console.log(splitHacker1);

let reversedHacker2 = hacker2.split('').reverse().join('');
console.log(reversedHacker2);


// Bonus 1

const someText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu mi, condimentum at nisl malesuada, elementum faucibus diam. Sed et dui eget nibh pharetra faucibus eget vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id elit ut metus mattis malesuada. Vestibulum ut dapibus dui. Ut nec tortor lorem. Fusce sagittis metus et suscipit hendrerit. Cras tincidunt non augue quis euismod. Aenean malesuada luctus sodales. Donec et eleifend eros. Phasellus massa felis, ultricies sed nulla ut, dictum suscipit sem. Aliquam erat volutpat. Pellentesque odio augue, convallis at venenatis in, consectetur at odio.

Vivamus in gravida metus. Donec ornare fringilla neque, in aliquam nibh. Vestibulum urna justo, lobortis eu urna ac, pellentesque consectetur velit. Mauris lectus erat, volutpat eu sapien vitae, maximus malesuada est. Phasellus semper accumsan lectus consectetur cursus. Proin tincidunt et sapien vitae gravida. Maecenas feugiat lorem ut magna ornare, laoreet egestas erat tempor. Fusce sit amet lectus eu mi rutrum auctor at et ligula. Curabitur sit amet ex eu dui vulputate fringilla ut sed ipsum. Phasellus eu urna lectus. Ut euismod dui ut posuere malesuada. Aenean nulla odio, accumsan vitae volutpat eget, tempor vitae tortor. Ut id nisl sed enim vulputate facilisis eget in leo.

Fusce maximus, quam interdum auctor faucibus, neque nulla ultricies orci, non maximus est urna vitae lectus. Proin consequat magna ac diam iaculis, sodales venenatis mi ultrices. Mauris vitae dictum eros. Vestibulum viverra quam in eros vestibulum, laoreet ultrices erat mollis. Mauris accumsan et ante vel pretium. Nam porttitor sem in purus lacinia finibus. Nunc eu nisi ut nisi blandit pretium eu egestas ante. Integer sit amet nisi aliquet lorem hendrerit hendrerit eget sed massa. Nulla facilisi. Nulla quam neque, placerat eu maximus laoreet, fermentum eget nisi. Vivamus aliquet nunc at maximus eleifend.`

console.log(someText.split(' ').length);

const regex = / et /g;

console.log(someText.match(regex).length);


// Bonus 2

let phraseToCheck = "";

function ifPalindrome (phraseToCheck) {
    phraseToCheck = phraseToCheck.replace(/[\s?',!.]/g, '').toUpperCase();
    let reversedPhrase = "";

    for (let i = phraseToCheck.length - 1; i >= 0; i--) {
        reversedPhrase += phraseToCheck[i];
    }
    if (phraseToCheck === reversedPhrase) {
        console.log(true);
    } else {
        console.log(false);
    }    
}


ifPalindrome("Was it a car or a cat I saw?");
ifPalindrome("Amor, Roma");
ifPalindrome("Was it a car or a cat I saw?");

