// Iteration 1: Names and Input
const hacker1 = "Johannes";
const hacker2 = "Alonso";

console.log("The driver's name is " + hacker1);

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The diver has the longest name, it has " + hacker1.length + " characters");

} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters!");

} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}
// Iteration 3: Loops

//3.1
let driverCapital = "";
for (i = 0; i < hacker1.length; i++) {
    driverCapital = driverCapital.concat(hacker1[i] + " ");
}
console.log(driverCapital.toUpperCase());

//3.2
let reversedNavigator = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator = reversedNavigator.concat(hacker2[i]);
}
console.log(reversedNavigator);

//3.3
let arrSort = [hacker1, hacker2].sort();

if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?");
} else {
    if (hacker1 == arrSort[0]) {
        console.log("The driver's name goes first.")
    } else {
        console.log("Yo, the navigator goes first definitely.")
    }
}