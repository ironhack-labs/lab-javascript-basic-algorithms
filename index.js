// Iteration 1: Names and Input
let hacker1 = "Johan";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  };

// Iteration 3: Loops
/*
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
*/
let outputName = "";
for (let value of hacker1.toUpperCase()){
  outputName += value + " "
};
console.log(outputName);
/*
3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".
*/
let outputReverse = "";
for (let i = hacker2.length -1 ; i >= 0; i--){
  outputReverse += hacker2[i] + " "
};
console.log(outputReverse);
/*
3.3 Depending on the lexicographic order of the strings, print:
The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?
*/
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i].localeCompare(hacker2[i]) < 0) {
    console.log("The driver's name goes first.")
    break
  } else if (hacker1[i].localeCompare(hacker2[i]) > 0) {
    console.log("Yo, the navigator goes first definitely.")
    break
  } else {
    console.log("What?! You both have the same name?")
    break
  }
}
