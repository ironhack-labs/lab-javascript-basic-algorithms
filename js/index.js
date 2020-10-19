// Iteration 1: Names and Input
console.log("I'm ready!");
const hacker1 = "Milena";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Franck';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`hacker1 has the longest name with ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length) {
  console.log(`hacker2 has the longest name with ${hacker2.length} characters`);
} else {
  console.log (`They both have equality long names, ${hacker1.length} characters`);
}
console.log(hacker1.toUpperCase());
let hackerUpperCase = hacker1.toUpperCase();
let upperCase = hackerUpperCase.split("").join(" ");
console.log(upperCase);



// Iteration 3: Loops
let finalString = "";
for(let i =  0 ; i < hackerUpperCase.length; i++ ){
  const letter = hackerUpperCase[i];
  finalString += `${letter} `
}
console.log(finalString);

let reverse = hacker2.split("").reverse("").join("");
console.log(reverse);

if (hacker1 > hacker2){
  console.log("The driver's name goes first");
}else  if (hacker2 > hacker1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
