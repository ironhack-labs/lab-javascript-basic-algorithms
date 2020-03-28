// Iteration 1: Names and Input
const hacker1 = "Nelly";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Maxime";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker2.length > hacker1.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}
// Iteration 3: Loops
let res = "";
for (const letter of hacker1) {
  res += letter.toUpperCase() + " ";
}
console.log(res);

// let res2 = "";
// for (const letter of hacker2) {
//   res2 += letter
// }
// res2=res2.split("").reverse().join("")
// console.log(res2)

// A FINIR
// for (let index = hacker2.length - 1; index >= 0; index--) {
//   console.log(hacker2[index]);
// }

// let i = 0;
// while (hacker1[i] > hacker2[i]) {
//   i++;
//   console.log(i);
// }
for (let i = 0; i < hacker1.length; i++) {
  for (let j = 0; j < hacker2.length; j++) {
    if (hacker1[i] > hacker2[j]) {
      console.log("The driver's name goes first.");
      break;
    } else if (hacker1[i] < hacker2[j]) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else {
      console.log("What?! You both have the same name?");
      break;
    }
  }
  console.log(i);
}
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?
