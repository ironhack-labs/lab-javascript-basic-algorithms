// Iteration 1: Names and Input

let hacker1 = "Hulio";
console.log("The driver name is " + hacker1);

let hacker2 = "Roberto";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names," + hacker1.lenght + "characters!"
  );
}

// Iteration 3: Loops

let space = "";
for (i = 0; i < hacker1.length; i++) {

  space += hacker1[i] + " ";
  
}
console.log(space.toUpperCase());

let reversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

let comp = hacker1.localeCompare(hacker2);

if (comp === -1) {
  console.log("The driver's name goes first.");
} else if (comp === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (comp === 0) {
  console.log("What?! You both have the same name?");
}
