// Iteration 1: Names and Input
const hacker1 = "Fabian";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Claire";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,  ${hacker2.length}  characters!)`
  );
}
// Iteration 3: Loops
printName = "";
for (let i = 0; i < hacker1.length; i++) {
  const currentLetter = hacker1[i].toUpperCase();

  if (i < hacker1.length - 1) {
    printName += hacker1[i].toUpperCase() + " ";
  } else {
    printName += hacker1[i].toUpperCase();
  }
}
console.log(printName);

printNameNavi = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const currentLetter2 = hacker2[i];

  if (i > 0) {
    printNameNavi += hacker2[i].toUpperCase() + " ";
  } else {
    printNameNavi += hacker2[i].toUpperCase();
  }
}
console.log(printNameNavi);

checkName = [hacker1, hacker2];

newCheckName = checkName.sort();

if (newCheckName[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (newCheckName[0] == hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
console.log(newCheckName[0]);

console.log("--------------------------------");
console.log(newCheckName);
