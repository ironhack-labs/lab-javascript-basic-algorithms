// Iteration 1: Names and Input
const hacker1 = "Michael";
const hacker2 = "Tom";

console.log("The driver's name is " + hacker1);
console.log("The navigater's name is " + hacker2);

// Iteration 2: Conditionals
 if (hacker1.length >= hacker2.length){
    console.log ("The driver has the longest name, it has " + hacker1.length + " characters");
 }

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let spacedName = " ";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " "; //using for instead of if
}
console.log (spacedName);


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
const reversedName = hacker1.split('').reverse().join();

console.log(reversedName);

//Depending on the lexicographic order of the strings
//The driver's name goes first.

if (hacker1 < hacker2) {
    console.log ("The driver's name goes first.");
}