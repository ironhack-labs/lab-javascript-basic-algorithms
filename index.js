// Iteration 1: Names and Input

const hacker1 = "bru";
const nameUpper = hacker1.toUpperCase();
console.log(`The drivers name is ${nameUpper}`);

const hacker2 = "bru";
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length} characters!`)

} if (hacker1.length < hacker2.length) {
    console.log(`the navigator has the longest name, it has ${hacker2.length} characters!`)

} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} ${hacker2.length} characters!`)
}

// Iteration 3: Loops

/*const nameArray = nameUpper.split('');
console.log(nameArray)

const spacedName = nameArray.join(' ');

const reversedNameArray = nameUpper.split('');
reversedNameArray.reverse();
const reversedName = reversedNameArray.join('');

console.log(`The reverted name is ${reversedName}`);*/

let firstNameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    firstNameReversed = firstNameReversed + hacker2[i];
}

console.log(`The reversed name is: ${firstNameReversed}`);

let resultComparation = hacker1.localeCompare(hacker2);
if (resultComparation < 0) {
    console.log("The driver's name goes first.");
} else if (resultComparation > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
