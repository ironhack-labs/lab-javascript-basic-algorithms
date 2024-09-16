// Iteration 1: Names and Input
const hacker1 = "Alpay";
const hacker2 = "Isabel";

console.log(`The Drivers name is ${hacker1}`);
console.log(`The Navigators name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)}
else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
const upperName = hacker1.toUpperCase().split("").join(" ");
for (let i = 0; i < hacker1.length; i++) {

}
  console.log(upperName);

let reversed = "";
  for (let j = hacker2.length - 1; j >= 0; j--) {
      reversed += hacker2[j];

  }
   console.log(reversed);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?");
}



// Iteration 2: Conditionals


// Iteration 3: Loops
