// Iteration 1: Names and Input

let hacker1 = "Claudia";

let hacker2 = "Adrián";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}characters!`
  );
}

// Iteration 3: Loops
// 3.1

// Without loop
let UAB = hacker1.split("").join(" ").toUpperCase();
console.log(UAB);

// With loop
let UAB2 = "";

for (let i = 0; i < hacker1.length; i++) {
  UAB2 += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(UAB2);

// 3.2 Reverse
let rever = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  rever += hacker1[i];
}

console.log(rever);

// 3.3 Lexicographic Order


if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`The ${hacker2} name goes first.`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The ${hacker1} name goes first.`);
} else {
  console.log("What?! You both have the same name?");
}
