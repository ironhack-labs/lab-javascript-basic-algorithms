// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Manuel Carrillo";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Jose Rascon"

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The Navigator is ${hacker2}` )

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
// Iteration 3: Loops
if (hacker1.localeCompare(hacker2)){
  console.log(`${hacker1} goes first.`);
} else if (hacker2.localeCompare(hacker1){
  console.log(`$hacker2`);
} else {
  console.log(`What?! You both have the same name?`);
}