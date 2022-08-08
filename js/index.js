// Iteration 1: Names and Input
let hacker1 = "Daniel";
console.log(`the driver's name is ${hacker1}`);
let hacker2 = "Christopher";
console.log(`the Navigator's name is ${hacker2} `);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `${hacker2} has the longest name. it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `wow you both have equally long names, ${hacker1.length} characters`
  );
}
// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let driver = [];
for (i = 0; i < hacker1.length; i++) {
  driver = driver + " " + hacker1[i];
}
console.log(driver.trim());
let navigator = "";
for (let i = hacker2.length - 1; (i) => 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);
hacker2 = [...hacker2].reverse().join("");
console.log(hacker2);
hacker1 = "Daniel";
hacker2 = "Christoper";
if (hacker1[0] < hacker2[0]) {
  console.log(`${hacker1} goes first`);
} else if (hacker2[0] > hacker1[0]) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
let loremIpsumText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus urna. Phasellus egestas purus arcu, at tincidunt nunc pharetra sed. Aliquam eget euismod libero. Integer ac velit lacinia, efficitur orci a, finibus libero. Aenean in libero sit amet odio euismod mattis a ac augue. Duis rhoncus ac neque ultrices cursus. Vestibulum vel tellus at nunc eleifend pretium a ut eros. Fusce malesuada vitae leo vitae tristique. Suspendisse rhoncus sapien justo, quis rutrum urna imperdiet eu. Cras fringilla vehicula est. Aliquam lobortis lacinia quam, eu molestie metus pharetra ac. Nunc id mi faucibus, interdum sem non, sagittis tortor. Donec ultrices, ex ac scelerisque vulputate, mauris risus feugiat augue, eget faucibus quam turpis vitae magna.";
for (let i = 0; i < loremIpsumText.length; i++) {
  if (loremIpsumText.length[i] === "et") {
    console.log(loremIpsumText.length[i]);
  }
} // Iteration 1: Names and Input
let hacker1 = "Daniel";
console.log(`the driver's name is ${hacker1}`);
let hacker2 = "Christopher";
console.log(`the Navigator's name is ${hacker2} `);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `${hacker2} has the longest name. it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `wow you both have equally long names, ${hacker1.length} characters`
  );
}
// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let driver = [];
for (i = 0; i < hacker1.length; i++) {
  driver = driver + " " + hacker1[i];
}
console.log(driver.trim());
let navigator = "";
for (let i = hacker2.length - 1; (i) => 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);
hacker2 = [...hacker2].reverse().join("");
console.log(hacker2);
hacker1 = "Daniel";
hacker2 = "Christoper";
if (hacker1[0] < hacker2[0]) {
  console.log(`${hacker1} goes first`);
} else if (hacker2[0] > hacker1[0]) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
