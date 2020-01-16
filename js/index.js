// Iteration 1: Names and Input
let hacker1 = "Andre";
console.log(hacker1);

let hacker2 = "Caio";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let nameUpper = hacker1.toUpperCase();
let nameSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpace = nameSpace + nameUpper[i] + " ";
}
console.log(nameSpace);

let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReverse = nameReverse + hacker2[i];
}
console.log(nameReverse);

let iLenght = hacker1.length > hacker2.length ? hacker1.length : hacker2.length;
if (hacker1 !== hacker2) {
    for (let i = 0; i < iLenght; i++) {
        if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
            console.log("The driver's name goes first.");
            break;
        } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
    }
} else {
    console.log("What?! You both have the same name?");
}