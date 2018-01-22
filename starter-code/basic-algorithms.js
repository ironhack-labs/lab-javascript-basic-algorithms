var hacker1 = "Sandra";

console.log("The driver's name is " + hacker1 + ".");
var hacker2 = prompt("What's navigator's name?");
console.log("The navigator's name is " + hacker2 + ".");

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "wow, you both got equally long names, it has " +
      hacker2.length +
      " characters!!"
  );
}

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .join(" ")
      .toUpperCase()
  );
}

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .reverse(" ")
      .join("")
  );
}
//  --------------------------------------
var n = hacker1.localeCompare(hacker2);
if (n === 1) {
  console.log("The driver's name goes first");
} else if (n === -1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
console.log(n);
// Returns -1 if str1 is sorted before str2
// Returns 0 if the two strings are equal
// Returns 1 if str1 is sorted after str2
