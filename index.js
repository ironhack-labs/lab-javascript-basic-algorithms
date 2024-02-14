// Iteration 1: Names and Input
const hacker1 = "Shaza";
const hacker2 = "Rob";
console.log("The drivers name is " + hacker1);
console.log("The navs name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters `
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
let newDriverName = "";
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    newDriverName += hacker1[i].toUpperCase() + " ";
  } else {
    newDriverName += hacker1[i].toUpperCase();
  }
}

console.log(`newDriverName ${newDriverName}`);

let newNav = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNav += hacker2[i];
}

console.log(newNav);

let result = hacker1.localeCompare(hacker2);
if (result === -1) {
  console.log("the driver's name goes first.");
} else if (result === 1) {
  console.log("yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const longText = `Integer sodales urna sapien, id suscipit purus accumsan quis. Curabitur in placerat tellus. Sed egestas nisi imperdiet ante sodales eleifend. Phasellus at lacus in lectus feugiat iaculis ac non nibh. Aenean id aliquet augue. Quisque pellentesque efficitur orci. Nam at magna risus. Nullam viverra nisl erat. Etiam nulla velit, lobortis sit amet tellus nec, mattis consequat sapien. Duis in iaculis erat, lacinia efficitur neque Cras elit nisi, venenatis ac nisl ut, accumsan faucibus erat. Donec faucibus nulla vitae sollicitudin rhoncus. Ut vitae velit lorem. In eu purus turpis. Etiam luctus dolor dolor, vulputate iaculis purus ornare ut. Quisque gravida nisi pharetra ultrices porta. Proin id accumsan est, eget varius arcu. Ut scelerisque dui sit amet diam molestie pellentesque. Donec quis interdum tellus. Integer vehicula tempor condimentum. Aliquam erat volutpat.

In vel blandit erat. Aenean dignissim, nisl quis bibendum consequat, lacus erat suscipit purus, id dignissim purus nisl sit amet ante. Ut non elit faucibus augue scelerisque ullamcorper. Vivamus augue libero, rhoncus sed neque non, interdum faucibus ex. Curabitur urna ex, consequat in pretium elementum, faucibus id tellus. Sed eleifend est a porttitor ullamcorper. Aliquam laoreet dictum dui, a consequat nisl semper et. Nulla sit amet egestas turpis. Duis accumsan metus eu felis auctor, sit amet tincidunt ipsum iaculis. Vivamus interdum ut nisl vel finibus. Curabitur justo sem, tincidunt ut laoreet vitae, feugiat ultrices orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non viverra tellus.`;

const longTextArray = longText.split(" ");

console.log(longTextArray.length);

console.log(`counted word ${longTextArray}`);

//another way to count word in long string
let count = 0;
//let check = false;

// for (let i = 0; i < longText.length; i++) {
//   if (longText[i] !== " " && !check) {
//     count++;
//     check = true;
//   } else if (longText[i] === " ") {
//     check = false;
//   }
// }

for (let i = 0; i < longText.length; i++) {
  const ets = longText[i] + longText[i + 1];
  if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    (longText[i + 2] === " " || longText[i + 2] === ".")
  ) {
    count++;
  }
}

console.log(`counted word ${count}`);
