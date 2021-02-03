// Iteration 1: Names and Input
let hacker1 = "Amalia";
console.log(hacker1);
let hacker2 = "Omar";
console.log(hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "Wow, you both have equally long names," + hacker2.length + " characters!."
  );
}

// Iteration 3: Loops
// Space between Function
function addSpace(PSG) {
  PSG = PSG.toUpperCase();
  console.log(PSG);
  PSG = PSG.split("");
  console.log(PSG);
  console.log(PSG.join(" "));
}
addSpace(hacker1);
addSpace(hacker2);
// Space between loop
let tmp = "";
for (let i = 0; i < hacker1.length; i++) {
  tmp += hacker1[i].toUpperCase() + " ";
}
console.log(tmp.trim());
// Reverse spelling loop
let rvs = "";
for (var i = hacker1.length - 1; i >= 0; i--) {
  rvs += hacker1[i];
}
console.log(rvs.trim());
// Reverse spelling console log
console.log(hacker1.split("").reverse().join(""));
console.log(hacker2.split("").reverse().join(""));

// Alphabetical order loop
