// Iteration 1: Names and Input

let hacker1 = 'Jonathan';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Amanda';
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1

console.log(hacker1.toUpperCase());
//3.2

splitName = ['a', 'm', 'a', 'n', 'd', 'a']
let reverseName = splitName.reverse();
hacker2 = reverseName.join('');
console.log(hacker2);

//3.3

if (hacker1.substring(0, 1) > hacker2.substring(0, 1)) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.substring(0, 1) < hacker2.substring(0, 1)) {
    console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1.substring(0, 1) = hacker2.substring(0, 1)) {
    console.log(`What?! You both have the same name?`);
}