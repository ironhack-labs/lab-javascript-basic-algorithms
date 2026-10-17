// Iteration 1: Names and Input

const hacker1 = "Yandi";
const hacker2 = "Homo Sapiens";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);    

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, both names have the same number of characters!`);
}
// Iteration 3: Loops
// 3.1 

console.log(
  hacker1.toUpperCase()[0] + " " +
  hacker1.toUpperCase()[1] + " " +
  hacker1.toUpperCase()[2] + " " +
  hacker1.toUpperCase()[3] + " " +
  hacker1.toUpperCase()[4]
);

// 3.2
for (let i = hacker2.length - 1; i >= 0; i--)
{
    console.log(hacker2[i])
}

// 3.3

if (hacker1 < hacker2) {
    console.log("the driver's name goes first")
} else if(hacker2 < hacker1) { 
    console.log("the navigator's name goes first")
} else{
    console.log("you both go together")
}