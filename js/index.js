// Iteration 1: Names and Input

const hacker1 = "Oliver";
console.log(hacker1);

const hacker2 = "Laura";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length}characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has  ${hacker2.length}characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names  ${hacker2.length}characters`
  );
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("", 6));

let result = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  result += hacker2[i];
}
console.log(result);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The drivers name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
