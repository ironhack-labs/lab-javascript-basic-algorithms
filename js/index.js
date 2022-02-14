// Iteration 1.1 until 1.4: Names and Input
const hacker1 = "Vanessa";
const hacker2 = "Alberto";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
//2.1 Print depending on which name is longer
const longerName =
  hacker1.length > hacker2.length
    ? `The driver has the longest name, it has ${hacker1.length} characters.`
    : hacker1.length < hacker2.length
    ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    : `Wow, you both have equally long names, ${hacker1.length} characters!`;

console.log(longerName);

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1New = ``;
for (let i = 0; i < hacker1.length; i++) {
  hacker1New += ` ` + hacker1[i].toLocaleUpperCase();
}
console.log(hacker1New.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3 Print depending on the lexicographic order of the strings
let longestName = Math.max(hacker1.length, hacker2.length)
let output;
for (let i = 0; i < longestName; i++) {
  if (hacker1 === hacker2) {
    output = `What?! You both have the same name?`;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    output = `The driver's name goes first.`;
    break;
  } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
    output = `Yo, the navigator goes first definitely.`;
    break;
  } else if (hacker1[i] === hacker2[i]) {
    continue;
  }
}
console.log(output);
