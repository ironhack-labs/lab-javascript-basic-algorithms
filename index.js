// Iteration 1: Names and Input

const hacker1 = "David";
const hacker2 = "Sara";

console.log("The navigator's name is " + hacker2);
console.log("The driver's name is " + hacker1);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

let reversedHacker2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

let i = 0;
while (i < hacker1.length && i < hacker2.length) {
  if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
    console.log("The driver's name goes first.");
    break;
  }
  i++;
}

if (i === hacker1.length && i === hacker2.length) {
  console.log("What?! You both have the same name?");
}