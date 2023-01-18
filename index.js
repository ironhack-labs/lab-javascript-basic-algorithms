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

let hacker11 = "Vishnu";
let latest = "";
for (let i = 0; i < hacker11.length; i++) {
  latest += hacker11[i];
  latest += " ";
}
console.log(latest.toUpperCase());

let hacker22 = "Mehdi";
let reversed = "";

for (let i = hacker22.length - 1; i >= 0; i--) {
  reversed += hacker22[i];
}
console.log(reversed);

let hacker111 = "Vishnu";

let hacker222 = "Mehdi";

if ("hacker111".localeCompare("hacker222") === 1) {
  console.log("The driver's name goes first.");
} else if ("hacker111".localeCompare("hacker222") === -1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker111 === hacker222) {
  console.log("What?! You both have the same name?");
} else {
  console.log("?");
}
