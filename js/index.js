// Iteration 1: Names and Input
//hacker
let hacker1 = "Eduardo Brandiao"
let hacker2 = "Nome nome nome nome"

const hacker1Sentence = "The driver´s name is" + ' ' + hacker1;
const hacker2Sentence = "The driver´s name is" + ' ' + hacker2;

console.log(hacker1Sentence);
console.log(hacker2Sentence);

// Iteration 2: Conditionals
const hacker1length = hacker1.length;
const hacker2length = hacker2.length;

if (hacker1length > hacker2length) {
    console.log(`The driver has the longest name, it has ${hacker1length} characters.`)
} else if (hacker2length > hacker1length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2length} charecters.`)
} else {
    console.log(`Wow, you bath have equally long names, ${hacker1length} charecters!`)
}

// Iteration 3: Loops