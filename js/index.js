// Iteration 1: Names and Input
let hacker1 = "Andriw";
let hacker2 = "Alvin";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let comparison = Math.max(hacker1.length, hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${comparison} characters!`
  );
}

// Iteration 3: Loops
let driverCaps = hacker1.toUpperCase();
let driverSpacedCaps = "";

for (let i = 0; i < driverCaps.length; i++) {
  driverSpacedCaps += driverCaps[i] + " ";
}
console.log(driverSpacedCaps);

let backwardsNav = "";

for (let i = 0; i < hacker2.length; i++) {
  backwardsNav = hacker2[i] + backwardsNav;
}

console.log(backwardsNav);

let hackers = [hacker1, hacker2];
hackers.sort();

if (hackers[0] === hacker1 && hackers[0] !== hackers[1]) {
  console.log("The driver's name goes first.");
} else if (hackers[0] === hacker2 && hackers[0] !== hackers[1]) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hackers[0] === hackers[1]) {
  console.log("What?! You both have the same name?");
}

console.log(hackers);
