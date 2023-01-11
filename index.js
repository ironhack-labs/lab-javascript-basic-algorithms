// Iteration 1: Names and Input
let hacker1 = "Pedro";
console.log("The driver`s name is Pedro");
let hacker2 = "Henrique";
console.log("The navigator's name is Henrique");

// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has 5 characters");
} else {
  console.log(
    "It seems that the navigator has the longest name, it has 8 characters."
  );
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  console.log(char);
}
let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
  console.log(hacker2Reversed);
}
