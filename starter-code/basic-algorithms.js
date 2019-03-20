// Names and Input
var hacker1 = "Arnaud";

console.log("driver's name is" + hacker1);

let hacker2 = prompt("What's your name?");
console.log("navigator's name is" + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker1.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters"
  );
}

console.log(hacker1.toUpperCase());

var reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

var firstName = hacker1.localeCompare(hacker2);

if (firstName < 0) {
  console.log("The driver's name goes first");
} else if (firstName > 0) {
  console.log("Yo, the navigator goes first definitely");
} else if (firstName === 0) {
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator

//will comme back later for this part
