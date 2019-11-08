// Names and Input

//Conditionals

// Loops

//Iteration 6

let upperCase = hacker1.split(/(?=[a-z])/).join(" ");

console.log(upperCase.toUpperCase());

//Iteration 7

console.log(
  hacker2
    .split(/(?=[a-z])/)
    .reverse()
    .join("")
);

//Iteration 8

let h1Split = hacker1.split("");
let h2Split = hacker2.split("");

for (let i = 0; i < 1; i++) {
  if (h1Split[0] < h2Split[0]) {
    console.log("The driver's name goes first");
  } else if (h1Split[0] > h2Split[0]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (h1Split[1] < h2Split[1]) {
    console.log("The driver's name goes first");
  } else if (h1Split[1] > h2Split[1]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (h1Split[2] < h2Split[2]) {
    console.log("The driver's name goes first");
  } else if (h1Split[2] > h2Split[2]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (h1Split[3] < h2Split[3]) {
    console.log("The driver's name goes first");
  } else if (h1Split[3] > h2Split[3]) {
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?");
  } else if (h1Split[3] === h2Split[3] && h2Split.length > 4) {
    console.log("The driver's name goes first");
  } else if (h1Split[0] === h2Split[0] && h2Split.length < 4) {
    console.log("Yo, the navigator goes first definitely");
  }
}

// Lorem ipsum generator
