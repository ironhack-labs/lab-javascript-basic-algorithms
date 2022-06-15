// console.log("I'm ready!")

// Iteration 1: Names and Input

let hacker1 = "Zubair";
// console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Ruben";
// console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let driver = hacker1;
let navigator = hacker2;

driver.length > navigator.length ? console.log (`The driver has the longest name, it has ${driver.length} characters`) : driver.length < navigator.length ? console.log (`It seems that the navigator has the longest name, it has ${navigator.length} characters`) : console.log (`Wow, you both have equally long names, ${navigator.length} characters!`)

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    // console.log (hacker1[i].toUpperCase())
}

for (let i = navigator.length-1; i >= 0; i--) {
    // console.log (hacker2[i].toUpperCase());
}

hacker1 = hacker1.toUpperCase();
hacker2 = hacker2.toUpperCase();


let longestName;

if (hacker1.length > hacker2.length) {
    longestName = hacker1;

} else if (hacker1.length <= hacker2.length) {
    longestName = hacker2;
}
for (let i = 0; i < longestName.length; i++) {
    if (hacker1[i] > hacker2[i]) {
        console.log("Driver goes first");
        break;
    } else if (hacker1[i] < hacker2[i]) {
        console.log("driver goes second");
        break;
    } else if (hacker1 === hacker2) {
        console.log(`What?! You both have the same name?` , hacker1);
        break;
    }
}
