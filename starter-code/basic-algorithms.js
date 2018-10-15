// Names and Input
let hacker1 = "Romulo";
console.log("The driver's name is " + hacker1);
let hacker2 = process.argv[2];
console.log("The navigator's name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " character"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " character"
  );
} else {
  console.log(
    "wow, you both got equally long names" + hacker1.length + " character!!"
  );
}

let drive = "";
let navigator = "";
for (var i = 0; i < hacker1.length; i++) {
  drive += hacker1[i].toUpperCase();
  drive += " ";
}
console.log(drive);

for (var i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

let hackersFirstLetter = [];
hackersFirstLetter[0] = hacker1[0];
hackersFirstLetter[1] = hacker2[0];


console.log(hackersFirstLetter.sort());


// Lorem ipsum generator
