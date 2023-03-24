console.log("READY");

// names//

let hacker1 = "Karabas";

console.log("The driver's name is " + hacker1);

let hacker2 = "Barabas";

console.log("The navigator's name is " + hacker2);

// conditionals //

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Loops //

let hacker1WithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1WithSpaces);


let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


