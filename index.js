// Iteration 1: Names and Input

let hacker1 = 'Matt';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Jorge';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "))

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) { 
    reverseName += hacker2[i];
};

console.log(reverseName);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1[0] < hacker2[0]) {
    console.log (`The driver's name goes first.`);
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
};
