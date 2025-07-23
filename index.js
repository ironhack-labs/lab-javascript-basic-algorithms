// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1= "dillan"
const hacker2= "carlos"
const hacker3= "alejandro"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigators are ${hacker2} and ${hacker3}`)


// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)

}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//! Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
// 3.3 Depending on the lexicographic order of the strings, print:
//* The driver's name goes first.
//* Yo, the navigator goes first, definitely.
//* What?! You both have the same name?
let str = "";
for (let i = 0; i < hacker1.length; i++){
    str += hacker1[i].toUpperCase() + " ";
}

console.log(str);

str = "";
for (let i = hacker1.length-1; i >= 0; i--) {
    str += hacker1[i];
}
console.log(str);

if (hacker1 > hacker2){
    console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`);
} else {
    console.log(`What?! You both have the same name?`);
}

// BONUS
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.    Generated 3 paragraphs, 222 words, 1544 bytes of Lorem Ipsum
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum accumsan nisi at ultricies. Proin aliquet ligula eget augue tempor sagittis. Sed semper elit a nibh auctor, sed aliquet nulla consequat. Pellentesque fermentum ante vitae dolor tincidunt tempor. Proin sem ligula, sollicitudin in massa a, bibendum vestibulum nisl. Quisque pretium felis nec nisl dapibus, eget pharetra lorem fermentum. Donec nec mollis nisl. Maecenas pellentesque malesuada lacus, sed pellentesque arcu.
Mauris aliquet consectetur fermentum. Vestibulum laoreet velit ut mollis faucibus. Suspendisse finibus sodales risus a tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel malesuada metus, non convallis velit. Aliquam vel bibendum augue. Vestibulum posuere sit amet lectus non rhoncus. Fusce auctor lacus arcu, eget cursus nibh interdum et. Fusce finibus quam lectus, vel aliquet dui interdum eu. Aliquam in arcu condimentum, laoreet orci vitae, lobortis lectus. Nulla vestibulum convallis sapien a tempor. Cras vel enim semper, aliquet turpis sit amet, dignissim massa. Suspendisse ut egestas lacus. Etiam nunc erat, scelerisque vitae ullamcorper et, dapibus id tortor.
Integer vel sodales erat. Sed id molestie ipsum. Nam porta interdum feugiat. Ut ultricies lorem a odio laoreet, sed tincidunt turpis consequat. In eleifend turpis justo, et luctus ligula mattis in. In a enim ligula. Aliquam condimentum felis eget dolor pharetra fermentum. Aliquam ac scelerisque ligula, eu faucibus purus.`;

let count = 0, countEt = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " || longText[i] === "\n") {
        count++;
    }
    if (longText[i] === "e" && longText[i + 1] === "t") {
        countEt++;
    }
}
count++;

console.log(count);
console.log(countEt);

let countEt2 = 0, i = 0, lastIndex = -1;

// lastIndex = longText.indexOf("et", 0);
// while (lastIndex >= 0) {
//     countEt2++;
//     i++;
//     lastIndex = longText.indexOf("et", lastIndex+1);
// }

do {
    lastIndex = longText.indexOf("et", lastIndex+1);
    i++;
    if (lastIndex >= 0) {
        countEt2++;        
    }
}while (lastIndex >= 0);
console.log(countEt2);



const phraseToCheck = "A man, a plan, a caNal, PaNama!";
let cleanPhrase = "", reversePhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    if ((phraseToCheck[i] >= "a" && phraseToCheck[i] <= "z") || (phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z")) {
        cleanPhrase += phraseToCheck[i].toLowerCase();
        reversePhrase = phraseToCheck[i].toLowerCase() + reversePhrase;
    }
}

if (cleanPhrase === reversePhrase) {
    console.log("It is a PALINDROME!");
}