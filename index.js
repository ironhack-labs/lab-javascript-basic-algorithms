// Iteration 1: Names and Input
let theDriversName = "John"
let hacker1 = theDriversName;
console.log("The driver's name is" + " " + hacker1);

let theNavigatorsName = "Lisa"
let hacker2 = theNavigatorsName;
console.log("The navigator's name is" + " " + hacker2);


// Iteration 2: Conditionals

if (theDriversName.length > theNavigatorsName.length) {
    console.log("The driver's name is longer");
} else if(theNavigatorsName.length > theDriversName.length) {
    console.log("The navigator's name is longer");
}else {
    console.log("Wow, you both have equally long names", theDriversName.length, theNavigatorsName.length, "characters");	
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

theDriversName = theDriversName.split("");
let joinedDriversName = theDriversName.join(" ");
console.log(joinedDriversName);

// 3.2 Print all the characters of the navigator's name in reverse order

theNavigatorsName = theNavigatorsName.split("");
let reversedNavigatorsName = theNavigatorsName.reverse().join("");
console.log(reversedNavigatorsName);

// 3.2  Depending on the lexicographic order of the strings, print: 