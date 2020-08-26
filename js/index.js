// Iteration 1: Names and Input
let hacker1 = "Lisa";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Laura";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Ìt seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 OPTION A
var newNameDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  newNameDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newNameDriver);

// 3.1 OPTION B
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2
console.log(hacker2.split("").reverse().join(""));

// 3.3
let order;
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1.charAt(i) < hacker2.charAt(i)) {
    order = "driver";
    break;
  } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
    order = "navigator";
    break;
  } else {
    order = "same";
  }
}

function sortName(order) {
  switch (order) {
    case "driver":
      console.log(`The driver's name goes first.`);
      break;
    case "navigator":
      console.log(`Yo, the navigator goes first definitely.`);
      break;
    default:
      console.log(`What?! You both have the same name?`);
  }
}

sortName(order);
