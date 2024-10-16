// Iteration 1: Names and Input
const hacker1 = "Ivan";

console.log(`the driver's name is ${hacker1}`);

const hacker2 = "Marta";
console.log(`the navigator's name is ${hacker2}`);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops


for (let i = 0; i < hacker1.length; i++) {
    const driverCount = hacker1[i];

    console.log(driverCount.toUpperCase());
}
let navigatorCount = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    const char = hacker2[j];

    navigatorCount += char;
}
console.log(navigatorCount);

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
