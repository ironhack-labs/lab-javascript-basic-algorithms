// Iteration 1: Names and Input

let hacker1 = "Vishnu";

console.log(hacker1);

let hacker2 = "Mehdi";

console.log(hacker2);
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
    `Wow, you both have equally long names,${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
let str = "Vishnu";
let latest = "";

for (let i = 0; i < str.length; i++) {
  latest += str[i];
  latest += " ";
}
console.log(latest.toUpperCase());

let nav = "Mehdi";
let reversed = "";

for (let i = nav.length - 1; i >= 0; i--) {
  reversed += nav[i];
}

console.log(reversed);

let hacker11 = "Vishnu";
let hacker22 = "Medhi";

if (hacker11.localeCompare(hacker22) > 0) {
  console.log(hacker11);
} else if (hacker11.localeCompare(hacker22) < 0) {
  console.log(hacker22);
} else {
  console.log(`${hacker11}  ${hacker22}`);
}
