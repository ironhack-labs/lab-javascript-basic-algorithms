// Iteration 1: Names and Input
let hacker1 = 'Adrian';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Cristina';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Letters = hacker1.length;
let hacker2Letters = hacker2.length;
let capitalLetters = hacker1.toUpperCase();
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Letters} characters.`);
}
else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1Letters}`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Letters}`)
}

// Iteration 3: Loops
for (let i = 0; i < hacker1Letters; i++) {
    let wordSpace = "";
    wordSpace += hacker1[i].toUpperCase() + " ";
    console.log(wordSpace);
}
let wordSpace = "";
for (let i = 0; i < capitalLetters.length; i++) {
    wordSpace = wordSpace + capitalLetters[i] + " ";

}
console.log(wordSpace);

let array = hacker2.split("");
console.log(array);
// let str = array.join();
let wordReverse = array.reverse();
let wordReverseString = wordReverse.toString();
let wordReverseClean = wordReverseString.split(",", " ");
console.log(`La palabra reversible tiene que ser ${wordReverseClean}`);
