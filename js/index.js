// Iteration 1: Names and Input
let hacker1 = "Andre";
console.log(hacker1);

let hacker2 = "Andru";
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
hacker1 = hacker1.toUpperCase();
let nameSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpace = nameSpace + hacker1[i] + " ";
}
console.log(nameSpace);

let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReverse = nameReverse + hacker2[i];
}
console.log(nameReverse);

if (hacker1.toLowerCase() !== hacker2.toLowerCase()) {
    for (let i = 0; i < hacker1.length; i++) {
        console.log(i);
        if (hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first.");
            break;
        } else if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
    }
} else {
    console.log("What?! You both have the same name?");
}