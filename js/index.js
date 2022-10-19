
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
const lorem = "Lorem ipsum dolor et. amet, consectetur adipiscing et, sed et eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi et aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit et voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const arr = lorem.split(" ");
console.log(arr);
console.log(arr.length);

//2
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "et") {
        count++;
    }
}
console.log(count);

//or
let co = 0;
let j = 0;

for (i = 0; i < lorem.length; i++) {
    if (lorem[i] === "e") {
        j++; //1
        if (lorem[i+j] === "t") { 
            co++;
        } 
    }
}
console.log(co);

//bonus 2
const phraseToCheck = "No 'x' in Nixon";

let revPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) { //to reverse
    revPhrase += phraseToCheck[i].toLowerCase();
}
let l = "";
for (let i = 0; i < revPhrase.length; i++) {
    if(revPhrase[i] >= 'a' && revPhrase[i] <= 'z') { //to select alphabetical
        l += revPhrase[i];
    }
}
let v = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    if(phraseToCheck[i] >= 'a' && phraseToCheck[i] <= 'z' || phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'Z') {
        v += phraseToCheck[i].toLowerCase();
    }
}

if (l === v) {
    console.log("this is a palindrom!");
} 
else {
    console.log("this is not a palindrom!");
}

console.log(revPhrase);
console.log(v);
console.log(l);

