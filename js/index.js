// Iteration 1: Names and Input
let hacker1 = "Marcela";
let hacker2 = "Alba";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

const hacker1 = "Marcela";
const hacker2 = "Alba";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};
// Iteration 3: Loops

let driver = hacker1.split("");
//console.log(driver);

for(i = 0; i < driver.length; i++){
  driver[i] = driver[i].toUpperCase();
}
console.log(driver.join(" "));

let navigator = hacker2.split("");
//console.log(navigator);
console.log(navigator.reverse().join(""))

let lexicon = hacker1.localeCompare(hacker2);
//console.log(lexicon);


if(lexicon < 0){
  console.log(`The driver's name goes first`);
} else if (lexicon > 0){
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log ('What?! You both have the same name?');
};