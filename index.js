// Iteration 1: Names and Input
let hacker1 = "Lale";
console.log("The driver's name is " + hacker1);

// Iteration 2: Conditionals
let hacker2 = "Nigar";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result = result + hacker1[i].toUpperCase() + " ";
}

console.log(result);


let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse = reverse + hacker2[i];
}

console.log(reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let longText = "Lorem ipsum et dolor sit amet et consectetur adipiscing elit et sed do eiusmod tempor.";

let wordCount = 1;

for (let i = 0; i < longText.length; i++) {

  if (longText[i] === " ") {
    wordCount++;
  }

}

console.log("Number of words: " + wordCount);

let etCount = 0;
let currentWord = "";

for (let i = 0; i < longText.length; i++) {

  if (longText[i] !== " " && longText[i] !== ".") {
    currentWord = currentWord + longText[i];
  }

  else {

    if (currentWord === "et") {
      etCount++;
    }

    currentWord = "";
  }

}

console.log("Et count: " + etCount);