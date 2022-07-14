console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "xxxx";
console.log(`the driver's name is ${hacker1}.`);

let hacker2 = "YYYY";
console.log(`The navigator"s name is ${hacker2}.`);

/*Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
function longestName(name1, name2) {
  if (name1.length > name2.length) {
    return `the driver named ${name1} has the longest name, it has ${name1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator named ${name2} hsa the longest name, it has ${name2.length} characters.`;
  } else if (name1.length === name2.length) {
    return `Wow, you both have equally long names, ${name1.length} characters!`;
  }
}

let printResults = longestName(hacker1, hacker2);
console.log(printResults);

// Iteration 3: Loops
