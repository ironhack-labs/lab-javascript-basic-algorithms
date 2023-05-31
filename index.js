let hacker1 = "Abdullah Baig";
let hacker2 = "Francis";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// console.log(hacker1.length);
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has XX characters.");
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has XX characters."
  );
} else {
  console.log("Wow, you both have equally long names, XX characters!");
}

console.log("\n@ Capitalizing name and Spaces");
let check = "";
for (let i = 0; i < hacker1.length; i++) {
  check += hacker1[i].toUpperCase() + " ";
}
console.log(check);

console.log("\n@ 3.2\n");
let check2 = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  check2 += hacker2[j];
}
console.log(check2);

console.log("\n@3.3\n");
let str1 = "The driver's name goes first";
let str2 = "Yo, the navigator goes first, definitely.";
let str3 = "What?! You both have the same name?";

console.log(str1.localeCompare(str2));
console.log(str1.localeCompare(str3));
console.log(str2.localeCompare(str3));

if (str1 > str2) {
  console.log("The driver's name goes first");
} else if (str1 < str2) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (str1 == str2) {
  console.log("What?! You both have the same name?");
}

console.log("\n@Bonus 1\n");
let count = 0;
let letter = "et";
let longText =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
for (let i = 0; i < longText.length; i++) {
  let firstLetter = longText[i];
  let secondLetter = longText[i + 1];
  if (firstLetter === "e" && secondLetter === "t") {
    count++;
  }
}
console.log(count);
