// Iteration 1: Names and Input
let hacker1 = "Berkay";
let hacker2 = "Liz";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `I seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters! `
  );
}

// Iteration 3: Loops
let capitalizedName = "";
let reversedName = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalizedName = capitalizedName + hacker1[i] + " ";
  if (i === hacker1.length - 1) {
    console.log(capitalizedName.toUpperCase());
  }
}

for (let i = hacker2.length; i >= 0; i--) {
  reversedName = reversedName + hacker2.charAt(i);
  if (i === 0) {
    console.log(reversedName);
  }
}

if (hacker2.localeCompare(hacker1) === 1) {
  console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker2.localeCompare(hacker1) === 0) {
  console.log("What?! You both have the same name?");
}
