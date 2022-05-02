console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Esteban";

// 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Javier";

// 1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"


let newName = '';
for (i = 0; i < hacker1.length; i += 1) {
    newName += hacker1[i] += ' ';
}
console.log(newName.toUpperCase());



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversed = '';
for (i = hacker2.length - 1; i >= 0; i -= 1) {
    reversed += hacker2[i];
}
console.log(reversed);


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?



if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1 = hacker2) {
    console.log(`What?! You both have the same name?`)
}
