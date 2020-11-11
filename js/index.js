// Iteration 1: Names and Input
var hacker1 = "menhaj";
console.log(hacker1);
var hacker2 = "christelle";
console.log(hacker2);
console.log("-------------------------------");

// Iteration 2: Conditionals
var hacker1Lenght = hacker1.length;
var hacker2Lenght = hacker2.length;
if (hacker1Lenght > hacker2Lenght) {
  console.log(
    `The driver has the longest name, it has ${hacker1Lenght} characters.`
  );
} else if (hacker2Lenght > hacker1Lenght) {
  console.log(
    ` It seems that the navigator has the longest name, it has ${hacker2Lenght} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Lenght} characters!`
  );
}
console.log("-------------------------------");
// Iteration 3: Loops
var name = "";
for (let i = 0; i < hacker1.length; i++) {
  name += hacker1[i].toUpperCase() + " ";
}
console.log(name);

var name2 = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
  name2 += hacker2[i];
}
console.log(name2);

if (hacker1.sort > hacker2.sort) {
  console.log("The driver's name goes first.");
} else if (hacker1.sort < hacker2.sort) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
