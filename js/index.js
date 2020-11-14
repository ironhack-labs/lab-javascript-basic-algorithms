// Iteration 1: Names and Input
console.log("I'm ready!");

var hacker1 = "Adam";
console.log(`The driver's name is ${hacker1}.`);

var hacker2 = "Jacqueline";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`);
}

// Iteration 3: Loops

var uppercased = hacker1.toUpperCase();
for (i = 0; i < hacker1.length; i++)
  var spacedName = uppercased.split("").join(" ");
console.log(spacedName);

//var tmp = "";

//for (let i = 0; i < hacker1.length; i++) {
//console.log(i, uppercased, uppercased[i])
//tmp += hacker1[i].toUpperCase() + " "

var tmp = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  tmp += hacker1[i];
}
console.log(tmp);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The drivers name goes first.");
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator definitely goes first");
} else {
  console.log("What?! You both have the same name?");
}
