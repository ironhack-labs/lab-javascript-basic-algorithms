// Names and Input
let hacker1 = "Romulo";
console.log("The driver's name is " + hacker1);
let hacker2 = process.argv[2];
console.log("The navigator's name is " + hacker2);
let hacker1Size = hacker1.length;
let hacker2Size = hacker2.length;
let drive = "";
let navigator = "";
//Conditionals
if (hacker1Size > hacker2Size) {
  console.log(
    "The Driver has the longest name, it has " + hacker1Size + " character"
  );
} else if (hacker1Size < hacker2Size) {
  console.log(
    "Yo, navigator got the longest name, it has " + hacker2Size + " character"
  );
} else {
  console.log(
    "wow, you both got equally long names" + hacker1Size + " character!!"
  );
}

for (var i = 0; i < hacker1Size; i++) {
  drive += hacker1[i].toUpperCase();
  drive += " ";
}
console.log(drive);

for (var i = hacker2Size - 1; i >= 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

let hackersFirstLetter = [];
hackersFirstLetter[0] = hacker1[0];
hackersFirstLetter[1] = hacker2[0];

let hackerSort = hackersFirstLetter.sort();

if (hacker1[0] === hackerSort[0] && hacker1[0] != hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker2[0] === hackerSort[0] && hacker1[0] != hacker2[0]) {
  console.log("Yo, navigators's goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
