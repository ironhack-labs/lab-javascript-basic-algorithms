// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Doan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "GJ";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops

// 3.1
let driverPrint = "";
for (let i = 0; i < hacker1.length; i++) {
  driverPrint += hacker1.charAt(i) + " ";
}
console.log(driverPrint.toUpperCase());

//3.2
let navigatorPrintReversed = "";
for (let i = hacker2.length; i >= 0; i--) {
  navigatorPrintReversed += hacker2.charAt(i);
}
console.log(navigatorPrintReversed);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
