// Iteration 1: Names and Input
const hacker1 = "Xavier";
const hacker2 = "Leonardo";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let hacker1UpperCapitals = hacker1.toUpperCase();
///console.log(hacker1UpperCapitals);
let spaceNameArr = [];

for (const value of hacker1UpperCapitals) {
    //console.log(value);
    spaceNameArr.push(value);
}

console.log(spaceNameArr.join(' '));

let reverseNameArr = [];

for (let i=hacker2.length; i>=0; i--){
    reverseNameArr.push(hacker2[i]);
}

console.log(reverseNameArr.join(''));

let result = hacker1.localeCompare(hacker2);

if (result === -1) {
    console.log("The driver's name goes first.");
} else if (result === 1){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log('What?! You both have the same name?');
}
