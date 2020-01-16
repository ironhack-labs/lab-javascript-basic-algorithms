// Iteration 1: Names and Input
let hacker1 = "Luz";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nelson";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
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
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

let str = hacker1;
let str1 = "";
let str2 = str.toUpperCase();

for (let i = 0; i < str.length; i++) {
  str1 += str2[i];
  str1 += " ";
}

console.log(str1);

let navigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i];
}

console.log(navigator);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1, los primeros puntos

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let counter = 0;
let space = false;

for (let i = 0; i < lorem.length; i++) {
  if (lorem == undefined) {
    counter = 0;
    console.log("No has introducido nada");
  } else if (lorem[i] == "" && space == false) {
    space = true;
  } else if (lorem[i] == " ") {
    counter++;
  }
}
if (lorem != undefined && space == 0) {
  counter++;
}
console.log(counter);
