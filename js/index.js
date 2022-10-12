// Iteration 1: Names and Input
//

let hacker1 = "Vitchet";

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Olesya";

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let hacker1UpSpace = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    hacker1UpSpace += hacker1[i].toUpperCase();
  } else {
    hacker1UpSpace += hacker1[i].toUpperCase() + " ";
  }
}
console.log(hacker1UpSpace);

let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
      break;
    } else {
      console.log("Yo, the navigator goes first definitely.");
      break;
    }
  }
}
