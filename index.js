let hacker1 = "Yamil";
console.log("The driver's name is " + hacker1);
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Yamil";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name. It has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters`);
}

// Iteration 3: Loops
let hacker1Separated = "";
let hacker2Reversed = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i!== hacker1.length - 1) {
        hacker1Separated += hacker1[i].toUpperCase() + " ";
    } else {
        hacker1Separated += hacker1[i].toUpperCase();
    }
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}

console.log(hacker1Separated);
console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}