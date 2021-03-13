// Iteration 1: Names and Input

//Created var hacker1 storing a name
const hacker1 = `Letty`;
//Print The driver's name is Letty (hacker1) to console
console.log(`The driver's name is ${hacker1}`);

//Created var hacker2 storing a name
const hacker2 = `Dominic`;
//Print The navigator's name is Dominic (hacker2) to console
console.log(`The navigator's name is ${hacker2}`);


//Iteration 2: Conditionals
//Used conditional statement to check the length of hacker1 against hacker2 and print output to the console depending on results
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
//Created new var to store results of exercise
//Used toUpper case method to uppercase hacker1, then split each letter to separate them out into single elements of an array, then rejoined them separated by a ' '
let separatedDriver = hacker1.toUpperCase().split(``).join(` `);

//Print results of the above to my console
console.log(separatedDriver);

//Created a new var to store results of exercise
let hacker2Reverse = '';

//Used a for loop to iterate backwards over hacker2 
for (let i = hacker2.length - 1;i >= 0; i--) {
    //Concatenated the results of each iteration, storing this in hacker2Reverse 
    hacker2Reverse += hacker2[i];
}

//Print results of the above to my console
console.log(hacker2Reverse)


//let rankedVars = hacker1.localeCompare(hacker2); a different way to compare strings by lexicographical value

//Used an if statement to compare the lexicographical value of hacker1 and hacker2, then print results to console based on this result
  if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }