// Iteration 1: Names and Input
const hacker1 = 'Cristian';
const hacker2 = 'Raúl';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
}

// Iteration 3: Loops
// Create an auxiliar variable with an empty string inside.
// Then use a for of loop to iterate over the string, and assign
// the letter that it takes in each iteration to the empty string
// plus a white space next to it. 
let hacker1Uppercase = "";

for (const letter of hacker1) {
    hacker1Uppercase += letter.toUpperCase() + " ";
}

// Create an auxiliar variable with an empty string inside.
// Again, use a for of loop to iterate over the string and store
// each letter inside the empty string in each iteration. This way
// is useful to store each letter in reverse order. 
console.log(hacker1Uppercase);

let hacker2Reverse = "";
for (const letter of hacker2) {
    hacker2Reverse = letter + hacker2Reverse;
}

console.log(hacker2Reverse)

//We can use a if conditional statement to check the three possibilities.
//Using the .localCompare() method and knowing how it works,
//we can determine if one string goes before another one in a 
//lexicographic context. 
if(hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first because ${hacker1.charAt(0)} comes before ${hacker2.charAt(0)}.`);
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely because ${hacker2.charAt(0)} comes before ${hacker1.charAt(0)}.`);
} else {
    console.log(`What? You both have the same name?!`);
}