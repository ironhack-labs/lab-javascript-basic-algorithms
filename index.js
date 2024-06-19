// Iteration 1: Names and Input
const hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1} `);
const hacker2 = "Ana";
console.log(`The navigator's name is ${hacker2} `);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

//3.1
let nameCApital = "";
for (let i = 0; i < hacker1.length; i++) {
  let hacker1CApital = hacker1.toUpperCase();
  nameCApital += hacker1CApital.charAt(i) + " ";
}
console.log(nameCApital);
//3.2
let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  const char = hacker1[i];
  reverseName += char;
}
console.log(reverseName);

//3.3
const hackers = [hacker1, hacker2];
hackers.sort();
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hackers[0] === hacker1) {
  console.log("The driver's name goes first");
} else if (hackers[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}
//Bonus1
let count = 0;
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " +
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliqu... " +
  "Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Sed molestie augue sit amet leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu et lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cur...";

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  if (twoChars === "et") {
    count++;
  }
}
console.log(count);
