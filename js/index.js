// console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Nosha";
// console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Macadamia";
// console.log(`The navigator's name is ${hacker2}`); 

// Iteration 2: Conditionals

/*
if (sum1 === sum2) {
  console.log(`Wow, you both have equally long names, ${sum1} + ${sum2} characters!`);
} else if (sum1 < sum2) {
  console.log(`It seems that the navigator has the longest name, it has ${sum2} characters`);      
} else if (sum2 > sum1) {
  console.log(`The driver has the longest name, it has ${sum1} characters`);
} else {
  console.log("Problem");
}

// Iteration 3: Loops


const upperName = hacker1.toUpperCase();

const result = upperName.split("").join(" ");
console.log(result);

const reverseName = hacker2.split("").reverse("").join("");
console.log(reverseName);

*/

const lowerCase1 = hacker1.toLowerCase();
const lowerCase2 = hacker2.toLowerCase();

const compare = lowerCase1.localeCompare(lowerCase2);

if (compare === 0) {
  console.log("What?! You both have the same name?");
} else if (compare === -1) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  } 


