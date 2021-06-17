// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = "Richard";

console.log("The driver's name is " + hacker1);

let hacker2 = "Camilo";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name is " + hacker1 + ", it has characters"
  );
} else if (hacker2.lenght > hacker1.lenght) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2 +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!."
  );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let hacker1New = hacker1.split("").join(" ");

console.log(hacker1New);

let hacker1NewReverse = hacker1.split("").reverse().join("");

console.log(hacker1NewReverse);

let hacker1First = hacker1.charAt(0).toLowerCase();
let hacker2Second = hacker2.charAt(0).toLowerCase();

if (hacker1First < hacker2Second) {
  console.log("The driver's name goes first.");
} else if (hacker1First === hacker2Second) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}
