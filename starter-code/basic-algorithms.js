var hacker1 = "Will";

console.log("The driver's name is " + hacker1);

var hacker2 = "Javier";

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " letters"
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters!"
  );
}

var spacedString = "";

for (var i = 0; i < hacker2.length; i++) {
  spacedString = spacedString + hacker2[i].toUpperCase() + " ";
}

var backwardsString = "";

for (var i = hacker1.length - 1; i >= 0; i--) {
  backwardsString = backwardsString + hacker1[i];
}

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
