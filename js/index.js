// Iteration 1: Names and Input
//
const hacker1 = "Ivona";
console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Alex";
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
    
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// Iteration 3: Loops
const hacker1Uppercase = hacker1.toUpperCase();
let seperatedChar = "";
let reverseSeperatedChar = "";

for (i=0; i<hacker1Uppercase.length; i++) {
    seperatedChar = seperatedChar + `${hacker1Uppercase[i]}, `;
}
console.log(seperatedChar);

for (i=hacker1.length-1; i>=0; i--) {
    reverseSeperatedChar = reverseSeperatedChar + `${hacker1[i]}, `;
}

console.log(reverseSeperatedChar)



const hacker1FirstChar = hacker1[0];
const hacker2FirstChar = hacker2[0];

if (hacker1FirstChar.localeCompare(hacker2FirstChar) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1FirstChar.localeCompare(hacker2FirstChar) === -1) {
    console.log("The driver's name goes first.");
} 
else {
    console.log("What?! You both have the same name?");
}


