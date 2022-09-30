// Iteration 1: Names and Input
let hacker1 = 'Lucas';
console.log(`The driver's name is ${hacker1}!`);

let hacker2 = 'Santos';
console.log(`The navigator's name is ${hacker2}!`);
//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
    }

// Iteration 3: Loops



 let nameToChange = "";
for (let i = 0; i < hacker1.length; i++) {
  nameToChange += hacker1[i].toUpperCase() + " ";
}
console.log(nameToChange);


let nameChange = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameChange += hacker2[i];
}
console.log(nameChange);



hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 
