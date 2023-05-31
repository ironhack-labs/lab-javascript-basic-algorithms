console.log("I'm Ready");

// Iteration 1: Names and Input
let hacker1 = "Devin";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Devinski";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

//pt 1.

let capsAndSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  capsAndSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(capsAndSpaces.trim());

//pt 2.

console.log(hacker2.split("").reverse().join(""));

//pt 3.

let shortest =
  hacker1.length > hacker2.length ? hacker2.length : hacker1.length;

for (let i = 0; i < shortest; i++) {
  let hacker1letter = hacker1[i].toLowerCase().charCodeAt() - 96;
  let hacker2letter = hacker2[i].toLowerCase().charCodeAt() - 96;

  if (i == shortest - 1 && hacker1letter == hacker2letter) {
    console.log("What?! You both have the same name?");
    return;
  }

  if (hacker1letter < hacker2letter) {
    console.log("The driver's name goes first.");
    return;
  }

  if (hacker2letter < hacker1letter) {
    console.log("Yo, the navigator goes first, definitely.");
    return;
  }

  if (i == shortest.length - 1 && hacker1letter == hacker2letter) {
    console.log("What?! You both have the same name?");
    return;
  }
}
