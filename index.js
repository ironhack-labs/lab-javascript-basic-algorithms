//Iteration 1: Names and Input
let hacker1 = "David";
//console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kiki";
//console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if(hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2Length} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${hacker1Length} characters!`);
}