// Iteration 1: Names and Input

const hacker1 = "George";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jonathan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `The navigator's name is longer, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

// 3.1

let driverNameInCapitals = hacker1.toUpperCase();
// console.log(driverNameInCapitals.split('').join(' ')); // short way to do it

let nameWithSpaces = "";
for (let i = 0; i < driverNameInCapitals.length; i++) {
  if (i === driverNameInCapitals.length - 1) {
    nameWithSpaces += driverNameInCapitals[i];
  } else {
    nameWithSpaces += driverNameInCapitals[i] + " ";
  }
}
console.log(nameWithSpaces);

// 3.2

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3.

// a.

// if (hacker1 < hacker2) {
//     console.log("The driver's name goes first.");
//   } else if (hacker1 > hacker2){
//     console.log("Yo, the navigator goes first definitely.");
//   } else {
//     console.log("What?! You both have the same name?")
//   }

// b.

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Driver's name goes first")
  }
  else if (hacker1.localeCompare(hacker2) = 0){
    console.log("What?! You both have the same name?")
  }
  else {
    console.log("Yo, the navigator goes first definitely.")
  }

