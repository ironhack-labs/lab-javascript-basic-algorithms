// Names and Input
console.log("I'm Ready!");
var hacker1 = "Ismaël";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(
    hacker1 + "has the longest name, it has " + hacker1.length + " characters."
  );
}
if (hacker2.length > hacker1.length) {
  console.log(
    hacker2 + "has the longest name, it has " + hacker2.length + " characters."
  );
}

if (hacker2.length == hacker1.length) {
  console.log(
    "Wow, you both got equally long names, " +
      hacker1.length +
      " characters !!!"
  );
}

//Conditionals
var hacker1CapitalSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1CapitalSpace += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1CapitalSpace);

var hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

/* var hacker1 = hacker1.toUpperCase();
var char1 = hacker1.split("");
console.log(char1.join(" "));

var char2 = hacker2.split ("");
var char2 = char2.reverse();
console.log (char2.join (''));*/

// Lorem ipsum generator
