// Iteration 1: Names and Input
const hacker1 = "Goncalo";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Daniela";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1
let driver = "";

for (let i = 0; i < hacker1.length; i++) {
  driver += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driver += " ";
  }
}
console.log(driver);

// 3.2
let navigatorReversed = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  const char = hacker2[j];
  navigatorReversed += char;
}
console.log(navigatorReversed);

// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus molestie neque aliquam fermentum. Curabitur sed nisl a ante pulvinar rhoncus. Vivamus varius quam sed consectetur tristique. Vivamus venenatis faucibus dignissim. Vivamus est lacus, dignissim at auctor id, blandit eu dolor. Maecenas aliquet arcu cursus mauris commodo ullamcorper. In dapibus leo tortor, nec auctor nulla consectetur vel. Duis sed mi vel ligula faucibus feugiat. Morbi efficitur mi est, bibendum tempus leo finibus vel. Ut bibendum malesuada ullamcorper.";

let count = 0;
for (f = 0; f < longText.length; f++) {
  if (longText[f] === " ") {
    count += 1;
  }
}

console.log(count);
