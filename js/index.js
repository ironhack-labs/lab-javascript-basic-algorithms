// Iteration 1: Names and Input
console.log("\n------ Iteration 1 --------");
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY" 
let hacker1 = "Hamilton"
let hacker2 = "Nemo"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
console.log("\n------ Iteration 2 --------");
// 2.1.Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters.or
// - It seems that the navigator has the longest name, it has XX characters.or
// - Wow, you both have equally long names, XX characters!. 
let H1Length = hacker1.length;
let H2Length = hacker2.length;

if (H1Length > H2Length) {
    console.log(`The driver has the longest name, it has a ${H1Length} characters`);
} else if (H2Length > H1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${H2Length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${H1Length} characters!`)
}
// Iteration 3: Loops
console.log("\n------ Iteration 3 --------");
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
/* -------------Using Loop For ---------------- */
let stringCap = hacker1.split("").join(" ").toUpperCase();
console.log(stringCap);
/* -------------Using For Loop inside a Function---------------- */
function stringToCap(str) {
    let newStr = "";
    for (const i of str) {
        newStr += i.toUpperCase() + " ";
    }
    return newStr;
}
console.log(stringToCap(hacker1))
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseDriver = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseDriver += hacker1[i];
}
console.log(reverseDriver);

let reverseNavigator = hacker2.split("").reverse().join("");
console.log(reverseNavigator);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
//     - Yo, the navigator goes first definitely.
// - What ? !You both have the same name ?
let words = (`${hacker1} ${hacker2}`).toLowerCase().split(" ");
console.log(words.sort());

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}
