// Iteration 1: Names and Input
let hacker1 = "Kristi";  // driver
let hacker2 = "Enrique";   // navigator
console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`);
} else if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters"`);
} else {
    console.log(`"Wow, you both have equally long names" ${hacker1.length}`);
}
// Iteration 3: Loops
let nameHacker1 = "";
for (let i = 0; i < hacker1.length; i++){
    nameHacker1 += hacker1[i] + " ";
}
driverName= nameHacker1.toUpperCase();
console.log(driverName);

// console.log(hacker1.toUpperCase().split('').join(' '));

// const hacker1UpperCase = hacker1.toUpperCase();
// console.log(hacker1UpperCase[0]+ ' ' + hacker1UpperCase[1] + ' ' + hacker1UpperCase[2] + ' ' + hacker1UpperCase[3]+ ' ' + hacker1UpperCase[4] + ' ' + hacker1UpperCase[5] + ' ');


let nameHacker2 = "";
let reversed ="";
for (let i = hacker2.length - 1; i >= 0; i--){
    reversed += hacker2[i];
}
console.log(reversed);
// console.log(hacker2.split('').reverse().join(''));

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// bonus 1
const longText = `Nulla nec finibus tellus. Duis posuere leo quis placerat fermentum. Nullam leo mauris, rhoncus eu suscipit ac, tempor nec tellus. In in hendrerit ligula, 
sit amet euismod ipsum. Nulla lacus urna, convallis et gravida in, condimentum sed est. Nam ac felis a eros fringilla elementum ac sit amet risus. Fusce ornare, quam quis 
rhoncus finibus, nisl mauris fermentum ex, vel consequat massa ipsum nec ex. Duis sed quam eu nunc porta luctus a ut diam. Duis a magna nec odio dignissim euismod. Cras 
vel purus enim. Proin id nunc diam. Nam eu velit eget diam semper bibendum. Duis in diam tempor, iaculis dui eget, consequat nulla. Donec vulputate eros non enim sodales, quis tempus nibh convallis. Praesent condimentum odio non purus mattis molestie.`

const count = longText.trim().split(/\s+/).length;
console.log(count);

const word = " et ";
const countEt = longText.split(word).length-1;
console.log(countEt);


// bonus 2
let phraseToCheck = 'Amor, Roma';
let text1 = 'amor';
let text2 = 'roma';
if (text1[0] === text2[3] && text1[1] === text2[2] && text1[2] === text2[1] && text1[3] === text2[0] ) {
    console.log('Is palindrome!');
} else {
    console.log('Is not palindrome!')
}