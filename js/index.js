// Iteration 1: Names and Input
const hacker1 = "vika";
console.log("The driver's name is", hacker1);
const hacker2 = "Caro";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`)
}

// Iteration 3: Loops
let capDriver = "";
for (let i = 0; i < hacker1.length; i++) {
    capDriver += hacker1[i].toUpperCase() + " ";
}
console.log(capDriver);

let revNav = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    revNav += hacker2[i]; 
}
console.log(revNav);

//bonus 1
//1
const lorem = "Lorem ipsum dolor et. am Et, Et consectetur adipiscing et, sed et eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi et aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit et voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const arr = lorem.split(" ");
console.log(arr);
console.log(arr.length);

//2
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().replace(/[^a-z]/g, "") === "et") {
        count++;
    }
}
console.log(count);

//3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//bonus 2 long 
const phraseToCheck = "A man, a plan, a canal, Panama!";
const lowPhraseToCheck = phraseToCheck.toLowerCase();
let alphaNorm = "";
for (let i = 0; i < lowPhraseToCheck.length; i++) {
    if ((lowPhraseToCheck[i] >= 'a' && lowPhraseToCheck[i] <= 'z')) { //to select alphabetical 
        alphaNorm += lowPhraseToCheck[i];
    }
}
let revPhrase = "";
for (let i = lowPhraseToCheck.length - 1; i >= 0; i--) { //to reverse
    revPhrase += lowPhraseToCheck[i];
}
let alphaRev = "";
for (let i = 0; i < revPhrase.length; i++) {
    if (revPhrase[i] >= 'a' && revPhrase[i] <= 'z') { //to select alphabetical in reversed one
        alphaRev += revPhrase[i];
    }
}

console.log(alphaRev === alphaNorm ? "this is a palindrom!" : "this is not a palindrom!");

//or bonus 2 short

const modPhraseToCheck = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");
let modRev = "";
for (let i = modPhraseToCheck.length - 1; i >= 0; i--) { //to reverse already alpha phrase
    modRev += modPhraseToCheck[i];
}
console.log(modRev === modPhraseToCheck ? "this is a palindrom!" : "this is not a palindrom!"); 

