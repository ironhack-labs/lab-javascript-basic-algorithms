// Iteration 1: Names and Input
let hacker1 = "Andrea";
console.log(`"The driver's name is ${hacker1}`);

let hacker2 = "Andrea";
console.log(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let result = '';
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversedName = "";
for (let i = 1; i <= hacker2.length; i++) {
    reversedName += hacker2[hacker2.length - i];
}
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings, print:
let i = 0;
if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
} else if (hacker1.length < hacker2.length) {
    while (hacker1[i] === hacker2[i] && i < hacker1.length) {
        i++;
    }
    if (hacker1[i-1] === hacker2[i-1] && i === hacker1.length) {
        console.log("The driver's name goes first.");
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely.");
    }
} else {
    while (hacker1[i] === hacker2[i] && i < hacker2.length) {
        i++;
    }
    if (hacker2[i-1] === hacker1[i-1] && i === hacker2.length) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (hacker2[i] < hacker1[i]) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("The driver's name goes first.");
    }
}


