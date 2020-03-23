// Iteration 1: Loops
let hacker1 = "Yung-Ting";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Chantel";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capitalDriver = hacker1.toUpperCase();
console.log(capitalDriver.split("").join(" "));


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseNavigator = "";
for (let i = hacker2.length -1; i >= 0; i--) {
   reverseNavigator += hacker2[i];
}

//3.3 Depending on the lexicographic order of the strings
let lexiOrder = hacker2.localeCompare(hacker1);
if (lexiOrder < 0) {
  console.log("The driver's name goes first.");
}
else if (lexiOrder > 0) {
  console.log("Yo, the navigator goes first definitely.");
}
else if (lexiOrder == 0) {
  console.log("What?! You both have the same name?");
}