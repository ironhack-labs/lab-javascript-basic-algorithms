// Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`. */
let hacker1 = "Oscar";
console.log(`"The driver's name is ${hacker1}."`);

/*
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`. */
let hacker2 = "Giovanni";
console.log(`"The navigator's name is ${hacker2}."`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" */
let hacker1Uppercase = "";
for (let i of hacker1){
  hacker1Uppercase += i.toUpperCase() + " "
  //console.log(i.toUpperCase())
}

/*3.2 Print all the characters of the navigator's 
name, in reverse order. i.e. "nhoJ" */
let hacker2Reverse = "";
for ( let i = hacker2.length -1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */
let lexicographic = hacker1.localeCompare(hacker2);
console.log(lexicographic);
if (lexicographic === -1){
  console.log("The driver's name goes first.");
} else if (lexicographic === 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
