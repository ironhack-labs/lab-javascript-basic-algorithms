// Iteration 1: Names and Input
let hacker1 = "Martin";
console.log(hacker1);
let hacker2 = "Amy";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loop

// Print character's name in caps seperated by a space
for (let i = 0; i <= hacker1.length - 1; i++) {
    console.log(hacker1[i]+"&nbsp;")
}

// Print name in reverse order
function reverseName(hacker2) {
    let reversed = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reversed += hacker2[i];
    }
    return reversed;
};
console.log(reverseName(hacker2));

//Lexivographic order
if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}
