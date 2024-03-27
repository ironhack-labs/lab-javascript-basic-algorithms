// Iteration 1: Names and Input
const hacker1 = "Ulvi";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Azizli";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
}  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters`)
}

// Iteration 3: Loops
let makeHacker1Distance = "";
for (let i = 0; i < hacker1.length; i++) {
    makeHacker1Distance += `${hacker1.charAt(i)} `;
}
console.log(makeHacker1Distance.toUpperCase()); 



let reverseHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// EXTRA
//or we can also use prompt if we don`t have predefined strings
const hacker1Name = prompt("drivers name");
const hacker2Name = prompt("navigator name");

if (hacker1Name < hacker2Name) {
    console.log("first driver name")
} else if ("second navigator name") {
} else {
    console.log("both name same")
}
