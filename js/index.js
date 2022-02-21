// Iteration 1: Names and Input
const hacker1 = "alper";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "marco";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker1.length}  characters!`
  );
}
// Iteration 3: Loops

let mainName = "";
for (let i = 0; i < hacker2.length; i++) {
  mainName += `${hacker2[i]} `;
}
console.log(mainName.toUpperCase());
console.log(mainName.split("").reverse().join("").toLowerCase());

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => (a < b ? -1 : 1));
}
console.log(alphabeticalOrder([hacker1.toLowerCase(), hacker2.toLowerCase()]));
const result = alphabeticalOrder([
  hacker1.toLowerCase(),
  hacker2.toLowerCase(),
]);

if (hacker1 !== hacker2 && result[0] === hacker1) {
  console.log(" The drivers name goes first.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  console.log(" Yo, the navigator goes first definitely.");
}
