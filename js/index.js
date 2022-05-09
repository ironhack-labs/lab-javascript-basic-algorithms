console.log("I'm ready!");

// Iteration 1: Names and Input
let driver = "Arthur";
console.log(`The driver name is ${driver}`);

let navigator = "Sohayl";
console.log(`The navigator name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(
        `'The driver has the longest name, it has ${driver.length} characters.'`
    );
} else if (driver.length < navigator.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${navigator.length} characters`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${driver.length} characters!`
    );
}

// Iteration 3: Loops
for (letter of driver) {
    process.stdout.write(letter.toUpperCase() + " ");
}
console.log();

for (i = navigator.length - 1; i >= 0; i -= 1) {
    process.stdout.write(navigator[i]);
}
console.log();

if (driver.localeCompare(navigator) < 0) {
    console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
