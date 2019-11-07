// Iteration 1: Names and Input
console.log("I'm ready!");
let haker1 = "Pepito";
console.log("The driver's name is", haker1);
let haker2 = "David";
console.log("The navigator's name is", haker2);
// Iteration 2: Conditionals
if (haker1.length > haker2.length) {
  console.log(
    "The driver has the longest name, it has",
    haker1.length,
    "characters"
  );
} else if (haker2.length > haker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    haker2.length,
    "characters"
  );
} else
  console.log(
    "Wow, you both have equally long names,",
    haker1.length,
    "characters!"
  );
// Iteration 3: Loops
let result = "";
for (let i = 0; i < haker1.length; i++) {
  result += haker1[i];
  result += " ";
}
console.log(result.toUpperCase());
let inverse = "";
for (let i = haker2.length - 1; i >= 0; i--) {
  inverse += haker2[i];
}
console.log(inverse);
let sort = haker1.localeCompare(haker2);
if (sort > 0) {
  console.log("The driver's name goes first");
} else if (sort < 0) {
  cosole.log("Yo, the navigator goes first definitely.");
} else console.log("What?! You both have the same name?");
