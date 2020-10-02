// Iteration 1: Names and Input
let firstHacker = "Carmen";
console.log("The driver's name is", firstHacker);
let secondHacker = "Andrea";
console.log("The navigator's name is", secondHacker);

// Iteration 2: Conditionals

if (firstHacker.length > secondHacker.length) {
    console.log("The driver has the longest name " + firstHacker.length + " characters.");
} else if (firstHacker.length < secondHacker.length) {
    console.log("It seems that the navigator has the longest name, it has " + secondHacker.length + " characters.");
} else {
    console.log("Wow, you both have equally long names " + firstHacker.length + " characters");
}

// Iteration 3: Loops
///////////LOOP 1
let name = "";
for (let i = 0; i < firstHacker.length; i++) {
    name += firstHacker[i].toUpperCase() + ' ';
}

console.log(name);

///////////LOOP 1.2
let nameReverse = "";

for (i = secondHacker.length - 1; i >= 0; i--) {
    nameReverse += secondHacker[i];

}
console.log(nameReverse);
///////////LOOP 1.3
if (firstHacker > secondHacker) {
    console.log("The driver's name goes first.");
}
else if (firstHacker < secondHacker) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


