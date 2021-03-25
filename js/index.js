// Iteration 1
const hacker1 = "Tony"
const hacker2 = "Willy"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length, "characters")
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters")
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names", hacker1.length, "characters!")
}
// Iteration 3
let hacker1Space = hacker1
hacker1Space = hacker1Space.split("").join(" ");
console.log(hacker1Space.toUpperCase());
let hacker2Space = hacker2
hacker2Space = hacker2Space.split("").join(" ");
console.log(hacker2Space.toUpperCase());

let reverseHacker1 = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseHacker1 += hacker1[i];
}
console.log(reverseHacker1);

let reverseHacker2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseHacker2 += hacker2[i];
}
console.log(reverseHacker2);

const hackerNames = [hacker1, hacker2]
console.log(hackerNames.sort())
 if (hackerNames[1] === hackerNames[2]) {
    console.log("What?! You both have the same name?")
} else if (hackerNames[2] === hackerNames.sort()[1]) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hackerNames[1] === hackerNames.sort()[1]) {
        console.log("The driver's name goes first.")
}