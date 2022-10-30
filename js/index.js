// Iteration 1: Names and Input

// 1.1
let hacker1 = "Struan";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
let hacker2 = "Dom";
// 1.4
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

// 3.1
let newStr = hacker1.toUpperCase();
let words = newStr.split("");
for (let i = 0; i < words.length; i++) {
  words[i] += " ";
}
newStr = words.join("");
console.log(newStr);
// 3.2
let reverseStr;
let reverseArr = hacker2.split("");
reverseStr = reverseArr.reverse().join("");
console.log(reverseStr);

// 3.3
lexi = [hacker1, hacker2];
lexi.sort();
if (lexi[0] === hacker1) {
  console.log("The driver's name goes first");
} else if (lexi[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if ((hacker1 = hacker2)) {
  console.log("What? You bot have the same name?");
} else {
  console.log("error");
}
