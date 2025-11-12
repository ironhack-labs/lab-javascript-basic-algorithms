// Iteration 1: Names and Input

const hacker1 = "John"
console.log(`The drive´s name is ${hacker1}`)

const hacker2 = "Maria"
console.log(`the navigator´s name is ${hacker2}`)


"The drive´s name is John"
"the navigator´s name is Maria"

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

"It seems that the navigator has the longest name, it has 5 characters."

// Iteration 3: Loops

let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        driverName += " ";
    }
}
console.log(driverName);

"J O H N"

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);

"airaM"

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}